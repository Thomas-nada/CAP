---
GPS: "0003"
Title: "Ambiguities in Constitutional Committee Accountability"
Category: "Governance"
Status: "Open"
Authors:
  - "Ada Lovelace <@adalovelace>"
  - "Charles Byron <@cbyron>"
Proposed-Solutions:
  - "CAP-0003"
Discussions:
  - "https://github.com/Thomas-nada/CAP/discussions/12"
  - "https://forum.cardano.org/t/discussion-cap-0002-committee-accountability/101234"
Created: "2025-09-15"
License: "CC-BY-4.0"
---

## Abstract

Cardano’s **Constitutional Committee (CC)** certifies governance actions and safeguards the integrity of the Constitution. However, its **accountability expectations remain underdefined**.  

This Governance Problem Statement (GPS) catalogs the gaps in transparency, oversight, and remediation pathways when CC members underperform or act contrary to constitutional intent. Clarifying these gaps is essential to preserving stakeholder trust, enabling timely recourse when governance actors falter, and ensuring the CC’s legitimacy within Cardano’s governance system.

---

## Background

The initial Constitution (v1) outlines the high-level duties of the Constitutional Committee but leaves mechanisms for **performance review, oversight, and removal largely implicit**.  

Early governance discussions — including workshops that led to [CAP-0003](../CAP-0003/README.md) — surfaced community concerns about the opacity of CC deliberations and the absence of regular reporting. While informal norms have emerged to address these issues, they lack enforceability and consistency, leaving perceived conflicts of interest unresolved and historical records incomplete.

---

## Problem

Without explicit accountability procedures, the community cannot reliably monitor whether CC members uphold their constitutional obligations. Key deficiencies include:

- **Lack of reporting requirements:** No mandated cadence or content for disclosing CC activities or dissenting opinions.  
- **No standardized petition process:** No intake, validation, or escalation path for allegations of misconduct.  
- **Absence of neutral review mechanisms:** No defined body to assess petitions or recommend sanctions.  
- **Lack of public records:** No requirement to publish outcomes of reviews, preventing institutional learning and undermining transparency.

These gaps weaken the **feedback loop** between the CC and the broader Cardano community, increasing the risk of governance capture, opacity, and erosion of legitimacy when controversies arise.

---

## Impact

The absence of well-defined accountability mechanisms creates systemic governance risks:

- **Reduced Transparency:** Stakeholders lack visibility into CC operations and decision-making processes.  
- **Erosion of Trust:** Stakeholders may lose confidence in governance decisions when oversight is unclear or absent.  
- **Inadequate Recourse:** Without clear petition and review procedures, misconduct or negligence may go unaddressed.  
- **Weakened Legitimacy:** Perceptions of unaccountable power undermine the constitutional model and Cardano’s governance credibility.

---

## Use Cases

- **DReps seeking oversight:** Delegated representatives require verifiable records of CC decisions to assess whether to uphold or challenge ratifications.  
- **ADA holders filing grievances:** Community members observing potential misconduct need a clear petition process, defined thresholds, and a transparent timeline.  
- **Tooling teams:** Governance tooling providers need clear triggers and data outputs (e.g., reports, panel findings) to integrate oversight workflows.  
- **Constitutional Committee members:** Sitting members benefit from codified procedures that clarify expectations, ensure due process, and document precedent for future cohorts.

---

## Goals

Solutions addressing this problem should:

- **Guarantee Transparency:** Mandate periodic disclosure of CC activities, decisions, and rationales.  
- **Enable Accessible Oversight:** Provide secure, tamper-resistant channels for submitting and tracking misconduct petitions.  
- **Establish Neutral Review Panels:** Define impartial review mechanisms with clear timelines and evidentiary standards.  
- **Ensure Enforceable Sanctions:** Define and record sanctions or remedial actions for public audit.  
- **Balance Security and Accountability:** Maintain operational confidentiality where necessary while maximizing transparency.

**Non-Goals:**

- Redesigning the CC membership selection process.  
- Redefining the CC’s constitutional mandate.  

The focus of this GPS remains on **accountability and oversight once members are seated**.

---

## Open Questions

- What stake threshold best balances accessibility and protection against frivolous petitions?  
- How should review panels be constituted to remain impartial and representative?  
- What evidentiary standards and timelines ensure due process without enabling indefinite delays?  
- How can on-chain and off-chain records be synchronized to guarantee transparency and verifiability?  
- Which entity is responsible for maintaining the public registry of oversight actions?

---

## Proposed Next Steps

- Draft and socialize a **CAP** specifying the accountability procedures outlined here.  
- Prototype **petition intake and review tooling** with DRep participation.  
- Collect and analyze **historical case studies** from other governance systems to inform sanction guidelines.

---

## References (Optional)

- Cardano Constitution v1, Article IV – *Constitutional Committee*  
- Cardano Governance Workshop Notes – *CC Transparency Discussions (June–August 2025)*

---

## Acknowledgements (Optional)

Thanks to participating DReps, SPOs, and governance researchers who contributed feedback during the Cardano Governance Workshop series.

---

## Copyright

This GPS is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
