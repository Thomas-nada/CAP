---
CAP: 9999
Title: Governance Problem Statements
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

A **Governance Problem Statement (GPS)** is a formalized document for the Cardano ecosystem, and the name of the process by which such documents are produced and listed. GPS documents are designed to complement **Cardano Amendment Proposals (CAPs)** and live side-by-side with them as first-class citizens in the governance repository.

Whereas CAPs propose changes or solutions, GPS documents define and articulate governance challenges — such as ambiguities in constitutional interpretation, procedural gaps, stakeholder coordination issues, or governance risks — that the ecosystem must address.

> [!NOTE]
> Read this CAP’s number as “CAP minus 1” — mirroring CIP-9999’s tens’ complement naming convention.

## Motivation: why is this CAP necessary?

A recurring challenge in Cardano governance is that proposals often begin from unclear or loosely defined governance problems. The “Motivation” sections of governance proposals frequently lack sufficient depth or context, leading to confusion and fragmented debates where participants interpret the underlying problem differently.

The introduction of **Governance Problem Statements (GPSs)** addresses this gap by providing a clear, structured, and reusable way to articulate governance problems, their context, and the design constraints surrounding them. GPS documents capture the “why” behind proposed governance changes, creating a foundation on which CAPs can propose solutions.

In time, GPS documents can also serve as foundational documents for community discussions, constitutional reviews, or even governance-related grant programs — for example, by acting as the basis for Requests for Proposals (RFPs) on governance tooling, constitutional amendments, or new governance mechanisms.

## Specification

### GPS

#### Structure

GPSs are documents that capture governance problems, their context, and associated constraints. They are written in [Markdown][Markdown] with a front matter _Preamble_ and a set of required sections. Authors must follow the standard structure but may organize individual sections as they see fit.

The structure of a GPS file is summarized below:

