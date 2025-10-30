The Cardano Constitution Amendment Proposals (CAP) repository contains two complementary types document:

- **Cardano Amendment Proposals (CAP):** Formal proposals to amend, clarify, or extend Cardano’s Constitution.
- **Constitution Issue Statements (CIS):** Structured descriptions of Constitution problems, ambiguities, or risks that require community attention and may guide future CAPs.

Together, **CAP and CIS form aid Cardano’s off-chain governance documentation**.  
They provide the foundation for constitutional amendments and transparent community deliberation.  
Because these documents are stored as Markdown files in a versioned repository, their history serves as the authoritative record of Cardano’s evolving governance system.

## 🧭 What is a CAP?

A [Cardano Amendment Proposal (CAP)](./CAP-0001) is a governance design document proposing changes, additions, or clarifications to Cardano’s Constitution or guardrails.

Each CAP:

- Proposes a constitutional amendment or standard.
- Describes the motivation, specification, and path to ratification.
- Undergoes open community discussion, editorial review, and eventual on-chain governance action.

> 📌 CAPs do **not** themselves enact constitutional changes. They serve as the **community input layer** for governance actions that are ultimately ratified on-chain.

For new CAPs, a template is available here: [.github/CAP-TEMPLATE.md](.github/CAP-TEMPLATE.md)

---

## 🧭 What is a CIS?

A [Constitution Issue Statement (CIS)](./CIS-0001) is a formal document that articulates a constitutional problem, its context, and its impact.  
Where CAPs propose solutions, CISs **define the problems** those solutions aim to solve.

Each CIS:

- Provides historical and procedural context for a constitutional challenge.  
- Describes the problem’s scope, impact, and stakeholder relevance.  
- Lists open questions and potential directions for future CAPs.

CISs and CAPs are complementary: a single CIS may inspire multiple CAPs, and a CAP may address multiple CISs.

For more details, see [CIS-9999 – Constitution Issue Statements](./CIS-9999).

---

# 📜 Constitutional Amendment Proposals (CAP)

<!-- BEGIN_CAP_INDEX -->
| # | Title | Status | Addresses CIS |
|-------|-----------------------------|----------|-----------------------------|
| 0002 | [Mandatory On-Chain Coffee Breaks ☕](./CAP-0002) | Proposed | [CIS-0002](./CIS-0002) |
| 9999 | [Constitution Issue Statements (CIS) — Process](./CAP-9999) | Active | [N/A](./N/A) |
<p align="right"><i>Last updated on 2025-10-30</i></p>
<!-- END_CAP_INDEX -->

---

# 🧭 Constitution Issue Statements (CIS)

<!-- BEGIN_CIS_INDEX -->
| # | Title | Status | Proposed Solutions |
|-------|-----------------------------|----------|-----------------------------|
| 0001 | [Low Participation and Representation in On-Chain Governance](./CIS-0001) | Open | – |
<p align="right"><i>Last updated on 2025-10-30</i></p>
<!-- END_CIS_INDEX -->

---

## 📈 Repository Lifecycle

- **Proposed:** A CAP or CIS that has been merged into the repository but not yet ratified or resolved.  
- **Active:** A CAP that has been ratified through governance action, or a CIS that remains relevant and open.  
- **Inactive:** A CAP or CIS that has been superseded, withdrawn, or deemed obsolete.

> ✏️ **Drafts** are not listed here. Proposals are considered drafts while they are still in open pull requests.

---

## 🔁 Updates Under Consideration

You can track proposed changes to existing CAPs and CISs here:  
**[CAP and CIS updates under consideration](https://github.com/Thomas-nada/CAP/pulls?q=is%3Apr+is%3Aopen+label%3AUpdate+sort%3Aupdated-desc)**

---

## ⏸️ Stalled / Waiting for Authors

Some proposals are awaiting author revisions or confirmation of eligibility before review can continue:  

[**Stalled CAPs and CISs**](https://github.com/Thomas-nada/CAP/pulls?q=is%3Apr+is%3Aopen+draft%3Afalse+in%3Atitle+label%3A%22State%3A+Waiting+for+Author%22%2C%22State%3A+Likely+Abandoned%22%2C%22State%3A+Likely+Deprecated%22+-label%3AUpdate%2CCorrection%2CTranslation+sort%3Aupdated-asc)

---

## ✏️ Editors

| Name | GitHub |
|------|--------|
| Thomas Lindseth | [@Thomas-nada](https://github.com/Thomas-nada) |
| Larisa Mcfarlane | [@LallyMack](https://github.com/LallyMack) |

---

### 📚 Recommended Reading

- [CAP-0001 – CAP Process](./CAP-0001)  
- [CIS-9999 – Constitution Issue Statements](./CIS-9999)  

---

### 🗺️ Repository Structure

CAP-0001/  
CAP-0002/    
CAP-????/  
CIS-0001/  
CIS-0002/  
CIS-????/

Each proposal resides in its own folder with a `README.md` as the primary document. Supporting files (appendices, diagrams, translations) may also be included.
