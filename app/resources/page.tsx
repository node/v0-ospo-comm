import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, ExternalLink } from "lucide-react"
import { resourcesData } from "@/data/resources"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance">OSPO 图书与报告</h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">获取权威的 OSPO 相关书籍、研究报告和白皮书</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-12">
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
