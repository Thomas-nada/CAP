# Labels and Workflow

Every CAP and CIS issue on GitHub carries a set of labels that indicate its type, category, and current status in the governance process. This guide explains what each label means and how a proposal moves through the workflow.

---

## Type Labels

These labels identify what kind of proposal an issue is.

| Label | Meaning |
| :--- | :--- |
| **CAP** | Constitutional Amendment Proposal — proposes a change to the Constitution |
| **CIS** | Constitutional Issue Statement — formally defines a constitutional problem |

---

## Status Labels

These labels track where a proposal is in the governance lifecycle.

| Label | Meaning |
| :--- | :--- |
| **Draft** | Submitted and open for community discussion. The deliberation period is in progress. |
| **Proposed** | The deliberation period has ended. The proposal is under formal editorial review. |
| **Active** | The proposal has been ratified — either via on-chain governance action or editorial consensus for process documents. |
| **Inactive** | The proposal has been withdrawn, rejected, or superseded by another CAP or CIS. |

---

## Category Labels

The category label determines the mandatory minimum deliberation period. It is applied automatically by the bot when an issue is opened, based on the category selected in the submission form.

| Label | Deliberation Period | Typical Use |
| :--- | :---: | :--- |
| **Procedural** | 60 days | Changes to governance processes or voting rules |
| **Substantive** | 60 days | Changes to core constitutional rights or obligations |
| **Technical** | Variable | Changes to technical parameters or on-chain mechanisms |
| **Interpretive** | 30 days | Clarifications or reinterpretations of existing text |
| **Other** | 30 days | Does not clearly fit another category |
| **Editorial** | 14 days | Corrections, formatting, or non-substantive text changes |

---

## Process Labels

These labels are applied by CAP Editors to trigger automated workflows.

| Label | Effect |
| :--- | :--- |
| **Accepted** | Applied by an Editor once the deliberation period has ended and the proposal is ready for publication. Triggers the automation that commits the proposal as a file to the repository under `CAPs/CAP-XXXX/README.md` and posts a confirmation comment on the issue. |

---

## The Workflow at a Glance

```
Issue submitted
      │
      ▼
[Draft] ── deliberation period runs ──────────────────────────────────┐
      │                                                                │
      │  Community discussion happens in issue comments               │
      │                                                                │
      ▼                                                            (if withdrawn)
[Proposed] ── Editor reviews ─────────────────────────────► [Inactive]
      │
      │  Editor applies [Accepted] label
      │
      ▼
Automation commits proposal to repository
      │
      ▼
[Active]
```

---

## Who Applies Labels?

- **Bot (GitHub Action):** Applies the type label, category label, and calculates the deliberation end date automatically on submission.
- **CAP Editors:** Apply the **Proposed**, **Accepted**, **Active**, and **Inactive** status labels manually after human review.
- **Authors:** Cannot apply or remove labels — label management is reserved for Editors to maintain process integrity.

---

## Checking a Proposal's Status

The label(s) on any issue are visible at the top of the issue page. You can also filter all issues by label using the **Labels** dropdown in the [Issues tab](https://github.com/Thomas-nada/CAP/issues).

For example, to see all proposals currently in deliberation: filter by **Draft**.
To see all ratified proposals: filter by **Active**.
