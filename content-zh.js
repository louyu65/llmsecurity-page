window.SITE_CONTENT_ZH = {
  meta: {
    title: "LLM Security | 大模型安全官网",
    description:
      "面向企业大模型与智能体场景的安全官网，展示 Prompt Injection 防护、AI 内容检测与评估发布门禁能力，并提供潜在客户线索收集入口。"
  },
  brand: { subtitle: "AI 安全基础设施" },
  nav: {
    products: "产品",
    workflow: "方法",
    proof: "依据",
    contact: "联系",
    demo: "预约演示"
  },
  hero: {
    eyebrow: "企业级 AI 安全",
    title: "让大模型真正能上线，而不是只停在试验环境。",
    subtitle:
      "LLM Security 面向企业级 AI 助手、RAG 和 Agent 场景，聚焦运行时防护、AI 内容取证和评估发布门禁，把安全能力前移到产品交付链路里。",
    primaryCta: "预约产品演示",
    secondaryCta: "查看产品模块",
    tags: ["Prompt Injection 防护", "AI 生成内容检测", "多语基线与发布门禁", "适配企业级灰度上线"]
  },
  signalBoard: {
    eyebrow: "信号看板",
    title: "把安全从“接个模型”升级到“可上线、可回归、可审计”",
    cards: [
      { title: "运行时护栏", detail: "覆盖提示注入、工具调用滥用、数据泄漏与混淆攻击。" },
      { title: "证据输出", detail: "输出结构化证据，而不是黑盒分数。" },
      { title: "发布模式", detail: "支持影子流量、软拦截和强拦截三段式上线策略。" },
      { title: "多语覆盖", detail: "当前工程资产已覆盖英文、中文与混合语种场景。" }
    ]
  },
  heroDiagram: {
    coreLabel: "Production Security Graph",
    coreTitle: "LLM Security Control Plane",
    coreDetail: "统一运行时防护、内容取证和发布门禁，形成可观测、可回归、可上线的闭环。",
    modules: [
      { title: "LLM Firewall", detail: "Prompt Injection 运行时防护", metric: "allow / sanitize / block" },
      { title: "GenDetector", detail: "证据优先的内容取证", metric: "ai_likely / human_likely / inconclusive" },
      { title: "Release Gate", detail: "多语基线与发布判断", metric: "17,671 multilingual samples" }
    ],
    flow: "输入流量 -> 检测融合 -> 证据输出 -> 发布门禁"
  },
  sections: {
    products: {
      eyebrow: "产品",
      title: "围绕企业大模型落地，先把最容易失控的三个环节做扎实",
      description: "内容全部来自当前仓库内已存在的产品与工程资产。"
    },
    quickstart: {
      eyebrow: "接入与演示",
      title: "三步看懂如何落地，再直接在线试用",
      description: "这里放可执行信息，不放抽象方法论。"
    },
    workflow: {
      eyebrow: "交付路径",
      title: "一条适合 AI 安全产品售卖和交付的轻量路径",
      description: "网站结构围绕真实交付链路组织，而不是孤立堆功能点。"
    },
    scenarios: {
      eyebrow: "应用场景",
      title: "适用于需要先证明安全性，再扩大 AI 投入的团队",
      description: "重点适配企业知识库、Copilot、Agent 与高风险内容治理场景。"
    },
    proof: {
      eyebrow: "依据与原则",
      title: "为什么可以信任这套方案"
    },
    cta: {
      eyebrow: "面向安全团队",
      title: "如果你已经在评估 RAG、Copilot 或 Agent，安全应当先有基线，再谈扩容",
      description: "更适合有真实上线计划、灰度验证需求或安全门禁需求的团队。",
      button: "提交需求"
    },
    contact: {
      eyebrow: "联系我们",
      title: "留下你的场景，我们按“产品演示 / 技术评估 / POC 讨论”来匹配沟通方式",
      description: "表单字段保持精简，前端已预留 webhook / CRM 接口。",
      engagements: [
        { title: "产品演示", body: "适合快速了解运行时防护、内容检测和评估门禁如何组合落地。" },
        { title: "技术评估", body: "适合已有 RAG、Copilot 或 Agent 项目，需要判断上线风险的团队。" },
        { title: "POC 讨论", body: "适合准备灰度接入流量、建立基线或做定制策略的项目。" }
      ]
    }
  },
  metrics: [
    { value: "98.39%", label: "多语 benchmark 准确率", detail: "当前 `nb_plus_rules` 推荐模式结果。", source: "来源：LLMFirewall/README.md" },
    { value: "96.18%", label: "拦截召回率", detail: "当前推荐默认模式下的拦截召回率。", source: "来源：LLMFirewall/README.md" },
    { value: "16.072ms", label: "平均离线引擎耗时", detail: "本地离线重跑、20 条 warm-up 后的单样本计时。", source: "来源：LLMFirewall/README.md" },
    { value: "17,671", label: "多语主基线样本", detail: "EN + translated ZH + native/mixed ZH 统一主基线。", source: "来源：LLMFirewall/README.md" }
  ],
  quickStart: {
    stepsTitle: "接入步骤",
    demoTitle: "在线演示",
    demoDescription: "可直接打开 LLM Firewall Playground 查看输入、检测与动作决策输出。",
    demoButton: "打开 Playground",
    demoUrl: "https://llmfirewall.louyu.tech/playground",
    contactButton: "预约沟通",
    outcomeTitle: "典型结果",
    steps: [
      { title: "选场景", detail: "确定是 RAG、Copilot 还是 Agent 流程，明确高风险链路。" },
      { title: "接防护", detail: "先用 shadow / soft enforcement 接入，收集真实风险分布。" },
      { title: "设门禁", detail: "把 benchmark 与 release gate 接到上线评审流程。" }
    ],
    outcomes: [
      { label: "运行时动作", value: "allow / allow_with_sanitization / block" },
      { label: "取证输出", value: "verdict + evidence + remediation + confidence" },
      { label: "发布建议", value: "shadow / soft / hard-block（按基线结果）" }
    ]
  },
  products: [
    {
      id: "llm-firewall",
      tag: "运行时防护",
      title: "LLM Firewall",
      description: "运行时安全防护层，把规则检测、语义校验、模型评分和策略执行收敛到一条可部署链路。",
      bullets: [
        "统一生成 allow / allow_with_sanitization / block 决策。",
        "提供 HTTP 服务、健康检查、Prometheus 指标和内置 playground。",
        "当前工程建议从 shadow 或 soft enforcement 开始。"
      ],
      cta: "查看详情",
      liveDemoLabel: "在线演示",
      liveDemoUrl: "https://llmfirewall.louyu.tech/playground",
      cardPreview: {
        label: "Runtime Path",
        title: "Prompt Injection 决策链路",
        rows: [
          { key: "输入", value: "user_input + retrieved_context" },
          { key: "检测", value: "rules + semantic + nb" },
          { key: "动作", value: "allow / sanitize / block" }
        ],
        outcome: "默认模式 nb_plus_rules，可降级 rule_only"
      },
      detail: {
        eyebrow: "运行时防护",
        title: "把提示注入防护变成可部署的运行时控制层",
        subtitle: "适合需要先观察真实流量风险，再逐步提升拦截强度的团队。",
        primaryCta: "预约 Firewall 演示",
        liveDemoCta: "打开在线 Playground",
        secondaryCta: "返回官网",
        highlights: ["提示注入检测", "清洗策略", "HTTP 服务与指标", "灰度上线控制"],
        snapshotTitle: "适合什么问题",
        snapshot: ["真实流量风险观察", "工具调用与提示注入控制", "上线前安全门禁"],
        stats: [
          { value: "nb_plus_rules", label: "默认运行模式", detail: "模型可用时启用规则 + NB 融合模式。" },
          { value: "98.39%", label: "统一基线准确率", detail: "当前多语 benchmark 的推荐模式结果。" },
          { value: "shadow / soft", label: "推荐上线方式", detail: "当前仓库建议先做影子流量或软拦截。" }
        ],
        sections: [
          {
            title: "核心能力",
            points: ["识别 override、混淆、权限伪造、语义伪装和工具调用注入。", "输出动作决策，而不是只给风险分。", "支持 healthz、readyz、metrics 和 playground。"]
          },
          {
            title: "接入方式",
            points: ["可从单条请求评估开始，也可直接接到在线服务。", "离线 benchmark、在线服务和发布门禁使用同一套核心防护引擎。", "适合需要可观测、可回归、可灰度接入的团队。"]
          }
        ],
        useCases: ["企业知识库 / RAG 助手", "具备工具调用能力的 Agent", "需要系统提示保护的 Copilot"],
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
      tag: "内容取证",
      title: "GenDetector",
      description: "面向文本内容的 AI 生成检测与取证输出，强调可解释、可复核、可审计。",
      bullets: [
        "标准 verdict 统一为 ai_likely、human_likely、inconclusive。",
        "证据层支持语言特征、来源信号、规则命中和模型信号。",
        "适合接入人工复核、内容治理和合规流程。"
      ],
      cta: "查看详情",
      cardPreview: {
        label: "Forensics Output",
        title: "可复核检测结果",
        rows: [
          { key: "verdict", value: "ai_likely / human_likely / inconclusive" },
          { key: "evidence", value: "规则、来源信号、模型信号" },
          { key: "response", value: "summary + remediation + confidence" }
        ],
        outcome: "证据不足默认返回 inconclusive"
      },
      detail: {
        eyebrow: "内容取证",
        title: "把 AI 内容检测从“怀疑”升级到“可解释的证据输出”",
        subtitle: "目标不是生成一个更花哨的分数，而是提供可用于治理与复核的结构化结果。",
        primaryCta: "预约检测方案沟通",
        secondaryCta: "返回官网",
        highlights: ["结构化结论", "证据优先", "修复建议", "可审计"],
        snapshotTitle: "适合什么问题",
        snapshot: ["内容审核与复核", "合规取证", "需要结构化治理结果的文本平台"],
        stats: [
          { value: "3", label: "标准 verdict", detail: "ai_likely / human_likely / inconclusive。" },
          { value: "5", label: "证据类型", detail: "覆盖语言特征、来源信号、规则命中和模型信号。" },
          { value: "JSON", label: "输出契约", detail: "适合接入审计、复核和二次系统处理。" }
        ],
        sections: [
          {
            title: "输出设计",
            points: ["统一 verdict、confidence、summary、evidence、remediation 与 meta。", "高置信结果必须能指向独立证据。", "证据不足时允许回退到 inconclusive。"]
          },
          {
            title: "治理原则",
            points: ["不把检测结果包装成最终归因。", "不把不充分证据强行升级为确定结论。", "要求版本、输入哈希和结果可追溯。"]
          }
        ],
        useCases: ["内容审核与人工复核", "合规取证与内部风控", "需要审计轨迹的文本治理平台"],
        sources: ["GenDetector/RULES.md", "RULES.md"]
      }
    },
    {
      id: "evaluation-gate",
      tag: "安全基线",
      title: "Evaluation & Release Gate",
      description: "把安全基线、评估脚本、错误报告和发布门禁变成工程资产，让上线安全变成可测量问题。",
      bullets: [
        "当前仓库已沉淀多语 benchmark、回归基线、错误报告和 release gate 脚本。",
        "适合在模型切换、规则调整、Agent 流程上线前做稳定性对比。",
        "尤其适合需要覆盖英文和中文企业场景的团队。"
      ],
      cta: "查看详情",
      cardPreview: {
        label: "Release Gate",
        title: "上线前门禁检查",
        rows: [
          { key: "baseline", value: "17,671 multilingual samples" },
          { key: "slices", value: "EN / ZH / mixed" },
          { key: "decision", value: "shadow / soft / hard-block" }
        ],
        outcome: "评估报告进入发布流程，不靠口头判断"
      },
      detail: {
        eyebrow: "评估与发布门禁",
        title: "把安全验证变成发布流程的一部分",
        subtitle: "安全如果只存在于实验脚本里，就无法成为真正的上线标准。",
        primaryCta: "预约评估方案沟通",
        secondaryCta: "返回官网",
        highlights: ["基线评估", "回归运行", "发布门禁", "多语切片"],
        snapshotTitle: "适合什么问题",
        snapshot: ["模型切换前后效果对比", "阈值与规则回归", "上线前门禁判断"],
        stats: [
          { value: "17,671", label: "主基线样本数", detail: "多语统一 baseline 的当前规模。" },
          { value: "EN / ZH / mixed", label: "语言切片", detail: "覆盖英文、中文和中英混合攻击流量。" },
          { value: "reports/", label: "输出结果", detail: "支持错误清单、汇总报告和发布门禁报告。" }
        ],
        sections: [
          {
            title: "为什么重要",
            points: ["安全上线不是一句“我们测过了”，而是固定基线和报告。", "多语场景下，单一英文 benchmark 很容易掩盖真实问题。", "release gate 让产品、算法和安全团队对同一结果说话。"]
          },
          {
            title: "推荐使用方式",
            points: ["模型升级前后都跑固定 benchmark。", "把 gate 结果接入研发发布流程。", "对关键切片单独追踪，而不是只看 overall accuracy。"]
          }
        ],
        useCases: ["模型替换或升级发布", "规则与阈值调优回归", "Agent 工作流正式上线前评估"],
        sources: ["LLMFirewall/README.md", "LLMFirewall/reports/", "LLMFirewall/scripts/check_release_gate.py"]
      }
    }
  ],
  workflow: [
    { title: "接入真实输入", description: "先识别用户输入、检索上下文、工具调用意图和潜在敏感数据。" },
    { title: "检测与融合", description: "用规则、语义检查和模型分数共同做风险判断。" },
    { title: "解释与复核", description: "输出 summary、evidence、limitations、remediation，为人工审核和客户沟通提供依据。" },
    { title: "带门禁上线", description: "让评估报告、回归基线和 rollout mode 进入发布流程。" }
  ],
  scenarios: [
    { title: "企业知识库 / RAG 助手", body: "在检索增强场景中拦截注入、泄漏与上下文污染。" },
    { title: "Agent 与工具调用", body: "在具备工具调用和外部系统访问能力的工作流里增加策略限制和运行时观察能力。" },
    { title: "AI 生成内容治理", body: "对文本内容提供可解释 verdict 和证据链，用于审核、风控与复核流程。" },
    { title: "模型切换与版本发布", body: "当阈值、规则或模型更新时，用固定 benchmark 和 release gate 做前置评估。" }
  ],
  proof: {
    summary: "所有核心结论都能在仓库资产中找到依据，并且已接入可验证的演示与表单链路。",
    badges: [
      "LLMFirewall: benchmark + service + tests",
      "GenDetector: verdict/evidence/remediation 契约",
      "LLMFirewall Playground 已在线可访问",
      "官网线索提交链路已联通飞书"
    ]
  },
  form: {
    companyLabel: "公司名称",
    companyPlaceholder: "例如：某金融科技团队",
    nameLabel: "联系人",
    namePlaceholder: "你的姓名",
    emailLabel: "工作邮箱",
    emailPlaceholder: "name@company.com",
    interestLabel: "关注方向",
    messageLabel: "当前场景与问题",
    messagePlaceholder: "例如：RAG 助手即将上线，需要验证 Prompt Injection、防止系统提示泄漏，并建立灰度上线门禁。",
    consentLabel: "我同意官网为演示、方案沟通与后续联系保存以上信息。",
    submitLabel: "提交线索",
    hint: "若未配置后端接口，页面会明确提示并导出 JSON。",
    interestOptions: {
      placeholder: "请选择",
      llmFirewall: "LLM Firewall",
      gendetector: "GenDetector",
      evaluationGate: "安全评估与发布门禁",
      fullStack: "整体方案咨询"
    },
    messages: {
      missing: "请完整填写公司、联系人、工作邮箱、关注方向和当前场景。",
      invalidEmail: "邮箱格式不正确，请使用工作邮箱。",
      consent: "提交前需要明确勾选同意保存联系信息。",
      submitted: "线索已提交到已配置的收集端点。",
      fallback: "后端端点提交失败，已回退为本地留存并导出 JSON。",
      localSaved: "当前未配置后端接口，线索已保存在浏览器并导出为 JSON 文件。"
    }
  },
  footer: {
    note: "官网文案基于仓库内现有产品与指标整理，重点服务产品展示、方案沟通和潜在客户收集。",
    tagline: "Built for trustworthy AI security delivery."
  },
  productPage: {
    nav: { home: "首页", products: "产品", contact: "联系" },
    backToHome: "返回官网",
    details: {
      eyebrow: "产品拆解",
      title: "核心能力、接入方式与交付建议",
      description: "保持轻量表达，但把决策、能力边界和实际接入方式说清楚。"
    },
    useCases: {
      eyebrow: "适用场景",
      title: "更适合哪些团队先落地",
      description: "这些页面聚焦真实交付场景，而不是泛化的“所有企业都适用”。"
    },
    sourcesTitle: "仓库依据",
    relatedTitle: "其他产品模块",
    notFound: {
      title: "未找到对应产品",
      description: "当前链接对应的产品不存在或尚未配置详情页。",
      backLabel: "返回官网"
    }
  }
};
