---
CAP: 0002
Title: "Mandatory On-Chain Coffee Breaks ☕"
Category: "Meta"
Status: Proposed
Authors:
  - "Cardano Sloth <sloth@lazychain.io>"
Implementors:
  - "N/A"
Solution-To:
  - "N/A"
Discussions:
  - "https://github.com/Thomas-nada/CAP/pull/2"
Created: 2025-10-01
License: CC-BY-4.0
---

## Abstract

This Cardano Amendment Proposal (CAP) humorously suggests introducing **mandatory coffee breaks** into the Cardano governance process. At a protocol level, this would manifest as "Coffee Epochs" — special slots in the chain where no blocks are produced, allowing developers, stake pool operators, and DReps to hydrate and caffeinate.

## Motivation: Why is this CAP necessary?

Decentralized governance is a marathon, not a sprint. Yet, too often, contributors burn out without proper breaks. Coffee is the lifeblood of developers and governance participants.  
By formalizing coffee breaks into the governance schedule, Cardano ensures a well-caffeinated ecosystem — leading to better decision-making, happier developers, and fewer rage posts on Twitter.

## Amendment Specification

- Every 1000 blocks, a **Coffee Epoch (CE)** is declared.
- During a CE:
  - No new blocks are produced.
  - Smart contracts may execute a `brew()` function to log coffee consumption.
  - Stake pools must submit a “Proof of Coffee” (PoC) transaction — containing metadata describing their brew.
- Failing to submit PoC twice in a row results in a temporary label: ☕ “Under-caffeinated node.”

## Rationale: How does this CAP achieve its goals?

Humor aside, this CAP highlights the importance of **community health and pacing** in governance. Introducing structured downtime — even conceptually — reminds us that decentralized governance involves humans with real needs.  
The PoC concept also opens the door to **on-chain fun metadata standards** and creative experiments with governance incentives.

## Path to Ratification

### Acceptance Criteria

- At least three working `brew()` smart contracts exist on testnet.
- Community meme contest produces ≥ 100 coffee-related governance memes.
- One DRep drinks a triple espresso live during a governance vote.

### Implementation Plan

- Write a Plutus reference implementation for `brew()`.
- Publish PoC metadata standard as a draft.
- Schedule the first Coffee Epoch test on the preview network.

## Versioning (Optional)

Future amendments may adjust Coffee Epoch frequency, Proof of Coffee requirements, or other caffeine-related governance parameters as needed.

## References (Optional)

- [Plutus Documentation](https://developers.cardano.org/docs/smart-contracts/plutus/)
- [CAP-0001 – CAP Process](../CAP-0001/README.md)

## Copyright

This CAP is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).
