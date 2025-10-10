import os, re, datetime, yaml

def parse_yaml_header(path):
    """Extract YAML-like header from the top of the file."""
    with open(path, encoding="utf-8") as f:
        content = f.read()
    header_match = re.match(r"---\n(.*?)\n---", content, re.S)
    if not header_match:
        return {}
    header = header_match.group(1)
    try:
        return yaml.safe_load(header)
    except Exception:
        return {}

def build_cap_table():
    rows = []
    for folder in sorted([d for d in os.listdir() if d.startswith("CAP-")]):
        readme_path = os.path.join(folder, "README.md")
        if not os.path.exists(readme_path):
            continue
        data = parse_yaml_header(readme_path)
        cap_num = data.get("CAP", folder.split("-")[1])
        title = str(data.get("Title", "Untitled")).strip('"')
        status = data.get("Status", "Unknown")
        solution_to = data.get("Solution-To", [])
        if not solution_to:
            link_text = "–"
        else:
            links = [f"[{c}](./{c})" for c in solution_to]
            link_text = ", ".join(links)
        rows.append(f"| {cap_num} | [{title}](./{folder}) | {status} | {link_text} |")

    header = "| # | Title | Status | Addresses CIS |"
    divider = "|-------|-----------------------------|----------|-----------------------------|"
    date = datetime.date.today().isoformat()
    return "\n".join([header, divider, *rows, f'<p align="right"><i>Last updated on {date}</i></p>'])

def build_cis_table():
    rows = []
    for folder in sorted([d for d in os.listdir() if d.startswith("CIS-")]):
        readme_path = os.path.join(folder, "README.md")
        if not os.path.exists(readme_path):
            continue
        data = parse_yaml_header(readme_path)
        cis_num = data.get("CIS", folder.split("-")[1])
        title = str(data.get("Title", "Untitled")).strip('"')
        status = data.get("Status", "Unknown")
        amendments = data.get("Proposed-Amendments", [])
        if not amendments:
            link_text = "–"
        else:
            links = [f"[{a}](./{a})" for a in amendments]
            link_text = ", ".join(links)
        rows.append(f"| {cis_num} | [{title}](./{folder}) | {status} | {link_text} |")

    header = "| # | Title | Status | Proposed Solutions |"
    divider = "|-------|-----------------------------|----------|-----------------------------|"
    date = datetime.date.today().isoformat()
    return "\n".join([header, divider, *rows, f'<p align="right"><i>Last updated on {date}</i></p>'])

def update_section(text, tag, new_table):
    pattern = re.compile(rf"<!-- BEGIN_{tag} -->(.*?)<!-- END_{tag} -->", re.S)
    return re.sub(pattern, f"<!-- BEGIN_{tag} -->\n{new_table}\n<!-- END_{tag} -->", text)

if __name__ == "__main__":
    with open("README.md", encoding="utf-8") as f:
        readme = f.read()

    cap_table = build_cap_table()
    cis_table = build_cis_table()

    readme = update_section(readme, "CAP_INDEX", cap_table)
    readme = update_section(readme, "CIS_INDEX", cis_table)

    with open("README.md", "w", encoding="utf-8") as f:
        f.write(readme)
