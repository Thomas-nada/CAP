---
CAP: "0001"
Title: "CAP Process"
Category: "Meta"
Status: "Active"
Authors:
  - "Thomas Lindseth <thomas@kryptolabs.no>"
Implementors:
  - "N/A"
Solution-To:
  - "N/A"
Discussions:
  - "https://github.com/[your-org]/CAPs/pull/1"
Created: "2025-10-01"
License: "CC-BY-4.0"
---

## Abstract

A **Cardano Amendment Proposal (CAP)** is a formal governance design document and the name of the process by which such documents are produced, reviewed, ratified, and recorded. A CAP proposes changes, amendments, clarifications, or additions to Cardano’s governance system — specifically focusing on the Constitution, guardrails, or governance processes. 

This document defines what a CAP is, explains the two paths for submission (Standard and Simplified), describes the role of CAP Editors, and outlines the mandatory deliberation requirements. CAPs serve as the primary mechanism for gathering community input before ideas are submitted as on-chain governance actions.

---

## Motivation: Why is this CAP necessary?

The CAP process is designed to address two key challenges:
1. The need for a transparent, standardized, and collaborative process to propose and formalize changes to Cardano’s Constitution.
2. The need to document governance decisions as an authoritative record of Cardano’s evolution.

The CAP process does **not itself enact governance changes**; instead, it serves as the formal community-driven input layer that ensures ideas are debated and refined before they enter the on-chain decision-making pipeline.

---

## The Recipe: How to Propose a CAP

Proposing a change should be accessible to everyone. You can choose the method that best fits your technical comfort level.

### Path A: The Simplified Path (Beginner Friendly)
This path uses a web-based form on GitHub and does not require knowledge of Git commands.

1.  **Navigate to the Repository:** Go to the official CAP GitHub repository.
2.  **Open a New Issue:** Click the "Issues" tab and select "New Issue".
3.  **Fill out the Form:** Select the "New CAP Proposal" template. Provide a clear title, abstract, motivation, and the specific text of your amendment.
4.  **Submit:** Clicking "Submit" officially begins your **30-day deliberation period**.
5.  **Refine:** Use the comments section of your issue to discuss the idea with the community and make updates.

### Path B: The Standard Path (For GitHub Users)
1.  **Fork the Repository:** Create a copy of the CAP repository to your personal GitHub account.
2.  **Create a Branch:** Start a new branch with a descriptive name (e.g., `update-constitution-preamble`).
3.  **Add Your File:** Create a folder (e.g., `CAP-XXXX`) and add your proposal as a `README.md` file using the standard template.
4.  **Open a Pull Request (PR):** Submit your PR to the official repository. The date you open the PR marks the start of your **30-day deliberation period**.

---

## Specification

### Document Structure
Every CAP must contain the following sections to be considered complete:

| Section | Description |
| :--- | :--- |
| **Preamble** | Metadata including Title, Author, and Category. |
| **Abstract** | A short (~200 words) summary of the proposed change. |
| **Motivation** | Explanation of why this change is necessary and what problem it solves. |
| **Specification** | The detailed proposal—the exact rules, standards, or text being changed. |
| **Rationale** | Explanation of design choices and alternative approaches considered. |
| **Path to Ratification** | The criteria required for this CAP to become Active. |

### Categories
To ensure the process remains focused on the Constitution and related governance, CAPs are restricted to these categories:

* **Meta:** Proposals defining governance processes or changing the CAP process itself.
* **Constitution:** Direct amendments or additions to the Cardano Constitution text.
* **Guardrails:** Updates to the on-chain technical and economic validation scripts.
* **Standards:** Off-chain standards for governance bodies (e.g., the Constitutional Committee).

### Statuses
* **Proposed:** Merged into the repository or submitted via form, currently undergoing review or voting.
* **Active:** Successfully ratified via on-chain governance action or consensus.
* **Inactive:** Withdrawn, rejected, or superseded.

### Mandatory 30-Day Deliberation Period
To prevent rushed or unvetted amendments, all CAPs are subject to a **mandatory 30-day deliberation period**:
* This period begins the moment an Issue or Pull Request is submitted.
* A CAP cannot be submitted as an on-chain governance action or moved to "Active" until this window has passed.
* The period allows for wide community feedback, legal/technical review, and iterative improvements to the text.

---

## The Role of CAP Editors

Editors do not judge the "value" of a proposal; they manage the integrity of the process. Their missions include:
* Ensuring proposals meet the structural and formatting requirements.
* Assigning CAP numbers and categories.
* Facilitating community discussion and triaging submissions in regular meetings.
* Ensuring the 30-day deliberation period has been respected before status changes.

---

## Rationale
This meta-CAP formalizes a transparent path for constitutional evolution. By mirroring the established CIP-0001 model but adding a mandatory 30-day deliberation period and simplified submission forms, it balances high accessibility with the rigorous security required for Cardano's governance foundation.



---

## Path to Ratification

### Acceptance Criteria
- [x] Reviewed by the governance community.
- [x] Adopted as the standard governance amendment process.

### Implementation Plan
- [x] Establish the CAP repository and GitHub Issue templates.
- [x] Appoint initial CAP Editors to manage the workflow.

---

## References
- [CIP-0001]: Cardano Improvement Proposal process.
- [CIS-0001]: Constitution Issue Statement framework.

---

## Copyright
This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
