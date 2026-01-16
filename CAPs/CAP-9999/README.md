---
CAP: "9999"
Title: "Constitution Issue Statements (CIS) — Process"
Category: "Meta"
Status: "Proposed"
Authors:
  - "Your Name <your.email@domain>"
Implementors:
  - "N/A"
Solution-To:
  - "N/A"
Discussions:
  - "https://github.com/your-org/CAPs/pull/1"
Created: "2025-10-01"
License: "CC-BY-4.0"
---

## Abstract

A **Constitution Issue Statement (CIS)** is a formal governance document for the Cardano ecosystem designed to define and articulate **constitutional issues**—including ambiguities in interpretation, procedural gaps, or governance risks. While Cardano Amendment Proposals (CAPs) focus on solutions and changes, CIS documents serve as first-class citizens in the governance repository that focus exclusively on problem definition. This process ensures that the ecosystem addresses governance challenges with a shared understanding of the problem before debating specific solutions.

---

## Motivation: Why is this CAP necessary?

A recurring challenge in Cardano governance is that proposals often begin from unclear or loosely defined constitutional issues, leading to fragmented debate and confusion. Introducing CIS documents provides a structured, reusable way to articulate the context and design constraints of an issue. This ensures that CAPs are grounded in a shared understanding. Furthermore, these documents serve as foundational references for constitutional reviews, governance research, and Request for Proposals (RFPs) for governance tooling or amendments.

---

## Specification

### Document Structure

A Constitution Issue Statement (CIS) is a Markdown document capturing constitutional issues and their context. It must reside in a folder named after its 4-digit zero-padded number (e.g., `CIS-0001/README.md`). To be considered complete, it must follow this structure:

| Section | Description |
| :--- | :--- |
| **Preamble** | Metadata about the CIS (number, title, status, etc.). |
| **Abstract** | A short (~200 words) summary of the constitutional issue. |
| **Background** | Historical, procedural, or constitutional context for why this issue exists. |
| **Problem** | A detailed description of the constitutional issue and its scope. |
| **Impact** | Explanation of how this issue affects governance, stakeholders, or the constitution. |
| **Goals** | A prioritized list of outcomes sought by addressing this issue. |
| **Open Questions** | Questions that any solution (e.g., a CAP) should aim to answer. |
| **References** | Supporting documents, standards, or related materials. |

### Rationale

The CIS process ensures that constitutional challenges are clearly articulated before solutions are proposed. By separating **issues (CIS)** from **solutions (CAP)**, the ecosystem gains stronger alignment on issue scope and clearer evaluation criteria for proposed solutions. The inclusion of sections like **Background** and **Open Questions** ensures that CIS documents provide actionable guidance to solution authors and serve as a reusable repository for future governance initiatives.

---

## Path to Ratification

### Acceptance Criteria

* The proposal must be reviewed with governance actors, constitutional stakeholders, and the wider community.
* At least one Constitution Issue Statement (e.g., CIS-0001) must be successfully authored using this structure to prove viability.

### Implementation Plan

* Conduct multiple cycles of CIS drafting, review, and merging to validate usability.
* Integrate CIS documents into community workflows, governance documentation, and educational materials.

---

## Mandatory 30-Day Deliberation Period

> [!IMPORTANT]  
> Submission of this document marks the start of the mandatory 30-day deliberation period. This CAP cannot be ratified or moved to "Active" status until at least 30 days of community review have passed.

---

## References (Optional)

- [CAP-0001 – CAP Process](../CAP-0001/README.md)
- [CIP-9999 – Complementary Naming Convention](https://github.com/cardano-foundation/CIPs/tree/master/CIP-9999)

---

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
