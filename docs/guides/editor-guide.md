# Complete Editor Guide

> This guide is for CAP Editors — community members with the authority to manage the lifecycle of Constitutional Amendment Proposals (CAPs) and Constitutional Issue Statements (CIS) through the CAP Portal.

---

## Your Role as Editor

Editors are the stewards of the amendment process. You do not decide *whether* a proposal has merit — that is for the community and ultimately the governance mechanisms of Cardano to determine. Your job is to ensure proposals are **well-formed, fairly processed, and accurately moved through the lifecycle** in accordance with the process.

Editors have access to a special control panel inside every proposal that is not visible to other users. All editor actions are permanently recorded in the proposal's audit trail.

---

## The Lifecycle

Every proposal moves through four lifecycle stages. You are responsible for managing these transitions.

| Stage | Meaning |
|---|---|
| **Consultation** | The proposal is open for community deliberation. This is where most of the work happens. |
| **Ready** | Deliberation is complete. The proposal is ready for on-chain submission. |
| **Done** | The process is complete. The proposal has been submitted on-chain or otherwise concluded. |
| **Withdrawn** | The author has withdrawn the proposal. |

Transitions always move **forward** — `Consultation → Ready → Done`. There are no backwards moves. You will find the editor controls in the right-hand sidebar of every proposal page.

---

## The Author Signal

Before you can advance a proposal from one stage to the next, **the author must first signal their readiness**.

The author does this by clicking the "Signal Ready" button in their Author Controls panel. This sets an `author-ready` label on the proposal, which you will see as a green indicator in your Editor Controls panel.

**You cannot move a proposal forward without this signal.** If you try, the portal will block the action and show a warning. When you successfully advance a stage, the signal is automatically cleared — the author must signal again for each step.

> This ensures no proposal is moved forward without the author's knowledge and agreement.

---

## Status Tags

Status tags give additional context about a proposal's current situation. They are toggled — clicking an active tag removes it. Multiple tags can be active at once.

| Tag | Available in | Meaning |
|---|---|---|
| `review` | Any stage | The proposal is currently under active editorial review |
| `revision` | Consultation only | The author is revising the proposal based on feedback |
| `finalizing` | Consultation only | The editor is preparing the final version |
| `onchain` | Ready only | The proposal has been submitted to the blockchain |

Apply `review` when you pick up a proposal so the community knows it is being actively assessed. Remove it when you are done or hand off.

---

## Editor Signals

Editor signals communicate your assessment of a proposal's quality. Only one can be active at a time — selecting a new one automatically removes the previous.

| Signal | Meaning |
|---|---|
| `editor-ok` | The proposal meets the required standards |
| `editor-concern` | Issues need to be addressed before the proposal can advance |
| `editor-suggested` | Non-blocking suggestions have been left for the author |

These signals are visible to the author in their panel. Always accompany a signal with a comment explaining your reasoning.

---

## Special Handling Labels

| Label | Meaning |
|---|---|
| `major` | Significant changes with broad impact — requires extra scrutiny |
| `minor` | Small, contained change — lower scrutiny threshold |
| `bundle` | Processed together with related proposals |
| `fast-track` | Expedited due to urgency |
| `pause` | Processing temporarily suspended — always leave a comment explaining why |

---

## Step-by-Step: Processing a Proposal

### When a new proposal enters Consultation

1. Open the proposal in the CAP Portal
2. Read the full proposal carefully, including the Constitutional Issue Statement
3. Apply `review` to signal you are actively working on it
4. Leave a comment on GitHub with your initial assessment
5. Apply the appropriate editor signal (`editor-ok`, `editor-concern`, or `editor-suggested`)
6. Remove `review` once your assessment is complete

### When the author has addressed concerns

1. Re-read the revised proposal
2. Update your editor signal if appropriate
3. If satisfied, leave a comment confirming the proposal is ready to advance

### When ready to move to Ready

1. Confirm the green **"Author has signalled ready to advance"** indicator is visible in your Editor Controls
2. If it is not visible, ask the author to signal readiness via their Author Controls panel
3. Click **"Move to Ready"** — the `author-ready` signal is automatically cleared
4. Apply `onchain` once the proposal is submitted to the blockchain

### When ready to move to Done

1. Confirm the author has again signalled readiness (required for each stage advance)
2. Click **"Move to Done"**

---

## Key Principles

- **Comment everything.** Every editor action — signals, stage moves, special handling — should be accompanied by a comment. The audit trail records *what* happened; your comments record *why*.
- **You are a process guardian, not a gatekeeper.** Ensure the process is followed correctly — do not judge the political merit of a proposal.
- **Be responsive.** Authors are waiting on you. Follow up promptly when they address your concerns.
- **Coordinate with other editors.** If another editor has `review` active, coordinate before acting to avoid conflicting signals.
- **Recuse when conflicted.** If you are an author or co-author of a proposal, or have any conflict of interest, recuse yourself from all editorial actions on that proposal.

---

## Quick Reference

```
Lifecycle:    Consultation → Ready → Done
                        ↘ Withdrawn (any time, by author)

Forward move requires:  author-ready signal active

Status tags:
  review      — active editorial review (any stage)
  revision    — author revising (Consultation only)
  finalizing  — editor finalizing (Consultation only)
  onchain     — submitted on-chain (Ready only)

Editor signals (pick one):
  editor-ok        — meets standards
  editor-concern   — issues to resolve
  editor-suggested — non-blocking suggestions

Special handling:
  major / minor / bundle / fast-track / pause
```
