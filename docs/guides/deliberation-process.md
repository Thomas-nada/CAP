# The Deliberation Process

Every CAP and CIS goes through a mandatory deliberation period after submission. This is the window during which the community discusses, critiques, and refines the proposal before it can be ratified.

---

## When Does It Start?

The deliberation period begins the moment a GitHub Issue is submitted — whether through the CAP Portal or directly via the GitHub issue form.

There is no separate step to "open" a proposal for discussion. Submission and the start of deliberation are the same event.

---

## How Long Does It Last?

The minimum deliberation period depends on the proposal's category:

| Category | Minimum Period |
| :--- | :---: |
| Procedural | 60 days |
| Substantive | 60 days |
| Technical | Variable |
| Interpretive | 30 days |
| Other | 30 days |
| Editorial | 14 days |

These are **minimums**. A proposal may remain in deliberation longer if community discussion is ongoing or if the author is incorporating feedback.

The deliberation end date is calculated automatically by the bot when the issue is opened and recorded in the Institutional Metadata footer of the issue body.

---

## What Happens During Deliberation?

The issue comment thread is the official deliberation space. During this period:

- **Community members** read the proposal and post questions, concerns, support, or suggested changes
- **The author** responds to feedback, clarifies intent, and updates the proposal if warranted
- **CAP Editors** conduct an initial review within two weeks of submission, checking constitutionality, cross-constitutional impact, transitional provisions, and editorial quality

There is no vote during deliberation. The goal is to produce a well-reasoned, community-reviewed proposal — not to reach a binary yes/no outcome at this stage.

---

## Editor Initial Review

Within two weeks of submission, a CAP Editor will conduct an initial review. They may:

- Ask clarifying questions in the issue comments
- Suggest edits for clarity or structure (the author decides whether to accept them)
- Flag constitutionality concerns or cross-constitutional impacts that need addressing

Editors do not approve or reject proposals during the initial review. They facilitate and improve. The author retains full ownership of the proposal's substance.

---

## What Happens When Deliberation Ends?

Once the minimum deliberation period has elapsed:

1. A CAP Editor reviews the proposal for completeness and readiness
2. If it is ready, the Editor applies the **Proposed** label, indicating the proposal is under formal editorial review
3. When the Editor is satisfied, they apply the **Accepted** label
4. This triggers the automated workflow that commits the proposal as a file to the repository under `CAPs/CAP-XXXX/README.md` and posts a confirmation comment on the issue

A proposal is not automatically advanced when the deliberation period expires. An Editor must actively assess it and apply the label.

---

## Can a Proposal Be Changed During Deliberation?

Yes. Authors can edit the issue body at any time to incorporate feedback or correct errors. Significant changes should be noted in a comment so the community is aware of what changed and why.

---

## What If the Author Withdraws?

Authors retain full ownership of their proposals at all times. An author may:

- **Update** the proposal in response to feedback
- **Withdraw** the proposal by closing the issue (it will be labelled **Inactive**)
- **Bypass the CAP process entirely** and submit a governance action on-chain directly — the CAP process is not a gatekeeping mechanism

If a proposal is withdrawn or becomes inactive, it remains in the repository as a closed issue for the historical record.
