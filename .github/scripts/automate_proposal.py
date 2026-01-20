import os
import re
import sys

def sanitize_folder_name(name):
    """Ensures the folder name contains no illegal characters or trailing spaces."""
    # Remove any non-alphanumeric characters except hyphens
    sanitized = re.sub(r'[^a-zA-Z0-9-]', '', name)
    return sanitized.strip()

def get_next_number(directory, prefix):
    """Finds the next available 4-digit number for a given directory."""
    if not os.path.exists(directory):
        os.makedirs(directory, exist_ok=True)
        return "0001"
    
    existing_nums = []
    for folder in os.listdir(directory):
        if folder.startswith(prefix + "-"):
            try:
                # Split and take the numeric part, e.g., CAP-0001 -> 0001
                num_part = folder.split("-")[1]
                existing_nums.append(int(num_part))
            except (IndexError, ValueError):
                continue
    
    next_num = max(existing_nums, default=0) + 1
    return f"{next_num:04d}"

def parse_issue_body(body):
    """Parses GitHub Issue Form body (Markdown) into a dictionary."""
    sections = {}
    current_section = None
    if not body:
        return {}
        
    lines = body.split('\n')
    for line in lines:
        # Match headings like '### Abstract'
        match = re.match(r'^###\s+(.+)$', line.strip())
        if match:
            current_section = match.group(1).strip().lower().replace(' ', '_')
            sections[current_section] = []
        elif current_section:
            clean_line = line.strip()
            # Avoid including default GitHub "No response" text
            if clean_line.lower() != "_no response_":
                sections[current_section].append(line)
    
    return {k: '\n'.join(v).strip() for k, v in sections.items()}

def main():
    issue_title = os.environ.get('ISSUE_TITLE', 'Untitled Proposal')
    issue_body = os.environ.get('ISSUE_BODY', '')
    
    # Determine type based on title indicator
    is_cis = "[CIS]" in issue_title.upper()
    prefix = "CIS" if is_cis else "CAP"
    base_dir = "CISs" if is_cis else "CAPs"
    
    # 1. Generate clean IDs and Paths
    new_id = get_next_number(base_dir, prefix)
    folder_name = sanitize_folder_name(f"{prefix}-{new_id}")
    target_path = os.path.join(base_dir, folder_name)
    
    # Ensure directory is created cleanly
    os.makedirs(target_path, exist_ok=True)
    
    # 2. Parse Content
    content = parse_issue_body(issue_body)
    
    # 3. Clean up Title for the Markdown header
    clean_title = issue_title.split(']')[-1].strip() if ']' in issue_title else issue_title
    
    # 4. Build README content
    readme_lines = [
        f"# {prefix}-{new_id}: {clean_title}",
        "",
        "## Abstract",
        content.get('abstract', 'No abstract provided.'),
        "",
        "## Motivation",
        content.get('motivation', 'No motivation provided.'),
        ""
    ]
    
    if is_cis:
        if 'background' in content:
            readme_lines.extend(["## Background", content['background'], ""])
    else:
        if 'rationale' in content:
            readme_lines.extend(["## Rationale", content['rationale'], ""])
        if 'implementation_plan' in content:
            readme_lines.extend(["## Implementation Plan", content['implementation_plan'], ""])

    # 5. Write file
    file_path = os.path.join(target_path, "README.md")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write("\n".join(readme_lines).strip() + "\n")

    print(f"Successfully created: {file_path}")

if __name__ == "__main__":
    main()
