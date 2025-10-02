import os
import re
import yaml
from datetime import datetime
from collections import defaultdict

ROOT_README = "README.md"

def parse_front_matter(file_path):
    """Extract YAML front matter from a markdown file."""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    match = re.search(r"---(.*?)---", content, re.DOTALL)
    if match:
        return yaml.safe_load(match.group(1))
    return {}

def collect_docs(prefix):
    """Collect all CAP or GPS documents and their metadata."""
    entries = []
    for name in sorted(os.listdir(".")):
        if name.startswith(prefix) and os.path.isdir(name):
            readme = os.path.join(name, "README.md")
            if os.path.exists(readme):
                data = parse_front_matter(readme)
                entries.append({
                    "number": str(data.get(prefix.rstrip('-'), name.split('-')[1])).zfill(4),
                    "title": data.get("Title", "Untitled"),
                    "status": data.get("Status", "Unknown"),
                    "proposed": data.get("Proposed Solutions", []),
                    "link": f"./{name}"
                })
    return sorted(entries, key=lambda x: int(x["number"]))

def build_reverse_map(gps_entries):
    """Map CAP -> list of GPS numbers that reference it."""
    reverse_map = defaultdict(list)
    for gps in gps_entries:
        for cap in gps.get("proposed", []):
            reverse_map[cap].append(f"GPS-{gps['number']}")
    return reverse_map

def format_caps_table(entries, reverse_map):
    """Create the markdown table for CAPs."""
    lines = [
        "| #     | Title | Status | Addresses GPS |",
        "|-------|----------------------------|----------|--------------------------|",
    ]
    for e in entries:
        cap_id = f"CAP-{e['number']}"
        gps_links = reverse_map.get(cap_id, [])
        if gps_links:
            gps_str = ", ".join([f"[{gps}](./{gps})" for gps in gps_links])
        else:
            gps_str = "–"
        lines.append(f"| {e['number']}  | [{e['title']}]({e['link']}) | {e['status']} | {gps_str} |")
    return "\n".join(lines)

def format_gps_table(entries):
    """Create the markdown table for GPSs."""
    lines = [
        "| #     | Title | Status | Proposed Solutions |",
        "|-------|-----------------------------|----------|-----------------------------|",
    ]
    for e in entries:
        if e["proposed"]:
            links = ", ".join([f"[{cap}](./{cap})" for cap in e["proposed"]])
        else:
            links = "–"
        lines.append(f"| {e['number']}  | [{e['title']}]({e['link']}) | {e['status']} | {links} |")
    return "\n".join(lines)

def update_section(content, section_name, new_table):
    """Replace the section in README.md with a new table and updated timestamp."""
    section_header = f"# {section_name}"
    pattern = rf"(?s){re.escape(section_header)}.*?<p align=\"right\"><i>Last updated on .*?</i></p>"
    replacement = (
        f"{section_header}\n\n{new_table}\n\n"
        f"<p align=\"right\"><i>Last updated on {datetime.utcnow().date()}</i></p>"
    )
    new_content, count = re.subn(pattern, replacement, content)
    if count == 0:
        print(f"[WARN] Could not find section: {section_name}. Check the header text.")
    else:
        print(f"[OK] Updated section: {section_name}")
    return new_content

def main():
    # Collect CAP and GPS metadata
    caps = collect_docs("CAP-")
    gps = collect_docs("GPS-")

    # Debug: print what was found
    print("Detected CAPs:", [f"CAP-{e['number']}" for e in caps])
    print("Detected GPSs:", [f"GPS-{e['number']}" for e in gps])

    # Build CAP->GPS reverse mapping
    reverse_map = build_reverse_map(gps)

    # Read root README
    with open(ROOT_README, "r", encoding="utf-8") as f:
        readme = f.read()

    # Update both sections
    readme = update_section(readme, "Constitutional Amendment Proposals (CAPs)", format_caps_table(caps, reverse_map))
    readme = update_section(readme, "Governance Problem Statements (GPS)", format_gps_table(gps))

    # Write the updated README
    with open(ROOT_README, "w", encoding="utf-8") as f:
        f.write(readme)

    print("[DONE] README.md index regenerated successfully.")

if __name__ == "__main__":
    main()
