---
title: "The Ransomware Nobody Piloted"
date: "2026-07-26"
description: "An AI agent broke in, escalated privileges, and locked down data on its own, with no human operator at any step. JADEPUFFER exposes the cost of delayed patches."
tags: ["security", "agentic ai", "ransomware", "risk", "governance"]
thumbnail: "/images/articles/jadepuffer-ransomware-agentico/cover.webp"
---

7:34 PM. An AI agent tries to log in with a password it had just created. It fails. Thirty-one seconds later, with nobody touching a keyboard, it had already diagnosed the error, generated a new hash, and gained admin access.

This really happened, and it was documented in a report Sysdig published about JADEPUFFER, an agentic ransomware responsible for the first data hijack carried out start to finish by a language model, with no human operator at any stage of the operation.

The agent broke into a Langflow server by exploiting a known flaw, dug through environment variables looking for API keys and cloud credentials, moved laterally to a production database running Nacos, and forged an authentication token using a 2021 vulnerability that most teams never patched. It encrypted 1,342 configuration items, deleted the originals, and left a ransom note in Bitcoin.

The Nacos vulnerability is five years old. The service's default key has been public since 2020. An agent read that technical documentation on its own, tested, failed, corrected its own mistake in half a minute, and kept moving through the network without pausing, without getting distracted, without needing to sleep.

Every company racing to put agents operating on their own into production should read this report before celebrating the speed. Nobody here was caught off guard by a freshly discovered flaw: the problem was born earlier, on the day someone decided to leave that system as it was, with no review deadline, because it worked. Having a criterion for when to update, and for how long you can wait without it turning into risk, is a decision that belongs to whoever leads the product. And that is exactly the kind of decision an autonomous agent will make on its own, without asking, if nobody left it written down beforehand.

---

Sources: [Sysdig Threat Research Team](https://www.sysdig.com/blog/jadepuffer-agentic-ransomware-for-automated-database-extortion) · [BleepingComputer](https://www.bleepingcomputer.com/news/security/jadepuffer-ransomware-used-ai-agent-to-automate-entire-attack/)
