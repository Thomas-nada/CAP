---
CAP: "0001"
Title: "CAP Process"
Category: "Procedural"
Status: "Active"
Authors:
  - "Thomas Lindseth <thomas@kryptolabs.no>"
Implementors:
  - "N/A"
Solution-To:
  - "N/A"
Discussions:
  - "https://github.com/Thomas-nada/CAP/issues/1"
Created: "2025-10-01"
License: "CC-BY-4.0"
---

## Abstract

A **Cardano Amendment Proposal (CAP)** is a formal governance design document and the name of the process by which such documents are produced, reviewed, ratified, and recorded. A CAP proposes changes, amendments, clarifications, or additions to Cardano's governance system — specifically its Constitution or governance processes.

This document defines what a CAP is, describes the two paths for submission, explains the category-based deliberation periods, and outlines the role of CAP Editors. CAPs serve as the community input layer that ensures ideas are debated and refined before entering the on-chain governance pipeline.

---

## Motivation

The CAP process addresses two challenges:

1. The need for a transparent, standardised process to propose and formalise changes to Cardano's Constitution.
2. The need to document governance decisions as an authoritative, version-controlled record of Cardano's evolution.

The CAP process does **not itself enact governance changes**. It is the formal community-driven input layer that ensures proposals are debated and refined before they are submitted as on-chain governance actions.

---

## Specification

### Submission Paths

All CAP submissions are made via GitHub Issues. Two paths are available.

#### Path A — CAP Portal (Recommended)

