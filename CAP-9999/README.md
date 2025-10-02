---
CAP: 9999
Title: "Governance Problem Statements"
Category: "Meta"
Status: Active
Authors:
  - "Your Name <your.email@domain>"
Implementors:
  - "N/A"
Solution-To:
  - "N/A"
Discussions:
  - "https://github.com/your-org/CAPs/pull/1"
Created: 2025-10-01
License: CC-BY-4.0
---

## Abstract

A **Governance Problem Statement (GPS)** is a formalized document for the Cardano ecosystem, and the name of the process by which such documents are produced and listed. GPS documents are designed to complement **Cardano Amendment Proposals (CAPs)** and live side-by-side with them as first-class citizens in the governance repository.

Whereas CAPs propose changes or solutions, GPS documents define and articulate governance challenges — such as ambiguities in constitutional interpretation, procedural gaps, stakeholder coordination issues, or governance risks — that the ecosystem must address.

> **Note:** Read this CAP’s number as “CAP minus 1” — mirroring CIP-9999’s tens’ complement naming convention.

## Motivation: Why is this CAP necessary?

A recurring challenge in Cardano governance is that proposals often begin from unclear or loosely defined governance problems. The “Motivation” sections of governance proposals frequently lack sufficient depth or context, leading to confusion and fragmented debates where participants interpret the underlying problem differently.

The introduction of **Governance Problem Statements (GPSs)** addresses this gap by providing a clear, structured, and reusable way to articulate governance problems, their context, and the design constraints surrounding them. GPS documents capture the “why” behind proposed governance changes, creating a foundation on which CAPs can propose solutions.

In time, GPS documents can also serve as foundational documents for community discussions, constitutional reviews, or even governance-related grant programs — for example, by acting as the basis for Requests for Proposals (RFPs) on governance tooling, constitutional amendments, or new governance mechanisms.

## Amendment Specification

### GPS Structure

GPSs are documents that capture governance problems, their context, and associated constraints. They are written in Markdown with a front matter preamble and a set of required sections. Authors must follow the standard structure but may organize individual sections as they see fit.

| Section           | Description                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| Preamble          | Metadata about the GPS.                                                                          |
| Abstract          | A short (~200 word) summary of the governance problem.                                          |
| Background        | Historical, procedural, or constitutional context for why this problem exists.                  |
| Problem           | A detailed description of the governance problem and its scope.                                 |
| Impact            | Explanation of how this problem affects governance, stakeholders, or the constitution.         |
| Goals             | A prioritized list of outcomes the community seeks by addressing this problem.                  |
| Open Questions    | Questions that any solution (e.g., a CAP) should aim to answer.                                 |
| References        | (Optional) Supporting documents, standards, or related materials.                               |
| Copyright         | License under which the GPS is released.                                                        |

### Repository Organization

A GPS must be stored in a folder named after its number and in a file called `README.md`. Before a number is assigned, use `????` as a placeholder name (e.g., `GPS-????`). After assignment, rename the folder.

Example:

GPS-0001
├── README.md
└── background-notes.md

## Rationale: How does this CAP achieve its goals?

The GPS process ensures that governance challenges are clearly articulated and well understood before solutions are proposed. By separating **problems (GPS)** from **solutions (CAP)**, Cardano governance gains:

- Better-defined context for amendments.
- Stronger alignment among stakeholders.
- Clearer evaluation criteria for proposed solutions.
- A reusable repository of governance challenges to inform future CAPs.

Including sections like **Background**, **Impact**, and **Open Questions** ensures that governance problems are deeply grounded in reality and provide actionable guidance to solution authors.

## Path to Ratification

### Acceptance Criteria

- [x] Review this proposal with governance actors and constitutional stakeholders.  
- [x] Formulate at least one governance problem statement following this process (e.g., [GPS-0001: Ambiguities in Delegation Rights](https://github.com/[your-org]/CAPs/pull/2)).

### Implementation Plan

- [x] Confirm after several cycles of GPS submissions, reviews, and merges that the GPS process is effective and accessible to the community.
- [x] Integrate GPS usage into community workflows and governance education.

## Versioning (Optional)

Future revisions of the GPS framework may include additional required sections or updated guidance on linking GPS documents to CAP proposals.

## References (Optional)

- [CAP-0001 – CAP Process](../CAP-0001/README.md)
- [CIP-9999 – Complementary Naming Convention](https://github.com/cardano-foundation/CIPs/tree/master/CIP-9999)

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

