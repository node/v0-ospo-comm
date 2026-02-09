// ============================================================
// OSPO 案例数据 - 社区贡献者可直接编辑此文件添加/更新案例
// ============================================================

export interface CaseLink {
  type: "website" | "github" | "twitter" | "linkedin" | "blog" | "gitee"
  url: string
  label?: string
}

export interface CaseItem {
  id: string
  company: string
  logo?: string
  country: string
  region: "international" | "domestic"
  industry: string
  scale: "大型" | "中型" | "小型"
  year?: string // OSPO 成立年份
  description: string
  highlights: string[]
  links: CaseLink[]
  tags: string[]
}

export interface CaseInsight {
  title: string
  description: string
}

export interface CasesData {
  cases: CaseItem[]
  insights: {
    commonFeatures: CaseInsight[]
    lessons: string[]
  }
  tabDescriptions: {
    home: { title: string; description: string }
    international: { title: string; description: string }
    domestic: { title: string; description: string }
    all: { title: string; description: string }
  }
}

export const casesData: CasesData = {
  // Tab 页描述
  tabDescriptions: {
    home: {
      title: "OSPO 案例库",
      description:
        "汇集全球领先企业的开源项目办公室实践案例，帮助您了解不同规模、不同行业的 OSPO 建设经验，为您的开源战略提供参考。",
    },
    international: {
      title: "国际案例",
      description:
        "精选全球科技巨头和行业领军企业的 OSPO 实践案例，覆盖北美、欧洲等主要科技市场，展示国际一流的开源治理体系和战略。",
    },
    domestic: {
      title: "国内案例",
      description:
        "聚焦中国领先科技企业的 OSPO 建设历程，展示国内企业在开源治理、社区运营和生态建设方面的创新实践。",
    },
    all: {
      title: "全部案例库",
      description:
        "浏览所有收录的 OSPO 案例，支持按地区、行业、规模进行筛选，提供宫格和列表两种浏览方式。",
    },
  },

  // 所有案例数据
  cases: [
    // ===== 国际案例 =====
    {
      id: "google",
      company: "Google",
      country: "美国",
      region: "international",
      industry: "互联网/云计算",
      scale: "大型",
      year: "2004",
      description:
        "Google 的 OSPO 是业界最早和最成熟的之一，管理着数千个开源项目的使用和贡献。由 Chris DiBona 创立，开创了企业级 OSPO 运营模式。",
      highlights: [
        "发布了 Kubernetes、TensorFlow、Angular、Go 等重要项目",
        "建立了完善的开源合规流程和许可证审查体系",
        "积极参与 Linux 基金会、CNCF、Apache 基金会等治理",
        "每年举办 Google Summer of Code 支持开源人才培养",
      ],
      links: [
        { type: "website", url: "https://opensource.google/", label: "Google Open Source" },
        { type: "github", url: "https://github.com/google", label: "GitHub" },
        { type: "blog", url: "https://opensource.googleblog.com/", label: "Open Source Blog" },
        { type: "twitter", url: "https://twitter.com/GoogleOSS", label: "Twitter" },
      ],
      tags: ["云原生", "AI/ML", "编程语言", "基础设施"],
    },
    {
      id: "microsoft",
      company: "Microsoft",
      country: "美国",
      region: "international",
      industry: "软件/云计算",
      scale: "大型",
      year: "2014",
      description:
        "Microsoft 从闭源转向拥抱开源，OSPO 在这一历史性转型中发挥了关键作用。如今已成为 GitHub 上最活跃的企业贡献者之一。",
      highlights: [
        "收购 GitHub 并保持其开放性和独立运营",
        "将 .NET、VS Code、TypeScript 等核心项目开源",
        "成为 Linux 基金会白金会员和 CNCF 核心贡献者",
        "开源了 OSPO 政策和工具供全球参考",
      ],
      links: [
        { type: "website", url: "https://opensource.microsoft.com/", label: "Microsoft Open Source" },
        { type: "github", url: "https://github.com/microsoft", label: "GitHub" },
        {
          type: "blog",
          url: "https://opensource.microsoft.com/blog/",
          label: "Open Source Blog",
        },
        { type: "twitter", url: "https://twitter.com/OpenAtMicrosoft", label: "Twitter" },
      ],
      tags: ["开发工具", "云计算", "AI/ML", ".NET"],
    },
    {
      id: "meta",
      company: "Meta",
      country: "美国",
      region: "international",
      industry: "社交/互联网",
      scale: "大型",
      year: "2011",
      description:
        "Meta 的 OSPO 专注于推动前端技术创新和 AI 社区建设，其开源项目深刻影响了现代 Web 开发和人工智能领域。",
      highlights: [
        "创建并维护 React 生态系统，改变了前端开发范式",
        "发布 PyTorch 深度学习框架，成为 AI 研究首选",
        "开源 LLaMA 大语言模型系列，推动 AI 民主化",
        "建立活跃的开发者社区和完善的贡献流程",
      ],
      links: [
        { type: "website", url: "https://opensource.fb.com/", label: "Meta Open Source" },
        { type: "github", url: "https://github.com/facebook", label: "GitHub" },
        { type: "twitter", url: "https://twitter.com/MetaOpenSource", label: "Twitter" },
      ],
      tags: ["前端框架", "AI/ML", "大模型", "基础设施"],
    },
    {
      id: "redhat",
      company: "Red Hat",
      country: "美国",
      region: "international",
      industry: "企业软件",
      scale: "大型",
      year: "2001",
      description:
        "作为开源商业化的先驱，Red Hat 的整个商业模式建立在开源之上，是全球首家年收入超 10 亿美元的纯开源企业。",
      highlights: [
        "主导 RHEL、Fedora 等 Linux 企业级发行版",
        "深度贡献 Kubernetes、Ansible、OpenShift 容器技术",
        "秉持\"Upstream First\"原则培养开源商业生态",
        "开源了 OSPO 运营指南和最佳实践文档",
      ],
      links: [
        {
          type: "website",
          url: "https://www.redhat.com/en/about/open-source",
          label: "Red Hat Open Source",
        },
        { type: "github", url: "https://github.com/RedHatOfficial", label: "GitHub" },
        { type: "blog", url: "https://github.com/RedHatOfficial/OSPO-Content", label: "OSPO Content" },
        { type: "twitter", url: "https://twitter.com/RedHat", label: "Twitter" },
      ],
      tags: ["Linux", "容器", "云原生", "企业级"],
    },
    {
      id: "sap",
      company: "SAP",
      country: "德国",
      region: "international",
      industry: "企业软件/ERP",
      scale: "大型",
      year: "2013",
      description:
        "SAP 通过 OSPO 推动企业软件的开源转型，发布了开源宣言（Open Source Manifesto），在 OSCI 商业贡献排名中位列全球前十。",
      highlights: [
        "发布 Open Source Manifesto 彰显开源承诺",
        "开源 UI5、Cloud SDK 等企业级开发工具",
        "参与 CNCF 和 Eclipse 基金会核心项目",
        "建立内部开源文化和开发者赋能体系",
      ],
      links: [
        {
          type: "website",
          url: "https://www.sap.com/about/company/innovation/open-source.html",
          label: "SAP Open Source",
        },
        { type: "github", url: "https://github.com/SAP", label: "GitHub" },
        {
          type: "blog",
          url: "https://github.com/SAP/open-source-manifesto",
          label: "Open Source Manifesto",
        },
      ],
      tags: ["企业软件", "ERP", "云计算", "开发者工具"],
    },
    {
      id: "spotify",
      company: "Spotify",
      country: "瑞典",
      region: "international",
      industry: "流媒体/音乐",
      scale: "中型",
      year: "2018",
      description:
        "Spotify 的 OSPO 专注于开发者工具和内部平台建设，其开源的 Backstage 已成为 CNCF 孵化项目，被全球数百家企业采用。",
      highlights: [
        "开源 Backstage 开发者门户平台，成为 CNCF 孵化项目",
        "分享大规模音乐推荐算法和数据工程工具",
        "推动内部平台工程最佳实践的开源化",
        "建立了以开发者体验为核心的 OSPO 运营模式",
      ],
      links: [
        { type: "website", url: "https://spotify.github.io/", label: "Spotify Open Source" },
        { type: "github", url: "https://github.com/spotify", label: "GitHub" },
        { type: "twitter", url: "https://twitter.com/SpotifyEng", label: "Twitter" },
      ],
      tags: ["开发者平台", "数据工程", "微服务", "平台工程"],
    },
    {
      id: "netflix",
      company: "Netflix",
      country: "美国",
      region: "international",
      industry: "流媒体/娱乐",
      scale: "大型",
      year: "2010",
      description:
        "Netflix 是开源领域的先驱者，其 OSPO 推动了微服务架构和 DevOps 实践的全球普及，开源项目被广泛应用于云原生基础设施。",
      highlights: [
        "开源 Zuul、Eureka、Hystrix 等微服务核心组件",
        "推动 Chaos Engineering（混沌工程）理念和工具",
        "在云原生和大规模分布式系统领域持续创新",
        "获得 JAX 2015 架构创新奖",
      ],
      links: [
        { type: "website", url: "https://netflix.github.io/", label: "Netflix Open Source" },
        { type: "github", url: "https://github.com/Netflix", label: "GitHub" },
        { type: "twitter", url: "https://twitter.com/NetflixOSS", label: "Twitter" },
      ],
      tags: ["微服务", "混沌工程", "云原生", "大规模系统"],
    },
    {
      id: "uber",
      company: "Uber",
      country: "美国",
      region: "international",
      industry: "出行/科技",
      scale: "大型",
      year: "2015",
      description:
        "Uber 的 OSPO 推动了大数据处理和实时系统领域的开源创新，其开源项目在数据可视化和机器学习部署方面有重要影响力。",
      highlights: [
        "开源 Horovod 分布式深度学习训练框架",
        "发布 kepler.gl 地理空间数据可视化工具",
        "创建 Ludwig 无代码机器学习平台",
        "贡献 Apache 基金会多个数据处理项目",
      ],
      links: [
        { type: "website", url: "https://uber.github.io/", label: "Uber Open Source" },
        { type: "github", url: "https://github.com/uber", label: "GitHub" },
        { type: "twitter", url: "https://twitter.com/UberEng", label: "Twitter" },
      ],
      tags: ["大数据", "AI/ML", "数据可视化", "实时系统"],
    },
    {
      id: "bloomberg",
      company: "Bloomberg",
      country: "美国",
      region: "international",
      industry: "金融科技",
      scale: "大型",
      year: "2016",
      description:
        "Bloomberg 的 OSPO 推动了金融科技领域的开源创新，是 TODO Group 的创始成员，积极推广企业 OSPO 最佳实践。",
      highlights: [
        "TODO Group 创始成员，推动 OSPO 标准化",
        "开源 BQPlot、PowerfulSeal 等项目",
        "建立金融行业开源合规标杆流程",
        "赞助多个开源会议和社区活动",
      ],
      links: [
        {
          type: "website",
          url: "https://www.techatbloomberg.com/open-source/",
          label: "Bloomberg Tech Open Source",
        },
        { type: "github", url: "https://github.com/bloomberg", label: "GitHub" },
        { type: "twitter", url: "https://twitter.com/TechAtBloomberg", label: "Twitter" },
      ],
      tags: ["金融科技", "数据分析", "合规", "基础设施"],
    },

    // ===== 国内案例 =====
    {
      id: "huawei",
      company: "华为",
      country: "中国",
      region: "domestic",
      industry: "通信/ICT",
      scale: "大型",
      year: "2019",
      description:
        "华为建立了完善的开源治理体系，是国内开源贡献的领军企业，主导了 openEuler、openGauss 等多个社区生态项目。",
      highlights: [
        "发起 openEuler 操作系统和 openGauss 数据库社区",
        "在 Linux 内核贡献排名长期位居全球前列",
        "成立开源能力中心，系统化推进开源战略",
        "昇腾 AI 计算框架全面开源开放",
      ],
      links: [
        { type: "website", url: "https://www.huawei.com/cn/open-source", label: "华为开源" },
        { type: "github", url: "https://github.com/huawei", label: "GitHub" },
        { type: "gitee", url: "https://gitee.com/huawei", label: "Gitee" },
      ],
      tags: ["操作系统", "数据库", "AI", "通信"],
    },
    {
      id: "alibaba",
      company: "阿里巴巴",
      country: "中国",
      region: "domestic",
      industry: "电商/云计算",
      scale: "大型",
      year: "2016",
      description:
        "阿里巴巴通过开源推动云计算和大数据技术创新，拥有超过 3 万名开源贡献者，位居中国企业开源活跃度榜首。",
      highlights: [
        "向 Apache 基金会捐赠 Dubbo、RocketMQ 等顶级项目",
        "开源 Nacos、Arthas、Dragonfly 等热门工具",
        "发起 Anolis OS 社区和 PolarDB-X 开源数据库",
        "在操作系统、云原生、数据库、AI 等领域持续开源",
      ],
      links: [
        { type: "website", url: "https://opensource.alibaba.com/", label: "阿里开源" },
        { type: "github", url: "https://github.com/alibaba", label: "GitHub" },
      ],
      tags: ["云原生", "微服务", "数据库", "中间件"],
    },
    {
      id: "tencent",
      company: "腾讯",
      country: "中国",
      region: "domestic",
      industry: "互联网/社交",
      scale: "大型",
      year: "2018",
      description:
        "腾讯积极参与开源社区，建立了完善的开源治理体系，并通过\"腾讯犀牛鸟\"计划培养开源人才。",
      highlights: [
        "开源 TARS 微服务框架，已捐赠 Linux 基金会",
        "发起 OpenCloudOS 社区和 OpenTenBase 数据库",
        "发布 Crane 云资源优化平台和 Clusternet 集群管理工具",
        "通过腾讯犀牛鸟计划系统培养开源人才",
      ],
      links: [
        { type: "website", url: "https://opensource.tencent.com/", label: "腾讯开源" },
        { type: "github", url: "https://github.com/Tencent", label: "GitHub" },
      ],
      tags: ["微服务", "操作系统", "云计算", "游戏"],
    },
    {
      id: "baidu",
      company: "百度",
      country: "中国",
      region: "domestic",
      industry: "AI/搜索",
      scale: "大型",
      year: "2017",
      description:
        "百度专注于 AI 和自动驾驶领域的开源贡献，其 PaddlePaddle 深度学习平台和 Apollo 自动驾驶平台在国内外具有重要影响力。",
      highlights: [
        "开源 PaddlePaddle 深度学习平台，国内首个自主研发",
        "发布 Apollo 自动驾驶开放平台",
        "开源 ECharts 数据可视化库（已捐赠 Apache 基金会）",
        "推动 AI 技术在千行百业的普及应用",
      ],
      links: [
        { type: "github", url: "https://github.com/baidu", label: "GitHub" },
        { type: "gitee", url: "https://gitee.com/baidu", label: "Gitee" },
        { type: "github", url: "https://github.com/PaddlePaddle", label: "PaddlePaddle GitHub" },
      ],
      tags: ["AI/ML", "自动驾驶", "数据可视化", "深度学习"],
    },
    {
      id: "bytedance",
      company: "字节跳动",
      country: "中国",
      region: "domestic",
      industry: "互联网/短视频",
      scale: "大型",
      year: "2020",
      description:
        "字节跳动在前端、云原生和 AI 基础设施领域积极开源，CloudWeGo 微服务生态和 Semi Design 设计系统获得广泛关注。",
      highlights: [
        "开源 CloudWeGo 微服务生态（Kitex、Hertz 等）",
        "发布 Semi Design 企业级 UI 设计系统",
        "开源 IconPark 图标库和 Rspack 构建工具",
        "在 Go 语言云原生工具链领域持续贡献",
      ],
      links: [
        {
          type: "website",
          url: "https://opensource.bytedance.com/",
          label: "字节开源",
        },
        { type: "github", url: "https://github.com/bytedance", label: "GitHub" },
      ],
      tags: ["前端框架", "云原生", "微服务", "开发工具"],
    },
    {
      id: "antgroup",
      company: "蚂蚁集团",
      country: "中国",
      region: "domestic",
      industry: "金融科技",
      scale: "大型",
      year: "2019",
      description:
        "蚂蚁集团在金融科技和分布式系统领域开源创新，SOFAStack 金融级云原生架构和 Ant Design 设计体系在业界广泛应用。",
      highlights: [
        "开源 SOFAStack 金融级云原生架构体系",
        "创建 Ant Design 企业级 UI 组件库",
        "推动 OceanBase 分布式数据库开源",
        "建立金融科技领域开源治理标杆",
      ],
      links: [
        { type: "github", url: "https://github.com/ant-design", label: "Ant Design GitHub" },
        { type: "github", url: "https://github.com/sofastack", label: "SOFAStack GitHub" },
        { type: "gitee", url: "https://gitee.com/alipay", label: "Gitee" },
      ],
      tags: ["金融科技", "UI组件", "云原生", "分布式数据库"],
    },
    {
      id: "bilibili",
      company: "哔哩哔哩",
      country: "中国",
      region: "domestic",
      industry: "视频/社区",
      scale: "中型",
      year: "2021",
      description:
        "哔哩哔哩在视频技术和社区平台领域积极开源，尤其在 Go 语言微服务框架和视频处理技术方面有突出贡献。",
      highlights: [
        "开源 Kratos Go 微服务框架",
        "发布 IJKPlayer 视频播放器引擎",
        "开源 BFE 流量转发平台（已捐赠 CNCF）",
        "在弹幕系统和推荐引擎方面分享技术实践",
      ],
      links: [
        { type: "github", url: "https://github.com/bilibili", label: "GitHub" },
      ],
      tags: ["视频技术", "微服务", "Go语言", "社区平台"],
    },
    {
      id: "didi",
      company: "滴滴出行",
      country: "中国",
      region: "domestic",
      industry: "出行/科技",
      scale: "大型",
      year: "2019",
      description:
        "滴滴出行在出行科技和数据平台领域推进开源战略，在分布式存储和数据库中间件方面有重要贡献。",
      highlights: [
        "开源 Logi 系列大数据管理平台",
        "发布 Nightingale（夜莺）监控系统",
        "开源 AgateDB 存储引擎和 DIDI SQL Gateway",
        "在智能出行数据处理领域分享技术方案",
      ],
      links: [
        { type: "github", url: "https://github.com/didi", label: "GitHub" },
      ],
      tags: ["出行科技", "大数据", "监控", "存储"],
    },
  ],

  // 案例洞察
  insights: {
    commonFeatures: [
      {
        title: "高层战略支持",
        description:
          "成功的 OSPO 都获得了 CEO 和高管团队的明确支持，开源战略被视为企业整体战略的重要组成部分。",
      },
      {
        title: "专业团队建设",
        description:
          "这些企业都组建了专业的 OSPO 团队，成员具备深厚的技术背景和丰富的社区经验。",
      },
      {
        title: "系统化流程",
        description:
          "建立了完善的开源使用、贡献和发布流程，确保合规性和效率。",
      },
      {
        title: "积极社区参与",
        description:
          "不仅使用开源软件，更积极回馈社区，发布高质量的开源项目。",
      },
      {
        title: "文化培养",
        description:
          "通过培训、激励和宣传，在企业内部建立了浓厚的开源文化。",
      },
    ],
    lessons: [
      "从这些成功案例中，我们可以看到 OSPO 的价值不仅在于风险管理和合规控制，更在于推动技术创新、提升企业影响力和培养人才。",
      "无论是国际巨头还是国内领军企业，都将开源视为战略投资而非成本中心。他们通过 OSPO 建立了与全球开发者社区的连接，在开源生态中占据了重要位置。",
      "对于正在考虑建立 OSPO 的企业，这些案例提供了宝贵的参考。关键是要根据自身的规模、行业特点和战略目标，设计适合的 OSPO 模式，并持续投入和优化。",
    ],
  },
}

// 辅助方法：获取所有行业列表
export function getAllIndustries(): string[] {
  const industries = new Set(casesData.cases.map((c) => c.industry))
  return Array.from(industries).sort()
}

// 辅助方法：获取所有标签列表
export function getAllTags(): string[] {
  const tags = new Set(casesData.cases.flatMap((c) => c.tags))
  return Array.from(tags).sort()
}

// 辅助方法：获取国际案例
export function getInternationalCases(): CaseItem[] {
  return casesData.cases.filter((c) => c.region === "international")
}

// 辅助方法：获取国内案例
export function getDomesticCases(): CaseItem[] {
  return casesData.cases.filter((c) => c.region === "domestic")
}
