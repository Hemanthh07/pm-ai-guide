const PLAN = [
  // ── WEEK 1 ──────────────────────────────────────────────────────────────
  { day:1, week:1, title:"Prioritization — RICE scoring intro", morning:[
    { type:"pm", title:"Read: RICE scoring model", desc:"The definitive RICE article — understand Reach, Impact, Confidence, Effort", link:"https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" },
    { type:"pm", title:"List your top 10 backlog items", desc:"Write them down — feature name, rough effort, who it impacts" }
  ], evening:[
    { type:"ai", title:"Watch: 3Blue1Brown Neural Networks Ep 1", desc:"'But what is a neural network?' — builds intuition in 19 min", link:"https://www.youtube.com/watch?v=aircAruvnKk" },
    { type:"ai", title:"Note down: what is a token?", desc:"Write your own 2-sentence explanation after watching" }
  ]},
  { day:2, week:1, title:"RICE in practice + LLM basics", morning:[
    { type:"pm", title:"Score backlog items 1–5 using RICE", desc:"Assign numbers. Don't overthink — rough estimates are fine" },
    { type:"pm", title:"Read Shreyas Doshi on prioritization", desc:"Search 'Shreyas Doshi prioritization' on LinkedIn — read 2 posts", link:"https://www.linkedin.com/in/shreyasdoshi/" }
  ], evening:[
    { type:"ai", title:"Watch: 3Blue1Brown Neural Networks Ep 2", desc:"'Gradient descent, how neural networks learn' — 21 min", link:"https://www.youtube.com/watch?v=IHZwWFHWa-w" },
    { type:"ai", title:"Read Anthropic docs: intro to Claude", desc:"Understand context windows and how prompts work", link:"https://docs.anthropic.com/en/docs/intro-to-claude" }
  ]},
  { day:3, week:1, title:"RICE scoring + tokens & temperature", morning:[
    { type:"pm", title:"Score backlog items 6–10 using RICE", desc:"Complete your full RICE-scored backlog" },
    { type:"pm", title:"Rank and reflect: does the order surprise you?", desc:"Write 3 sentences on what changed vs your intuitive ranking" }
  ], evening:[
    { type:"ai", title:"Read: What are tokens? (Anthropic docs)", desc:"Understand tokenization, why it matters for product decisions", link:"https://docs.anthropic.com/en/docs/resources/glossary" },
    { type:"ai", title:"Experiment: count tokens in Claude.ai", desc:"Paste a paragraph, check how many tokens it uses — develop intuition" }
  ]},
  { day:4, week:1, title:"MoSCoW framework + prompt engineering", morning:[
    { type:"pm", title:"Read: MoSCoW method explained", desc:"When to use MoSCoW vs RICE — different tools for different meetings", link:"https://www.productplan.com/glossary/moscow-prioritization/" },
    { type:"pm", title:"Apply MoSCoW to your next sprint", desc:"Categorize this sprint's items into Must/Should/Could/Won't" }
  ], evening:[
    { type:"ai", title:"Read Anthropic prompt engineering guide (Part 1)", desc:"System prompts, being clear and specific, using examples", link:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
    { type:"ai", title:"Practice: write 3 system prompts for product scenarios", desc:"E.g. a user feedback classifier, a PRD writer, a meeting summarizer" }
  ]},
  { day:5, week:1, title:"Saying no + chain-of-thought prompting", morning:[
    { type:"pm", title:"Read: How to say no as a PM", desc:"Lenny's guide on declining requests with data and context", link:"https://www.lennysnewsletter.com/p/how-to-say-no" },
    { type:"pm", title:"Identify 1 item you should say no to this week", desc:"Write the message you'll send to decline it with context" }
  ], evening:[
    { type:"ai", title:"Read: Chain-of-thought prompting (Anthropic docs)", desc:"Learn few-shot examples and step-by-step reasoning", link:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought" },
    { type:"ai", title:"Practice: use CoT on a product decision", desc:"Prompt Claude to reason through a prioritization problem step by step" }
  ]},
  { day:6, week:1, title:"Present RICE to manager + neural nets", morning:[
    { type:"pm", title:"Present RICE-ranked backlog to your manager", desc:"Share the ranked list, explain your scoring — note any surprises in the conversation" },
    { type:"pm", title:"Document feedback from manager conversation", desc:"What did they push back on? What surprised them? Adjust scores." }
  ], evening:[
    { type:"ai", title:"Watch: 3Blue1Brown Neural Networks Ep 3 & 4", desc:"Backpropagation and what neural networks actually learn", link:"https://www.youtube.com/watch?v=Ilg3gGewQ5U" },
    { type:"ai", title:"Write: your own explanation of how LLMs work", desc:"2-paragraph plain English explanation. Can you explain it to a non-tech person?" }
  ]},
  { day:7, week:1, title:"Week 1 recap + RAG intro", morning:[
    { type:"pm", title:"Review: did RICE change your sprint this week?", desc:"Write 5 sentences on what you'd do differently next sprint" }
  ], evening:[
    { type:"ai", title:"Read: What is RAG? (Pinecone guide)", desc:"Retrieval-Augmented Generation — critical for AI product decisions", link:"https://www.pinecone.io/learn/retrieval-augmented-generation/" },
    { type:"port", title:"Write your Week 1 reflection on LinkedIn", desc:"What you learned about prioritization — 150 words. Building the habit of sharing." }
  ]},

  // ── WEEK 2 ──────────────────────────────────────────────────────────────
  { day:8, week:2, title:"Competitive analysis — teardown method", morning:[
    { type:"pm", title:"Read: How to do a product teardown", desc:"Framework: entry point → core loop → monetization → delight → gaps", link:"https://www.reforge.com/blog/product-teardowns" },
    { type:"pm", title:"List your top 3 competitors", desc:"Name them, note their core value prop in one sentence each" }
  ], evening:[
    { type:"ai", title:"Read: RAG architecture deep dive", desc:"How vector databases, embeddings, and retrieval work together", link:"https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview" },
    { type:"ai", title:"Read: What are embeddings?", desc:"Semantic search, similarity, why embeddings matter for product search features", link:"https://www.cloudflare.com/learning/ai/what-are-embeddings/" }
  ]},
  { day:9, week:2, title:"Deep teardown of competitor #1", morning:[
    { type:"pm", title:"Spend 90 min using competitor #1 as a new user", desc:"Sign up fresh, go through onboarding, use core features. Take notes throughout." },
    { type:"pm", title:"Write your teardown notes", desc:"What works? What frustrates? What is missing? What would you change?" }
  ], evening:[
    { type:"ai", title:"Set up your Anthropic API key", desc:"Go to console.anthropic.com, create an account and get your API key", link:"https://console.anthropic.com/" },
    { type:"ai", title:"Make your first API call on Replit", desc:"Use a starter template to call the Claude API — just get it working", link:"https://replit.com/" }
  ]},
  { day:10, week:2, title:"Review mining + first API build", morning:[
    { type:"pm", title:"Mine G2/Capterra reviews for competitor #1", desc:"Filter by 'what do you dislike' — find the top 3 pain points customers mention", link:"https://www.g2.com/" },
    { type:"pm", title:"Cross-reference: do reviews match your teardown notes?", desc:"Note where customers confirm or surprise your observations" }
  ], evening:[
    { type:"ai", title:"Build: a simple feedback classifier", desc:"Send 5 user feedback strings to the API, classify each as bug/feature/praise. No framework needed — raw API call." }
  ]},
  { day:11, week:2, title:"Feature matrix + expanding your AI app", morning:[
    { type:"pm", title:"Build your competitive feature matrix", desc:"Spreadsheet: you vs top 3 competitors on 8–10 key capabilities. Rate each 1–3." },
    { type:"pm", title:"Read: Similarweb for competitive traffic intel", desc:"Check your top competitor's traffic, top pages, and channels", link:"https://www.similarweb.com/" }
  ], evening:[
    { type:"ai", title:"Expand your classifier: add a confidence score", desc:"Prompt the model to return JSON with category + confidence + reason. Parse the output." },
    { type:"ai", title:"Read: structured outputs in Claude", desc:"How to reliably get JSON from an LLM response", link:"https://docs.anthropic.com/en/docs/test-and-evaluate/strengthen-guardrails/increase-consistency" }
  ]},
  { day:12, week:2, title:"Positioning gaps + prompt chaining", morning:[
    { type:"pm", title:"Read Obviously Awesome by April Dunford — Ch 1-3", desc:"The best writing on positioning. Buy or borrow — read the first 3 chapters today", link:"https://www.amazon.in/Obviously-Awesome-Product-Positioning-Customers/dp/1999023005" },
    { type:"pm", title:"Write your product's positioning statement", desc:"For [audience], [product] is the [category] that [benefit] unlike [alternative]" }
  ], evening:[
    { type:"ai", title:"Read: prompt chaining — multi-step AI workflows", desc:"How to pass outputs from one Claude call as inputs to the next", link:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-prompts" },
    { type:"ai", title:"Build: chain 2 prompts together", desc:"Classify feedback → then summarize the top pain point themes into a brief" }
  ]},
  { day:13, week:2, title:"Competitor #2 teardown + portfolio piece", morning:[
    { type:"pm", title:"Spend 60 min with competitor #2", desc:"Faster this time — you know the framework. Focus on what's different from #1." },
    { type:"pm", title:"Update your feature matrix with competitor #2 data", desc:"Complete at least 2 rows in your comparison spreadsheet" }
  ], evening:[
    { type:"port", title:"Write and publish: product teardown of your current product", desc:"500 words. What works, what doesn't, what you'd change as PM. Publish on Medium or LinkedIn." },
    { type:"ai", title:"Read: AI agents overview", desc:"What is an agentic loop? What does tool use mean? How do agents differ from single-call LLMs", link:"https://docs.anthropic.com/en/docs/build-with-claude/agents-and-tools/agents-overview" }
  ]},
  { day:14, week:2, title:"Competitive intel system + evals intro", morning:[
    { type:"pm", title:"Set a monthly recurring reminder: update competitive matrix", desc:"Put it in your calendar — competitive intel only works if it stays fresh" },
    { type:"pm", title:"Share competitive teardown findings with your team", desc:"Even a 10-min async Loom or Slack summary builds your PM brand internally" }
  ], evening:[
    { type:"ai", title:"Read: What are AI evals?", desc:"Why evaluation matters, how teams measure LLM quality before shipping", link:"https://www.anthropic.com/research/evaluating-ai-systems" },
    { type:"port", title:"Update LinkedIn: add teardown to Featured section", desc:"Add your published teardown as a featured link on your LinkedIn profile" }
  ]},

  // ── WEEK 3 ──────────────────────────────────────────────────────────────
  { day:15, week:3, title:"Business model — unit economics", morning:[
    { type:"pm", title:"Read: Unit economics for PMs (Lenny's Newsletter)", desc:"CAC, LTV, payback period explained with real SaaS examples", link:"https://www.lennysnewsletter.com/p/saas-metrics" },
    { type:"pm", title:"Define your product's revenue model", desc:"Write: how does your company make money? What is the primary metric leadership cares about?" }
  ], evening:[
    { type:"ai", title:"Read: Anthropic's model overview — Haiku vs Sonnet vs Opus", desc:"Understand the tradeoffs: speed, cost, capability. When to use which.", link:"https://docs.anthropic.com/en/docs/about-claude/models/overview" },
    { type:"ai", title:"Set up your AI app project folder", desc:"Create a clean folder structure: /app, /prompts, /evals, /notes. You'll build on this for 8 weeks." }
  ]},
  { day:16, week:3, title:"LTV calculation + AI app v1", morning:[
    { type:"pm", title:"Calculate rough LTV for your core user segment", desc:"Avg revenue per user × avg retention length. Ask finance if you can't find it." },
    { type:"pm", title:"Read: Stratechery — aggregation theory", desc:"Ben Thompson's foundational piece on how platform businesses work", link:"https://stratechery.com/2015/aggregation-theory/" }
  ], evening:[
    { type:"ai", title:"Build: AI feedback summarizer v1", desc:"Input: 10 user feedback strings. Output: top 3 pain point themes with examples. Use Claude Haiku for speed." }
  ]},
  { day:17, week:3, title:"CAC & payback + AI app prompts", morning:[
    { type:"pm", title:"Find your company's CAC", desc:"Talk to growth/marketing. Estimate: monthly marketing spend ÷ new customers per month" },
    { type:"pm", title:"Calculate LTV:CAC ratio and interpret it", desc:"3:1 is healthy for SaaS. What does yours tell you about your business?" }
  ], evening:[
    { type:"ai", title:"Refine your app's system prompt", desc:"Rewrite the system prompt 3 different ways. Test each with the same inputs. Which gives the best output?" },
    { type:"ai", title:"Read: how to write effective system prompts", desc:"Role, context, task, format, constraints — the anatomy of a good system prompt", link:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts" }
  ]},
  { day:18, week:3, title:"Revenue models + edge case testing", morning:[
    { type:"pm", title:"Read: 7 SaaS revenue models explained", desc:"Subscription, usage-based, freemium, marketplace — each has different product implications", link:"https://www.profitwell.com/recur/all/saas-revenue-models" },
    { type:"pm", title:"Map your feature roadmap to revenue impact", desc:"For each top-5 backlog item: how does it affect CAC, LTV, or retention?" }
  ], evening:[
    { type:"ai", title:"Test your app with 10 edge cases", desc:"Bad inputs, empty inputs, very long inputs, multilingual inputs. Document what breaks." },
    { type:"ai", title:"Add error handling to your app", desc:"What should the app return when the LLM gives an unexpected response? Build a fallback." }
  ]},
  { day:19, week:3, title:"Business model write-up + AI PRD", morning:[
    { type:"pm", title:"Write: 1-page business model summary for your product", desc:"Revenue model, key metrics, LTV:CAC, what moves the needle most. Keep it for your portfolio." }
  ], evening:[
    { type:"port", title:"Build: write the PRD for your AI feedback app", desc:"Problem → User → Solution → Success metrics → Edge cases → Out of scope. Real portfolio artifact." }
  ]},
  { day:20, week:3, title:"OKRs + human-in-the-loop design", morning:[
    { type:"pm", title:"Read: Measure What Matters by John Doerr — Ch 1-3", desc:"OKRs explained through real company stories. Read the first 3 chapters.", link:"https://www.whatmatters.com/the-book" },
    { type:"pm", title:"Draft OKRs for your product area this quarter", desc:"1 objective, 2–3 measurable key results. Share with your manager for feedback." }
  ], evening:[
    { type:"ai", title:"Read: Human-in-the-loop design patterns", desc:"When should AI decide vs escalate to a human? The key design question for AI products", link:"https://docs.anthropic.com/en/docs/build-with-claude/safety-and-oversight/overview" },
    { type:"ai", title:"Add a confidence threshold to your app", desc:"If model confidence < 70%, flag for human review instead of auto-classifying" }
  ]},
  { day:21, week:3, title:"Week 3 recap + portfolio update", morning:[
    { type:"pm", title:"Review: does your roadmap connect to unit economics?", desc:"Can you defend each top-5 item in terms of LTV, CAC, or retention impact?" }
  ], evening:[
    { type:"port", title:"Publish: share your AI app PRD on LinkedIn", desc:"Post the PRD as a document or link. Frame it as 'what I learned building an AI product as a PM'." },
    { type:"ai", title:"Read: Anthropic responsible scaling policy", desc:"AI safety principles — essential reading for AI PM interviews", link:"https://www.anthropic.com/index/anthropics-responsible-scaling-policy" }
  ]},

  // ── WEEK 4 ──────────────────────────────────────────────────────────────
  { day:22, week:4, title:"Go-to-market — launch tiers", morning:[
    { type:"pm", title:"Read: How to run a product launch (Lenny's Newsletter)", desc:"Launch tier framework — T1/T2/T3 and when to use each", link:"https://www.lennysnewsletter.com/p/how-to-run-a-product-launch" },
    { type:"pm", title:"Categorise your last 3 launches by tier", desc:"Were they over or under-announced? What would you change?" }
  ], evening:[
    { type:"ai", title:"Read: AI agents in depth (Anthropic docs)", desc:"Tool use, agentic loops, what multi-step agents can and can't do", link:"https://docs.anthropic.com/en/docs/build-with-claude/agents-and-tools/agents-overview" },
    { type:"ai", title:"Experiment: add a second tool call to your app", desc:"After classifying feedback, have the app automatically look up a relevant help article topic" }
  ]},
  { day:23, week:4, title:"GTM brief template + evals basics", morning:[
    { type:"pm", title:"Build your GTM brief template", desc:"Feature → Why now → Target user → Key message → Channels → Success metric. One page max." },
    { type:"pm", title:"Write a retroactive GTM brief for your last launch", desc:"Fill in your template for a feature you shipped in the last 90 days" }
  ], evening:[
    { type:"ai", title:"Read: What are LLM evals? (Hamel Husain guide)", desc:"How teams measure AI output quality before and after shipping", link:"https://hamel.dev/blog/posts/evals/" },
    { type:"ai", title:"Write 10 eval test cases for your app", desc:"Input + expected output + pass/fail criteria. You are building a test suite." }
  ]},
  { day:24, week:4, title:"Pricing basics + running your evals", morning:[
    { type:"pm", title:"Read: Pricing strategy for PMs", desc:"Value-based vs cost-plus vs competitive pricing and their product implications", link:"https://www.lennysnewsletter.com/p/saas-pricing-strategy" },
    { type:"pm", title:"Understand your product's pricing model", desc:"How was your price set? What would change with a usage-based model?" }
  ], evening:[
    { type:"ai", title:"Run your 10 eval test cases against your app", desc:"Score each pass/fail. Document where it fails and why. This is your first eval report." },
    { type:"ai", title:"Fix the top 2 failures", desc:"Rewrite the prompts to handle those cases. Re-run evals. Measure the improvement." }
  ]},
  { day:25, week:4, title:"Channel strategy + model cost comparison", morning:[
    { type:"pm", title:"Map your product's acquisition channels", desc:"Which channels drive the best LTV:CAC? Which are underinvested?" },
    { type:"pm", title:"Read: Product-led growth fundamentals", desc:"How PLG products use the product itself as the primary growth channel", link:"https://productled.com/blog/product-led-growth-definition" }
  ], evening:[
    { type:"ai", title:"Cost comparison: run your app on Haiku vs Sonnet", desc:"Same 20 inputs. Compare: response quality, latency, and token cost. Document findings." },
    { type:"ai", title:"Read: token costs and budgeting for AI products", desc:"How to estimate and control inference costs as your product scales", link:"https://docs.anthropic.com/en/docs/resources/model-deprecations" }
  ]},
  { day:26, week:4, title:"Launch planning + AI safety", morning:[
    { type:"pm", title:"Write the GTM brief for your next upcoming feature", desc:"Use your template. Share with marketing/design stakeholders this week." },
    { type:"pm", title:"Identify: who owns each GTM channel for this launch?", desc:"Map owners to each channel — blog, email, in-app, social, sales enablement" }
  ], evening:[
    { type:"ai", title:"Read: AI safety and bias in product decisions", desc:"Anthropic's guide on responsible AI — what PMs need to know about model risks", link:"https://www.anthropic.com/responsible-disclosure-policy" },
    { type:"port", title:"Write: 'What I learned building my first AI app' post", desc:"Publish a 400-word reflection on LinkedIn. What surprised you? What broke? What would you do differently?" }
  ]},
  { day:27, week:4, title:"Outcome roadmapping + ML pipeline basics", morning:[
    { type:"pm", title:"Read: The GO Roadmap framework by Janna Bastow", desc:"Why date-driven feature roadmaps fail and how outcome roadmaps fix it", link:"https://www.prodpad.com/blog/invented-go-product-roadmap/" },
    { type:"pm", title:"Rebuild one section of your roadmap as now/next/later", desc:"Replace feature names with outcome statements. Share with one stakeholder for feedback." }
  ], evening:[
    { type:"ai", title:"Read: ML pipeline basics for PMs", desc:"Training data, fine-tuning, RLHF — what PMs need to understand without being engineers", link:"https://developers.google.com/machine-learning/crash-course/first-steps-with-tensorflow/toolkit" },
    { type:"ai", title:"Note: 3 questions to ask your engineering team about your ML model", desc:"Data quality, retraining frequency, drift detection — start the conversation" }
  ]},
  { day:28, week:4, title:"Month 1 full review", morning:[
    { type:"pm", title:"Month 1 PM review: what changed at work?", desc:"Write: which PM skills have you applied? What feedback did you get? What still feels weak?" },
    { type:"pm", title:"Update your RICE-scored backlog with 1 month of new data", desc:"Re-score the top 10. Has anything moved? What new items came in?" }
  ], evening:[
    { type:"ai", title:"Month 1 AI review: rebuild your mini-app from scratch", desc:"Without looking at your old code, rebuild the feedback classifier. It should be cleaner and faster." },
    { type:"port", title:"Month 1 portfolio check: count your published pieces", desc:"Should have 3+ pieces. If not, write one tonight. LinkedIn article or Medium post — 300 words minimum." }
  ]},

  // ── WEEK 5 ──────────────────────────────────────────────────────────────
  { day:29, week:5, title:"Product strategy — vision vs strategy", morning:[
    { type:"pm", title:"Read: Good Strategy Bad Strategy — Ch 1-3 (Rumelt)", desc:"The kernel: diagnosis, guiding policy, coherent actions.", link:"https://www.amazon.in/Good-Strategy-Bad-Surprising-Difference/dp/1781256179" },
    { type:"pm", title:"Write: what is the bad strategy version of your product area?", desc:"List features your team is doing that don't connect to a clear guiding policy" }
  ], evening:[
    { type:"ai", title:"Identify 3 AI opportunities in your current product", desc:"Map workflows in your product. Where could AI summarize, classify, generate, or recommend? Write a 1-pager." }
  ]},
  { day:30, week:5, title:"The 7 powers — moats for your product", morning:[
    { type:"pm", title:"Read: 7 Powers by Hamilton Helmer — summary", desc:"The 7 moats: scale, network effects, switching costs, branding, cornered resource, counter-positioning, process power", link:"https://medium.com/@chrisstonks/7-powers-the-foundations-of-business-strategy-by-hamilton-helmer-c4a3f5c2b1f7" },
    { type:"pm", title:"Identify which power your product currently has", desc:"Write 3 sentences on your product's current moat and what you'd do to strengthen it" }
  ], evening:[
    { type:"ai", title:"Research: AI opportunities in your product category", desc:"Search '[your product category] AI features 2025' — what are competitors building? What's missing?" },
    { type:"ai", title:"Pick 1 AI opportunity to develop into a PRD", desc:"Choose the most feasible and impactful one from your 3. This becomes your Month 2 build." }
  ]},
  { day:31, week:5, title:"Market sizing + AI use case definition", morning:[
    { type:"pm", title:"Read: TAM/SAM/SOM explained for PMs", desc:"How to size markets bottom-up — an essential skill for strategy and interviews", link:"https://www.sequoiacap.com/article/writing-a-business-plan/" },
    { type:"pm", title:"Size the market for your product's top opportunity", desc:"Rough numbers are fine. Top-down: total market × realistic share. Bottom-up: users × price." }
  ], evening:[
    { type:"ai", title:"Write the problem statement for your AI feature PRD", desc:"1 paragraph: what user problem does this solve? Why now? Why AI and not a simpler solution?" },
    { type:"ai", title:"Define success metrics for your AI feature", desc:"What does good look like? How will you measure quality, adoption, and business impact?" }
  ]},
  { day:32, week:5, title:"Write your 1-page product strategy", morning:[
    { type:"pm", title:"Write your 1-page product strategy", desc:"Answer: Who is the target user? What do we win on? What are we NOT doing? What does winning look like in 18 months?" },
    { type:"pm", title:"Share draft with your manager for 15-min discussion", desc:"Frame it as 'I'm trying to better understand our strategy — does this match your view?'" }
  ], evening:[
    { type:"ai", title:"Write user stories for your AI feature", desc:"As a [user], I want [action] so that [outcome]. Write 5 stories covering the core flow." },
    { type:"ai", title:"Read: How to write AI-specific user stories", desc:"How to account for model uncertainty and non-determinism in acceptance criteria", link:"https://www.productboard.com/blog/ai-product-management/" }
  ]},
  { day:33, week:5, title:"Strategic bets + AI PRD edge cases", morning:[
    { type:"pm", title:"Read: Reforge — how to build a product strategy", desc:"The best practical framework for product strategy, free article", link:"https://www.reforge.com/blog/product-strategy-overview" },
    { type:"pm", title:"Identify 3 things your team is doing that DON'T fit your strategy", desc:"Strategy means saying no. What would you stop if you had the courage?" }
  ], evening:[
    { type:"ai", title:"Write edge cases and out-of-scope for your AI PRD", desc:"What happens when the model is wrong? What should the product do? What are you explicitly not building?" },
    { type:"ai", title:"Read: responsible AI principles for product teams", desc:"What PMs need to think about: bias, fairness, transparency, user trust", link:"https://www.anthropic.com/claude-ai-safety" }
  ]},
  { day:34, week:5, title:"North star metric + complete AI PRD", morning:[
    { type:"pm", title:"Read: What is a north star metric? (Lenny's Newsletter)", desc:"The definitive guide with examples from Airbnb, Spotify, Duolingo", link:"https://www.lennysnewsletter.com/p/north-star-metric" },
    { type:"pm", title:"Define the north star metric for your product", desc:"One metric that captures the core value you deliver to users. Not revenue. Not DAU." }
  ], evening:[
    { type:"ai", title:"Complete your AI feature PRD", desc:"Full document: Problem → Users → Solution → AI approach → Metrics → Edge cases → Out of scope → Open questions" },
    { type:"port", title:"Publish your AI feature PRD", desc:"Post on LinkedIn as a document. Title: 'How I'd build [feature] with AI — a PM spec'. Strongest portfolio piece so far." }
  ]},
  { day:35, week:5, title:"Week 5 recap + start AI prototype", morning:[
    { type:"pm", title:"Refine your 1-page product strategy based on manager feedback", desc:"Incorporate what you learned. This doc should now feel presentable to a VP." },
    { type:"pm", title:"Read: Escaping the Build Trap by Melissa Perri — Ch 1-4", desc:"Why output-focused teams fail and how outcome-focused teams win", link:"https://www.amazon.in/Escaping-Build-Trap-Effective-Management/dp/149195263X" }
  ], evening:[
    { type:"ai", title:"Begin building your AI feature prototype", desc:"Start coding the core flow of the AI feature you specified. Use your existing app as a foundation." },
    { type:"ai", title:"Test: does your prototype do what the PRD says?", desc:"Run through each user story manually. Mark which pass and which need fixes." }
  ]},

  // ── WEEK 6 ──────────────────────────────────────────────────────────────
  { day:36, week:6, title:"Metrics + AI prototype evals", morning:[
    { type:"pm", title:"Read: Measure What Matters by John Doerr — Ch 4-7", desc:"How Google, Intel, and Bono use OKRs. Focus on Chapter 5 on grading." },
    { type:"pm", title:"Write OKRs for your product area (refine from Week 3)", desc:"1 strong objective, 3 measurable key results. Get manager sign-off this week." }
  ], evening:[
    { type:"ai", title:"Add evals to your AI feature prototype", desc:"Write 15 test cases. Run them. Score pass/fail. Document failure patterns." },
    { type:"ai", title:"Refine your prototype based on eval failures", desc:"Fix the top 3 failures. Re-run. Measure improvement. This is what 'iterating on AI' means in practice." }
  ]},
  { day:37, week:6, title:"Metric trees + cost tradeoff analysis", morning:[
    { type:"pm", title:"Map supporting metrics to your north star", desc:"Draw the metric tree: north star → leading indicators → feature-level metrics" },
    { type:"pm", title:"Audit: does each sprint item connect to a metric?", desc:"For this sprint — can you name the metric each ticket is trying to move?" }
  ], evening:[
    { type:"ai", title:"Run cost analysis: Haiku vs Sonnet for your AI feature", desc:"Estimate monthly API cost at 1K, 10K, 100K users. Which model can you afford at scale?" },
    { type:"ai", title:"Document your model selection rationale", desc:"1 page: why you chose this model, what you'd switch to at different scale points, latency benchmarks" }
  ]},
  { day:38, week:6, title:"Feature success metrics + AI teardown", morning:[
    { type:"pm", title:"For every ticket in your backlog top 5: write the success metric", desc:"'We will know this worked if [metric] moves by [X] in [timeframe]' — write this before building starts" },
    { type:"pm", title:"Read: Amplitude guide to product metrics", desc:"Retention, engagement, activation — how to choose the right metric for each feature type", link:"https://amplitude.com/blog/product-metrics" }
  ], evening:[
    { type:"port", title:"Write and publish: AI product teardown of Perplexity or Notion AI", desc:"600 words. Use your competitive analysis framework + product strategy lens. What works, what doesn't, what you'd build next." }
  ]},
  { day:39, week:6, title:"Data storytelling + human-in-the-loop UX", morning:[
    { type:"pm", title:"Practice: present last sprint's metrics to a friend or colleague", desc:"Can you tell a story from metric to decision in 5 minutes? Practice it out loud." },
    { type:"pm", title:"Read: data storytelling for PMs (Mode Analytics guide)", desc:"How to turn dashboards into decisions that get stakeholder buy-in", link:"https://mode.com/blog/data-storytelling/" }
  ], evening:[
    { type:"ai", title:"Design the human review flow for your AI feature", desc:"When confidence < threshold: what UI does the user see? What does the reviewer see? Build a simple mockup." },
    { type:"ai", title:"Read: UX patterns for AI features", desc:"How to design for uncertainty, latency, and model errors in user-facing AI products", link:"https://pair.withgoogle.com/guidebook/" }
  ]},
  { day:40, week:6, title:"Stakeholder RACI mapping", morning:[
    { type:"pm", title:"Read: RACI explained for PMs", desc:"Responsible, Accountable, Consulted, Informed — how to stop alignment surprises", link:"https://www.productplan.com/glossary/raci-chart/" },
    { type:"pm", title:"Build RACI for your current active project", desc:"List every stakeholder. Assign R/A/C/I. Identify who is missing from your alignment process." }
  ], evening:[
    { type:"ai", title:"Add your AI feature to your portfolio page", desc:"Add a section: 'AI product I built' — screenshot, PRD link, key learnings. Keep it factual." },
    { type:"port", title:"Update LinkedIn Featured: add your AI PRD and teardown", desc:"Both pieces should now be prominently visible on your profile" }
  ]},
  { day:41, week:6, title:"Fix stakeholder gaps + portfolio website", morning:[
    { type:"pm", title:"Identify 1 stakeholder who is regularly surprised by your decisions", desc:"Schedule a 20-min 1:1. Share your roadmap and RACI. Fix one alignment gap intentionally." },
    { type:"pm", title:"Listen: Lenny's Podcast — how to influence without authority", desc:"One episode on stakeholder management while commuting", link:"https://www.lennyspodcast.com/" }
  ], evening:[
    { type:"port", title:"Build your portfolio page on Notion or Typedream", desc:"Sections: About → PM work → AI project → Published writing → Contact. Keep it clean.", link:"https://typedream.com/" }
  ]},
  { day:42, week:6, title:"Week 6 recap + portfolio launch", morning:[
    { type:"pm", title:"Review: are you pre-aligning stakeholders before reviews now?", desc:"Think back to the last 3 decisions. Were there surprises? What would RACI have changed?" },
    { type:"pm", title:"PRD writing practice: write acceptance criteria for 5 backlog items", desc:"Testable, specific, one success condition each. Share with your eng lead for feedback." }
  ], evening:[
    { type:"port", title:"Launch your portfolio page", desc:"Share the link in a LinkedIn post: 'I spent 6 weeks building PM + AI skills — here's what I made.' Tag 2-3 people who helped you." },
    { type:"ai", title:"Read: AI PM career paths (Lenny's Newsletter)", desc:"How experienced PMs are transitioning into AI PM roles", link:"https://www.lennysnewsletter.com/p/ai-product-manager" }
  ]},

  // ── WEEK 7 ──────────────────────────────────────────────────────────────
  { day:43, week:7, title:"PRD mastery — merging PM + AI specs", morning:[
    { type:"pm", title:"Read: How to write a great PRD (Lenny's Newsletter)", desc:"Real PRD examples from Figma and Slack PMs — reverse-engineer their structure", link:"https://www.lennysnewsletter.com/p/how-to-write-a-product-requirements" },
    { type:"pm", title:"Audit your last PRD: what was missing?", desc:"Compare against the structure in Lenny's article. What sections were weak or absent?" }
  ], evening:[
    { type:"ai", title:"Build: multi-step AI agent — feedback to brief pipeline", desc:"Step 1: collect feedback → Step 2: classify by theme → Step 3: summarize top issues → Step 4: generate a 1-page brief" }
  ]},
  { day:44, week:7, title:"Engineering-ready specs + agent testing", morning:[
    { type:"pm", title:"Rewrite one PRD with full acceptance criteria and edge cases", desc:"Pick a real upcoming feature. Make it so complete an engineer can build it without asking questions." },
    { type:"pm", title:"Get feedback from an engineer on your PRD", desc:"Ask: 'What questions do you still have after reading this?' Fix every question they raise." }
  ], evening:[
    { type:"ai", title:"Test your agent with adversarial inputs", desc:"Empty feedback, angry feedback, feedback in other languages, 1-word feedback. Document all failure modes." },
    { type:"ai", title:"Add graceful degradation to your agent", desc:"If any step fails, the agent should fall back gracefully rather than crash" }
  ]},
  { day:45, week:7, title:"Case-style problem solving — estimation", morning:[
    { type:"pm", title:"Read: PM estimation questions guide (Exponent)", desc:"Top-down vs bottom-up estimation frameworks with worked examples", link:"https://www.tryexponent.com/blog/estimation-questions-guide" },
    { type:"pm", title:"Practice: estimate number of ATMs in Bangalore", desc:"Work through it out loud. Top-down AND bottom-up. Sanity check both." }
  ], evening:[
    { type:"ai", title:"Document your agent's architecture", desc:"Draw a simple flow diagram: input → step 1 → step 2 → step 3 → output. Note where errors can occur." },
    { type:"ai", title:"Read: how AI PMs think about system design", desc:"What a PM needs to understand about latency, caching, and scaling for AI features", link:"https://newsletter.pragmaticengineer.com/p/ai-engineering" }
  ]},
  { day:46, week:7, title:"Product design questions + agent refinement", morning:[
    { type:"pm", title:"Practice: design a product for elderly users in India", desc:"Framework: Clarify → User → Goals → Pain points → Solutions → Prioritize → Metrics. Time: 10 min." },
    { type:"pm", title:"Record yourself answering a product design question", desc:"Watch it back. Where did you hesitate? Where did you rush? What would you cut?" }
  ], evening:[
    { type:"ai", title:"Refine agent output quality", desc:"Run 20 real feedback strings through the full pipeline. Rate each output 1-5. Fix the worst-scoring cases." },
    { type:"ai", title:"Write: what I learned building an AI agent", desc:"Draft a 400-word reflection — failures, fixes, surprises. You'll publish this soon." }
  ]},
  { day:47, week:7, title:"Metrics drop questions + agent portfolio", morning:[
    { type:"pm", title:"Practice: 'Instagram Stories engagement dropped 15% — diagnose it'", desc:"Build an issue tree: internal vs external → platform vs content → audience vs feature → hypothesis list" },
    { type:"pm", title:"Practice 2 more metrics drop questions", desc:"DAU dropped on a Tuesday. Checkout conversion fell 8%. Work through each systematically." }
  ], evening:[
    { type:"port", title:"Write and publish: 'I built an AI agent as a PM — here's what I learned'", desc:"Include: what it does, the architecture, 3 things that broke, what you'd do differently. Publish on LinkedIn or Medium." },
    { type:"ai", title:"Finalize your agent: clean code, clear README, shareable link", desc:"Make it presentable. Push to GitHub or share via Replit. Portfolio artifact you can demo in interviews." }
  ]},
  { day:48, week:7, title:"User research + AI accuracy tradeoffs", morning:[
    { type:"pm", title:"Read: The Mom Test by Rob Fitzpatrick — Ch 1-3", desc:"The best book on user interviews. Changes how you ask questions forever.", link:"https://www.momtestbook.com/" },
    { type:"pm", title:"Schedule 3 user interviews for this week or next", desc:"Talk to real users about a problem area in your product. Use Mom Test principles." }
  ], evening:[
    { type:"ai", title:"Read: precision vs recall tradeoffs for AI PMs", desc:"When is a false positive worse than a false negative? How do you set thresholds?", link:"https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall" },
    { type:"ai", title:"Apply: what threshold should your feedback classifier use?", desc:"Write a 1-paragraph rationale for why you chose your confidence threshold" }
  ]},
  { day:49, week:7, title:"Week 7 recap + daily case habit", morning:[
    { type:"pm", title:"Daily habit: 1 case question every morning from now on", desc:"Set a 10-min calendar block before Slack. Estimation or product design — alternate daily." },
    { type:"pm", title:"Conduct 1 user interview this week", desc:"Use Mom Test principles. Record or take detailed notes. Synthesize 3 key insights." }
  ], evening:[
    { type:"ai", title:"Read: fine-tuning vs prompt engineering — when to use which", desc:"What PMs need to know about when to fine-tune a model vs improve the prompt", link:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
    { type:"port", title:"Portfolio review: you should have 4+ pieces now", desc:"Teardown, AI app PRD, AI product teardown, agent write-up. If anything is missing — write it tonight." }
  ]},

  // ── WEEK 8 ──────────────────────────────────────────────────────────────
  { day:50, week:8, title:"Agile / scrum — running better sprints", morning:[
    { type:"pm", title:"Read: The Scrum Guide (official, 13 pages)", desc:"The actual source material — free and definitive", link:"https://scrumguides.org/scrum-guide.html" },
    { type:"pm", title:"Audit your last sprint: % of stories with clear acceptance criteria", desc:"Count them. If it's less than 80%, that's your biggest process gap." }
  ], evening:[
    { type:"ai", title:"Define your capstone project", desc:"Plan your final AI product concept with research, spec, and prototype. Define the problem today." },
    { type:"ai", title:"Research: find 5 real users who have this problem", desc:"Reddit, Twitter/X, App Store reviews, LinkedIn. Document what they say in their own words." }
  ]},
  { day:51, week:8, title:"Backlog grooming + capstone research", morning:[
    { type:"pm", title:"Read: Shape Up by Basecamp — Ch 1-4 (free online)", desc:"A better mental model for planning than textbook scrum. Focus on 'shaping' before scheduling.", link:"https://basecamp.com/shapeup" },
    { type:"pm", title:"Groom your backlog: every top-10 item must have acceptance criteria", desc:"Block 30 min. Write criteria for any item that's missing it. Check with your eng lead." }
  ], evening:[
    { type:"ai", title:"Write problem statement + user research for capstone PRD", desc:"Problem → Who has it → Evidence → Why existing solutions fail. Use real user quotes you found." },
    { type:"ai", title:"Sketch the AI solution: what will the product do?", desc:"Core flow in 5 steps. What is the AI doing in each step? What is the human doing?" }
  ]},
  { day:52, week:8, title:"Exec communication + capstone PRD", morning:[
    { type:"pm", title:"Read: Writing an executive update (Gibson Biddle's framework)", desc:"How to communicate product decisions to leadership in 1 page", link:"https://gibsonbiddle.medium.com/" },
    { type:"pm", title:"Write a 1-page exec update for your current product area", desc:"Status, key decisions, risks, what you need from leadership. Share with your manager." }
  ], evening:[
    { type:"ai", title:"Write the solution section of your capstone PRD", desc:"How does the AI feature work? User flow, AI role, edge cases, success criteria." },
    { type:"ai", title:"Start building the capstone prototype", desc:"Get the core AI flow working — even rough. You'll refine in Week 9." }
  ]},
  { day:53, week:8, title:"Strategy memo + capstone prototype", morning:[
    { type:"pm", title:"Write a strategy memo for one current decision", desc:"1 page: context → options → recommendation → open questions. Use this format for your next team decision." },
    { type:"pm", title:"Practice: present your strategy doc in 5 minutes out loud", desc:"Time yourself. Can you get to the recommendation in under 2 minutes?" }
  ], evening:[
    { type:"ai", title:"Build capstone: get core AI feature working end-to-end", desc:"Focus on the happy path first. Don't worry about edge cases yet." },
    { type:"ai", title:"Run first 10 tests on your capstone prototype", desc:"Does it do what the PRD says? Mark what passes, what fails." }
  ]},
  { day:54, week:8, title:"Influencing without authority + capstone evals", morning:[
    { type:"pm", title:"Listen: Lenny's Podcast — influencing without authority", desc:"One 45-min episode on how to get buy-in without a reporting line", link:"https://www.lennyspodcast.com/" },
    { type:"pm", title:"Map: 3 decisions you need to influence this month", desc:"For each: who decides? What do they care about? What data would move them?" }
  ], evening:[
    { type:"ai", title:"Refine capstone: add evals, fix top failures", desc:"Write 20 test cases. Fix the worst 3 failure modes. Re-run and measure." },
    { type:"ai", title:"Write model selection rationale for capstone", desc:"Why this model? What would change at scale? How do you handle latency for users?" }
  ]},
  { day:55, week:8, title:"PM network + portfolio final check", morning:[
    { type:"pm", title:"Reach out to 5 PMs this week for 20-min coffee chats", desc:"Personalized messages only. Reference their specific work. Come with 3 prepared questions." },
    { type:"pm", title:"Prepare your 3 coffee chat questions", desc:"Focus on: their day-to-day, how they got there, what they wish they'd learned earlier" }
  ], evening:[
    { type:"port", title:"Portfolio final check: does it show both PM and AI work?", desc:"Ensure you have: teardown, AI PRD, AI project, agent write-up, strategy piece. Fill any gaps." },
    { type:"port", title:"Write a featured LinkedIn post: '60 days of PM + AI learning'", desc:"What you built, what changed at work, what surprised you. Strongest signal to recruiters." }
  ]},
  { day:56, week:8, title:"Month 2 full recap", morning:[
    { type:"pm", title:"Month 2 PM review: which skills have you applied at work?", desc:"Go through your 6 gaps. Rate yourself again 1-5. What moved? What is still weak?" },
    { type:"pm", title:"Identify your strongest PM story from the last 2 months", desc:"A moment where you used a new skill and it made a visible difference. Use this in interviews." }
  ], evening:[
    { type:"ai", title:"Month 2 AI review: explain your AI project to a non-technical person", desc:"Practice explaining your agent and capstone in 2 minutes. Record yourself." },
    { type:"port", title:"Month 2 portfolio: count everything published and built", desc:"Should have: 5+ published pieces, 2 built AI projects, 1 PRD, portfolio page live. Fill any gap." }
  ]},

  // ── WEEK 9 ──────────────────────────────────────────────────────────────
  { day:57, week:9, title:"Interview prep — PM narrative", morning:[
    { type:"pm", title:"Write your 60-second PM narrative", desc:"Connect: data background (92%) → PM experience → AI literacy → what you've built. Write, refine, memorize." },
    { type:"pm", title:"Practice narrative out loud 5 times today", desc:"Time each one. It should feel natural by attempt 5, not rehearsed." }
  ], evening:[
    { type:"ai", title:"Complete capstone PRD", desc:"Full document: Problem → Research → Solution → AI approach → Metrics → Edge cases → Out of scope → What's next" },
    { type:"port", title:"Publish capstone PRD as your flagship portfolio piece", desc:"This is your best work. Title it clearly. Share on LinkedIn with a 200-word context post." }
  ]},
  { day:58, week:9, title:"STAR stories + capstone prototype final", morning:[
    { type:"pm", title:"Write your 5 STAR stories mapped to PM competencies", desc:"1. Prioritization under pressure 2. Stakeholder conflict 3. Data-driven decision 4. Failed experiment 5. Cross-functional win" },
    { type:"pm", title:"Practice each STAR story out loud", desc:"2 minutes max each. If you're going over, cut the situation and result — expand the action." }
  ], evening:[
    { type:"ai", title:"Final capstone prototype: clean it up", desc:"Remove dead code, write a clear README, add your name and what it does. Push to GitHub." },
    { type:"ai", title:"Create a 2-min demo video of your AI project", desc:"Screen record yourself using the app. Narrate what it does and why you built it. Upload to LinkedIn." }
  ]},
  { day:59, week:9, title:"Estimation sprint", morning:[
    { type:"pm", title:"Estimation: how many coffee shops are in Mumbai?", desc:"Bottom-up: population × coffee shop density. Cross-check top-down. 10 min max." },
    { type:"pm", title:"Estimation: how many WhatsApp messages sent in India per day?", desc:"Users × messages per day per user. Sanity-check with data transfer estimates." }
  ], evening:[
    { type:"ai", title:"Practice: explain your AI project in a mock interview", desc:"Ask Claude to play interviewer: 'Tell me about an AI product you built.' Practice 3 times." },
    { type:"ai", title:"Read: Top AI PM interview questions and how to answer them", desc:"What interviewers look for: tradeoffs, evals, human-in-the-loop, model selection", link:"https://www.tryexponent.com/blog/ai-product-manager-interview" }
  ]},
  { day:60, week:9, title:"Product design questions + target company list", morning:[
    { type:"pm", title:"Practice: design an AI assistant for doctors in rural India", desc:"Full framework. 10 min. Focus on constraints: low connectivity, voice-first, vernacular languages." },
    { type:"pm", title:"Practice: how would you improve Google Maps?", desc:"User → use case → pain point → solution → metric. 10 min. Prioritize one change." }
  ], evening:[
    { type:"port", title:"Build your target company list: 15 roles", desc:"Mix: AI-first startups, AI PM programs at large companies, BizOps roles. Research each company's product." },
    { type:"port", title:"Connect with 1 insider at each of your top 5 target companies", desc:"LinkedIn message: reference specific work, ask for 15 min — not 'can I have a referral'." }
  ]},
  { day:61, week:9, title:"Mock interview #1", morning:[
    { type:"pm", title:"Mock interview: ask Claude to interview you for 30 min", desc:"Mix: tell me about yourself → product design → metrics drop → stakeholder scenario. Get feedback." },
    { type:"pm", title:"Write down every question you stumbled on", desc:"Those are your gaps. Spend 15 min each on the top 2 tonight." }
  ], evening:[
    { type:"ai", title:"Practice: explain RAG to a non-technical stakeholder", desc:"No jargon. 90 seconds max. Practice until it sounds like natural conversation." },
    { type:"ai", title:"Practice: when would you NOT use AI for a feature?", desc:"A common AI PM interview question. Prepare a structured answer with 3 clear reasons." }
  ]},
  { day:62, week:9, title:"Mock interview #2 + application prep", morning:[
    { type:"pm", title:"Mock interview with a real PM if possible", desc:"Pramp, a PM you've networked with, or a coffee chat contact. Ask for brutal feedback." },
    { type:"pm", title:"Debrief: what was the toughest question? Prepare a better answer.", desc:"Write out the improved answer. Practice it until it's smooth." }
  ], evening:[
    { type:"port", title:"Tailor your LinkedIn for AI PM roles", desc:"Headline: include 'AI products' or 'AI PM'. Summary: lead with your data strength + AI work." },
    { type:"port", title:"Write your cover note template for AI PM applications", desc:"150 words max. Lead with your AI project. Reference your data background. End with the specific role." }
  ]},
  { day:63, week:9, title:"Week 9 readiness check", morning:[
    { type:"pm", title:"Readiness check: answer these 5 without hesitation", desc:"1. Tell me about yourself 2. Walk me through a product you'd improve 3. Stakeholder conflict story 4. Metric dropped — diagnose it 5. Design a product for [user]" },
    { type:"pm", title:"Fill any gaps from the readiness check with focused practice", desc:"Spend 20 min on each question that felt weak" }
  ], evening:[
    { type:"ai", title:"AI readiness check: answer these without hesitation", desc:"1. How do LLMs work? 2. What is RAG? 3. When would you not use AI? 4. How do you evaluate AI quality? 5. Walk me through your AI project." },
    { type:"port", title:"Final portfolio check before applications", desc:"Everything should be live, linked, and clean. Test every link. Read every piece as if you're a recruiter." }
  ]},

  // ── WEEK 10 ─────────────────────────────────────────────────────────────
  { day:64, week:10, title:"Applications — first batch", morning:[
    { type:"pm", title:"Apply to your first 5 target roles", desc:"Personalised cover note for each. Lead with AI project + data background. Apply through referral if possible." },
    { type:"pm", title:"Send insider outreach to 5 more companies", desc:"Before applying cold — try to get a referral conversation first" }
  ], evening:[
    { type:"ai", title:"Practice: model cost tradeoff question", desc:"'Your AI feature's API cost is 3x the budget — what do you do?' Prepare a structured answer." },
    { type:"ai", title:"Practice: human-in-the-loop design question", desc:"'Where should your AI feature involve human review?' Walk through your actual design decision." }
  ]},
  { day:65, week:10, title:"Second batch applications", morning:[
    { type:"pm", title:"Apply to roles 6-10", desc:"Tailored cover notes. Reference something specific about each company's product." },
    { type:"pm", title:"Practice: 2 more estimation questions", desc:"How many Ola drivers are in Bengaluru? How many Swiggy orders per hour in India?" }
  ], evening:[
    { type:"ai", title:"Read: The future of AI PMs (2025-2026 landscape)", desc:"What skills are increasingly valued, which roles are emerging, how the job is evolving", link:"https://www.lennysnewsletter.com/p/the-rise-of-the-ai-pm" },
    { type:"port", title:"Engage with 3 PM LinkedIn posts today", desc:"Thoughtful comments (3+ sentences) on posts by PMs at target companies. Builds visibility." }
  ]},
  { day:66, week:10, title:"Third batch + mock interview #3", morning:[
    { type:"pm", title:"Mock interview #3 — focus on AI PM questions", desc:"Product design for an AI feature, explain your AI project, model tradeoff question, eval question." },
    { type:"pm", title:"Apply to roles 11-15", desc:"Complete your 15 target applications. Track status in a spreadsheet." }
  ], evening:[
    { type:"ai", title:"Evaluate: Reforge AI for PMs course for continued learning", desc:"Review whether to enroll post Day 90 for structured continued learning", link:"https://www.reforge.com/courses/ai-for-product-managers" },
    { type:"ai", title:"Reflect: what do you still not understand about AI?", desc:"Write a list. These are your continued learning priorities beyond Day 90." }
  ]},
  { day:67, week:10, title:"Coffee chats + continued learning plan", morning:[
    { type:"pm", title:"Coffee chat follow-ups: send thank-you notes within 24hrs", desc:"Reference something specific they said. Include a link to your portfolio." },
    { type:"pm", title:"Practice: giving and receiving feedback question", desc:"'Tell me about a time you received critical feedback on your product.' Prepare your STAR story." }
  ], evening:[
    { type:"port", title:"Publish: '90 days of PM + AI — what changed'", desc:"What you built, what you learned, how you're different. Link your portfolio. Strongest signal." },
    { type:"ai", title:"Plan your post-90-day learning: pick one structured course", desc:"Maven AI PM Bootcamp, Reforge AI for PMs, or DeepLearning.ai for PMs. Enroll or schedule." }
  ]},
  { day:68, week:10, title:"Reassessment day", morning:[
    { type:"pm", title:"Re-run the self-assessment tracker", desc:"Go back to the original tracker. Re-rate every skill. Compare to Day 1 scores. Document the delta." },
    { type:"pm", title:"Celebrate wins — write down 5 concrete improvements", desc:"Not 'I learned more' — specific things: 'I now RICE-score every backlog item before sprint planning'" }
  ], evening:[
    { type:"ai", title:"Re-rate your AI skills honestly", desc:"LLM literacy, prompt engineering, building, evals, agents. Where are you now vs Day 1?" },
    { type:"port", title:"Count everything you shipped in 90 days", desc:"Published pieces, AI apps built, PRDs written, interviews done, applications sent. Write it down." }
  ]},
  { day:69, week:10, title:"Consolidation + interview follow-ups", morning:[
    { type:"pm", title:"Follow up on all 15 applications (if no response after 5+ days)", desc:"Short, professional check-in email. Reference your portfolio link. One paragraph max." },
    { type:"pm", title:"Continue daily case practice: 1 question every morning", desc:"This habit should continue beyond Day 90. 10 min daily compounds significantly." }
  ], evening:[
    { type:"ai", title:"Continue building: iterate on your capstone based on learnings", desc:"Add one new feature or improve evaluation quality. Keep shipping." },
    { type:"port", title:"Audit your LinkedIn for any outdated or missing information", desc:"Ensure all pieces, projects, and new skills are reflected accurately" }
  ]},
  { day:70, week:10, title:"Day 70 — Final reflection", morning:[
    { type:"pm", title:"Write: your 3-month PM transformation letter to yourself", desc:"Where you started, what changed, what you're most proud of, what's next." },
    { type:"pm", title:"Identify your single biggest remaining PM gap", desc:"One thing. Make a specific plan to close it in the next 30 days." }
  ], evening:[
    { type:"ai", title:"Identify your single biggest remaining AI gap", desc:"One thing. Find one specific resource and schedule time to address it." },
    { type:"port", title:"Share your portfolio with someone you respect and ask for feedback", desc:"A senior PM, a mentor, or a hiring manager you've built a relationship with. Get real feedback." }
  ]}
];
