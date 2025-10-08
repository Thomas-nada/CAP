---
CAP: "0002"
Title: "Mandatory On-Chain Coffee Breaks ☕"
Category: "Meta"
Status: "Proposed"
Authors:
  - "Cardano Sloth <sloth@lazychain.io>"
Implementors:
  - "N/A"
Solution-To:
  - "CIS-0002"
Discussions:
  - "https://github.com/Thomas-nada/CAP/pull/2"
Created: "2025-10-01"
License: "CC-BY-4.0"
---

## Abstract

This Cardano Amendment Proposal (CAP) humorously proposes the introduction of **mandatory coffee breaks** into the Cardano governance process.  
At a protocol level, this would manifest as **Coffee Epochs** — designated slots in the blockchain where no blocks are produced, giving developers, stake pool operators, and DReps the opportunity to hydrate and caffeinate.

This CAP also serves as a lighthearted exploration of how **human factors** and **community well-being** intersect with governance design.

---

## Motivation: Why is this CAP necessary?

Decentralized governance is a marathon, not a sprint. Yet contributors often burn out without adequate breaks. Coffee is the lifeblood of many developers and governance participants.

By formalizing coffee breaks into the governance schedule, Cardano could ensure a more **sustainable and human-centered governance process**, leading to better decision-making, happier developers, and fewer rage posts on social media.

This CAP addresses [**CIS-0002 – The Great Governance Burnout Problem ☕🔥**](../CIS-0002/README.md), which highlights the risks of contributor exhaustion and community disengagement in long-term governance processes.

---

## Specification

### Coffee Epochs

- Every **1000 blocks**, a **Coffee Epoch (CE)** occurs.
- During a Coffee Epoch:
  - No new blocks are produced.
  - Smart contracts may execute a `brew()` function to log coffee consumption.
  - Stake pools must submit a **Proof of Coffee (PoC)** transaction containing metadata describing their brew.

### Compliance

- Failure to submit PoC transactions for **two consecutive Coffee Epochs** results in a temporary label: ☕ **"Under-caffeinated node."**

### Optional Extensions

- Governance tooling may integrate coffee-related metadata visualizations.
- Future iterations may include additional beverage standards (e.g., `brew(tea)`).

---

## Rationale: How does this CAP achieve its goals?

While humorous in nature, this CAP draws attention to the importance of **community health, pacing, and culture** in governance systems. Introducing structured downtime — even conceptually — acknowledges that decentralized governance involves real humans with real needs.

Moreover, the **Proof of Coffee (PoC)** mechanism could inspire creative **on-chain metadata standards** and foster experimentation with governance incentives and rituals.

---

## Path to Ratification

### Acceptance Criteria

- [ ] At least three functioning `brew()` smart contracts deployed on testnet.  
- [ ] A community meme contest produces **≥ 100 coffee-related governance memes**.  
- [ ] At least one DRep drinks a **triple espresso live during a governance vote**.

### Implementation Plan

- [ ] Develop and publish a Plutus reference implementation for `brew()`.  
- [ ] Publish a draft metadata standard for Proof of Coffee transactions.  
- [ ] Schedule the first Coffee Epoch test event on the **preview network**.

---

## Versioning (Optional)

Future amendments may update the **Coffee Epoch frequency**, revise **Proof of Coffee requirements**, or explore additional **beverage governance parameters** as needed.

---

## References (Optional)

- [Plutus Documentation](https://developers.cardano.org/docs/smart-contracts/plutus/)  
- [CAP-0001 – CAP Process](../CAP-0001/README.md)  
- [CIS-0002 – The Great Governance Burnout Problem ☕🔥](../CIS-0002/README.md)

---

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
