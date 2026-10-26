---
title: "Everyday AI"
date: "2026-10-23"
description: "Norman, Torvalds and Martin each define where human responsibility sits when using AI. The conversation is not whether to use it, but where, when and how."
tags: ["AI usage rules", "human accountability", "AI agents", "acceptance criteria", "product"]
thumbnail: "/images/articles/a-ia-do-dia-a-dia/cover.webp"
---

Don Norman, author of "The Design of Everyday Things," woke up at 3 a.m. with the missing piece of a line of reasoning about AI. After an hour of conversation with Claude, the material already filled several pages. Since the full article would take a week or more, he asked for a one-page summary. Claude drafted most of it and Norman revised the text, rewriting passages, and declared the co-authorship. Finally, he noted that he normally doesn't let AI write for him, like someone anticipating possible damage to his own image. Does a professional who taught generations have to prove himself for having used a tool? Would he have to go back to loose paper and a typewriter to prove the quality of his work?

In July, Linus Torvalds wrote that Linux "is not one of those anti-AI projects." In the Linux kernel, AI is allowed to help with contributions, as long as the responsible professional signs off, because a tool has no legal authorship and shouldn't answer for the result. At least I haven't yet seen anyone congratulating Excel on the semester's results.

Robert C. Martin, author of Clean Code, wrote on X, on July 23, that his current strategy is not to read the agents' code. Instead, he surrounds the agents with constraints such as unit tests, Gherkin scenarios and test coverage. In another reply in the same thread, he said the agents write the tools that check those constraints and that they are deterministic, meaning they run the same way every time.

AI will take up more and more space and, in all three cases, authorities in each field define how it should be used. Each places the professional's responsibility at a different point. Norman kept the origin, which was the reasoning, and the output, which was the rewriting and the declared co-authorship. Under Linus Torvalds, the kernel fixed responsibility on the professional who reviewed the AI-generated code. Martin put it in the constraints he requires of the agents, which is why he can give up reading the code.

Looking at these cases, we can say the conversation should no longer be about using AI or not, but about defining where, when and in what way it will be used in your project.

In product and design, the professional defines and the agent executes. Product teams already own the problem framing, which matches Norman's origin, and the acceptance criteria, which is the same kind of constraint Martin imposes on agents. Following the example of these authorities, it's up to you to decide in which processes your agent should act, always taking responsibility for the return, which is the part that deserves to be held to account.

And if you got this far thinking: "Stop it! AI is a bubble!", I say: absolutely! It's not a question of whether it will burst, but when. Still, in 2000 the internet bubble burst, and today the internet is more present than ever in everyday design.

---

Sources: [Don Norman, Substack](https://donnorman1.substack.com/p/refinement-or-containment) · [Linux kernel docs (coding assistants)](https://docs.kernel.org/process/coding-assistants.html) · [Virtualization Review](https://virtualizationreview.com/articles/2026/07/16/linus-torvalds-says-linux-kernel-is-not-an-anti-ai-project.aspx) · [Robert C. Martin (Uncle Bob), X](https://x.com/unclebobmartin/status/2080257779395154409) · [Robert C. Martin (Uncle Bob), X, reply on deterministic tools](https://x.com/unclebobmartin/status/2080392677753790875)
