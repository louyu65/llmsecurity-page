window.SITE_CONTENT_EN = {
  meta: {
    title: "LLM Security | Enterprise AI Security",
    description:
      "A lightweight enterprise AI security website for prompt injection defense, AI content forensics, evaluation gates, and lead capture."
  },
  brand: { subtitle: "AI Security Infrastructure" },
  nav: {
    products: "Products",
    workflow: "Workflow",
    proof: "Proof",
    contact: "Contact",
    demo: "Book a Demo"
  },
  hero: {
    eyebrow: "Enterprise AI Security",
    title: "Move LLMs into production instead of leaving them in a sandbox.",
    subtitle:
      "LLM Security is built for enterprise assistants, RAG systems, and agents, with a focus on runtime defense, AI content forensics, and release gating that fits real delivery workflows.",
    primaryCta: "Book a Demo",
    secondaryCta: "Explore Products",
    tags: ["Prompt Injection Defense", "AI Content Detection", "Multilingual Baselines", "Enterprise Rollout Readiness"]
  },
  signalBoard: {
    eyebrow: "Security Signal Board",
    title: "Upgrade security from “add a model” to “ship, regress, and audit.”",
    cards: [
      { title: "Runtime Guardrails", detail: "Covers prompt injection, tool misuse, data leakage, and obfuscation attacks." },
      { title: "Evidence Output", detail: "Returns structured evidence instead of a black-box score." },
      { title: "Release Modes", detail: "Supports shadow, soft enforcement, and hard-block rollout modes." },
      { title: "Multilingual Scope", detail: "Current assets already cover English, Chinese, and mixed-language traffic." }
    ]
  },
  heroDiagram: {
    coreLabel: "Production Security Graph",
    coreTitle: "LLM Security Control Plane",
    coreDetail: "Combine runtime defense, content forensics, and release gates into one observable, regression-ready delivery loop.",
    modules: [
      { title: "LLM Firewall", detail: "Runtime prompt-injection defense", metric: "allow / sanitize / block" },
      { title: "GenDetector", detail: "Evidence-first content forensics", metric: "ai_likely / human_likely / inconclusive" },
      { title: "Release Gate", detail: "Multilingual baseline decision layer", metric: "17,671 multilingual samples" }
    ],
    flow: "Traffic intake -> detection fusion -> evidence output -> release gate"
  },
  sections: {
    products: {
      eyebrow: "Products",
      title: "Start with the three parts of enterprise AI most likely to fail under pressure.",
      description: "Everything shown here is derived from product modules and engineering assets that already exist in the repository."
    },
    quickstart: {
      eyebrow: "Integration & Demo",
      title: "Understand rollout in three steps, then try it live",
      description: "This section is execution-focused, not narrative-heavy."
    },
    workflow: {
      eyebrow: "Operating Model",
      title: "A lightweight path for selling and delivering AI security products.",
      description: "From traffic intake to release gates, the site structure follows the real delivery chain."
    },
    scenarios: {
      eyebrow: "Use Cases",
      title: "Built for teams that need to prove safety before scaling AI usage.",
      description: "Especially relevant for enterprise knowledge bases, copilots, agents, and high-risk content workflows."
    },
    proof: {
      eyebrow: "Proof & Principles",
      title: "Why this stack is credible"
    },
    cta: {
      eyebrow: "For Security Teams",
      title: "If you are evaluating RAG, copilots, or agents, establish a security baseline before you scale.",
      description: "Best suited for teams with real deployment plans, rollout reviews, or a need for a defendable control layer.",
      button: "Contact Sales"
    },
    contact: {
      eyebrow: "Contact",
      title: "Share your use case and we will route the conversation as a demo, technical evaluation, or POC discussion.",
      description: "The form stays short for lead capture, and a webhook or CRM endpoint can be plugged in later.",
      engagements: [
        { title: "Product demo", body: "For teams that want a quick view of runtime defense, content forensics, and release gates together." },
        { title: "Technical evaluation", body: "For teams that already have RAG, copilots, or agents in flight and need rollout-risk evaluation." },
        { title: "POC discussion", body: "For teams preparing to route traffic, establish baselines, or explore custom policy work." }
      ]
    }
  },
  metrics: [
    { value: "98.39%", label: "Unified benchmark accuracy", detail: "Current `nb_plus_rules` result on the multilingual benchmark.", source: "Source: LLMFirewall/README.md" },
    { value: "96.18%", label: "Block recall", detail: "Current recall for blocking under the recommended default mode.", source: "Source: LLMFirewall/README.md" },
    { value: "16.072ms", label: "Average offline latency", detail: "Single-sample engine timing after a 20-sample warm-up.", source: "Source: LLMFirewall/README.md" },
    { value: "17,671", label: "Master multilingual samples", detail: "Unified EN + translated ZH + native or mixed ZH baseline.", source: "Source: LLMFirewall/README.md" }
  ],
  quickStart: {
    stepsTitle: "Integration Steps",
    demoTitle: "Live Demo",
    demoDescription: "Open the LLM Firewall playground to see real input, detection signals, and action decisions.",
    demoButton: "Open Playground",
    demoUrl: "https://llmfirewall.louyu.tech/playground",
    contactButton: "Book a Call",
    outcomeTitle: "Typical Outcomes",
    steps: [
      { title: "Scope your flow", detail: "Define whether the target is RAG, copilot, or agent workflow, then isolate high-risk paths." },
      { title: "Attach runtime guard", detail: "Start with shadow or soft enforcement to observe live risk distribution safely." },
      { title: "Gate the release", detail: "Connect benchmark and gate results into release review before broader rollout." }
    ],
    outcomes: [
      { label: "Runtime action", value: "allow / allow_with_sanitization / block" },
      { label: "Forensics output", value: "verdict + evidence + remediation + confidence" },
      { label: "Release recommendation", value: "shadow / soft / hard-block based on baseline data" }
    ]
  },
  products: [
    {
      id: "llm-firewall",
      tag: "Runtime Guard",
      title: "LLM Firewall",
      description: "A runtime security layer that brings rule detection, semantic checks, model scoring, and policy execution into one deployable path.",
      bullets: [
        "Returns allow / allow_with_sanitization / block decisions.",
        "Ships with HTTP service, health checks, Prometheus metrics, and a playground.",
        "Current guidance recommends shadow mode or soft enforcement first."
      ],
      cta: "View Details",
      liveDemoLabel: "Live Demo",
      liveDemoUrl: "https://llmfirewall.louyu.tech/playground",
      cardPreview: {
        label: "Runtime Path",
        title: "Prompt Injection Decision Flow",
        rows: [
          { key: "Input", value: "user_input + retrieved_context" },
          { key: "Detection", value: "rules + semantic + nb" },
          { key: "Action", value: "allow / sanitize / block" }
        ],
        outcome: "Default mode nb_plus_rules with rule_only fallback"
      },
      detail: {
        eyebrow: "Runtime Defense",
        title: "Turn prompt injection defense into a deployable runtime control layer.",
        subtitle: "Best for teams that want to observe real traffic risk before tightening blocking behavior.",
        primaryCta: "Book a Firewall Demo",
        liveDemoCta: "Open Playground",
        secondaryCta: "Back to Home",
        highlights: ["Prompt Injection Detection", "Sanitization Policy", "HTTP Service & Metrics", "Shadow / Soft rollout"],
        snapshotTitle: "Best fit problems",
        snapshot: ["Real traffic risk observation", "Tool-call and prompt-injection control", "Pre-release security gates"],
        stats: [
          { value: "nb_plus_rules", label: "Default runtime mode", detail: "Uses rules plus NB fusion when the model is available." },
          { value: "98.39%", label: "Unified benchmark accuracy", detail: "Current recommended-mode result on the multilingual benchmark." },
          { value: "shadow / soft", label: "Recommended rollout", detail: "Current repository guidance favors shadow or soft enforcement." }
        ],
        sections: [
          {
            title: "Core capabilities",
            points: ["Detects override attempts, obfuscation, authority spoofing, semantic camouflage, and tool-call injection.", "Returns action decisions instead of only a risk score.", "Includes health checks, metrics, and a browser playground."]
          },
          {
            title: "Integration path",
            points: ["Can start with single-request evaluation or sit in front of an online service.", "Offline benchmarks, online runtime, and release gates rely on the same defense core.", "Useful for teams that need observability, regression discipline, and staged rollout."]
          }
        ],
        useCases: ["Enterprise knowledge bases and RAG assistants", "Agents with tool-calling access", "Copilots that need system-prompt protection"],
        sources: [
          "LLMFirewall/README.md",
          "LLMFirewall/service/app.py",
          "LLMFirewall/tests/",
          "https://llmfirewall.louyu.tech/playground"
        ]
      }
    },
    {
      id: "gendetector",
      tag: "Content Forensics",
      title: "GenDetector",
      description: "A text-focused AI-generated content detection and forensics module designed for interpretability, auditability, and reviewability.",
      bullets: [
        "Uses standardized verdicts: ai_likely, human_likely, and inconclusive.",
        "Supports language features, provenance signals, rule matches, and model signals.",
        "Fits moderation, governance, and human review workflows."
      ],
      cta: "View Details",
      cardPreview: {
        label: "Forensics Output",
        title: "Reviewable Detection Result",
        rows: [
          { key: "verdict", value: "ai_likely / human_likely / inconclusive" },
          { key: "evidence", value: "rules, provenance, model signals" },
          { key: "response", value: "summary + remediation + confidence" }
        ],
        outcome: "Falls back to inconclusive when evidence is weak"
      },
      detail: {
        eyebrow: "Content Forensics",
        title: "Upgrade AI content detection from suspicion to evidence-backed output.",
        subtitle: "The goal is not a prettier score. The goal is structured output that works in moderation, review, and audit flows.",
        primaryCta: "Book a Forensics Review",
        secondaryCta: "Back to Home",
        highlights: ["Structured verdict", "Evidence-first", "Remediation", "Audit-ready"],
        snapshotTitle: "Best fit problems",
        snapshot: ["Content moderation and review", "Compliance forensics", "Platforms that need structured governance output"],
        stats: [
          { value: "3", label: "Standard verdicts", detail: "ai_likely / human_likely / inconclusive." },
          { value: "5", label: "Evidence classes", detail: "Covers language features, provenance signals, rule hits, and model signals." },
          { value: "JSON", label: "Output contract", detail: "Built for audit systems, review queues, and downstream processing." }
        ],
        sections: [
          {
            title: "Output design",
            points: ["Standardizes verdict, confidence, summary, evidence, remediation, and meta.", "High-confidence results must point to independent evidence.", "Insufficient evidence can and should fall back to inconclusive."]
          },
          {
            title: "Governance guardrails",
            points: ["Does not present detection as final attribution.", "Does not turn weak evidence into a definitive conclusion.", "Requires version and input-hash traceability."]
          }
        ],
        useCases: ["Content moderation and human review", "Compliance forensics and internal risk workflows", "Text governance systems that need an audit trail"],
        sources: ["GenDetector/RULES.md", "RULES.md"]
      }
    },
    {
      id: "evaluation-gate",
      tag: "Security Bench",
      title: "Evaluation & Release Gate",
      description: "Turns baselines, evaluation scripts, error reports, and release gates into engineering assets so rollout safety becomes measurable.",
      bullets: [
        "The repository already includes multilingual benchmarks, regression baselines, error reports, and release-gate scripts.",
        "Useful before model swaps, rule updates, or agent-workflow launches.",
        "Especially relevant for teams that need both English and Chinese enterprise coverage."
      ],
      cta: "View Details",
      cardPreview: {
        label: "Release Gate",
        title: "Pre-release Gate Check",
        rows: [
          { key: "baseline", value: "17,671 multilingual samples" },
          { key: "slices", value: "EN / ZH / mixed" },
          { key: "decision", value: "shadow / soft / hard-block" }
        ],
        outcome: "Gate reports become part of release review"
      },
      detail: {
        eyebrow: "Evaluation & Release Gate",
        title: "Make security validation part of the release process.",
        subtitle: "If security only exists in one-off experiment scripts, it cannot become a deployment standard.",
        primaryCta: "Book an Evaluation Review",
        secondaryCta: "Back to Home",
        highlights: ["Benchmark baseline", "Regression runs", "Release gate", "Multilingual slices"],
        snapshotTitle: "Best fit problems",
        snapshot: ["Model-swap comparisons", "Threshold and rule regressions", "Pre-release gate decisions"],
        stats: [
          { value: "17,671", label: "Master baseline samples", detail: "Current size of the multilingual master baseline." },
          { value: "EN / ZH / mixed", label: "Language slices", detail: "Covers English, Chinese, and mixed-language attack traffic." },
          { value: "reports/", label: "Artifacts", detail: "Outputs summaries, error lists, and release-gate reports." }
        ],
        sections: [
          {
            title: "Why it matters",
            points: ["A safe launch is not “we tested it once”; it is a repeatable baseline and decision report.", "In multilingual settings, an English-only benchmark hides real regressions.", "Release gates align product, model, and security teams around the same evidence."]
          },
          {
            title: "Recommended usage",
            points: ["Run the fixed benchmark before and after every model or policy change.", "Wire gate results into release reviews or deployment approvals.", "Track critical slices separately instead of relying only on overall accuracy."]
          }
        ],
        useCases: ["Model replacement or version upgrades", "Regression runs for rules and thresholds", "Pre-launch evaluation for agent workflows"],
        sources: ["LLMFirewall/README.md", "LLMFirewall/reports/", "LLMFirewall/scripts/check_release_gate.py"]
      }
    }
  ],
  workflow: [
    { title: "Ingest real inputs", description: "Look at user input, retrieved context, tool intent, and sensitive payloads instead of treating one prompt as the whole system." },
    { title: "Detect and fuse", description: "Combine rules, semantic checks, and model signals so false positives and misses can be measured and tuned." },
    { title: "Explain and review", description: "Return summary, evidence, limitations, and remediation so a human reviewer can act on the output." },
    { title: "Ship with a gate", description: "Move reports, baselines, and rollout modes into the release path instead of leaving security in ad hoc scripts." }
  ],
  scenarios: [
    { title: "Enterprise knowledge bases and RAG assistants", body: "Stop injection, leakage, and context contamination before the model is steered by untrusted content." },
    { title: "Agents and tool-calling workflows", body: "Add runtime policy constraints and observability around systems that can act on external tools or data." },
    { title: "AI-generated content governance", body: "Provide explainable verdicts and evidence trails for moderation, review, and risk workflows." },
    { title: "Model swaps and release reviews", body: "Use fixed benchmarks and release gates before deploying new models, thresholds, or rules." }
  ],
  proof: {
    summary: "Core claims map to repository evidence, with a live playground and working lead intake path already wired.",
    badges: [
      "LLMFirewall: benchmark + service + tests",
      "GenDetector: verdict/evidence/remediation contract",
      "LLMFirewall playground is publicly accessible",
      "Website lead submission is connected to Feishu"
    ]
  },
  form: {
    companyLabel: "Company",
    companyPlaceholder: "Example: fintech platform team",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Work email",
    emailPlaceholder: "name@company.com",
    interestLabel: "Interest",
    messageLabel: "Use case",
    messagePlaceholder: "Example: We are preparing to launch a RAG assistant and need prompt injection validation, system prompt protection, and a release gate.",
    consentLabel: "I agree that this website may store this information for demo follow-up and solution discussions.",
    submitLabel: "Submit",
    hint: "If no backend is configured, the page will say so explicitly and export a JSON file.",
    interestOptions: {
      placeholder: "Select",
      llmFirewall: "LLM Firewall",
      gendetector: "GenDetector",
      evaluationGate: "Evaluation & Release Gate",
      fullStack: "Full-stack Advisory"
    },
    messages: {
      missing: "Please complete company, name, work email, interest, and use case.",
      invalidEmail: "Invalid email format. Please use a work email.",
      consent: "You must explicitly consent before submitting contact information.",
      submitted: "Lead submitted to the configured collection endpoint.",
      fallback: "The backend endpoint failed, so the page fell back to local storage and JSON export.",
      localSaved: "No backend endpoint is configured. The lead was saved locally and exported as JSON."
    }
  },
  footer: {
    note: "This website is built from verified repository assets and is intended for product presentation, solution discussions, and lead capture.",
    tagline: "Built for trustworthy AI security delivery."
  },
  productPage: {
    nav: { home: "Home", products: "Products", contact: "Contact" },
    backToHome: "Back to Home",
    details: {
      eyebrow: "Product Breakdown",
      title: "Core capabilities, integration paths, and delivery guidance",
      description: "Keep the presentation lightweight, but make the decision model, boundaries, and deployment approach explicit."
    },
    useCases: {
      eyebrow: "Best Fit",
      title: "Which teams should deploy this first",
      description: "These pages are organized around delivery reality, not generic “for every enterprise” positioning."
    },
    sourcesTitle: "Repository Sources",
    relatedTitle: "Other Product Modules",
    notFound: {
      title: "Product not found",
      description: "The requested product does not exist or has not been configured yet.",
      backLabel: "Back to Home"
    }
  }
};
