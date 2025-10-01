---
CAP: 1
Title: CAP Process
Category: Meta
Status: Active
Authors:
    - [Your Name] <your.email@domain>
Implementors: N/A
Discussions:
    - https://github.com/[your-org]/CAPs/pull/1
Created: 2025-10-01
License: CC-BY-4.0
---

## Abstract

A **Cardano Amendment Proposal (CAP)** is a formalised governance document for the Cardano community and the name of the process by which such documents are produced and listed. A CAP proposes amendments, clarifications, or additions to Cardano’s governance system, constitution, or constitutional processes, providing information or describing governance changes concisely and in sufficient detail. 

In this CAP, we explain what a CAP is, how the CAP process functions, the role of the CAP Editors, and how users should propose, discuss, and structure a CAP.

The Cardano Foundation and governance community intend CAPs to be the primary mechanism for proposing constitutional changes, collecting community input on governance issues, and documenting key decisions that shape Cardano’s on-chain governance. Because CAPs are text files in a versioned repository, their revision history becomes the authoritative historical record of constitutional and governance evolution on Cardano.

## Motivation: why is this CAP necessary?

CAPs aim to address two key governance challenges:

1. The need for a transparent, standardised, and collaborative process to propose, discuss, and formalise changes to Cardano’s constitution and governance framework.
2. The need to document governance decisions and processes as part of Cardano’s evolving on-chain governance and constitutional system.

The CAP process does **not itself enact governance changes** — that is handled by governance actions and on-chain voting. Instead, CAPs serve as the **formal, community-driven input layer** to that decision-making process. They help stakeholders define, debate, and refine governance ideas before they enter the on-chain system.

