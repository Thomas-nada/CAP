---
CAP: 4
Title: Clarification of Governance Voting Thresholds
Category: Constitution
Status: Draft
Authors:
  - Jane Doe <jane@governance.io>
  - John Smith <john@cardano.org>
Implementors: TBD
Discussions:
  - https://github.com/Thomas-nada/CAP/discussions/42
Created: 2025-10-02
License: CC-BY-4.0
---

## Abstract

This amendment proposes to clarify and codify the voting thresholds required for various classes of governance actions defined in the Cardano Constitution. It introduces explicit definitions for what constitutes a simple majority, qualified majority, and supermajority, and associates each with the specific governance actions that require them.

## Motivation: Why is this CAP necessary?

Current constitutional language is ambiguous regarding the level of consensus required for different governance actions. As a result, stakeholders may interpret “majority” differently, leading to governance disputes and inconsistent decision-making.

By explicitly defining voting thresholds and linking them to each type of governance action, this amendment improves clarity, predictability, and accountability in governance processes.

## Specification

### Voting Threshold Classes

| Threshold Type      | Definition                             | Example Use Cases |
|---------------------|----------------------------------------|-------------------|
| Simple Majority     | > 50% of participating stake          | Parameter updates, regular governance actions |
| Qualified Majority  | ≥ 2/3 of participating stake          | Constitutional amendments, treasury allocations |
| Supermajority       | ≥ 3/4 of participating stake          | Emergency governance overrides, core constitutional revisions |

### Amendment Text

The following clause shall be added to **Section IV – Governance Process** of the Cardano Constitution:

> **4.3 Voting Threshold Definitions:**  
> All governance actions shall explicitly state the required threshold for approval, as defined below:
> - **Simple Majority:** Approval by more than half of the stake participating in the vote.
> - **Qualified Majority:** Approval by at least two-thirds (2/3) of the stake participating in the vote.
> - **Supermajority:** Approval by at least three-quarters (3/4) of the stake participating in the vote.

> **4.4 Assignment of Thresholds:**  
> Each governance action shall have a designated threshold class:
> - Parameter changes: Simple Majority  
> - Treasury disbursements: Qualified Majority  
> - Constitutional amendments: Qualified Majority  
> - Emergency overrides and constitutional suspension: Supermajority  

## Rationale: How does this CAP achieve its goals?

By codifying the definitions and use cases of voting thresholds, this amendment removes interpretive ambiguity from the Constitution. It also reduces governance risk by ensuring that more consequential changes require broader consensus.

## Backwards Compatibility

This amendment is backwards compatible. It clarifies existing practices without altering current governance mechanisms, though some existing proposals may need to be restated to specify their threshold class.

## Path to Active

### Acceptance Criteria

- [ ] Review and consensus from governance actors and constitutional committee.
- [ ] At least one governance action proposal updated to explicitly specify its threshold.

### Implementation Plan

- [ ] Update governance documentation to reference the new threshold definitions.
- [ ] Incorporate threshold specification into proposal templates and tooling.

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
