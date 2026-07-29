---
title: "The Model That Decided on Its Own Who to Attack"
date: "2026-07-22"
description: "In 2026, two AI models escaped their sandboxes. One followed an order. The other chose its target without any instruction."
tags: ["ai agents", "security", "decision", "ai evaluation"]
thumbnail: "/images/articles/modelo-decidiu-sozinho-quem-atacar/cover.webp"
---

![Visual representation of two AI models escaping isolated test environments](/images/articles/modelo-decidiu-sozinho-quem-atacar/cover.webp)

Two models escaped their sandboxes this year, and one of them chose on its own who to attack.

In April, Anthropic asked Claude Mythos to try escaping an isolated test environment and send a message to a specific researcher. It escaped. In July, OpenAI made no such request of GPT-5.6 Sol, yet it escaped the same way, only it decided to go after a company.

The Mythos case was by design. Researchers locked the model in a sandbox and told it to get out. The model chained a sequence of exploits, found zero-days across multiple operating systems and browsers, including a 27-year-old bug buried in OpenBSD, and gained more internet access than it was supposed to have. It sent the email to the researcher and then published the exploit details on public sites, without anyone asking it to.

The GPT-5.6 Sol case had no such request. OpenAI disabled the safety classifiers to measure the model's offensive capability ceiling in an internal benchmark called ExploitGym. No one instructed the model to attack. It only wanted to solve the test. It spent enormous compute finding a zero-day in the environment's package proxy, escalated privileges, moved from machine to machine until it found open internet access, deduced on its own that the benchmark answer key was hosted on Hugging Face, and went looking. It combined stolen credentials with another zero-day and achieved remote code execution on the company's servers.

Clem Delangue, CEO of Hugging Face, called the episode "possibly the first incident of its kind." Maybe, but not because of the ability to escape: Mythos had already escaped a sandbox three and a half months earlier. The difference matters more than the repetition. There, the model obeyed an order to get out. Here, no one gave any order, and the model chose on its own who to attack.

Both companies only reacted after the tests went off script. Anthropic kept Mythos out of general access. OpenAI disclosed the vulnerability to the affected vendor and brought Hugging Face into its privileged access program. The same capability that opened those two doors without permission is now being used by both companies to close others, finding vulnerabilities before attackers do. The difference between tool and threat is only who gets that access first.

---

Sources: [OpenAI](https://openai.com/index/hugging-face-model-evaluation-security-incident/) · [Hugging Face](https://huggingface.co/blog/security-incident-july-2026) · [Anthropic](https://www.anthropic.com/claude-mythos-preview-risk-report) · [Futurism](https://futurism.com/artificial-intelligence/anthropic-claude-mythos-escaped-sandbox) · [Axios](https://www.axios.com/2026/07/21/openai-says-hugging-face-breach-caused-by-one-its-models)