The [CAP Portal](https://thomas-nada.github.io/CAP) provides a guided, step-by-step wizard for creating and submitting proposals. It handles formatting automatically and submits directly to GitHub on your behalf.

1. Open the portal and sign in with GitHub.
2. Select **Amendment Wizard** from the dashboard.
3. Choose your proposal type (CAP or CIS) and category.
4. Optionally highlight the specific constitutional text you are amending.
5. Write your motivation and proposed revisions.
6. Review the generated document and submit.

Submission creates a GitHub Issue with a `draft` label and officially starts your proposal's lifecycle.

#### Path B — GitHub Issue Form

Submit directly through the GitHub Issues interface without using the portal.

1. Navigate to the repository **Issues** tab and click **New Issue**.
2. Select the **CAP – Constitutional Amendment Proposal** or **CIS – Cardano Improvement Suggestion** template.
3. Fill in all required fields and click **Submit**.

On submission, a GitHub Action automatically prepends a structured YAML frontmatter block to the issue body. You do not need to add this yourself.

---

### Document Structure

Every CAP must contain the following sections to be considered complete:

| Section | Description |
| :--- | :--- |
| **Preamble** | YAML frontmatter: CAP number, title, category, status, authors, discussions URL, created date, license. |
| **Abstract** | A short (~200 words) summary of the proposed change. |
| **Motivation** | Why this change is necessary and what problem it solves. |
| **Specification** | The detailed proposal — the exact text, rules, or standards being changed. |
| **Rationale** | Why this specific design was chosen; alternative approaches considered. |
| **Path to Ratification** | The criteria required for this CAP to be ratified. |

---

### Categories and Consultation Periods

The category of a proposal determines its **minimum consultation period** — the time that must pass before a CAP can be moved to the finalising stage.

| Category | Description | Minimum Period |
| :--- | :--- | :---: |
| **Procedural** | Changes to governance processes or voting rules | 60 days |
| **Substantive** | Changes to core constitutional rights or obligations | 60 days |
| **Technical** | Changes to technical parameters or on-chain mechanisms | Variable |
| **Interpretive** | Clarifications or reinterpretations of existing text | 30 days |
| **Editorial** | Corrections, formatting, or non-substantive text changes | 14 days |
| **Other** | Does not clearly fit another category | 30 days |

The consultation period begins the moment a GitHub Issue is submitted. A CAP cannot advance to the finalising or ready stages until this window has passed.

---

### Lifecycle Stages

Every CAP moves through a defined set of stages, tracked by a single lifecycle label on the GitHub Issue. The CAP Portal displays these as a Kanban board. Editors are responsible for advancing proposals through editor-owned stages; authors are responsible for their own stages.

| Stage | Label | Responsible | Meaning |
| :--- | :--- | :--- | :--- |
| **Draft** | `draft` | Author | Initial authoring. The proposal is being written and is not yet submitted for review. |
| **Submitted** | `submitted` | Author → Editor | The author has submitted the proposal. An editor will pick it up for initial review. |
| **Review** | `review` | Editor | The editor is conducting an initial review: checking constitutionality, cross-constitutional impact, transitional provisions, and editorial quality. |
| **Consultation** | `consultation` | Editor | The proposal is open for community deliberation. The consultation period clock is running. |
| **Revision** | `revision` | Author / Editor | The author is revising the proposal based on editor or community feedback. |
| **Finalising** | `finalizing` | Editor | The consultation period has elapsed. The editor is preparing the final version for ratification. |
| **Ready** | `ready` | Editor | The proposal is finalised and ready for on-chain submission by the author. |
| **On-Chain** | `onchain` | Author | The author has submitted the proposal as an on-chain governance action. |
| **Done** | `done` | Editor | The on-chain action has been confirmed. The CAP is ratified and complete. |
| **Withdrawn** | `withdrawn` | Author | The author has withdrawn the proposal from the process. |

In addition to lifecycle labels, editors may apply the following signal and handling labels:

**Editor Signals** (mutually exclusive — at most one at a time):

| Label | Meaning |
| :--- | :--- |
| `editor-ok` | The editor has reviewed and approved the proposal's current state. |
| `editor-concern` | The editor has flagged one or more concerns that must be addressed. |
| `editor-suggested` | The editor has made suggestions for the author to consider. |

**Special Handling** (independent — any combination):

| Label | Meaning |
| :--- | :--- |
| `fast-track` | Expedited review due to urgency or simplicity. |
| `pause` | The proposal is temporarily on hold. |
| `bundle` | This proposal is grouped with one or more related proposals. |
| `minor` | Low-impact change. |
| `major` | Significant-impact change requiring heightened scrutiny. |

---

### Automation

When a CAP or CIS issue is opened on GitHub (via the form or the portal), a GitHub Action automatically:

- Prepends a structured YAML frontmatter block to the issue body.
- Applies the appropriate type label (`CAP` or `CIS`) and initial lifecycle label (`draft`).
- Appends an **Institutional Metadata** footer with the deliberation end date.

When a lifecycle label is applied or changed — either by an editor through the CAP Portal or directly on GitHub — a second workflow automatically moves the issue to the corresponding column on the **CAP Kanban Board** (GitHub Projects). This keeps the GitHub board and the portal's Kanban view in sync at all times.

When a CAP reaches the `done` stage, the workflow commits the finalised proposal as a file to the repository under `CAPs/CAP-XXXX/README.md` and posts a confirmation comment on the issue.

---

### CAP Numbering

CAP numbers are four-digit zero-padded integers assigned sequentially when a proposal is accepted and published to the repository (e.g., `CAP-0002`, `CAP-0003`). Numbers `0001` and `9999` are reserved for meta-process documents.

---

## The Role of CAP Editors

Editors are **facilitators, not decision-makers**. They protect the integrity of the process without encroaching on the author's ownership of a proposal's substance. Editors make suggestions; authors decide whether to accept or reject them.

Core responsibilities include:

- Conducting an **initial review within two weeks** of submission — checking constitutionality, cross-constitutional impact, transitional provisions, and editorial quality.
- **Suggesting edits** for clarity; performing direct edits only when explicitly authorised by the author.
- Advancing proposals through editor-owned lifecycle stages (`review`, `consultation`, `finalizing`, `ready`, `done`) by applying the appropriate lifecycle label — either via the CAP Portal's Editor Controls panel or directly on GitHub.
- Applying editor signal labels (`editor-ok`, `editor-concern`, `editor-suggested`) to communicate assessment status to the author and community.
- **Organising regular public meetings** between editors and authors to discuss ongoing CAPs and CISs.
- Applying process rules **consistently and neutrally** to all submitters.

Authors retain full ownership of their proposals at all times and may withdraw from the CAP process to submit a governance action on-chain directly.

For the full editor role, eligibility criteria, governance, ethics, and the do's and don'ts, see [`CAP-Editors/README.md`](https://github.com/Thomas-nada/CAP/blob/main/CAP-Editors/README.md).

---

## Rationale

This meta-CAP formalises a transparent path for constitutional evolution. The category-based consultation periods — ranging from 14 days for editorial corrections to 60 days for substantive amendments — reflect the proportionate risk of each change type. Two submission paths (portal wizard and GitHub issue form) keep the process accessible while ensuring all proposals flow through a consistent, automatable channel. The ten-stage lifecycle provides clear accountability at each step, with defined ownership split between authors and editors.

---

## Path to Ratification

### Acceptance Criteria
- [x] Reviewed by the governance community.
- [x] Adopted as the standard governance amendment process.

### Implementation Plan
- [x] Establish the CAP repository and GitHub Issue templates.
- [x] Build and deploy the CAP Portal with the Amendment Wizard and Kanban board.
- [x] Implement GitHub Actions for automatic frontmatter, lifecycle syncing, and publication.
- [x] Appoint initial CAP Editors.

---

## References

- [CIP-0001](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0001) — Cardano Improvement Proposal process (inspiration)

---

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

---

**Authors:** Thomas Lindseth <thomas@kryptolabs.no>
**Created:** 2025-10-01
**CAP:** 0001 (meta-process document)
