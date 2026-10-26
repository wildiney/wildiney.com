---
title: "Salesforce Built Its Own Model and Kept Claude"
date: "2026-09-29"
description: "Salesforce trained Koa, its own reasoning model, on Nemotron and kept Claude. Deciding which task goes to which model became product work."
tags: ["artificial intelligence", "LLM", "product strategy", "AI governance"]
thumbnail: "/images/articles/salesforce-construiu-proprio-modelo-manteve-claude/cover.webp"
---

Salesforce had direct access to Claude and ChatGPT inside its own product, but built a reasoning model of its own, called Koa, trained on top of Nemotron, Nvidia's open model.

A salesperson negotiating a discount and an angry customer in support don't need a model trained to solve impossible math problems, built to impress benchmarks and investors. They need a fast, cheap answer with no risk of leaking customer data.

Koa runs inside Agentforce, Salesforce's agent platform, and handles reasoning in sales, marketing and support tasks, like answering a customer and scheduling an appointment. Before, when an agent needed to reason through something complex, the request went to a frontier model like Claude or ChatGPT. Now Salesforce has its own model for that, one that spends fewer tokens than the competition.

Training used synthetic data: Salesforce simulated a call center, with a furious customer calling and a salesperson trying to close a deal. No real customer data went in.

The company didn't abandon Anthropic: it launched Claudeforce the same week, with Claude remaining the interface while customer data stays locked inside Salesforce's own infrastructure.

The token savings are the concrete number, but the pattern that stays is worth reflecting on: deciding which task goes to which model is now also work for the team that designs the product, not only for the infrastructure team.

---

Sources: [TechCrunch](https://techcrunch.com/2026/09/15/salesforce-and-nvidias-new-reasoning-model-is-everything-the-ai-labs-should-fear/)
