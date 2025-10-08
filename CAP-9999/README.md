---
CAP: "9999"
Title: "Governance Problem Statements"
Category: "Meta"
Status: "Active"
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

A **Governance Problem Statement (GPS)** is a formal governance document for the Cardano ecosystem, and the name of the process by which such documents are produced and listed. GPS documents are designed to complement **Cardano Amendment Proposals (CAPs)** and exist as **first-class citizens** alongside them in the governance repository.

Whereas CAPs propose changes or solutions, GPS documents define and articulate **governance problems** — including ambiguities in constitutional interpretation, procedural gaps, stakeholder coordination challenges, or governance risks — that the ecosystem must address.

> **Note:** The number “9999” is chosen in reference to [CIP-9999](https://github.com/cardano-foundation/CIPs/tree/master/CIP-9999), following the “tens’ complement” naming convention.

---

## Motivation: Why is this CAP necessary?

A recurring challenge in Cardano governance is that proposals often begin from **unclear or loosely defined governance problems**. As a result, many “Motivation” sections lack sufficient depth or context, leading to confusion and fragmented debate, with participants often interpreting the underlying problem differently.

The introduction of **Governance Problem Statements (GPSs)** addresses this gap by providing a clear, structured, and reusable way to **articulate governance problems, their context, and the design constraints surrounding them**. This ensures that CAPs — which propose solutions — are grounded in a shared understanding of the issues they aim to solve.

Over time, GPS documents can also serve as **foundational references** for constitutional reviews, governance research, and grant programs — for example, as the basis for **Requests for Proposals (RFPs)** on governance tooling, constitutional amendments, or new governance mechanisms.

---

## Specification

### GPS Structure

A Governance Problem Statement (GPS) is a Markdown document capturing governance problems, their context, and associated constraints. It includes a YAML-style metadata preamble and a set of required sections. Authors must follow the standard structure but may organize subsections flexibly.

| Section        | Description                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------ |
| Preamble       | Metadata about the GPS (number, title, status, etc.).                                           |
| Abstract       | A short (~200 words) summary of the governance problem.                                         |
| Background     | Historical, procedural, or constitutional context for why this problem exists.                  |
| Problem        | A detailed description of the governance problem and its scope.                                 |
| Impact         | Explanation of how this problem affects governance, stakeholders, or the constitution.         |
| Goals          | A prioritized list of outcomes the community seeks by addressing this problem.                  |
| Open Questions | Questions that any solution (e.g., a CAP) should aim to answer.                                 |
| References     | (Optional) Supporting documents, standards, or related materials.                               |
| Copyright      | License under which the GPS is released.                                                        |

### Repository Organization

A GPS must reside in a folder named after its number (4-digit, zero-padded) and include a `README.md` file. Supporting files (e.g., background research, appendices) may be added as needed.

Example:

GPS-0001
├── README.md
└── background-notes.md

yaml
Copy code

Before a number is assigned, use a placeholder folder name such as `GPS-????`. Once assigned, rename the folder accordingly.

---

## Rationale: How does this CAP achieve its goals?

The GPS process ensures that governance challenges are **clearly articulated and well understood** before solutions are proposed. By separating **problems (GPS)** from **solutions (CAP)**, Cardano governance gains:

- Stronger alignment among stakeholders on problem scope and context.  
- Better-defined inputs for future amendments and governance changes.  
- Clearer evaluation criteria for proposed solutions.  
- A reusable repository of governance problems that can inform future CAPs and governance initiatives.

Sections like **Background**, **Impact**, and **Open Questions** ensure that GPS documents are grounded in real-world context and provide actionable guidance to solution authors.

---

## Path to Ratification

### Acceptance Criteria

- [x] Reviewed with governance actors, constitutional stakeholders, and the wider community.  
- [x] At least one governance problem statement (e.g., [GPS-0001: Ambiguities in Delegation Rights](https://github.com/[your-org]/CAPs/pull/2)) authored using this structure.  

### Implementation Plan

- [x] Conduct multiple cycles of GPS drafting, review, and merging to validate usability.  
- [x] Integrate GPS documents into community workflows, governance documentation, and educational materials.

---

## Versioning (Optional)

Future revisions of the GPS process may include additional required sections or updated guidance on linking GPS documents to CAP proposals.

---

## References (Optional)

- [CAP-0001 – CAP Process](../CAP-0001/README.md)  
- [CIP-9999 – Complementary Naming Convention](https://github.com/cardano-foundation/CIPs/tree/master/CIP-9999)

---

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
