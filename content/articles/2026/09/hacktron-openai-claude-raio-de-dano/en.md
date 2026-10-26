---
title: "The Blast Radius of an Agent Account"
date: "2026-09-19"
description: "Three researchers breached OpenAI's internal repository in 72 hours. The blast radius of an agent account is everything connected to it."
tags: ["AI agents", "security", "access control", "decision-making", "Codex"]
thumbnail: "/images/articles/hacktron-openai-claude-raio-de-dano/cover.webp"
---

Three researchers at Hacktron AI broke into OpenAI's internal repository in under 72 hours. The proof of access was a pull request opened from an employee's account. "We're just three guys with Claude and Codex subscriptions," co-founder Mohan Pedhapati told the Wall Street Journal. OpenAI fixed the flaw about 14 hours after the report and paid a $6,500 bounty.

The chain began with an uploaded image that exploited a memory flaw in the community.openai.com forum, hosted on Discourse (not to be confused with Discord). It became remote code execution on the forum server. OpenAI's single sign-on, which the forum uses to authenticate, turned that access into access to employee accounts on ChatGPT and Codex. One of them had the organization's GitHub connected, and a prompt in that account opened the pull request in the openai/openai monorepo. The Claude used was the version cleared for cybersecurity work, with relaxed restrictions: Opus 4.8 failed, Opus 5 got it done.

The blast radius of an agent account is everything connected to it. The bounty program worked as it should, but the product decision comes first: if the account is stolen, how far can the agent reach? And should logging into one service open the door to another?

---

Sources: [Fortune](https://fortune.com/2026/09/18/open-ai-hacked-anthropic-claude-source-code-6500-reward/) · [Tom's Hardware](https://www.tomshardware.com/tech-industry/cyber-security/hackers-breach-openai-using-claude-tools-gaining-access-to-employee-accounts-and-the-companys-internal-codebase-initiating-a-harmless-pull-request-as-proof-of-the-hack) · [The Register](https://www.theregister.com/security/2026/09/18/researchers-used-claude-to-hack-openai-employees-chatgpt-accounts/5297517) · [Hacktron AI](https://www.hacktron.ai/blog/hacking-openai)
