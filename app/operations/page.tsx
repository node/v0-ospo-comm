import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, GitBranch, Users2, BookOpen, Wrench, TrendingUp } from "lucide-react"

export default function OperationsPage() {
  const responsibilities = [
    {
      icon: Shield,
      title: "开源合规管理",
      items: ["制定和维护开源使用政策", "审查开源许可证合规性", "管理开源软件清单（SBOM）", "处理许可证冲突和风险"],
    },
    {
      icon: GitBranch,
      title: "开源项目管理",
      items: ["评估和选择开源项目", "管理企业开源项目发布", "监控项目健康度和安全性", "协调内部开源贡献"],
    },
    {
      icon: Users2,
      title: "社区参与与关系",
      items: ["建立和维护社区关系", "组织和参与开源活动", "管理企业开源品牌", "支持员工社区贡献"],
    },
    {
      icon: BookOpen,
      title: "培训与文化建设",
      items: ["开展开源知识培训", "推广开源最佳实践", "建立内部开源社区", "激励开源贡献行为"],
    },
    {
      icon: Wrench,
      title: "工具与基础设施",
      items: ["部署开源管理工具", "建立自动化流程", "提供技术支持服务", "维护知识库和文档"],
    },
    {
      icon: TrendingUp,
      title: "战略规划与度量",
      items: ["制定开源战略路线图", "设定 KPI 和度量指标", "分析开源投资回报", "向管理层汇报进展"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance">OSPO 职责与运营</h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              深入了解 OSPO 的日常职责、工作流程和最佳实践
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-12">
            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">核心职责领域</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {responsibilities.map((area) => (
                  <Card key={area.title} className="h-full">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <area.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {area.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>典型工作流程</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="mb-3 font-semibold text-primary">开源软件引入流程</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">1.</span>
                        <span>开发者提交开源软件使用申请</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">2.</span>
                        <span>OSPO 审查许可证兼容性和安全风险</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">3.</span>
                        <span>评估项目活跃度和社区健康度</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">4.</span>
                        <span>批准使用并记录到软件清单</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">5.</span>
                        <span>持续监控更新和安全漏洞</span>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-primary">开源项目发布流程</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">1.</span>
                        <span>团队提交开源发布申请</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">2.</span>
                        <span>OSPO 评估商业价值和风险</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">3.</span>
                        <span>法务审查知识产权和许可证选择</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">4.</span>
                        <span>准备项目文档和社区基础设施</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">5.</span>
                        <span>正式发布并进行社区推广</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">6.</span>
                        <span>持续维护和社区运营</span>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-primary">员工贡献支持流程</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">1.</span>
                        <span>员工申请参与外部开源项目</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">2.</span>
                        <span>OSPO 评估项目相关性和影响</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">3.</span>
                        <span>签署贡献者协议（CLA）</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">4.</span>
                        <span>提供技术指导和资源支持</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground">5.</span>
                        <span>跟踪贡献并给予认可</span>
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>运营最佳实践</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold">建立清晰的政策和流程</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      制定明确的开源使用政策、贡献指南和发布标准。 确保流程简单易懂，避免成为开发者的障碍。
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">自动化工具和流程</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      使用自动化工具进行许可证扫描、安全检查和合规审查。 减少人工工作量，提高效率和准确性。
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">持续教育和沟通</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      定期开展培训活动，分享开源知识和最佳实践。 建立多渠道沟通机制，及时回应团队需求。
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">度量和持续改进</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      建立关键指标体系，定期评估 OSPO 的效果。 根据反馈和数据持续优化流程和服务。
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">平衡控制与赋能</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      在风险管理和开发者自由之间找到平衡。 OSPO 应该是赋能者而非阻碍者。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>关键成功因素</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">高层支持</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        获得管理层的认可和资源支持，确保 OSPO 有足够的权威执行职责。
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">跨部门协作</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        与工程、法务、市场等部门建立良好的合作关系。
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">技术能力</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        团队成员需要具备深厚的技术背景和开源社区经验。
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">社区信誉</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        在开源社区建立良好的声誉，成为受尊重的参与者。
                      </p>
                    </div>
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
