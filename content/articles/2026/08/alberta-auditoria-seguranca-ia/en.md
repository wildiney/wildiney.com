---
title: "466 Million Lines in 20 Hours, No Patch Without Human Review"
date: "2026-08-20"
description: "50 AI agents audited Alberta's government code in 20 hours. The traditional method would have taken six and a half years. Every patch still waited for human review."
tags: ["AI security", "trust", "governance", "decision", "agentic AI"]
thumbnail: "/images/articles/alberta-auditoria-seguranca-ia/cover.webp"
---

50 AI agents scanned 466 million lines of Alberta's government code in 20 hours. By the traditional method, the same review would have taken roughly six and a half years, according to the team that ran the project.

An AI reviewing security can invent a vulnerability that does not exist, or worse, miss one that does. That is the most common reason to freeze before letting an agent near production, and it is a real concern. Alberta solved it by building layer after layer of verification on top of the model.

The process ran in two stages: a rules engine scanned each repository looking for known patterns, then a second agent reviewed each alert and cited the exact file and line so a human could check. An attack agent tried to breach the application as a real attacker would, while another evaluated the defense against an international security standard and wrote the remediation plan. Nearly 95 controls checked per run. No patch reached production without review and approval from an engineer on the team.

The result came from accepting that AI makes mistakes, and designing the process so those mistakes never made it to production alone. A subsidy portal that took five months to build by hand 25 years ago was rebuilt in four to five days, with the same amount of human review at the end of the line.

Fear of hallucination stops many teams before they even try. Alberta showed that the size of the checkpoint between the agent and production is what determines whether that mistake ever matters.

---

Sources: [Anthropic](https://www.anthropic.com/news/alberta-government-claude-cybersecurity) · [The Logic](https://thelogic.co/briefing/alberta-government-uses-claude-to-check-its-code/)
