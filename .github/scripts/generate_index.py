import os
import re
import yaml
from datetime import datetime, timezone
from collections import defaultdict

ROOT_README = "README.md"

CAP_HEADER = "Constitutional Amendment Proposals (CAPs)"
GPS_HEADER = "Governance Problem Statements (GPS)"

CAP_BEGIN = "<!-- BEGIN_CAP_INDEX -->"
CAP_END   = "<!-- END_CAP_INDEX -->"
GPS_BEGIN = "<!-- BEGIN_GPS_INDEX -->"
GPS_END   = "<!-- END_GPS_INDEX -->"

def parse_front_matter(file_path):
    """Extract YAML front matter from a markdown file."""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    match = re.search(r"^---\s*(.*?)\s*---\s*", content, re.DOTALL | re.MULTILINE)
    if match:
        data = yaml.safe_load(match.group(1))
        return data if isinstance(data, dict) else {}
    return {}

def _normalize_cap_id(val):
    """Return 'CAP-####' from 'CAP-##' or '##' inputs; ignore invalids."""
    if isinstance(val, int):
        return f"CAP-{val:04d}"
    if not isinstance(val, str):
        return None
    val = val.strip()
    if not val:
        return None
    if val.upper().startswith("CAP-"):
        num = val.split("-", 1)[1]
    else:
        num = val
    if num.isdigit():
        return f"CAP-{int(num):04d}"
    return None

def _normalize_gps_id(val):
    """Return 'GPS-####' from 'GPS-##' or '##' inputs; ignore invalids."""
    if isinstance(val, int):
        return f"GPS-{val:04d}"
    if not isinstance(val, str):
        return None
    val = val.strip()
    if not val:
        return None
    if val.upper().startswith("GPS-"):
        num = val.split("-", 1)[1]
    else:
        num = val
    if num.isdigit():
        return f"GPS-{int(num):04d}"
    return None

def collect_docs(prefix):
    """Recursively collect CAP/GPS docs and their metadata."""
    entries = []
    print(f"[DEBUG] Scanning repo for {prefix} documents...")
    for root, dirs, files in os.walk("."):
        for d in dirs:
            if d.startswith(prefix):
                folder_path = os.path.join(root, d)
                readme = os.path.join(folder_path, "README.md")
                print(f"[DEBUG] Found directory: {folder_path}")
                if os.path.exists(readme):
                    print(f"[DEBUG] Found README: {readme}")
                    data = parse_front_matter(readme)
                    print(f"[DEBUG] Front matter keys: {list(data.keys()) if data else 'None'}")

                    # Common fields
                    number_key = prefix.rstrip("-")
                    number = data.get(number_key, d.split("-")[1])
                    title = data.get("Title", "Untitled")
                    status = data.get("Status", "Unknown")

                    # Proposed solutions (GPS) – support both keys
                    proposed = data.get("Proposed Solutions", data.get("Proposed Amendments", []))
                    if isinstance(proposed, str):
                        proposed = [proposed]
                    proposed_caps = []
                    for p in (proposed or []):
                        cap_id = _normalize_cap_id(p)
                        if cap_id:
                            proposed_caps.append(cap_id)

                    # Linked GPS (CAP) — optional reverse hints
                    linked = data.get("Linked GPS", [])
                    if isinstance(linked, str):
                        linked = [linked]
                    linked_gps = []
                    for g in (linked or []):
                        gps_id = _normalize_gps_id(g)
                        if gps_id:
                            linked_gps.append(gps_id)

                    entries.append({
                        "number": f"{int(number):04d}" if str(number).isdigit() else str(number),
                        "title": title,
                        "status": status,
                        "proposed_caps": proposed_caps,  # only meaningful for GPS
                        "linked_gps": linked_gps,        # only meaningful for CAP
                        "link": f"./{os.path.relpath(folder_path)}"
                    })
                else:
                    print(f"[WARN] No README.md in {folder_path}")
    # Numeric sort by number if possible
    def _key(e):
        try:
            return int(e["number"])
        except Exception:
            return 10**9
    return sorted(entries, key=_key)

def build_reverse_map(caps, gpss):
    """
    Build CAP -> [GPS-####] mapping using:
      - GPS front matter Proposed Solutions / Proposed Amendments
      - CAP front matter Linked GPS
    """
    rev = defaultdict(set)
    for g in gpss:
        for cap_id in g["proposed_caps"]:
            rev[cap_id].add(f"GPS-{g['number']}")
    for c in caps:
        for gps_id in c["linked_gps"]:
            rev[f"CAP-{c['number']}"].add(gps_id)
    # convert to sorted lists
    return {k: sorted(v, key=lambda x: int(x.split("-")[1])) for k, v in rev.items()}

