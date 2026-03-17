#!/usr/bin/env python3
"""
automate_proposal.py

Triggered by publish-proposal.yml when an issue receives the "Accepted" label.
Parses the issue body, extracts YAML frontmatter and content, determines whether
it is a CAP or CIS, assigns the next available number, and writes the proposal
file to the repository under CAPs/CAP-XXXX/README.md or CISs/CIS-XXXX/README.md.
"""

import os
import re
import sys
import json
import subprocess
from datetime import date


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def get_next_number(directory: str, prefix: str, reserved: set) -> str:
    """Return the next available zero-padded 4-digit number, skipping reserved ones."""
    os.makedirs(directory, exist_ok=True)
    existing = set()
    for name in os.listdir(directory):
        if name.startswith(prefix + "-"):
            try:
                existing.add(int(name[len(prefix) + 1:]))
            except ValueError:
                pass
    candidate = 1
    while candidate in reserved or candidate in existing:
        candidate += 1
    return f"{candidate:04d}"


def parse_issue_body(body: str) -> dict:
    """
    Parse a GitHub Issue Form rendered body into a dict keyed by section heading.
    Each ### Heading becomes a snake_case key; its value is the trimmed text that
    follows (up to the next heading).
    """
    sections: dict = {}
    current_key = None
    current_lines: list = []

    for line in (body or "").split("\n"):
        heading = re.match(r"^###\s+(.+)$", line.strip())
        if heading:
            if current_key is not None:
                sections[current_key] = "\n".join(current_lines).strip()
            current_key = heading.group(1).strip().lower().replace(" ", "_").replace("?", "")
            current_lines = []
        elif current_key is not None:
            stripped = line.strip()
            if stripped.lower() not in ("_no response_", ""):
                current_lines.append(line)

    if current_key is not None:
        sections[current_key] = "\n".join(current_lines).strip()

    return sections


CONSULTATION_DAYS = {
    "Procedural": 60, "Substantive": 60, "Technical": 60,
    "Interpretive": 30, "Editorial": 14, "Other": 30,
}


def extract_category(raw: str) -> str:
    """Pull the bare category word from the dropdown value (e.g. 'Procedural — ...')."""
    if not raw:
        return "Other"
    return raw.split("—")[0].split("(")[0].strip()


def extract_author_from_frontmatter(body: str) -> str:
    """Extract the first author from the ```yaml frontmatter block in the issue body."""
    match = re.search(r"```yaml\n([\s\S]*?)```", body)
    if not match:
        return "N/A"
    yaml_block = match.group(1)
    author_match = re.search(r"^Authors:\s*\n\s+- (.+)$", yaml_block, re.MULTILINE)
    if author_match:
        return author_match.group(1).strip()
    return "N/A"


def clean_title(title: str) -> str:
    return re.sub(r"^\[(CAP|CIS)\]\s*", "", title, flags=re.IGNORECASE).strip()


def post_comment(issue_number: str, message: str) -> None:
    token = os.environ.get("GITHUB_TOKEN")
    repo  = os.environ.get("GITHUB_REPOSITORY")
    if not token or not repo or not issue_number:
        return
    url     = f"https://api.github.com/repos/{repo}/issues/{issue_number}/comments"
    payload = json.dumps({"body": message})
    subprocess.run([
        "curl", "-s", "-X", "POST",
        "-H", f"Authorization: token {token}",
        "-H", "Accept: application/vnd.github+json",
        url, "-d", payload,
    ], capture_output=True)


# ---------------------------------------------------------------------------
# Document builders
# ---------------------------------------------------------------------------

def build_cap(number: str, title: str, issue_number: str, fields: dict, author: str = "N/A") -> str:
    repo     = os.environ.get("GITHUB_REPOSITORY", "Thomas-nada/CAP")
    category = extract_category(fields.get("category", ""))
    today    = date.today().isoformat()
    days     = CONSULTATION_DAYS.get(category, 30)

    fm  = "---\n"
    fm += f'CAP: "{number}"\n'
    fm += f'Title: "{clean_title(title)}"\n'
    fm += f'Category: "{category}"\n'
    fm += f'Status: "Proposed"\n'
    fm += f'Authors:\n  - "{author}"\n'
    fm += f'Implementors:\n  - "N/A"\n'
    fm += f'Solution-To:\n  - "N/A"\n'
    fm += f'Discussions:\n  - "https://github.com/{repo}/issues/{issue_number}"\n'
    fm += f'Created: "{today}"\n'
    fm += f'License: "CC-BY-4.0"\n'
    fm += "---\n\n"

    body  = f"## Abstract\n\n{fields.get('summary', 'No abstract provided.')}\n\n"
    body += f"## Motivation\n\n{fields.get('why_is_this_change_needed', fields.get('motivation', 'No motivation provided.'))}\n\n"

    analysis = fields.get("analysis_&_test", fields.get("analysis", ""))
    if analysis:
        body += f"## Analysis & Test\n\n{analysis}\n\n"

    revisions = fields.get("revisions", "")
    if revisions:
        body += f"## Specification\n\n{revisions}\n\n"

    body += (
        "---\n\n"
        "> [!IMPORTANT]  \n"
        f"> Submission of this document marks the start of the mandatory {days}-day "
        f"deliberation period. This CAP cannot be ratified or moved to \"Active\" "
        f"status until at least {days} days of community review have passed.\n\n"
        "---\n\n"
        "## Copyright\n\n"
        "This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).\n"
    )

    return fm + body


