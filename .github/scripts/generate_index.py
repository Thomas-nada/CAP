import os
import re
import yaml
from datetime import datetime
from collections import defaultdict

ROOT_README = "README.md"

def parse_front_matter(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    match = re.search(r"---(.*?)---", content, re.DOTALL)
    if match:
        return yaml.safe_load(match.group(1))
    return {}

def collect_docs(prefix):
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
    """Build a map of CAP -> list of GPS that mention it."""
    reverse_map = defaultdict(list)
    for gps in gps_entries:
        for cap in gps.get("proposed", []):
            reverse_map[cap].append(f"GPS-{gps['number']}")
    return reverse_map

def format_caps_table(entries, reverse_map):
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
    pattern = rf"(# {section_name}.*?\n)(?:\|.*?\n)*<p align=\"right\"><i>Last updated on .*?</i></p>"
    replacement = (
        f"# {section_name}\n\n{new_table}\n\n"
        f"<p align=\"right\"><i>Last updated on {datetime.utcnow().date()}</i></p>"
    )
    return re.sub(pattern, replacement, content, flags=re.DOTALL)

def main():
    caps = collect_docs("CAP-")
    gps = collect_docs("GPS-")

    reverse_map = build_reverse_map(gps)

    with open(ROOT_README, "r", encoding="utf-8") as f:
        readme = f.read()

    readme = update_section(readme, "Constitutional Amendment Proposals (CAPs)", format_caps_table(caps, reverse_map))
    readme = update_section(readme, "Governance Problem Statements (GPS)", format_gps_table(gps))

    with open(ROOT_README, "w", encoding="utf-8") as f:
        f.write(readme)

if __name__ == "__main__":
    main()
