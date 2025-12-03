export const resourcesData = {
  projects: [
    {
      name: "OSPO 网站开源项目",
      description:
        "为新兴 OSPO 团队提供网站参考模板，帮助其快速启动 OSPO 门户网站建设。基于 Next.js 构建，支持数据与展示分离，便于社区协作维护。",
      url: "https://github.com/ospocc/v0-ospo",
      category: "网站模板",
      features: ["开箱即用", "数据分离", "响应式设计", "社区驱动"],
    },
    {
      name: "OSPO 微信表情包",
      description: "一组 OSPO 与开源主题的微信表情包，为开源社区交流增添趣味。适用于日常沟通、社区活动宣传等场景。",
      url: "#",
      category: "社区资源",
      versions: [
        {
          name: "基础版",
          description: "通用表情包，适合日常交流",
          url: "https://w.url.cn/s/AVJL7JY",
          note: "请在手机微信中打开",
        },
        {
          name: "开源版",
          description: "开源文化主题表情",
          status: "待上架",
        },
        {
          name: "OSPO版",
          description: "OSPO 工作场景专属表情",
          status: "待上架",
        },
        {
          name: "OSPO英文版",
          description: "面向国际社区的英文版本",
          status: "待上架",
        },
      ],
    },
  ],
  books: [
    {
      title: "The Open Source Way",
      author: "Red Hat",
      description: "全面介绍开源社区的运作方式和最佳实践",
      type: "在线书籍",
    },
    {
      title: "Open Source Program Office Guide",
      author: "TODO Group",
      description: "OSPO 建设和运营的权威指南",
      type: "指南",
    },
    {
      title: "Managing Open Source Projects",
      author: "Linux Foundation",
      description: "开源项目管理的实用手册",
      type: "手册",
    },
    {
      title: "Open Source Compliance in the Enterprise",
      author: "Ibrahim Haddad",
      description: "企业开源合规管理的深度解析",
      type: "专著",
    },
  ],
  reports: [
    {
      title: "2024 年开源状态报告",
      organization: "Linux Foundation",
      year: "2024",
      description: "全球开源发展趋势和统计数据",
    },
    {
      title: "OSPO 调查报告",
      organization: "TODO Group",
      year: "2024",
      description: "全球 OSPO 现状和发展趋势调查",
    },
    {
      title: "企业开源战略白皮书",
      organization: "CNCF",
      year: "2024",
      description: "云原生时代的企业开源战略",
    },
    {
      title: "开源安全与风险管理",
      organization: "OpenSSF",
      year: "2024",
      description: "开源软件供应链安全最佳实践",
    },
    {
      title: "中国开源发展蓝皮书",
      organization: "中国开源软件推进联盟",
      year: "2024",
      description: "中国开源生态发展现状和趋势",
    },
    {
      title: "InnerSource 实践指南",
      organization: "InnerSource Commons",
      year: "2023",
      description: "企业内部开源协作模式",
    },
  ],
  tools: [
    {
      name: "FOSSology",
      description: "开源许可证合规扫描工具",
      category: "合规工具",
    },
    {
      name: "ClearlyDefined",
      description: "开源组件元数据和许可证信息",
      category: "合规工具",
    },
    {
      name: "SPDX",
      description: "软件包数据交换标准",
      category: "标准",
    },
    {
      name: "Renovate",
      description: "自动化依赖更新工具",
      category: "管理工具",
    },
    {
      name: "Backstage",
      description: "开发者门户平台",
      category: "平台",
    },
    {
      name: "OpenChain",
      description: "开源合规认证标准",
      category: "标准",
    },
  ],
  learningPaths: [
    {
      level: "初学者",
      description:
        "建议从《The Open Source Way》开始，了解开源的基本理念和文化。然后阅读《Open Source Program Office Guide》，掌握 OSPO 的基础知识。",
    },
    {
      level: "实践者",
      description:
        "深入学习《Open Source Compliance in the Enterprise》，掌握合规管理的实践方法。同时关注最新的调查报告和白皮书，了解行业趋势和最佳实践。",
    },
    {
      level: "管理者",
      description:
        "重点阅读各类战略白皮书和调查报告，了解 OSPO 的商业价值和投资回报。学习成功案例，为企业制定合适的开源战略。",
    },
  ],
}
