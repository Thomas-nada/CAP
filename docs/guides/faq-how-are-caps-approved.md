# How are CAPs approved?

There are two distinct stages: acceptance through the CAP process (off-chain), and ratification via a governance action (on-chain). A proposal must pass both to become a constitutional amendment.

---

## Stage 1: Acceptance (Off-chain, via the CAP process)

A CAP is accepted when:

1. The minimum deliberation period has elapsed
2. A CAP Editor has reviewed the proposal and is satisfied it is complete, constitutional, and well-formed
3. The Editor applies the **Accepted** label

This is a qualitative editorial judgment — not a vote. Editors assess whether the proposal is ready and appropriate, not whether they agree with the substance of the change. The community signals its views through deliberation comments and reactions; the Editor reads this sentiment as part of the review.

Acceptance triggers an automated workflow that commits the CAP as a file to the repository, creating a permanent record.

---

## Stage 2: Ratification (On-chain, via governance action)

Acceptance alone does not change the Constitution. To make the amendment official, someone must submit a **governance action** on-chain.

The on-chain vote requires support from at least **65% of the active voting stake** (or a different threshold if the Guardrails Appendix specifies one for a particular provision).

The three governance bodies — **DReps, SPOs, and the Constitutional Committee (CC)** — each play a role depending on the action type. For a Constitution amendment action:

- **DReps** vote with weight proportional to delegated stake
- **SPOs** vote on certain action types (Hard Fork, No Confidence, etc.)
- **The CC** votes on constitutionality — whether the proposal is consistent with the existing Constitution

The CC does not assess whether a change is desirable. It assesses only whether it is constitutional. If the CC is in a state of no confidence, governance actions cannot proceed until the CC is reinstated.

---

## Is the CAP process required?

No. Any ada owner may submit a governance action on-chain directly without going through the CAP process. The CAP process is not a gatekeeping mechanism — it is a community-endorsed preparation layer that helps ensure proposals are well-reasoned and supported before reaching the chain.

---

## What threshold is required?

The Constitution requires **65% of the active voting stake** to ratify a constitutional amendment, unless the Guardrails Appendix specifies a different threshold for a specific provision. This is a deliberately high bar to ensure amendments reflect broad consensus rather than a narrow majority.
