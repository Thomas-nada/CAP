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

1. The need for a transparent, standardized process to propose and formalize changes to Cardano's Constitution.
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

Submission creates a GitHub Issue and officially starts your **consultation period**.

#### Path B — GitHub Issue Form

Submit directly through the GitHub Issues interface without using the portal.

1. Navigate to the repository **Issues** tab and click **New Issue**.
2. Select the **Amendment Proposal (CAP)** template.
3. Fill in all required fields and click **Submit**.

On submission, a bot automatically prepends a structured YAML header (frontmatter) to your issue body. You do not need to add this yourself.

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
| **Path to Ratification** | The criteria required for this CAP to become Active. |

---

### Categories and Consultation Periods

The category of a proposal determines its **minimum consultation period** — the time that must pass before a CAP can be ratified or moved to Active.

| Category | Description | Minimum Period |
| :--- | :--- | :---: |
| **Procedural** | Changes to governance processes or voting rules | 60 days |
| **Substantive** | Changes to core constitutional rights or obligations | 60 days |
| **Technical** | Changes to technical parameters or on-chain mechanisms | Variable |
| **Interpretive** | Clarifications or reinterpretations of existing text | 30 days |
| **Editorial** | Corrections, formatting, or non-substantive text changes | 14 days |
| **Other** | Does not clearly fit another category | 30 days |

The consultation period begins the moment a GitHub Issue is submitted. A CAP cannot be ratified or submitted as an on-chain governance action until this window has passed.

---

### Statuses

| Status | Meaning |
| :--- | :--- |
| **Draft** | Submitted and under community discussion. Consultation period in progress. |
| **Proposed** | Consultation period complete. Under formal editorial review. |
| **Active** | Ratified via on-chain governance action or editorial consensus. |
| **Inactive** | Withdrawn, rejected, or superseded by another CAP. |

---

### Automation

When a CAP or CIS issue is opened on GitHub (via the form or the portal), a GitHub Action automatically:

- Prepends a structured YAML frontmatter block to the issue body.
- Adds a category label and calculates the consultation expiry date.
- Appends an **Institutional Metadata** footer with the deliberation end date.

When a CAP issue is labelled **Accepted** by an Editor, a second workflow automatically commits the proposal as a file to the repository under `CAPs/CAP-XXXX/README.md` and posts a confirmation comment on the issue.

---

### CAP Numbering

CAP numbers are four-digit zero-padded integers assigned sequentially by the automation when a proposal is accepted and published to the repository (e.g., `CAP-0002`, `CAP-0003`). Numbers `0001` and `9999` are reserved for meta-process documents.

---

## The Role of CAP Editors

Editors are **facilitators, not decision-makers**. They protect the integrity of the process without encroaching on the author's ownership of a proposal's substance. Editors make suggestions; authors decide whether to accept or reject them.

Core responsibilities include:

- Conducting an **initial review within two weeks** of submission — checking constitutionality, cross-constitutional impact, transitional provisions, and editorial errors.
- **Suggesting edits** for clarity; performing direct edits only when explicitly authorised by the author.
- Applying the **Accepted** label once the consultation period has elapsed and the proposal is ready, triggering the automated publication workflow.
- **Organising regular public meetings** between editors and authors to discuss ongoing CAPs and CISs.
- Applying process rules **consistently and neutrally** to all submitters.

Authors retain full ownership of their proposals at all times and may withdraw from the CAP process to submit a governance action on-chain directly.

For the full editor role, eligibility criteria, governance, ethics, and the do's and don'ts, see [`CAP-Editors/README.md`](../../CAP-Editors/README.md).

---

## Rationale

This meta-CAP formalises a transparent path for constitutional evolution. The category-based consultation periods — ranging from 14 days for editorial corrections to 60 days for substantive amendments — reflect the proportionate risk of each change type. Two submission paths (portal wizard and GitHub issue form) keep the process accessible while ensuring all proposals flow through a consistent, automatable channel.

---

## Path to Ratification

### Acceptance Criteria
- [x] Reviewed by the governance community.
- [x] Adopted as the standard governance amendment process.

### Implementation Plan
- [x] Establish the CAP repository and GitHub Issue templates.
- [x] Build and deploy the CAP Portal with the Amendment Wizard.
- [x] Implement GitHub Actions for automatic frontmatter and publication.
- [x] Appoint initial CAP Editors.

---

## References

- [CIS-0001](../../CISs/CIS-0001/README.md) — Low Participation and Representation in On-Chain Governance
- [CAP-9999](../CAP-9999/README.md) — Constitution Issue Statement (CIS) Process
- [CIP-0001](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0001) — Cardano Improvement Proposal process (inspiration)

---

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
