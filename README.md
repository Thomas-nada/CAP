# Cardano Amendment Proposals (CAP) Repository

The Cardano Constitution Amendment Proposals (CAP) repository contains two complementary types of documents that form the foundation of Cardano’s off-chain governance documentation. Because these documents are stored as Markdown files in a versioned repository, their history serves as the authoritative record of Cardano’s evolving governance system.

* **Cardano Amendment Proposals (CAP):** Formal proposals to amend, clarify, or extend Cardano’s Constitution.
* **Constitution Issue Statements (CIS):** Structured descriptions of Constitution problems, ambiguities, or risks that require community attention and may guide future CAPs.

---

## 🧭 What is a CAP?

A [Cardano Amendment Proposal (CAP)](./CAPs/CAP-0001/README.md) is a governance design document proposing changes, additions, or clarifications to Cardano’s Constitution or guardrails.

* **Amendment Focus:** Each CAP proposes a constitutional amendment or standard.
* **Structure:** Describes the motivation, specification, and path to ratification.
* **Review Process:** Undergoes open community discussion, editorial review, and eventual on-chain governance action.

> 📌 **Note:** CAPs do **not** themselves enact constitutional changes. They serve as the **community input layer** for governance actions that are ultimately ratified on-chain.

For new CAPs, a template is available here: [`.github/CAP-TEMPLATE.md`](.github/ISSUE_TEMPLATE/CAP-TEMPLATE.md)

---

## 🧭 What is a CIS?

A [Constitution Issue Statement (CIS)](./CAPs/CAP-9999/README.md) is a formal document that articulates a constitutional problem, its context, and its impact. Where CAPs propose solutions, CISs **define the problems** those solutions aim to solve.

* **Context:** Provides historical and procedural context for a constitutional challenge.
* **Scope:** Describes the problem’s scope, impact, and stakeholder relevance.
* **Future Work:** Lists open questions and potential directions for future CAPs.

CISs and CAPs are complementary: a single CIS may inspire multiple CAPs, and a CAP may address multiple CISs.

---

## 🚀 The Recipe: How to Participate

To ensure quality and transparency, all contributors must follow one of these two paths. **Every submission is subject to a mandatory 30-day deliberation period** before it can be moved to "Active" or submitted for on-chain voting.

### Path A: The Simplified Path (Beginner Friendly)

1. **Open a Form:** Navigate to the **Issues** tab and click **"New Issue"**.
2. **Select Template:** Choose the **New CAP Proposal** or **New CIS Issue** form.
3. **Submit:** Fill out the web-based form and click submit. This officially starts your **30-day deliberation period**.

### Path B: The Standard Path (Advanced)

1. **Fork & Branch:** Create a fork of this repository and a new branch for your work.
2. **Add File:** Place your proposal in a folder (`CAPs/CAP-XXXX/` or `CISs/CIS-XXXX/`) using the provided templates.
3. **Pull Request:** Submit a PR. The date the PR is opened marks the start of your **30-day deliberation period**.

---

## 📈 Repository Lifecycle

* **Proposed:** A CAP or CIS merged into the repository but not yet ratified or resolved. These remain in "Proposed" for at least **30 days**.
* **Active:** A CAP ratified through governance action, or a CIS that remains relevant and open.
* **Inactive:** A CAP or CIS that has been superseded, withdrawn, or deemed obsolete.

> ✏️ **Drafts** are not listed here. Proposals are considered drafts while they are still in open pull requests.

---

## ✏️ Editors

| Name | GitHub |
| --- | --- |
| Thomas Lindseth | [@Thomas-nada](https://github.com/Thomas-nada) |
| Larisa Mcfarlane | [@LallyMack](https://github.com/LallyMack) |

---

## 📂 Repository Structure

```text
CAPs/CAP-0001/    (Each proposal has its own folder)
CISs/CIS-0001/    (Each issue has its own folder)
constitution/     (The currently active Constitution)
CAPSLOCK/         (CAP Editors Meeting records) 
.github/          (Forms and templates)

```

---

## 📜 License

All documents in this repository are licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
