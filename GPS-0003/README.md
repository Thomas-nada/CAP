---
GPS: 0003
Title: Ambiguities in Constitutional Committee Accountability
Category: Governance
Status: Open
Authors:
  - Ada Lovelace <@adalovelace>
  - Charles Byron <@cbyron>
Proposed Solutions:
  - CAP-0003
Discussions:
  - https://github.com/Thomas-nada/CAP/discussions/12
  - https://forum.cardano.org/t/discussion-cap-0002-committee-accountability/101234
Created: 2025-09-15
License: CC-BY-4.0
---

## Abstract

Cardano's Constitutional Committee (CC) certifies governance actions and guards the integrity of the Constitution, yet its accountability expectations remain underdefined. This governance problem statement catalogues the gaps in transparency, oversight, and remediation pathways when CC members underperform or act contrary to constitutional intent. Clarifying these gaps is critical to preserving stakeholder trust and enabling timely recourse when governance actors falter.

## Background

The initial Constitution (v1) enumerates the CC's high-level duties but leaves mechanisms for performance review and removal largely implicit. Early governance discussions—including workshops leading to CAP-0002—surfaced frustrations among DReps and stakeholders about the opacity of CC deliberations and the absence of regular reporting. While informal community norms have emerged, they lack enforceability and consistency, leaving perceived conflicts of interest unresolved and historical records fragmentary.

## Problem Description

Without explicit accountability procedures, the community cannot reliably monitor whether CC members uphold constitutional obligations. Key issues include:
- No mandated cadence or content for reporting CC activities or dissenting opinions.
- No standardized intake, validation, or escalation path for misconduct allegations.
- No neutral review body defined to assess petitions or recommend sanctions.
- No requirement to publish case outcomes, preventing institutional learning and transparency.

Collectively, these gaps weaken the feedback loop between the CC and the broader Cardano community, increasing the risk of governance capture or erosion of legitimacy when controversies arise.

## Use Cases

- **DReps seeking oversight**: Delegated representatives need verifiable records of CC decisions to evaluate whether to uphold or challenge ratifications.
- **ADA holders filing grievances**: Community members observing suspected misconduct need a clear petition process, threshold, and timeline to pursue accountability.
- **Tooling teams**: Governance tooling providers require well-defined triggers and data outputs (e.g., reports, panel findings) to integrate oversight workflows into dashboards.
- **Constitutional Committee members**: Sitting members benefit from codified procedures that clarify expectations, protect due process, and document precedent for future cohorts.

## Governance Goals

Solutions should:
- Guarantee transparent, periodic disclosure of CC activities and decision rationales.
- Provide accessible, tamper-resistant channels for submitting and tracking misconduct petitions.
- Establish impartial review mechanisms with clear timelines and evidentiary standards.
- Ensure sanctions or remedial actions are enforceable and recorded for public audit.
- Maintain operational security for sensitive deliberations while maximizing accountability.

Non-goals include redesigning the CC's membership selection process or redefining its constitutional mandate; the focus remains on accountability and oversight once members are seated.

## Open Questions

- What stake threshold best balances accessibility and protection against frivolous petitions?
- How should review panels be constituted to remain impartial and representative?
- What evidentiary standards and timelines ensure due process without enabling indefinite delays?
- How can on-chain and off-chain records be synchronized to guarantee transparency and verifiability?
- Which entity is responsible for maintaining the public registry of oversight actions?

## Proposed Next Steps

- Draft and socialize a CAP specifying the accountability procedures outlined here.
- Prototype petition intake and review tooling with DRep participation.
- Collect historical case studies from other governance systems to inform sanction guidelines.

## Status

Open – The accountability framework remains undefined until a CAP is ratified and implemented.

## References

- Cardano Constitution v1, Article IV (Constitutional Committee).
- Cardano governance workshop notes on CC transparency (June–August 2025).

## Acknowledgements

Thanks to participating DReps, SPOs, and governance researchers who provided feedback during the Cardano Governance Workshop series.

## Copyright

This GPS is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