This document outlines the structure of CAPs and the technical and procedural requirements of the submission and review process. The history, social factors, and human aspects of the CAP process are described in the [CAP repository Wiki][Wiki].

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
  - [Path to Active](#path-to-active)
  - [Categories](#categories)
  - [Project Enlisting](#project-enlisting)
- [Process](#process)
  - [1. Early Stages](#1-early-stages)
    - [1.a. Authors open a pull request](#1a-authors-open-a-pull-request)
      - [Naming CAPs with similar subjects](#naming-caps-with-similar-subjects)
    - [1.b. Authors seek feedback](#1b-authors-seek-feedback)
  - [2. Editors' role](#2-editors-role)
    - [2.a. Triage in regular meetings](#2a-triage-in-regular-meetings)
    - [2.b. Reviews](#2b-reviews)
  - [3. Merging CAPs in the repository](#3-merging-caps-in-the-repository)
  - [4. Implementors work towards Active status following their 'Implementation Plan'](#4-implementors-work-towards-active-status-following-their-implementation-plan)
- [Editors](#editors)
  - [Missions](#missions)
  - [Reviews](#reviews)
  - [Nomination](#nomination)

---

### Document

#### Structure

A CAP is a document proposing a governance amendment to a clearly defined problem. CAPs are [Markdown][] files with a _Preamble_ and a set of pre-defined sections. Authors must follow the general structure, though they are free to organize content within each section as they see fit.

Structure of a CAP file:

| Name | Description |
| --- | --- |
| Preamble | Metadata about the CAP ([see below](#header-preamble)). |
| Abstract | ~200-word description of the proposed amendment and governance issue. |
| Motivation: why is this CAP necessary? | Purpose, use cases, stakeholders, and reasoning. If the CAP responds to a [Governance Problem Statement (GPS)][GPS], link it here. |
| Specification | The governance change in detail, with all necessary procedural or constitutional details. |
| Rationale: how does this CAP achieve its goals? | Design reasoning, alternatives considered, and objections addressed. Must also respond to key questions in any linked [GPS][GPS]. |
| Path to Active | Acceptance criteria and implementation plan (see [Path to Active](#path-to-active)). |
| _Optional sections_ | Versioning, References, Appendices, Acknowledgements. |
| Copyright | License under which the CAP is released ([see below](#licensing)). |

> [!NOTE]  
> Section titles (*Abstract* onward) should be H2 (`##`), with subsections like _Acceptance Criteria_ as H3 (`###`).

##### Header Preamble

Each CAP must begin with a YAML header:

| Field | Description |
| --- | --- |
| `CAP` | The CAP number (no leading 0), or `?` before assignment |
| `Title` | A short, descriptive title |
| `Category` | One of the accepted [categories](#categories) |
| `Status` | Proposed \| Active \| Inactive (reason) |
| `Authors` | Real names and emails |
| `Implementors` | Implementors or `N/A` |
| `Discussions` | Links to key discussions, including PR |
| `Solution-To` | List of [GPS][] addressed |
| `Created` | Date (YYYY-MM-DD) |
| `License` | Approved license abbreviation |

Example:
```yaml
---
CAP: 1
Title: CAP Process
Category: Meta
Status: Active
Authors:
    - Jane Doe <jane.doe@cardano.org>
Implementors: N/A
Discussions:
    - https://github.com/cardano-foundation/CAPs/pull/1
Created: 2025-10-01
License: CC-BY-4.0
---
````

##### Repository Organization

Each CAP must reside in its own folder named `CAP-XXXX` (4-digit number) with a `README.md` inside. Before assignment, use a placeholder folder name.

```
CAP-0001
├── README.md
├── diagrams/
└── appendix.md
```

##### Translations

CAPs may be translated following the same conventions as [CIP-0001](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0001#translations).

##### Versioning

Each CAP must describe how versioning is handled, either within the Specification or a dedicated section.

##### Licensing

CAPs must use one of the following licenses:

| Purpose            | License                                                            |
| ------------------ | ------------------------------------------------------------------ |
| Documentation      | [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode) |
| Code (if included) | [Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0)           |

---

### Statuses

CAPs have three statuses: `Proposed`, `Active`, or `Inactive`.

> [!NOTE]
> There is no “Draft” status. Proposals still in PRs are considered drafts.

#### Status: Proposed

A CAP is *Proposed* if it meets all structural and editorial criteria but has not yet achieved its Path to Active.

#### Status: Active

A CAP becomes *Active* once its criteria are met — for example:

* A constitutional amendment is ratified on-chain.
* A governance procedure is adopted by governance actors.
* A standard is widely accepted by the community.

#### Status: Inactive

A CAP may be marked *Inactive* if obsolete, abandoned, or superseded:

```
Status: Inactive (superseded by CAP-0005)
```

---

### Path to Active

This section has two subsections:

* **Acceptance Criteria** – measurable conditions for the CAP to become Active.
* **Implementation Plan** – a plan for achieving those conditions (or `N/A`).

---

### Categories

CAP categories help organize proposals:

| Category             | Description                                  |
| -------------------- | -------------------------------------------- |
| Meta                 | Proposals about the CAP process itself       |
| Constitution         | Constitutional amendments and clarifications |
| Governance Process   | Governance workflows, procedures, and roles  |
| Delegation & Voting  | DReps, delegation, and voting mechanisms     |
| Treasury & Funding   | Treasury governance and funding structures   |
| Governance Tools     | Standards and tooling for governance         |
| Off-chain Governance | Off-chain processes and social governance    |

---

### Project Enlisting

Governance bodies or projects can “enlist” with the CAP process, agreeing to review relevant CAPs and collaborate with authors. Enlisting does not obligate implementation.

---

## Process

### 1. Early Stages

#### 1.a. Authors open a pull request

Submit proposals to the [CAP repository][Repository] via pull request, using `?` as the CAP number. Title the PR with the proposal title.

Do **not** include implementation code — link to code repositories instead.

#### 1.b. Authors seek feedback

Authors are expected to champion their CAP and actively seek feedback. Discussion should happen primarily in GitHub comments, and off-platform discussions should be summarised back into the PR.

All contributors agree to the [Code of Conduct][CoC].

---

### 2. Editors’ Role

#### 2.a. Triage in regular meetings

CAP Editors meet regularly in **CAPtains’ Calls** (bi-weekly public calls) to review new proposals, assign numbers, and triage CAPs.

#### 2.b. Reviews

Editors review CAPs for structure, clarity, and soundness. Subject matter experts and governance stakeholders may be invited to participate in reviews.

---

### 3. Merging CAPs in the repository

CAPs are merged once they meet the criteria for their intended status and have undergone sufficient review.

---

### 4. Implementors work towards Active status

After merging, implementors execute the CAP’s *Implementation Plan*. When criteria are met, a new PR is submitted to update its status to *Active*.

---

## Editors

### Missions

CAP Editors safeguard the process, review proposals, assign numbers and categories, and ensure quality and clarity.

### Reviews

Editors may provide feedback but are not expected to be sole technical reviewers. CAPs are community-driven and authors are encouraged to seek expert input.

### Nomination

Editors can be nominated by existing editors or the community if they have contributed meaningfully to the process.

Current editors:

| [@editor1][] | [@editor2][] | [@editor3][] | [@editor4][] |
| ------------ | ------------ | ------------ | ------------ |

[editor1]: https://github.com/editor1
[editor2]: https://github.com/editor2
[editor3]: https://github.com/editor3
[editor4]: https://github.com/editor4

---

## Rationale: how does this CAP achieve its goals?

This meta-CAP formalises the process by which governance amendments are proposed, discussed, and adopted. It mirrors [CIP-0001] for technical standards but is adapted for Cardano’s governance and constitutional system. It introduces **Governance Problem Statements (GPS)** as a complementary input layer for defining governance challenges and ensures that CAPs are well-scoped and community-driven before entering the governance pipeline.

---

## Path to Active

### Acceptance Criteria

* [x] Reviewed and discussed by the Cardano governance community.
* [x] All major feedback addressed.
* [x] Adopted as the standard process for governance amendments.

### Implementation Plan

* [x] Publish CAP-0001.
* [x] Establish CAP repository.
* [x] Hold regular CAPtains’ Calls to review submissions.

---

## Copyright

This CAP is licensed under [CC-BY-4.0][].

[Apache-2.0]: http://www.apache.org/licenses/LICENSE-2.0
[CC-BY-4.0]: https://creativecommons.org/licenses/by/4.0/legalcode
[GPS]: ./GPS-0001
[Repository]: https://github.com/[your-org]/CAPs/pulls
[CoC]: ./CODE_OF_CONDUCT.md
[Wiki]: https://github.com/[your-org]/CAPs/wiki
[Markdown]: https://en.wikipedia.org/wiki/Markdown

```
