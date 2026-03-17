# Cardano Amendment Proposals (CAP) Repository

This repository is the authoritative record of Cardano's off-chain governance process. It stores two complementary document types — **CAPs** and **CISs** — as versioned Markdown files, forming a transparent and community-driven history of Cardano's constitutional evolution.

---

## What is a CAP?

A [Cardano Amendment Proposal (CAP)](./CAPs/CAP-0001/README.md) is a formal governance document proposing changes, additions, or clarifications to Cardano's Constitution or governance processes.

- **Amendment Focus:** Each CAP proposes a specific constitutional change or governance standard.
- **Structure:** Includes motivation, specification, rationale, and a path to ratification.
- **Review Process:** Undergoes open community discussion, editorial review, and a category-based deliberation period before it can be ratified or submitted as an on-chain governance action.

> **Note:** CAPs do not themselves enact constitutional changes. They are the community input layer — proposals are debated and refined here before entering the on-chain governance pipeline.

---

## What is a CIS?

A [Constitution Issue Statement (CIS)](./CAPs/CAP-9999/README.md) is a formal document that defines a constitutional problem — an ambiguity, procedural gap, or governance risk — without proposing a specific solution.

- **Problem-first:** CISs define the problem; CAPs propose the fix.
- **Complementary:** A single CIS may inspire multiple CAPs, and a CAP may resolve multiple CISs.

---

## How to Participate

All submissions are made via GitHub Issues. Two paths are available.

### Path A — CAP Portal (Recommended)

The [CAP Portal](https://thomas-nada.github.io/CAP) provides a guided wizard for drafting and submitting proposals. It formats your document automatically and submits directly to GitHub on your behalf.

1. Go to the portal and sign in with GitHub.
2. Select **Amendment Wizard** from the dashboard.
3. Choose your proposal type (CAP or CIS) and category.
4. Optionally select the exact constitutional text you are amending.
5. Write your motivation and proposed revisions, review, and submit.

Submission creates a GitHub Issue and officially starts your **deliberation period**.

### Path B — GitHub Issue Form

Submit directly via the GitHub Issues tab without using the portal.

1. Navigate to the **Issues** tab and click **New Issue**.
2. Select the **Amendment Proposal (CAP)** or **Constitution Issue Statement (CIS)** template.
3. Fill in all required fields and submit.

A bot automatically prepends structured YAML frontmatter to your issue body on submission.

---

## Deliberation Periods

The category of a proposal determines its mandatory minimum deliberation period — the time that must pass before a CAP can be ratified or moved to Active.

| Category | Minimum Period |
| :--- | :---: |
| Procedural | 60 days |
| Substantive | 60 days |
| Technical | 60 days |
| Interpretive | 30 days |
| Other | 30 days |
| Editorial | 14 days |

The deliberation period begins the moment a GitHub Issue is submitted.

---

## Proposal Statuses

| Status | Meaning |
| :--- | :--- |
| **Draft** | Submitted and under community discussion. Deliberation period in progress. |
| **Proposed** | Deliberation period complete. Under formal editorial review. |
| **Active** | Ratified via on-chain governance action or editorial consensus. |
| **Inactive** | Withdrawn, rejected, or superseded. |

---

## Editors

CAP Editors are facilitators who protect the integrity of the process without encroaching on an author's ownership of their proposal. See [`CAP-Editors/README.md`](./CAP-Editors/README.md) for the full editor role, eligibility criteria, governance, and ethics.

| Name | GitHub |
| :--- | :--- |
| Thomas Lindseth | [@Thomas-nada](https://github.com/Thomas-nada) |
| Larisa Mcfarlane | [@LallyMack](https://github.com/LallyMack) |

---

## Repository Structure

```
CAPs/                 Cardano Amendment Proposals (one folder per CAP)
CISs/                 Constitution Issue Statements (one folder per CIS)
constitution/         The active Cardano Constitution and CAP preview versions
CAP-Editors/          Editor role, guidelines, and meeting records (CAPSLOCK)
.github/              Issue templates, forms, and automation workflows
```

---

## License

All documents in this repository are licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
