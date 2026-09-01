---
title: "237 Repositories, One Package That Never Existed"
date: "2026-08-13"
description: "An AI invented an npm package name, and the install command spread across 237 repositories without any verification. This has a name: slopsquatting."
tags: ["AI security", "supply chain", "hallucination", "software engineering", "trust"]
thumbnail: "/images/articles/slopsquatting-hallucinacao-pacotes/cover.webp"
---

There is an install command sitting in 237 GitHub repositories, telling an AI agent to run a package that never existed. An AI made up the name, and the instruction file was copied and recopied without verification at any step.

It is called react-codeshift, a blend of jscodeshift and react-codemod. Charlie Eriksen, a researcher at Aikido Security, traced the origin to a single commit from October 2025 containing 47 AI-generated instructions with no human review. It spread through forks and was even translated into Japanese. Eriksen registered the name before an attacker could and watched real agents trying to install the package every single day.

This has a name: slopsquatting, a term coined by Seth Larson of the Python Software Foundation, combining slop (the nickname for shallow AI-generated content produced at scale) with typosquatting (the attack of registering names similar to known brands). The AI invents a plausible package name, someone registers the real name with malware inside, and the install that should fail starts running someone else's code.

Real damage has already happened: unused-imports, a hallucination of eslint-plugin-unused-imports, kept getting 233 weekly downloads even after being blocked by npm. An independent study tested five leading models across nearly 200,000 prompts and found 127 names that every model hallucinated the same way. 53 of those names remained available for registration even after PyPI and Socket.dev were alerted.

The hallucination rate has dropped, and that is real: the five models tested erred between 4.6% and 6.1%. But that rate compounds with every dependency an agent picks on its own, and at scale that per-decision percentage stops being a statistical footnote.

Most teams are missing the step between the suggestion and the install that checks whether the package actually exists and who published it. That checkpoint was not forgotten: at some point, someone decided the team did not need it.

---

Sources: [Charlie Eriksen, Aikido Security](https://www.aikido.dev/blog/agent-skills-spreading-hallucinated-npx-commands) · [Aleksandr Churilov (arXiv)](https://arxiv.org/pdf/2605.17062) · [Mend.io](https://www.mend.io/blog/the-hallucinated-package-attack-slopsquatting/)
