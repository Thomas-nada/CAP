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

A **Cardano Amendment Proposal (CAP)** is a formal governance design document and the name of the process by which such documents are produced, reviewed, ratified, and recorded. A CAP proposes changes, amendments, clarifications, or additions to Cardano’s governance system — including the Constitution, guardrails, or governance processes. It provides information or describes governance changes concisely and in sufficient technical and procedural detail.

In this CAP, we define what a CAP is, explain how the CAP process functions, describe the role of CAP Editors, and outline how community members propose, discuss, refine, and ratify CAPs.

CAPs are the primary mechanism for proposing constitutional amendments, gathering community input on governance questions, and documenting key decisions in Cardano’s governance system. Because CAPs are text files in a versioned repository, their revision history forms the authoritative record of governance evolution on Cardano.

---

## Motivation: Why is this CAP necessary?

The CAP process is designed to address two key challenges in Cardano governance:

1. The need for a transparent, standardised, and collaborative process to propose, discuss, and formalise changes to Cardano’s Constitution and governance framework.
2. The need to document governance decisions and governance standards as part of Cardano’s evolving on-chain governance system.

The CAP process does **not itself enact governance changes** — that is done through governance actions and on-chain voting. Instead, CAPs are the **formal, community-driven input layer** to that decision-making pipeline, helping define, debate, and refine ideas before they are submitted as governance actions.

This document defines the CAP structure, lifecycle, and editorial process, and provides technical and procedural guidance for authors and reviewers.

---

## Specification

### Table of Contents

