---
CAP: 0002
Title: Amendment to Clarify the Constitutional Committee Accountability Mechanism
Category: Governance
Status: Draft
Authors:
  - Ada Lovelace <@adalovelace>
  - Charles Byron <@cbyron>
Implementors: []
Linked GPS:
  - GPS-0003
Discussions:
  - https://github.com/Thomas-nada/CAP/discussions/12
  - https://forum.cardano.org/t/discussion-cap-0002-committee-accountability/101234
Created: 2025-09-30
License: CC-BY-4.0
---

## Abstract

This CAP proposes an amendment to the Cardano Constitution that clarifies and strengthens the accountability mechanisms governing the **Constitutional Committee (CC)**.  
The current Constitution outlines the CC’s composition, powers, and responsibilities, but lacks sufficient detail regarding oversight, transparency, and recourse in the event of misconduct or non-performance.  
This amendment introduces explicit procedures for reporting, review, and potential removal of committee members, ensuring that the CC remains a trustworthy and accountable institution within Cardano’s governance framework.

## Motivation: Why is this CAP necessary?

The Constitutional Committee plays a pivotal role in Cardano’s governance, including certifying governance actions, safeguarding constitutional compliance, and acting as a check on delegated authority. However, the Constitution currently offers only minimal guidance on **how the Committee is held accountable** to the community and stakeholders.  

This absence creates ambiguity around:
- What constitutes misconduct or dereliction of duty.
- Who has the authority to initiate a review or removal.
- How transparency of committee deliberations should be balanced with security and privacy.

Strengthening these provisions aligns with governance goals of **transparency, legitimacy, and community trust**. It also ensures that the CC’s authority is derived from — and accountable to — the Cardano community it serves.

## Proposed Amendment (Specification)

This amendment proposes adding a new **Section 4.5: Constitutional Committee Accountability and Oversight** to the Cardano Constitution.  

> **New Section 4.5 — Accountability and Oversight of the Constitutional Committee**
>
> 1. **Annual Performance Report**  
>    The Constitutional Committee SHALL publish an annual report summarizing its activities, decisions, and justifications for those decisions. The report MUST include attendance records, governance actions reviewed, and any dissenting opinions expressed by members.
>
> 2. **Community Oversight Mechanism**  
>    Any governance participant (including DReps, SPOs, or ADA holders) MAY submit a formal petition requesting review of a committee member’s conduct. A petition requires signatures representing at least 1% of active voting stake.
>
> 3. **Review Panel Formation**  
>    Upon a valid petition, a temporary **Review Panel** composed of 5 randomly selected DReps SHALL be formed to investigate and issue a recommendation within 60 days.
>
> 4. **Sanctions and Removal**  
>    If the Review Panel finds evidence of gross misconduct, negligence, or repeated failure to fulfill constitutional duties, it MAY recommend removal.  
>    Removal requires a governance action ratified by a majority vote of all participating DReps and approval by the remaining Constitutional Committee members (excluding the subject).
>
> 5. **Transparency and Records**  
>    All petitions, reviews, and outcomes SHALL be published on-chain or in an auditable public registry, ensuring transparency and historical accountability.

This section SHALL be added as **Article IV, Section 4.5** in the Constitution and SHALL be binding upon ratification.

## Rationale: How does this CAP achieve its goals?

The proposed accountability mechanism strengthens governance legitimacy by ensuring the Constitutional Committee is not only powerful but also answerable to the community. It:
- Introduces measurable transparency requirements through annual reporting.
- Empowers the community to initiate oversight through a petition-based process.
- Creates a structured, fair, and transparent procedure for reviewing misconduct.
- Balances checks and balances by involving both community-elected representatives and existing CC members in removal decisions.
- Establishes a permanent public record of oversight actions, increasing institutional memory and trust.

Alternative designs considered included allowing direct removal through on-chain voting without a review panel. However, this was deemed too susceptible to governance capture and lacked procedural safeguards.

This amendment also builds upon feedback gathered from GPS-0003 (“Ambiguities in Committee Accountability”) and extensive discussions in governance forums and workshops.

## Path to Ratification

### Acceptance Criteria

This amendment will be considered *Ratified* once:
- It has been approved through on-chain governance by a majority of DReps with a quorum of at least 5% of total stake.
- It has received formal acknowledgment from the existing Constitutional Committee.
- The Cardano Foundation has updated constitutional documentation to include Section 4.5.

### Implementation Plan

- [ ] Publish the proposed constitutional text for public comment.
- [ ] Integrate approved text into `constitution/constitution-v1.txt` and increment the version number.
- [ ] Implement on-chain mechanisms for petition submission and Review Panel selection (if required by governance tooling).
- [ ] Establish a registry for publication of petitions and outcomes.

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
