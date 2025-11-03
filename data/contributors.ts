export interface Contributor {
  name: string
  avatar?: string
  contributions: number
  role: string
  github?: string
  description: string
}

export const contributorsData: Contributor[] = [
  {
    name: "张三",
    contributions: 156,
    role: "核心维护者",
    github: "zhangsan",
    description: "负责网站架构设计和核心功能开发",
  },
  {
    name: "李四",
    contributions: 98,
    role: "内容贡献者",
    github: "lisi",
    description: "撰写和维护 OSPO 案例研究内容",
  },
  {
    name: "王五",
    contributions: 87,
    role: "技术顾问",
    github: "wangwu",
    description: "提供技术咨询和代码审查",
  },
  {
    name: "赵六",
    contributions: 65,
    role: "文档维护者",
    github: "zhaoliu",
    description: "维护和更新技术文档",
  },
  {
    name: "钱七",
    contributions: 54,
    role: "设计师",
    github: "qianqi",
    description: "负责网站 UI/UX 设计",
  },
  {
    name: "孙八",
    contributions: 43,
    role: "内容贡献者",
    github: "sunba",
    description: "贡献国际案例和资源链接",
  },
  {
    name: "周九",
    contributions: 38,
    role: "社区管理",
    github: "zhoujiu",
    description: "管理社区互动和用户反馈",
  },
  {
    name: "吴十",
    contributions: 29,
    role: "翻译志愿者",
    github: "wushi",
    description: "翻译国际资源和文档",
  },
  {
    name: "郑十一",
    contributions: 21,
    role: "测试工程师",
    github: "zhengshiyi",
    description: "进行功能测试和问题反馈",
  },
  {
    name: "陈十二",
    contributions: 15,
    role: "内容贡献者",
    github: "chenshier",
    description: "贡献工具和资源推荐",
  },
]

export const contributionStats = {
  totalContributors: contributorsData.length,
  totalContributions: contributorsData.reduce((sum, c) => sum + c.contributions, 0),
  activeContributors: contributorsData.filter((c) => c.contributions > 30).length,
}