- [Document](#document)
  - [Structure](#structure)
    - [Header Preamble](#header-preamble)
    - [Translations](#translations)
    - [Repository Organization](#repository-organization)
    - [Versioning](#versioning)
    - [Licensing](#licensing)
  - [Statuses](#statuses)
    - [Status: Proposed](#status-proposed)
    - [Status: Active](#status-active)
    - [Status: Inactive](#status-inactive)
  - [Path to Ratification](#path-to-ratification)
  - [Categories](#categories)
  - [Project Enlisting](#project-enlisting)
- [Process](#process)
  - [1. Early Stages](#1-early-stages)
    - [1.a. Authors open a pull request](#1a-authors-open-a-pull-request)
      - [Naming CAPs with similar subjects](#naming-caps-with-similar-subjects)
    - [1.b. Authors seek feedback](#1b-authors-seek-feedback)
  - [2. Editors’ Role](#2-editors-role)
    - [2.a. Triage in regular meetings](#2a-triage-in-regular-meetings)
    - [2.b. Reviews](#2b-reviews)
  - [3. Merging CAPs into the repository](#3-merging-caps-into-the-repository)
  - [4. Governance actions and ratification](#4-governance-actions-and-ratification)
- [Editors](#editors)
  - [Missions](#missions)
  - [Reviews](#reviews)
  - [Nomination](#nomination)

---

### Document

#### Structure

A CAP is a document proposing a governance amendment or standard, defined in Markdown and containing a metadata _Preamble_ followed by required sections. Authors must follow the general structure but can organise each section as they see fit.

| Section | Description |
|--------|-------------|
| Preamble | Metadata about the CAP (see below). |
| Abstract | A short (~200 words) summary of the problem and proposed governance change. |
| Motivation | A clear explanation of the purpose, use cases, and stakeholders. If the CAP responds to a **Constitution Issue Statement (CIS)**, link to it here. |
| Specification | The detailed proposal — what governance rule, process, or standard is being proposed. |
| Rationale | Explanation of design choices, alternative approaches considered, and how the solution addresses the problem. |
| Path to Ratification | Criteria and plan for the CAP to become ratified and Active. |
| Optional sections | **Versioning**, **References**, **Appendices**, **Acknowledgements** |
| Copyright | The CAP must be explicitly licensed under acceptable terms. |

> [!NOTE]  
> All section titles (*Abstract* onward) should be `##` headings. Subsections (e.g. Versioning, Acceptance Criteria) should be `###` headings.

---

#### Header Preamble

Each CAP begins with a YAML-style header:

```yaml
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
```

---

#### Repository Organization

Each CAP lives in a folder named after its number (4-digit, zero-padded) with a `README.md`. Supporting files may be included as needed.

```
CAP-0001
└── README.md
```

---

#### Translations

CAPs may be translated following the same rules as CIPs. Translation files must include metadata (`CAP`, `Source`, `Revision`, etc.) and inherit the same license.

---

#### Versioning

If the CAP defines governance structures or standards that evolve over time, it must explain how versioning will be handled. Authors may specify that a CAP must be superseded by another to change its specification.

---

#### Licensing

CAPs must be licensed under one of the following:

| Purpose | Recommended License |
|--------|----------------------|
| Documentation | CC-BY-4.0 |
| Code/specifications | Apache-2.0 |

---

### Statuses

A CAP can have three statuses:

- **Proposed** – Merged into the repository but not yet ratified.  
- **Active** – Has been ratified by governance action or adopted through consensus.  
- **Inactive** – Superseded, withdrawn, or obsolete.

> [!NOTE]  
> There is no “Draft” status. CAPs in open pull requests are considered drafts.

---

### Path to Ratification

Each CAP must define:

- **Acceptance Criteria** – What must occur for the CAP to become ratified (e.g., governance action approved by on-chain vote).  
- **Implementation Plan** – The plan or next steps to achieve ratification.

---

### Categories

| Category | Description |
|----------|-------------|
| Meta | Meta-CAPs like this one, defining governance processes and standards. |
| Constitution | Amendments or changes to the Cardano Constitution. |
| Guardrails | Updates to guardrails. |
| Standards | Off-chain governance standards and practices. |

---

### Project Enlisting

Projects and governance bodies that intend to follow the CAP process should coordinate reviews, define engagement rules, and participate in discussions. Enlisting does **not** commit them to implement a CAP but improves collaboration and accountability.

---

## Process

### 1. Early Stages

#### 1.a. Authors open a pull request

CAPs must be submitted as pull requests to the CAPs repository. The PR title should not include the CAP number — editors will assign it. Each proposal should be submitted from a dedicated branch.

> [!IMPORTANT]  
> Pull requests must not include implementation code. Links to related repositories should be provided instead.

##### Naming CAPs with similar subjects

Use a common prefix when proposals share a subject area.  
Example:  
> *Guardrails — Parameter Thresholds*

##### Link to proposal from PR first comment

Include a link to the CAP’s `README.md` in the pull request description to aid review.

##### Follow a reviewer-friendly process

- Commit suggested changes through the GitHub UI where possible.  
- Avoid force pushes; use merges to preserve history.  
- Mark review points resolved as they are addressed.

---

#### 1.b. Authors seek feedback

Authors champion their proposals and are expected to solicit feedback across forums, governance calls, workshops, and community events. Feedback and discussion should be summarised in the pull request to maintain a clear record.

---

### 2. Editors’ Role

#### 2.a. Triage in regular meetings

Editors meet regularly to triage new proposals, review metadata, and assign numbers. Triage also ensures proposals gain visibility and initial feedback.

#### 2.b. Reviews

Editors assess readiness for merging based on structure, clarity, and quality. They may invite governance actors, project maintainers, or experts to review specific proposals.

---

### 3. Merging CAPs into the repository

Once a CAP meets structural and quality requirements and has undergone sufficient review, it is merged as `Proposed`. Proposals may remain `Proposed` until they achieve ratification.

> [!WARNING]  
> Unsound or abandoned proposals may be rejected or closed.

---

### 4. Governance actions and ratification

Once merged, a CAP may be submitted as a **governance action**. If quorum and approval thresholds are met on-chain, the CAP becomes `Active`. Off-chain standards may become `Active` through demonstrated adoption and consensus.

---

## Editors

### Missions

CAP Editors safeguard the CAP process. They:

- Ensure proposals meet formatting and quality standards.  
- Assign CAP numbers and categories.  
- Facilitate community discussion.  
- Maintain repository structure and integrity.

### Reviews

Editors may provide feedback but are not sole reviewers. Authors should engage governance experts and community stakeholders as part of the review process.

### Nomination

New editors may be nominated by the community or existing editors. Candidates must be active contributors and willing to commit time to the CAP process.

---

## Rationale: How does this CAP achieve its goals?

This meta-CAP formalises the Cardano Amendment Proposal process — the foundation for proposing and ratifying governance changes. It adapts the well-established [CIP-0001](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0001) model for governance by:

- Defining a transparent, collaborative process for governance amendments.  
- Introducing a structured path from proposal to ratification via governance actions.  
- Introducing **Constitution Issue Statements (CIS)** as a complementary input layer for defining governance challenges.  
- Ensuring that CAPs are well-scoped and community-driven before entering the governance pipeline.

---

## Path to Ratification

### Acceptance Criteria

- [x] Reviewed by the governance community and discussed widely.  
- [x] All major concerns addressed.  
- [x] Adopted as the standard governance amendment process.

### Implementation Plan

- [x] Publish CAP-0001.  
- [x] Establish and maintain the CAP repository.  
- [x] Conduct regular governance review meetings to triage CAP submissions.

---

## References (Optional)

- [CAP Repository Wiki][Wiki] – Detailed process guidance  
- [CIP-0001] – Cardano Improvement Proposal process  
- [CIS-0001] – Constitution Issue Statement framework  

[Wiki]: https://github.com/[your-org]/CAPs/wiki  
[CIP-0001]: https://github.com/cardano-foundation/CIPs/tree/master/CIP-0001  
[CIS-0001]: ./CIS-0001

---

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
