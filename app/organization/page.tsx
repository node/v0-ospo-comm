import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building, Briefcase } from "lucide-react"

export default function OrganizationPage() {
  const models = [
    {
      icon: Users,
      title: "虚拟团队模式",
      description: "适合初创企业和小型组织",
      details: ["由不同部门的成员兼职组成", "灵活的协作方式", "较低的运营成本", "适合开源活动较少的企业"],
    },
    {
      icon: Briefcase,
      title: "专职团队模式",
      description: "适合中型企业",
      details: ["3-5 人的专职团队", "明确的职责分工", "系统化的流程管理", "平衡成本与效率"],
    },
    {
      icon: Building,
      title: "独立部门模式",
      description: "适合大型企业和科技公司",
      details: ["10+ 人的完整组织架构", "多个专业化子团队", "战略级别的决策权", "全面的开源生态管理"],
    },
  ]

  const roles = [
    {
      title: "OSPO 负责人",
      description: "制定开源战略，协调各方资源，对外代表企业",
    },
    {
      title: "开源合规专家",
      description: "管理开源许可证合规，审查代码使用，降低法律风险",
    },
    {
      title: "社区关系经理",
      description: "维护社区关系，组织活动，提升企业影响力",
    },
    {
      title: "技术顾问",
      description: "提供技术指导，评估开源项目，支持内部开发",
    },
    {
      title: "培训与推广",
      description: "开展内部培训，推广开源文化，分享最佳实践",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance">OSPO 组织形式</h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">探索不同规模企业的 OSPO 组织架构和团队配置</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-12">
            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">三种主要组织模式</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {models.map((model) => (
                  <Card key={model.title} className="h-full">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <model.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{model.title}</CardTitle>
                      <CardDescription>{model.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {model.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">核心团队角色</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {roles.map((role) => (
                  <Card key={role.title}>
                    <CardHeader>
                      <CardTitle className="text-lg">{role.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>组织架构设计原则</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold">1. 与企业规模匹配</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      OSPO 的规模和结构应该与企业的整体规模、开源活动的复杂度相匹配。
                      初创企业可以从虚拟团队开始，随着业务发展逐步扩展。
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">2. 明确汇报关系</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      OSPO 通常向 CTO、工程副总裁或法务部门汇报。 汇报关系应该确保 OSPO 有足够的权威和资源来执行其职责。
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">3. 跨部门协作</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      OSPO 需要与工程、法务、市场、人力资源等多个部门密切合作。 建立有效的沟通机制和协作流程至关重要。
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">4. 灵活性与可扩展性</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      组织架构应该具有足够的灵活性，能够随着企业开源战略的演进而调整和扩展。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>不同阶段的组织演进</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-semibold text-primary">初创阶段（0-6 个月）</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      1-2 人的虚拟团队，专注于建立基本的开源政策和合规流程。
                      主要任务是评估现状、制定策略、建立基础设施。
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-primary">成长阶段（6-18 个月）</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      3-5 人的专职团队，开始系统化地管理开源活动。 扩展职能包括社区参与、内部培训、工具建设等。
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-primary">成熟阶段（18 个月以上）</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      10+ 人的完整组织，具备战略规划、合规管理、社区运营、技术支持等全方位能力。
                      成为企业开源战略的核心驱动力。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
