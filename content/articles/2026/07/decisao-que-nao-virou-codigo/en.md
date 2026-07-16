---
title: "The Decision That Never Became Code"
date: "2026-07-29"
description: "Designers who also code nearly doubled in a year at Figma. But even in teams with a ready design system, Figma Make still ships hardcoded output."
tags: ["design system", "figma", "ai agents", "decision-making"]
thumbnail: "/images/articles/decisao-que-nao-virou-codigo/cover.webp"
---

In one year, the share of Figma designers who also write code nearly doubled, going from 21% to 41%. On the dev side, 60% now take part in design, up from 44% before. Moving between the two worlds stopped being a differentiator and became a job requirement.

The company's CPO, Yuhki Yamashita, addressed the side effect of this at a press event in Seoul. With AI agents, anyone can put together a whole prototype alone. The result is that these prototypes are coming out looking very similar to each other, and the code one team produces does not talk to the rest of the organization.

That makes sense: an agent trained on the same patterns, used by any squad asking for the same thing, delivers the same kind of solution. What matters here is what that agent does with the decision the team had already made before asking for the prototype.

Figma's response so far has been infrastructure: Canvas, Code Layers, and a feature to see which agent each team is using. That solves who does what, but not what is left of the decision after the agent finishes the work.

What is missing from that response is exactly what made Figma the tool designers preferred: the ease of building a design system and replicating that pattern across the whole organization. Today, even with a ready design system in Figma Design, Figma Make still does not read that structure properly. The final code comes out hardcoded at the primitives layer, and that breaks maintainability as soon as the application grows. That is why tools like Claude Code are gaining ground: in them, the design decision becomes code, becomes a reusable, auditable, testable pattern, instead of becoming a drawing someone translates later.

Agent visibility solves tracking, but does not touch architecture. As long as the design system keeps being a drawing that gets translated into code after the decision has already been made, every squad will reinvent the same solution from scratch, no matter how many agents are watching each other's work.

---

Sources: [Seoul Economic Daily](https://en.sedaily.com/technology/2026/07/15/figma-says-ai-agents-fuel-app-boom-making-differentiation) · [Figma](https://www.figma.com/blog/state-of-the-designer-2026/)
