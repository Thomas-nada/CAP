import os, re, datetime, yaml

# ✅ Ensure the script runs from the repository root
os.chdir(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))

def parse_yaml_header(path):
    """Extract YAML-like header from the top of the file, tolerant to newlines/spacing."""
    with open(path, encoding="utf-8") as f:
        content = f.read()
    content = content.replace("\r\n", "\n").replace("\r", "\n")
    header_match = re.search(r"---\n(.*?)\n---", content, re.S)
    if not header_match:
        print(f"⚠️ No YAML header found in {path}")
        return {}
    header = header_match.group(1)
    try:
        return yaml.safe_load(header)
    except Exception as e:
        print(f"⚠️ YAML parse error in {path}: {e}")
        return {}

def build_cap_table():
    rows = []
    caps = [d for d in os.listdir() if d.startswith("CAP-") and os.path.isdir(d)]
    print("📘 Detected CAP folders:", caps)
    for folder in sorted(caps):
        readme_path = os.path.join(folder, "README.md")
        if not os.path.exists(readme_path):
            continue
        data = parse_yaml_header(readme_path)
        if not data:
            continue
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
    ciss = [d for d in os.listdir() if d.startswith("CIS-") and os.path.isdir(d)]
    print("📗 Detected CIS folders:", ciss)
    for folder in sorted(ciss):
        readme_path = os.path.join(folder, "README.md")
        if not os.path.exists(readme_path):
            continue
        data = parse_yaml_header(readme_path)
        if not data:
            continue
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
    print("📍 Working directory:", os.getcwd())
    with open("README.md", encoding="utf-8") as f:
        readme = f.read()

    cap_table = build_cap_table()
    cis_table = build_cis_table()

    readme = update_section(readme, "CAP_INDEX", cap_table)
    readme = update_section(readme, "CIS_INDEX", cis_table)

    with open("README.md", "w", encoding="utf-8") as f:
        f.write(readme)
