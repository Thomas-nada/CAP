---
CAP: "0001"
Title: "CAP Process"
Category: "Meta"
Status: "Active"
Authors:
  - "Thomas Lindseth <thomas@kryptolabs.no>"
Implementors:
  - "CAP Editors"
Solution-To:
  - "N/A"
Discussions:
  - "https://github.com/Thomas-nada/CAP/issues"
Created: "2025-10-01"
Updated: "2026-02-27"
License: "CC-BY-4.0"
---

## Abstract

A Cardano Amendment Proposal (CAP) is the standard document and workflow for proposing amendments to Cardano governance artifacts, especially constitutional text and related governance rules. This CAP defines the current submission and review process as implemented today: CAPs are opened as GitHub Issues, labeled and discussed in public, and optionally prepared through a dedicated submission tool that publishes the same issue format. The process is designed to maximize transparency, traceability, and broad review before any ratification step.

---

## Motivation

Cardano governance needs a shared, predictable method to:

1. Capture amendment ideas in a consistent structure.
2. Run open deliberation with clear timestamps and status.
3. Preserve an auditable record of discussion and revisions.
4. Route mature proposals toward ratification without bypassing public review.

---

## Specification

### What Counts as a CAP

A CAP is a public proposal that describes:

- The change being proposed.
- Why the change is needed.
- The expected effects and evaluation criteria.
- The exact text revisions (for constitutional amendments).

### CAP Categories

CAPs are categorized as:

- Procedural
- Substantive
- Technical
- Interpretive
- Editorial
- Other

### Recommended Consultation Windows (Current Practice)

Current recommended consultation windows are:

- Procedural: 60 days
- Substantive: 60 days
- Technical: variable (commonly treated as 60 days unless otherwise specified)
- Interpretive: 30 days
- Editorial: 14 days
- Other: 30 days

### Status Model (Current Practice)

Current workflow states are:

- Draft: CAP opened and in deliberation.
- Active: CAP accepted/ratified through the relevant governance path.
- Inactive: CAP withdrawn, rejected, expired, or superseded.

In the current tooling, newly submitted CAP Issues are labeled `CAP` and `Draft` plus their selected category label.

---

## Submission Paths

CAP submitters can use either path below. Both end in a GitHub Issue as the canonical discussion thread.

### Path A: Submit Directly with GitHub Issues

1. Open the CAP repository Issues page.
2. Create a new issue for your CAP.
3. Include required sections (summary, motivation, analysis/test, and proposed revisions where applicable).
4. Add labels: `CAP`, `Draft`, and the relevant category.
5. Publish the issue to begin deliberation.

### Path B: Submit with the CAP Tool

1. Open the submission tool: `https://example-cap-tool.io/submit` (placeholder URL).
2. Complete the guided CAP form (type, category, summary, revisions, rationale, links/files).
3. Submit through the tool.
4. The tool creates a GitHub Issue in standard CAP format with the correct labels.
5. If constitutional text revisions are included, the tool may also generate a CAP preview constitution artifact for comparison workflows.

---

## Required CAP Content

Each CAP should provide:

- Title and category.
- Summary/abstract.
- Motivation (why the change is needed).
- Analysis & test criteria (expected outcomes and how to evaluate them).
- Proposed revisions (original text + proposed replacement) when applicable.
- References/exhibits as needed.
- License statement (`CC-BY-4.0`).

---

## Role of CAP Editors

CAP Editors steward process quality and continuity by:

- Checking structure and completeness.
- Maintaining numbering and metadata consistency.
- Applying/normalizing labels and workflow states.
- Guiding deliberation hygiene and archival discipline.

Editors do not decide constitutional truth by themselves; they ensure process integrity.

---

## Rationale

Keeping both submission paths active supports two contributor profiles:

- Direct GitHub contributors who prefer manual issue authoring.
- Contributors who prefer a guided interface that outputs the same canonical issue format.

This dual path increases accessibility without fragmenting records, because both routes converge to GitHub Issues for review and history.

---

## Path to Ratification

### Acceptance Criteria

- [x] A single public, issue-based canonical record is used for CAP deliberation.
- [x] Both direct and tool-assisted submissions are recognized.
- [x] Category-driven consultation expectations are documented.
- [x] CAP lifecycle states are documented for operational consistency.

### Implementation Notes

- GitHub Issues remain the source of truth for discussions and updates.
- The submission tool is an interface layer, not a separate governance ledger.

---

## References

- CIP-0001 process model (reference pattern)
- CAP repository issues workflow

---

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
