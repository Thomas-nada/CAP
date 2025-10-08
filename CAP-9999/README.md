---
CAP: "9999"
Title: "Constitution Issue Statements (CIS) — Process"
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

A **Constitution Issue Statement (CIS)** is a formal governance document for the Cardano ecosystem, and the name of the process by which such documents are produced and listed. CIS documents are designed to complement **Cardano Amendment Proposals (CAPs)** and exist as **first-class citizens** alongside them in the governance repository.

Whereas CAPs propose changes or solutions, CIS documents define and articulate **constitutional issues** — including ambiguities in constitutional interpretation, procedural gaps, stakeholder coordination challenges, or governance risks — that the ecosystem must address.

> **Note:** The number “9999” is chosen in reference to [CIP-9999](https://github.com/cardano-foundation/CIPs/tree/master/CIP-9999), following the “tens’ complement” naming convention.

---

## Motivation: Why is this CAP necessary?

A recurring challenge in Cardano governance is that proposals often begin from **unclear or loosely defined constitutional issues**. As a result, many “Motivation” sections lack sufficient depth or context, leading to confusion and fragmented debate, with participants often interpreting the underlying issue differently.

Introducing **Constitution Issue Statements (CISs)** provides a clear, structured, and reusable way to **articulate constitutional issues, their context, and the design constraints surrounding them**. This ensures that CAPs — which propose solutions — are grounded in a shared understanding of the issues they aim to solve.

Over time, CIS documents can also serve as **foundational references** for constitutional reviews, governance research, and grant programs — for example, as the basis for **Requests for Proposals (RFPs)** on governance tooling, constitutional amendments, or new governance mechanisms.

---

## Specification

### CIS Structure

A Constitution Issue Statement (CIS) is a Markdown document capturing constitutional issues, their context, and associated constraints. It includes a YAML-style metadata preamble and a set of required sections. Authors must follow the standard structure but may organize subsections flexibly.

| Section        | Description                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------ |
| Preamble       | Metadata about the CIS (number, title, status, etc.).                                           |
| Abstract       | A short (~200 words) summary of the constitutional issue.                                       |
| Background     | Historical, procedural, or constitutional context for why this issue exists.                    |
| Problem        | A detailed description of the constitutional issue and its scope.                               |
| Impact         | Explanation of how this issue affects governance, stakeholders, or the constitution.           |
| Goals          | A prioritized list of outcomes the community seeks by addressing this issue.                    |
| Open Questions | Questions that any solution (e.g., a CAP) should aim to answer.                                 |
| References     | (Optional) Supporting documents, standards, or related materials.                               |
| Copyright      | License under which the CIS is released.                                                        |

### Repository Organization

A CIS must reside in a folder named after its number (4-digit, zero-padded) and include a `README.md` file.

Example:

CIS-0001
└── README.md

Before a number is assigned, use a placeholder folder name such as `CIS-????`. Once assigned, rename the folder accordingly.

---

## Rationale: How does this CAP achieve its goals?

The CIS process ensures that constitutional challenges are **clearly articulated and well understood** before solutions are proposed. By separating **issues (CIS)** from **solutions (CAP)**, Cardano governance gains:

- Stronger alignment among stakeholders on issue scope and context.  
- Better-defined inputs for future amendments and governance changes.  
- Clearer evaluation criteria for proposed solutions.  
- A reusable repository of constitutional issues that can inform future CAPs and governance initiatives.

Sections like **Background**, **Impact**, and **Open Questions** ensure that CIS documents are grounded in real-world context and provide actionable guidance to solution authors.

---

## Path to Ratification

### Acceptance Criteria

- [x] Reviewed with governance actors, constitutional stakeholders, and the wider community.  
- [x] At least one Constitution Issue Statement (e.g., [CIS-0001: Ambiguities in Delegation Rights](https://github.com/[your-org]/CAPs/pull/2)) authored using this structure.  

### Implementation Plan

- [x] Conduct multiple cycles of CIS drafting, review, and merging to validate usability.  
- [x] Integrate CIS documents into community workflows, governance documentation, and educational materials.

---

## Versioning (Optional)

Future revisions of the CIS process may include additional required sections or updated guidance on linking CIS documents to CAP proposals.

---

## References (Optional)

- [CAP-0001 – CAP Process](../CAP-0001/README.md)  
- [CIP-9999 – Complementary Naming Convention](https://github.com/cardano-foundation/CIPs/tree/master/CIP-9999)

---

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
