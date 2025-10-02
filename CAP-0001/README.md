---
CAP: 0001
Title: "CAP Process"
Category: "Meta"
Status: Active
Authors:
  - "Your Name <your.email@domain>"
Implementors:
  - "N/A"
Solution-To:
  - "N/A"
Discussions:
  - "https://github.com/[your-org]/CAPs/pull/1"
Created: 2025-10-01
License: CC-BY-4.0
---

## Abstract

A **Cardano Amendment Proposal (CAP)** is a formal governance document for the Cardano community and the name of the process by which such documents are produced and listed.  
A CAP proposes amendments, clarifications, or additions to Cardano’s governance system, constitution, or constitutional processes, providing information or describing governance changes concisely and in sufficient detail.

In this CAP, we explain what a CAP is, how the CAP process functions, the role of the CAP Editors, and how users should propose, discuss, and structure a CAP.

We intend CAPs to be the primary mechanism for proposing constitutional changes, collecting community input on governance issues, and documenting key decisions that shape Cardano’s on-chain governance.  
Because CAPs are text files in a versioned repository, their revision history becomes the authoritative historical record of constitutional and governance evolution on Cardano.

## Motivation: Why is this CAP necessary?

CAPs address two key governance challenges:

1. The need for a transparent, standardised, and collaborative process to propose, discuss, and formalise changes to Cardano’s constitution and governance framework.
2. The need to document governance decisions and processes as part of Cardano’s evolving on-chain governance and constitutional system.

The CAP process does **not itself enact governance changes** — that is handled by governance actions and on-chain voting. Instead, CAPs serve as the **formal, community-driven input layer** to that decision-making process. They help stakeholders define, debate, and refine governance ideas before they enter the on-chain system.

## Amendment Specification

This CAP defines the structure, purpose, and process of Cardano Amendment Proposals:

- Each CAP is a markdown file with a metadata preamble and required sections.
- CAPs propose constitutional amendments, governance changes, or supporting standards.
- CAPs must include sections for Abstract, Motivation, Specification, Rationale, Path to Ratification, and Copyright.
- CAPs are tracked in a version-controlled repository and assigned numbers sequentially.
- Each CAP resides in its own folder (`CAP-XXXX/README.md`) and may include supporting files (e.g., diagrams, appendices).
- The CAP lifecycle follows stages: Draft (in PR), Active (ratified or adopted), or Inactive (withdrawn, superseded, or obsolete).

## Rationale: How does this CAP achieve its goals?

This meta-CAP formalises the process by which governance amendments are proposed, discussed, and adopted.  
It mirrors [CIP-0001] for technical standards but is adapted for Cardano’s governance and constitutional system.  
It introduces **Governance Problem Statements (GPS)** as a complementary input layer for defining governance challenges and ensures that CAPs are well-scoped and community-driven before entering the governance pipeline.

## Path to Ratification

### Acceptance Criteria

- [x] Reviewed and discussed by the Cardano governance community.
- [x] All major feedback addressed.
- [x] Adopted as the standard process for governance amendments.

### Implementation Plan

- [x] Publish CAP-0001.
- [x] Establish the CAP repository.
- [x] Hold regular CAPtains’ Calls to review submissions.

## Versioning (Optional)

Future updates to the CAP process will be introduced as amendments to this CAP. Superseded versions will be archived and referenced.

## References (Optional)

- [CAP Repository Wiki][Wiki] – Detailed process guidance  
- [CIP-0001] – Cardano Improvement Proposal process  
- [GPS-0001] – Governance Problem Statement framework  

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

[Wiki]: https://github.com/[your-org]/CAPs/wiki
[CIP-0001]: https://github.com/cardano-foundation/CIPs/tree/master/CIP-0001
[GPS-0001]: ./GPS-0001
