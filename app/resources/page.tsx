import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, ExternalLink, Rocket, Smile, Github, Check } from "lucide-react"
import { resourcesData } from "@/data/resources"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance">OSPO 资源中心</h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              获取 OSPO 社区开源项目、权威书籍、研究报告和实用工具，助力您的开源之旅
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-12">
            <section>
              <div className="mb-6 flex items-center gap-3">
                <Rocket className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight">社区开源项目</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {resourcesData.projects.map((project) => (
                  <Card
                    key={project.name}
                    className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent"
                  >
                    <CardHeader>
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <span className="shrink-0 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                          {project.category}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                      {/* 显示项目特性 */}
                      {project.features && (
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.features.map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs"
                            >
                              <Check className="h-3 w-3 text-primary" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}

                      {project.versions && (
                        <div className="mb-4 space-y-2">
                          <p className="text-xs font-medium text-foreground">可用版本：</p>
                          <div className="grid grid-cols-2 gap-2">
                            {project.versions.map((version) => (
                              <div key={version.name} className="rounded-md bg-muted p-2">
                                <div className="flex items-center gap-1.5">
                                  <Smile className="h-3.5 w-3.5 text-primary" />
                                  <span className="text-xs font-medium">{version.name}</span>
                                </div>
                                <p className="mt-1 text-xs text-muted-foreground">{version.description}</p>
                                {version.url ? (
                                  <a
                                    href={version.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1.5 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                                  >
                                    立即获取
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                ) : (
                                  <span className="mt-1.5 inline-block text-xs text-muted-foreground/70">
                                    {version.status || "待上架"}
                                  </span>
                                )}
                                {version.note && <p className="mt-1 text-xs text-amber-500">{version.note}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.url !== "#" ? (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            查看项目
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" disabled>
                          敬请期待
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* 推荐书籍 */}
            <section>
              <div className="mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight">推荐书籍</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {resourcesData.books.map((book) => (
                  <Card key={book.title}>
                    <CardHeader>
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <CardTitle className="text-lg">{book.title}</CardTitle>
                        <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {book.type}
                        </span>
                      </div>
                      <CardDescription>作者：{book.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{book.description}</p>
                      <Button variant="outline" size="sm">
                        查看详情
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* 报告 */}
            <section>
              <div className="mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight">研究报告</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {resourcesData.reports.map((report) => (
                  <Card key={report.title}>
                    <CardHeader>
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                        <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {report.year}
                        </span>
                      </div>
                      <CardDescription>{report.organization}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{report.description}</p>
                      <Button variant="outline" size="sm">
                        下载报告
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* 实用工具 */}
            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">实用工具</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {resourcesData.tools.map((tool) => (
                  <Card key={tool.name}>
                    <CardHeader>
                      <CardTitle className="text-base">{tool.name}</CardTitle>
                      <CardDescription className="text-xs">{tool.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        了解更多
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* 学习路径建议 */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle>学习路径建议</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {resourcesData.learningPaths.map((path, index) => (
                    <div key={index}>
                      <h3 className="mb-2 font-semibold text-primary">{path.level}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{path.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* 持续更新中 */}
            <section>
              <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <h3 className="text-xl font-bold">持续更新中</h3>
                  <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
                    我们会持续收集和更新 OSPO 相关的优质资源。如果您有推荐的书籍、报告或工具，欢迎与我们分享。
                  </p>
                  <Button>
                    推荐资源
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
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
