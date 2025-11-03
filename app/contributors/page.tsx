import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Github, Award, Users, GitPullRequest, ExternalLink } from "lucide-react"
import { contributorsData, contributionStats } from "@/data/contributors"

export default function ContributorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance">社区贡献榜</h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">感谢所有为 OSPO 中文社区做出贡献的伙伴们</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-12">
            <section>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">总贡献者</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{contributionStats.totalContributors}</div>
                    <p className="text-xs text-muted-foreground">来自社区的贡献者</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">总贡献数</CardTitle>
                    <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{contributionStats.totalContributions}</div>
                    <p className="text-xs text-muted-foreground">包括代码、文档和内容</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">活跃贡献者</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{contributionStats.activeContributors}</div>
                    <p className="text-xs text-muted-foreground">贡献超过 30 次</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">贡献者列表</h2>
                <Badge variant="outline">按贡献数排序</Badge>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {contributorsData.map((contributor, index) => (
                  <Card key={contributor.name} className="h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {contributor.name.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="mb-2 flex items-center justify-between">
                            <CardTitle className="text-lg">{contributor.name}</CardTitle>
                            {index < 3 && (
                              <Badge variant="default" className="gap-1">
                                <Award className="h-3 w-3" />
                                Top {index + 1}
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {contributor.role}
                            </Badge>
                            <span className="text-xs">·</span>
                            <span className="text-xs">{contributor.contributions} 次贡献</span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 text-sm text-muted-foreground leading-relaxed">{contributor.description}</p>
                      {contributor.github && (
                        <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
                          <a
                            href={`https://github.com/${contributor.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-3 w-3" />@{contributor.github}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>贡献类型</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold text-primary">代码贡献</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      包括网站功能开发、Bug 修复、性能优化等技术贡献。
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-primary">内容贡献</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      包括案例研究、技术文章、资源推荐、翻译等内容创作。
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-primary">设计贡献</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      包括 UI/UX 设计、视觉优化、用户体验改进等设计工作。
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-primary">社区管理</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      包括社区运营、用户支持、活动组织等社区建设工作。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">成为贡献者</h3>
                  <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
                    OSPO 中文社区是一个开放的社区项目，我们欢迎所有形式的贡献。
                    无论是代码、文档、设计还是内容，每一份贡献都让社区变得更好。
                  </p>
                  <div className="flex gap-3">
                    <Button asChild>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        访问 GitHub
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline">查看贡献指南</Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>贡献指南</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong>1. Fork 仓库：</strong>访问我们的 GitHub 仓库，点击 Fork 按钮创建你自己的副本。
                  </p>
                  <p>
                    <strong>2. 编辑数据文件：</strong>所有内容数据都存储在 <code className="text-xs">data/</code>{" "}
                    目录下的 TypeScript 文件中，你可以直接编辑这些文件来更新内容。
                  </p>
                  <p>
                    <strong>3. 提交 Pull Request：</strong>完成修改后，提交 Pull Request
                    到主仓库，我们会尽快审核你的贡献。
                  </p>
                  <p>
                    <strong>4. 参与讨论：</strong>在 GitHub Issues 中参与讨论，提出建议或报告问题。
                  </p>
                  <p className="text-xs text-muted-foreground/80">注意：所有贡献都需要遵守我们的行为准则和贡献协议。</p>
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