def format_caps_table(entries, reverse_map):
    lines = [
        "| #     | Title | Status | Addresses GPS |",
        "|-------|----------------------------|----------|--------------------------|",
    ]
    for e in entries:
        cap_id = f"CAP-{e['number']}"
        gps_links = reverse_map.get(cap_id, [])
        gps_str = ", ".join([f"[{gps}](./{gps})" for gps in gps_links]) if gps_links else "–"
        lines.append(f"| {e['number']}  | [{e['title']}]({e['link']}) | {e['status']} | {gps_str} |")
    return "\n".join(lines)

def format_gps_table(entries):
    lines = [
        "| #     | Title | Status | Proposed Solutions |",
        "|-------|-----------------------------|----------|-----------------------------|",
    ]
    for e in entries:
        if e["proposed_caps"]:
            links = ", ".join([f"[{cap}](./{cap})" for cap in e["proposed_caps"]])
        else:
            links = "–"
        lines.append(f"| {e['number']}  | [{e['title']}]({e['link']}) | {e['status']} | {links} |")
    return "\n".join(lines)

def _stamp():
    return datetime.now(timezone.utc).date().isoformat()

def _replace_between_markers(content, begin, end, new_inner):
    if begin in content and end in content:
        return re.sub(
            rf"{re.escape(begin)}.*?{re.escape(end)}",
            f"{begin}\n{new_inner}\n{end}",
            content,
            flags=re.DOTALL
        ), True
    return content, False

def _replace_by_last_header(content, header_text, new_block):
    """
    Find the LAST occurrence of '# {header_text}' and replace from that header
    through the first 'Last updated' closing </p> that follows.
    If not found, append the new block at the end.
    """
    header_pattern = rf"^# {re.escape(header_text)}\s*$"
    matches = list(re.finditer(header_pattern, content, flags=re.MULTILINE))
    if not matches:
        print(f"[WARN] Header not found: {header_text}. Appending section to end.")
        return content.rstrip() + "\n\n---\n\n" + new_block + "\n"

    start = matches[-1].start()  # last occurrence
    # Find the closing marker for that section: the 'Last updated' paragraph
    after = content[start:]
    lu_start = re.search(r'<p align="right"><i>Last updated on .*?</i></p>', after, flags=re.DOTALL)
    if not lu_start:
        # If no 'Last updated' found, replace just the header line forward to next header or end
        next_header = re.search(r"^\#\s", after[1:], flags=re.MULTILINE)
        end_index = start + (next_header.start()+1 if next_header else len(after))
        return content[:start] + new_block + content[end_index:]
    # Replace from header to end of that last-updated paragraph
    end_index = start + lu_start.end()
    return content[:start] + new_block + content[end_index:]

def update_section(content, header_text, table_md, begin_marker, end_marker):
    """
    Update a section by (1) markers if present, else (2) the last matching header occurrence.
    """
    block_inner = f"{table_md}\n\n<p align=\"right\"><i>Last updated on {_stamp()}</i></p>"
    block_full  = f"# {header_text}\n\n{begin_marker}\n{block_inner}\n{end_marker}"

    # 1) Prefer marker-based replacement (robust)
    updated, used_markers = _replace_between_markers(content, begin_marker, end_marker, block_inner)
    if used_markers:
        print(f"[OK] Updated section via markers: {header_text}")
        # Ensure header exists immediately before BEGIN; if not, add it.
        header_line = f"# {header_text}\n\n"
        if header_line not in updated:
            updated = header_line + updated
        return updated

    # 2) Fallback: replace by last header occurrence (disambiguates duplicate headers)
    updated = _replace_by_last_header(content, header_text, block_full)
    print(f"[OK] Updated section via last-header: {header_text}")
    return updated

def main():
    print("[DEBUG] main() started")
    caps = collect_docs("CAP-")
    gpss = collect_docs("GPS-")

    print("Detected CAPs:", [f"CAP-{e['number']}" for e in caps])
    print("Detected GPSs:", [f"GPS-{e['number']}" for e in gpss])

    reverse_map = build_reverse_map(caps, gpss)

    caps_table = format_caps_table(caps, reverse_map)
    gps_table  = format_gps_table(gpss)

    with open(ROOT_README, "r", encoding="utf-8") as f:
        readme = f.read()

    readme = update_section(readme, CAP_HEADER, caps_table, CAP_BEGIN, CAP_END)
    readme = update_section(readme, GPS_HEADER, gps_table, GPS_BEGIN, GPS_END)

    with open(ROOT_README, "w", encoding="utf-8") as f:
        f.write(readme)

    print("[DONE] README.md index regenerated successfully.")

if __name__ == "__main__":
    print("[DEBUG] Script is running...")
    main()
