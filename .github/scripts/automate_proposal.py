import os
import re
import sys
import json
import subprocess

def sanitize_folder_name(name):
    """Ensures the folder name contains no illegal characters or trailing spaces."""
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
        match = re.match(r'^###\s+(.+)$', line.strip())
        if match:
            current_section = match.group(1).strip().lower().replace(' ', '_')
            sections[current_section] = []
        elif current_section:
            clean_line = line.strip()
            if clean_line.lower() != "_no response_":
                sections[current_section].append(line)
    
    return {k: '\n'.join(v).strip() for k, v in sections.items()}

def post_github_comment(issue_number, message):
    """Posts a comment to the GitHub issue using the API."""
    token = os.environ.get('GITHUB_TOKEN')
    repo = os.environ.get('GITHUB_REPOSITORY') # Format: owner/repo
    if not token or not repo:
        return
    
    url = f"https://api.github.com/repos/{repo}/issues/{issue_number}/comments"
    payload = json.dumps({"body": message})
    
    # Using curl to avoid dependency on 'requests' library in GH Actions runner
    cmd = [
        "curl", "-X", "POST",
        "-H", f"Authorization: token {token}",
        "-H", "Accept: application/vnd.github.v3+json",
        url, "-d", payload
    ]
    subprocess.run(cmd, capture_output=True)

def main():
    issue_title = os.environ.get('ISSUE_TITLE', 'Untitled Proposal')
    issue_body = os.environ.get('ISSUE_BODY', '')
    issue_number = os.environ.get('ISSUE_NUMBER')
    
    is_cis = "[CIS]" in issue_title.upper()
    prefix = "CIS" if is_cis else "CAP"
    base_dir = "CISs" if is_cis else "CAPs"
    
    new_id = get_next_number(base_dir, prefix)
    folder_name = sanitize_folder_name(f"{prefix}-{new_id}")
    target_path = os.path.join(base_dir, folder_name)
    os.makedirs(target_path, exist_ok=True)
    
    content = parse_issue_body(issue_body)
    clean_title = issue_title.split(']')[-1].strip() if ']' in issue_title else issue_title
    
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

    file_path = os.path.join(target_path, "README.md")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write("\n".join(readme_lines).strip() + "\n")

    # Post comment back to the issue
    if issue_number:
        repo = os.environ.get('GITHUB_REPOSITORY')
        file_url = f"https://github.com/{repo}/tree/main/{base_dir}/{folder_name}"
        success_msg = f"✅ **Automation Success!**\n\nThis issue has been formally accepted and converted into a proposal file.\n\n📂 **Path:** `{base_dir}/{folder_name}/README.md`  \n🔗 **View File:** [Click Here]({file_url})"
        post_github_comment(issue_number, success_msg)

    print(f"Successfully created: {file_path}")

if __name__ == "__main__":
    main()
