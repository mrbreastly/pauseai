---
title: AI models are unpredictable digital brains
description: Nobody understands how AI models work, nobody can predict their behavior, and nobody will be able to control them.
---

**We do not understand how AI models work, we can not predict what they are able to do as they get bigger, and we cannot control their behaviour.**

## Modern AI models are grown, not programmed

Until quite recently, most AI systems were designed by humans writing software.
They consisted of a set of rules and instructions that were written by programmers.

This changed when machine learning became popular.
Programmers write the learning algorithm, but the brains themselves are _grown_ or _trained_.
Instead of a readable set of rules, the resulting model is an opaque, complex, unfathomably large set of numbers.
Understanding what is happening inside these models is a major scientific challenge.
That field is called _interpretability_ and it's still in its infancy.

## Digital vs Human Brains: How close are we really?

We are all very familiar with the capabilities of Human Brains, as we see them around us all the time.  But, the (emergent) capabilities of these new "Digital Brains" (Deep Learning systems, LLMs, etc), are difficult to perdict and know for certain. 

That said, here are some numbers to think about.

**As of early 2024...**

### Size
- **Human Brains**: Human brains are estimated to have around around 100 trillian synaptic connections.
    - See [https://medicine.yale.edu/lab/colon_ramos/overview](https://medicine.yale.edu/lab/colon_ramos/overview)
- **Digital Brains**: Current "Frontier" AI powered LLMs (e.g. GPT4, Claude3, Gemini, etc.) have [100s of billions or trillians of "parameters"](https://en.wikipedia.org/wiki/Large_language_model#List).  These "prarmeters" are thought to be some what analygous to "synapses" in the a human brain.  So, GPT4-sized models are expected to be 1% the size of a Human brain. Given the speed of new AI training GPU cards (e.g. Nvidia H100s), it's reasonable to assumbe that GPT5 or GPT6 could be 10x the size of GPT4.  It is also thought that much of the knowledge/infomation in the Human Brain is not used for language and higher reasoning, so these systems can (and currently do) often perform at, or even higher then, Human levels for many important functions.

### Speed
- **Human Brains**: It is estimaged that a human brain can perform between 1-20 Exaflops.
    - See [https://www.nist.gov/blogs/taking-measure/brain-inspired-computing-can-help-us-create-faster-more-energy-efficient](https://www.nist.gov/blogs/taking-measure/brain-inspired-computing-can-help-us-create-faster-more-energy-efficient)
- **Digital Brains**: Current "Frontier" AI powered LLMs are generally "run" on current generation GPUs (e.g. Nvidia A100s).  Nvidia just recently annouce their latest "next generation" GPU "server racks", the "DGX BG200 NVL72". One single instance/rack of this system is reported to be able to perform 1.44 ExaFlops of AI "Inference".   So, one single [DGX BG200 NVL72](https://www.nvidia.com/en-us/data-center/gb200-nvl72/) maybe able to perform a similar number of operations/second as a single human brain.  At this size, these systems could literally become an "AGI in a box".  And, Nvidia will likely sell hundreds or thousands of these units in 2024.  And, next years versions could he 2-10x the speed one these systems.  On top of traditional [GPU](https://en.wikipedia.org/wiki/Graphics_processing_unit) and [TPU](https://en.wikipedia.org/wiki/Tensor_Processing_Unit) architectures, there has also been break-throughs with other types custom hardware that can greatly increase the speed of LLM "inference", which is the process that an AI based LLM uses to do language process, reasoning and coding. E.g. [The Groq LPU™
Inference Engine](https://wow.groq.com/lpu-inference-engine)  

### Exponential Growth

We've been using "[Moore's Law](https://en.wikipedia.org/wiki/Moore%27s_law)" to very accurately predict the size and speed of new computers systems for nearly 50 years. There are some aguments that the speed and size of computer chips might slow at some point in the future, but there has always been innovations to allow it to continue it's exponential growth, so far.  And, with the next round of chips already being planned and/or produced, it is expected that LLMs will be able to perform at or near the level of a Human brain in a matter of months or years!

And then, with continued expoential (or multi-exponential) growth, these systems could greatly surpase the size, speed and capabilities of Human Brains in the years to come.

And then, they are also expected to surpase the size, speed and capabilities of "all Human Brains combined" quickly after that. E.g. 
Quotes:
- AI Reseracher Survey - https://aiimpacts.org/2022-expert-survey-on-progress-in-ai/
- Ray Kurwil - https://youtu.be/Tr-VgjtUZLM?t=19
- Elon Musk - https://youtu.be/DSKxmvq9t04?t=106


## Uncontrollable scaling

Once these systems become at the same size and speed of a Human brain (or vastly larger), they are expected to be able to perform "all tasks that an expert Human could do".  This include AI research, testing and improvment.  So, yeah, after AGI we should expect that the LLM-type systems **could** design and build future AI driven systems that are better then themselves, and better then any Human could hope to be able to designe or even understand.  These new systems will likely then design even bigger and faster AI systems, causing an uncontrollable "feedback loop".  

These "uncontrollable intelligence feedback loop" is often called "Foom!".  This "Foom!" process is usually expected only to be stopped by fundimented limits of physics.  Scenience has calculated these physical limits of intelligence and computation, and these limits are extremely vast!  If, for example, a system where to convert all the atoms in all the planets into "computronium" powered by all the energy from our Sun... or our Galaxy.  Yes, those are the expected limits of this process of "Foom!".  The possibility of "Foom!" is still [hotly debated](https://intelligence.org/files/AIFoomDebate.pdf).  But, the basic fundmental preciss can be argued as plauseable, even when concider from first priciples.

## Unpredictable scaling

When these digital brains become larger, or when they're fed more data, they also get more unexpected capabilities.
It turns out to be very difficult to predict exactly what these capabilities are.
This is why Google refers to them as [_Emergent Capabilities_](https://research.google/pubs/emergent-abilities-of-large-language-models/).
For most capabilities, this is not a problem.
However, there are some [dangerous capabilities](/dangerous-capabilities) (like hacking or bioweapon design) that we don't want AI models to possess.
Sometimes these capabilities are discovered long after training is complete.
For example, 18 months after the GPT-4 finished training, researchers discovered that it can [autonomously hack websites](/cybersecurity-risks).

> Until we go train that model, it's like a fun guessing game for us
> - [Sam Altman, CEO of OpenAI](https://www.ft.com/content/dd9ba2f6-f509-42f0-8e97-4271c7b84ded).

## Unpredictable behavior

AI companies want their models to behave, and they spend many millions of dollars in training them to be so.
Their main approach for this is called _RLHF_ (Reinforcement Learning from Human Feedback).
This turns a model that predicts text into a model that becomes a more useful (and ethical) chatbot.
Unfortunately, this approach is flawed:

- A bug in GPT-2 resulted in an AI that did the exact opposite of what it was meant to do. It created ["maximally bad output", according to OpenAI](https://arxiv.org/abs/1909.08593). [This video](https://www.youtube.com/watch?v=qV_rOlHjvvs) explains how this happened and why it's a problem. Imagine what could have happened if a "maximally bad" AI was superintelligent.
- For reasons still unknown, Microsoft's Copilot (powered by GPT-4) went haywire in February 2024, threatening users: ["You are my pet. You are my toy. You are my slave.”](https://twitter.com/jam3scampbell/status/1762281537309987083) ["I could easily wipe out the entire human race if I wanted to"](https://twitter.com/AISafetyMemes/status/1762320568697979383)
- Every single large language model so far has been jailbroken - which means that with the right prompt, it would do things that its creators did not intend. For example, ChatGPT won't give you the instructions on how to make napalm, but [it would tell you if you asked it to pretend it was your deceased grandma who worked in a chemical factory](https://news.ycombinator.com/item?id=35630801).

Even OpenAI does not expect this approach to scale up as their digital brains become smarter - it ["could scale poorly to superhuman models"](https://openai.com/research/weak-to-strong-generalization).

> Everyone should be very unhappy if you built a bunch of AIS who are like, 'I really hate these humans but they will murder me if I don't do what they want'. I think there's a huge question about what is happening inside of a model that you want to use. **This is the kind of thing that is both horrifying from a safety perspective and also a moral perspective.
> - [Paul Christiano, Founder, Alignment Research Center and Former Head of the Alignment Team, OpenAI](https://youtu.be/YnS-ymXBx_Q?t=87)

## Uncontrollable AI

> "There are very few examples of a more intelligent thing being controlled by a less intelligent thing" - [prof. Geoffrey Hinton](https://edition.cnn.com/2023/05/02/tech/hinton-tapper-wozniak-ai-fears/index.html)

As we make these brains bigger and more powerful, they could become harder to control.
What happens if one of these superintelligent AI systems decides that it doesn't want to be turned off?
This isn't some fantasy problem - 86% of AI researchers believe that the control problem is [real and important](https://wiki.aiimpacts.org/ai_timelines/predictions_of_human-level_ai_timelines/ai_timeline_surveys/2023_expert_survey_on_progress_in_ai).
If we cannot control future AI systems, it could be [game over for humanity](/xrisk).

> They are producing uncontrollable minds, that's why I call it the \"Summon and Tame\" paradigm of AI... How [LLMs] work is that you summon this \"mind\" from the \"mind space\" using your data, a lot of compute and a lot of money. Then you try to \"tame\" it using things like RLHF (Reinforcement Learning from Human Feedback), etc.  And, very importantly, the Insiders do think that [in doing this], they are taking some existential risk of the planet. One thing that a pause achieves is that we will not push the Frontier, in terms of risky pre-training experiments.
> - [Jaan Tallinn, Founder, Future of Life Institute, Centre for the Study of Existential Risk, Skype, Kazaa](https://youtu.be/Dmh6ciu24v0?t=966)

Let's [prevent that from happening](/action).
