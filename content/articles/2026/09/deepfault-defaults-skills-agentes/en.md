---
title: "The Default Nobody Sees"
date: "2026-09-25"
description: "Nielsen calls it a deepfault: the default stored out of sight of whoever uses the agent. A skill weighs as much as a screen and deserves the same evaluation."
tags: ["AI agents", "defaults", "skills", "governance", "decision-making"]
thumbnail: "/images/articles/deepfault-defaults-skills-agentes/cover.webp"
---

In 2011, Jared Spool reported a study of several hundred Word configuration files: fewer than 5% of users had changed any setting. In the same article that cites the study, Jakob Nielsen says he writes his own texts with a skill in which he recorded dozens of decisions (headline style, number format, banned words).

Nielsen calls a "deepfault" the default that stays stored out of sight of whoever uses the agent. A request to book a flight or refactor code can leave hundreds of points open, and the agent fills in each one on its own, in a single run. Decisions saved in a skill months ago may still shape today's output. Nielsen ties the review of that file to a change of model behind the agent or a change in the task it performs.

A screen default goes through design critique and usability testing before launch, a review done by someone else, a process that runs on its own. A skill depends on its own author remembering to reopen the file when the model or the task changes. Changing a skill weighs as much on the result as changing a screen, and deserves the same kind of evaluation: comparing output before and after the change, the way interface variations are already compared.

But how do I do that? Note this down to look up later: promptfoo, LangSmith and Braintrust run the skill against a fixed set of real cases, put the old output next to the new one and apply automatic scoring. None of them was built exactly for this purpose, but they help solve the problem: knowing whether the text change improved or worsened the result before deploy. Some people prefer to evaluate by hand, by feel, but feel changes with the day: the same output can get a different grade on a Monday morning and on a Friday afternoon.

---

Sources: [Jakob Nielsen (Substack)](https://jakobnielsenphd.substack.com/p/defaults) · [Promptfoo](https://www.promptfoo.dev/docs/intro/) · [LangSmith](https://docs.langchain.com/langsmith/evaluation-concepts) · [Braintrust](https://www.braintrust.dev/docs/evaluate)