def build_cis(number: str, title: str, issue_number: str, fields: dict, author: str = "N/A") -> str:
    repo     = os.environ.get("GITHUB_REPOSITORY", "Thomas-nada/CAP")
    category = extract_category(fields.get("category", ""))
    today    = date.today().isoformat()

    fm  = "---\n"
    fm += f'CIS: "{number}"\n'
    fm += f'Title: "{clean_title(title)}"\n'
    fm += f'Category: "{category}"\n'
    fm += f'Status: "Proposed"\n'
    fm += f'Authors:\n  - "{author}"\n'
    fm += f'Proposed-Amendments: []\n'
    fm += f'Discussions:\n  - "https://github.com/{repo}/issues/{issue_number}"\n'
    fm += f'Created: "{today}"\n'
    fm += f'License: "CC-BY-4.0"\n'
    fm += "---\n\n"

    body  = f"## Abstract\n\n{fields.get('summary', 'No abstract provided.')}\n\n"
    body += f"## Problem\n\n{fields.get('problem', 'No problem description provided.')}\n\n"

    context = fields.get("context", "")
    if context:
        body += f"## Background\n\n{context}\n\n"

    impact = fields.get("impact", "")
    if impact:
        body += f"## Impact\n\n{impact}\n\n"

    sections = fields.get("referenced_sections", "")
    if sections:
        body += f"## Referenced Sections\n\n{sections}\n\n"

    body += (
        "---\n\n"
        "> [!IMPORTANT]  \n"
        "> Submission of this Constitution Issue Statement (CIS) marks the start of "
        "the mandatory 30-day deliberation period. This document serves as the formal "
        "problem definition to guide future Cardano Amendment Proposals (CAPs).\n\n"
        "---\n\n"
        "## Copyright\n\n"
        "This CIS is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).\n"
    )

    return fm + body


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    issue_number = os.environ.get("ISSUE_NUMBER", "")
    issue_title  = os.environ.get("ISSUE_TITLE",  "Untitled Proposal")
    issue_body   = os.environ.get("ISSUE_BODY",   "")

    if not issue_number:
        print("ERROR: ISSUE_NUMBER not set.", file=sys.stderr)
        sys.exit(1)

    is_cis   = "[CIS]" in issue_title.upper()
    doc_type = "CIS" if is_cis else "CAP"
    base_dir = "CISs" if is_cis else "CAPs"
    prefix   = doc_type

    # Reserved numbers that must not be overwritten
    reserved = {1, 9999} if not is_cis else set()

    number      = get_next_number(base_dir, prefix, reserved)
    folder_name = f"{prefix}-{number}"
    target_dir  = os.path.join(base_dir, folder_name)
    os.makedirs(target_dir, exist_ok=True)

    fields = parse_issue_body(issue_body)
    author = extract_author_from_frontmatter(issue_body)

    content = (
        build_cis(number, issue_title, issue_number, fields, author)
        if is_cis else
        build_cap(number, issue_title, issue_number, fields, author)
    )

    file_path = os.path.join(target_dir, "README.md")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Created: {file_path}")

    repo = os.environ.get("GITHUB_REPOSITORY", "Thomas-nada/CAP")
    file_url = f"https://github.com/{repo}/tree/main/{base_dir}/{folder_name}"
    post_comment(
        issue_number,
        f"✅ **Published as {doc_type}-{number}**\n\n"
        f"This issue has been accepted and committed to the repository.\n\n"
        f"📂 **Path:** `{base_dir}/{folder_name}/README.md`  \n"
        f"🔗 **View:** [Click here]({file_url})",
    )


if __name__ == "__main__":
    main()
