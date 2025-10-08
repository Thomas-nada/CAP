---
CAP: "0003"
Title: "Amendment to Clarify the Constitutional Committee Accountability Mechanism"
Category: "Governance"
Status: "Proposed"
Authors:
  - "Ada Lovelace <@adalovelace>"
  - "Charles Byron <@cbyron>"
Implementors:
  - "N/A"
Solution-To:
  - "GPS-0003"
Discussions:
  - "https://github.com/Thomas-nada/CAP/discussions/12"
  - "https://forum.cardano.org/t/discussion-cap-0002-committee-accountability/101234"
Created: "2025-09-30"
License: "CC-BY-4.0"
---

## Abstract

This Cardano Amendment Proposal (CAP) proposes an amendment to the Cardano Constitution to **clarify and strengthen the accountability mechanisms** governing the **Constitutional Committee (CC)**.

While the Constitution outlines the CC’s composition, powers, and responsibilities, it lacks sufficient detail regarding oversight, transparency, and recourse in the event of misconduct or non-performance.  

This amendment introduces explicit procedures for reporting, community-initiated review, and the potential removal of committee members, ensuring that the CC remains a **trustworthy, transparent, and accountable institution** within Cardano’s governance framework.

---

## Motivation: Why is this CAP necessary?

The Constitutional Committee plays a pivotal role in Cardano’s governance — including certifying governance actions, safeguarding constitutional compliance, and acting as a check on delegated authority. However, the Constitution currently offers only minimal guidance on **how the Committee is held accountable** to the community.

This absence creates ambiguity around:

- What constitutes misconduct or dereliction of duty.  
- Who has the authority to initiate a review or removal.  
- How transparency of committee deliberations should be balanced with security and privacy.

Strengthening these provisions aligns with Cardano’s governance goals of **transparency, legitimacy, and community trust**, and ensures that the CC’s authority remains derived from and accountable to the community it serves.

---

## Specification

This amendment proposes adding a new **Section 4.5: Constitutional Committee Accountability and Oversight** to the Cardano Constitution:

> ### New Section 4.5 — Accountability and Oversight of the Constitutional Committee
>
> 1. **Annual Performance Report**  
>    The Constitutional Committee SHALL publish an annual report summarizing its activities, decisions, and justifications. The report MUST include attendance records, governance actions reviewed, and any dissenting opinions expressed by members.
>
> 2. **Community Oversight Mechanism**  
>    Any governance participant (including DReps, SPOs, or ADA holders) MAY submit a formal petition requesting review of a committee member’s conduct. A petition requires signatures representing at least **1% of active voting stake**.
>
> 3. **Review Panel Formation**  
>    Upon a valid petition, a temporary **Review Panel** composed of **five randomly selected DReps** SHALL be formed to investigate and issue a recommendation within **60 days**.
>
> 4. **Sanctions and Removal**  
>    If the Review Panel finds evidence of gross misconduct, negligence, or repeated failure to fulfill constitutional duties, it MAY recommend removal.  
>    Removal requires a **governance action ratified by a majority vote of all participating DReps** and **approval by the remaining Constitutional Committee members** (excluding the subject).
>
> 5. **Transparency and Records**  
>    All petitions, reviews, and outcomes SHALL be published **on-chain or in an auditable public registry**, ensuring transparency and historical accountability.

This new section SHALL be added as **Article IV, Section 4.5** of the Constitution and SHALL be binding upon ratification.

---

## Rationale: How does this CAP achieve its goals?

The proposed accountability mechanism strengthens governance legitimacy by ensuring that the Constitutional Committee is not only powerful but also answerable to the community. It:

- Introduces measurable **transparency requirements** through mandatory annual reporting.  
- Empowers the community to initiate oversight through a **petition-based process**.  
- Establishes a **structured, fair, and transparent** procedure for investigating misconduct.  
- Balances checks and balances by involving **both community-elected representatives and existing CC members** in removal decisions.  
- Ensures **institutional memory and public trust** by publishing oversight actions in a permanent record.

Alternative approaches — such as direct removal through on-chain voting without a review panel — were considered but rejected due to risks of governance capture and the absence of procedural safeguards.

This amendment builds upon feedback from [GPS-0003](../GPS-0003) (“Ambiguities in Committee Accountability”) and extensive discussions in governance forums and workshops.

---

## Path to Ratification

### Acceptance Criteria

This amendment SHALL be considered **Ratified** when:

- It has been approved through **on-chain governance by a majority of DReps** with a quorum representing at least **5% of total stake**.  
- It has received **formal acknowledgment from the existing Constitutional Committee**.

### Implementation Plan

- [ ] Publish the proposed constitutional text for public comment.  
- [ ] Integrate the approved text into `constitution/constitution-v1.txt` and increment the version number.  
- [ ] Implement on-chain mechanisms for petition submission and Review Panel selection (if required by governance tooling).  
- [ ] Establish a **public registry** for the publication of petitions, reviews, and outcomes.

---

## Versioning (Optional)

Future amendments may expand or refine **Section 4.5** to address new governance needs, enhance oversight mechanisms, or adapt to evolving governance tooling capabilities.

---

## References (Optional)

- [GPS-0003](../GPS-0003) – Ambiguities in Committee Accountability  
- [Cardano Constitution Draft](https://github.com/input-output-hk/cardano-governance/blob/main/constitution/constitution-v1.txt)

---

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