Name               | Description
---                | ---
Preamble           | Metadata about the GPS ([see below](#header-preamble)).
Abstract           | A short (~200 word) summary of the governance problem.
Background         | Historical, procedural, or constitutional context for why this problem exists.
Problem            | A detailed description of the governance problem and its scope.
Impact             | Explanation of how this problem affects governance, stakeholders, or the constitution.
Goals              | A prioritized list of outcomes the community seeks by addressing this problem.
Open Questions     | A list of questions that any solution (e.g., a CAP) should aim to answer.
_optional sections_| If needed: <br/>**References**<br/>**Appendices**<br/>**Acknowledgements**<br/>Do not include material here that belongs in standard sections.
Copyright          | Must be explicitly licensed under an approved license (see [Licensing](#licensing)).

##### Header Preamble

Each GPS begins with a YAML key:value preamble (also known as “front matter”), surrounded by `---`.

Field                | Description
---                  | ---
`GPS`               | The GPS number (without leading 0), or `?` before assignment.
`Title`             | A succinct and descriptive title.
`Category`          | A well-defined governance area (e.g., Constitution, Delegation, Treasury, Voting).
`Status`            | Open \| Addressed \| Inactive (..._reason_...).
`Authors`           | List of authors’ names and email addresses.
`Proposed Solutions`| A list of CAPs addressing this governance problem, if any.
`Discussions`       | Links to major discussions, including the pull request that created or modifies the GPS.
`Created`           | Date created, in ISO 8601 format.
`License`           | Abbreviation of an approved license.

Example:

```yaml
---
GPS: 1
Title: Ambiguities in Delegation Rights
Category: Delegation
Status: Open
Authors:
    - Alice <alice@domain.org>
    - Bob <bob@domain.org>
Proposed Solutions: []
Discussions:
    - https://github.com/cardano-foundation/CAPs/discussions/12
Created: 2025-10-01
License: CC-BY-4.0
---
````

> **Note:** A reference template is available in [.github/GPS-TEMPLATE.md][GPS-TEMPLATE.md].

##### Repository Organization

A GPS must be stored in a folder named after its number and in a file called `README.md`. Before a number is assigned, use `????` as a placeholder name (e.g., `GPS-????`). After assignment, rename the folder.

Additional supporting files (e.g., constitutional excerpts, governance diagrams, datasets) may be added to the folder.

Example:

```
GPS-0001
├── README.md
└── background-notes.md
```

#### Statuses

| Status    | Description                                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Open      | A well-formulated governance problem with no complete solution. Partial solutions may exist but do not fully address the issue. |
| Addressed | The problem has been fully addressed by one or more CAPs. Mark as: `Addressed: by <CAP-XXXX>[,<CAP-YYYY>,...]`.                 |
| Inactive  | The GPS is obsolete or withdrawn. Must include a reason, e.g., `Inactive (superseded by GPS-0002)`.                             |

> [!NOTE]
> There is no “draft” status. GPS documents in pull requests are considered drafts until merged.

#### Categories

Categories should reflect governance areas rather than technical ones. Suggested initial categories:

| Category     | Description                                                               |
| ------------ | ------------------------------------------------------------------------- |
| Constitution | Problems related to the Cardano Constitution and its interpretation.      |
| Delegation   | Issues concerning delegation, stake voting, or representative rights.     |
| Treasury     | Governance and distribution challenges in treasury or funding.            |
| Voting       | Ambiguities or inefficiencies in voting processes or on-chain governance. |
| Meta         | For meta-GPS documents that serve the process itself.                     |

#### Licensing

GPS documents must be licensed under one of the following:

| Purpose             | Recommended License                                                                    |
| ------------------- | -------------------------------------------------------------------------------------- |
| For documentation   | CC-BY-4.0 - [Creative Commons Attribution 4.0 International Public License][CC-BY-4.0] |
| For software / code | Apache-2.0 - [Apache License, version 2.0][Apache-2.0]                                 |

> [!WARNING]
> Any other license must be added to this list by amending this CAP.

### The GPS Process

#### 1. Early stages (same as CAP-0001)

##### 1.a. Authors open pull requests with their problem statement

Following the process defined in [CAP-0001](https://github.com/[your-org]/CAPs/tree/main/CAP-0001#1a-authors-open-a-pull-request).

##### 1.b. Authors seek feedback

Authors are responsible for seeking and incorporating feedback, mirroring the process described in [CAP-0001](https://github.com/[your-org]/CAPs/tree/main/CAP-0001#1b-authors-seek-feedback).

#### 2. Editors’ role (same as CAP-0001)

##### 2.a. Triage in regular meetings

Editors review new GPS submissions, assign numbers, and verify structure and clarity.

##### 2.b. Reviews

Editors and relevant stakeholders assess whether the problem is well-defined, supported by context, and actionable.

#### 3. Merging GPSs in the repository

A GPS must demonstrate that a real governance problem exists, that alternatives are inadequate, and that the issue is relevant to the governance ecosystem.
Poorly defined, unrealistic, or abandoned problem statements will be rejected or closed.

#### 4. Ecosystem actors design and propose solutions

Once a GPS is merged, CAP authors may propose solutions. When a CAP fully addresses a GPS, it should be listed under `Proposed Solutions` in the GPS preamble.

If a solution is partial, the GPS can be amended to reflect the remaining unsolved aspects.

### Editors

Editors and their responsibilities are defined in [CAP-0001](https://github.com/[your-org]/CAPs/tree/main/CAP-0001).

## Rationale: how does this CAP achieve its goals?

### Goals

Goals clarify what a solution must accomplish and provide measurable criteria for success. They guide discussion and evaluation, helping governance contributors align on direction and constraints.

### Background and Impact

Explicitly including **Background** and **Impact** sections ensures GPS authors root their problem statements in real governance history, constitutional context, and stakeholder realities — making them more actionable and relevant to future CAPs.

### Open Questions

The **Open Questions** section helps solution authors anticipate and address critical considerations. It accelerates the governance design process by surfacing known challenges early.

## Path to Active

### Acceptance Criteria

* [x] Review this proposal with governance actors and constitutional stakeholders.
* [x] Formulate at least one governance problem statement following this process.

  * [GPS-0001: Ambiguities in Delegation Rights](https://github.com/[your-org]/CAPs/pull/2)

### Implementation Plan

* [x] Confirm after several cycles of GPS submissions, reviews, and merges that the GPS process is effective and accessible to the community.

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

[Apache-2.0]: http://www.apache.org/licenses/LICENSE-2.0
[CC-BY-4.0]: https://creativecommons.org/licenses/by/4.0/legalcode
[CAP-0001]: https://github.com/[your-org]/CAPs/tree/main/CAP-0001
[GPS-TEMPLATE.md]: https://github.com/[your-org]/CAPs/tree/main/.github/GPS-TEMPLATE.md
[CODE_OWNERS]: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners
[GPS]: https://github.com/[your-org]/CAPs/tree/main/CAP-9999
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[PullRequest]: https://github.com/[your-org]/CAPs/pulls
[Repository]: https://github.com/[your-org]/CAPs
[CoC]: https://github.com/[your-org]/CAPs/tree/main/CODE_OF_CONDUCT.md
[Discord]: https://discord.gg/your-governance-channel

```
