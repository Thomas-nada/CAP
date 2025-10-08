# Governance Problem Statements (GPS)

# Constitutional Amendment Proposals (CAPs)

# Cardano Amendment Proposals (CAPs) & Governance Problem Statements (GPSs)

The Cardano governance repository contains two complementary types of governance documents:

- **Cardano Amendment Proposals (CAPs):** Formal proposals to amend, clarify, or extend Cardano’s Constitution and governance framework.
- **Governance Problem Statements (GPSs):** Structured descriptions of governance challenges, ambiguities, or risks that require community attention and may guide future CAPs.

Together, **CAPs and GPSs form the core of Cardano’s off-chain governance documentation**.  
They provide the foundation for constitutional amendments, governance process refinements, and transparent community deliberation.  
Because these documents are stored as Markdown files in a versioned repository, their history serves as the authoritative record of Cardano’s evolving governance system.

---

## 🧭 What is a CAP?

A [Cardano Amendment Proposal (CAP)](./CAP-0001) is a governance design document proposing changes, additions, or clarifications to Cardano’s governance system — including the Constitution, governance parameters, or governance processes.

Each CAP:

- Proposes a governance amendment or standard.
- Describes the motivation, specification, and path to ratification.
- Undergoes open community discussion, editorial review, and eventual on-chain governance action.

> 📌 CAPs do **not** themselves enact governance changes. They serve as the **community input layer** for governance actions that are ultimately ratified on-chain.

For new CAPs, a template is available here: [.github/CAP-TEMPLATE.md](.github/CAP-TEMPLATE.md)

---

## 🧭 What is a GPS?

A [Governance Problem Statement (GPS)](./CAP-9999) is a formal document that articulates a governance problem, its context, and its impact.  
Where CAPs propose solutions, GPSs **define the problems** that solutions aim to solve.

Each GPS:

- Provides historical and procedural context for a governance challenge.  
- Describes the problem’s scope, impact, and stakeholder relevance.  
- Lists open questions and potential directions for future CAPs.

GPSs and CAPs are complementary: a single GPS may inspire multiple CAPs, and a CAP may address multiple GPSs.

For more details, see [CAP-9999 – Governance Problem Statements](./CAP-9999).

---

# 📜 Constitutional Amendment Proposals (CAPs)

<!-- BEGIN_CAP_INDEX -->
| #     | Title | Status | Addresses GPS |
|-------|----------------------------|----------|--------------------------|
| 0001  | [CAP Process](./CAP-0001) | Active | – |
| 0002  | [Mandatory On-Chain Coffee Breaks ☕](./CAP-0002) | Proposed | – |
| 0003  | [Amendment to Clarify the Constitutional Committee Accountability Mechanism](./CAP-0003) | Proposed | – |
| 0004  | [Amendment to Recognize Pineapples as Constitutional Stakeholders](./CAP-0004) | Proposed | – |
| 9999  | [Governance Problem Statements](./CAP-9999) | Active | – |

<p align="right"><i>Last updated on 2025-10-08</i></p>
<!-- END_CAP_INDEX -->

<p align="right"><i>Last updated: 2025-10-08</i></p>

---

# 🧭 Governance Problem Statements (GPS)

<!-- BEGIN_GPS_INDEX -->
| #     | Title | Status | Proposed Solutions |
|-------|-----------------------------|----------|-----------------------------|
| 0001  | [Low Participation and Representation in On-Chain Governance](./GPS-0001) | Open | – |
| 0002  | [The Great Governance Burnout Problem ☕🔥](./GPS-0002) | Open | – |
| 0003  | [Ambiguities in Constitutional Committee Accountability](./GPS-0003) | Open | – |

<p align="right"><i>Last updated on 2025-10-08</i></p>
<!-- END_GPS_INDEX -->

<p align="right"><i>Last updated: 2025-10-08</i></p>

---

## 📈 Repository Lifecycle

- **Proposed:** A CAP or GPS that has been merged into the repository but not yet ratified or resolved.  
- **Active:** A CAP that has been ratified through governance action, or a GPS that remains relevant and open.  
- **Inactive:** A CAP or GPS that has been superseded, withdrawn, or deemed obsolete.

> ✏️ **Drafts** are not listed here. Proposals are considered drafts while they are still in open pull requests.

---

## 🔁 Updates Under Consideration

You can track proposed changes to existing CAPs and GPSs here:  
**[CAP and GPS updates under consideration](https://github.com/Thomas-nada/CAP/pulls?q=is%3Apr+is%3Aopen+label%3AUpdate+sort%3Aupdated-desc)**

---

## ⏸️ Stalled / Waiting for Authors

Some proposals are awaiting author revisions or confirmation of eligibility before review can continue:  

[**Stalled CAPs and GPSs**](https://github.com/Thomas-nada/CAP/pulls?q=is%3Apr+is%3Aopen+draft%3Afalse+in%3Atitle+label%3A%22State%3A+Waiting+for+Author%22%2C%22State%3A+Likely+Abandoned%22%2C%22State%3A+Likely+Deprecated%22+-label%3AUpdate%2CCorrection%2CTranslation+sort%3Aupdated-asc)

---

## ✏️ Editors

| Name | GitHub |
|------|--------|
| Your Name | [@yourhandle](https://github.com/yourhandle) |

---

### 📚 Recommended Reading

- [CAP-0001 – CAP Process](./CAP-0001)  
- [CAP-9999 – Governance Problem Statements](./CAP-9999)  

---

### 🗺️ Repository Structure

CAP-0001/
CAP-0002/
CAP-0003/
CAP-0004/
CAP-9999/
GPS-0001/
GPS-0002/
GPS-0003/

Each proposal resides in its own folder with a `README.md` as the primary document. Supporting files (appendices, diagrams, translations) may also be included.
