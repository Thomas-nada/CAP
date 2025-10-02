def collect_docs(prefix):
    """Recursively collect all CAP or GPS documents and their metadata."""
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
                    entries.append({
                        "number": str(data.get(prefix.rstrip('-'), d.split('-')[1])).zfill(4),
                        "title": data.get("Title", "Untitled"),
                        "status": data.get("Status", "Unknown"),
                        "proposed": data.get("Proposed Solutions", []),
                        "link": f"./{os.path.relpath(folder_path)}"
                    })
                else:
                    print(f"[WARN] No README.md in {folder_path}")
    return sorted(entries, key=lambda x: int(x["number"])) if entries else []
