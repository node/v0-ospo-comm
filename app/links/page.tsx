import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { linksData } from "@/data/links"

export default function LinksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance">友情链接</h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">精选的 OSPO 和开源相关资源链接</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-12">
            {linksData.categories.map((category) => (
              <section key={category.title}>
                <h2 className="mb-6 text-2xl font-bold tracking-tight">{category.title}</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {category.links.map((link) => (
                    <Card key={link.name} className="transition-all hover:border-primary hover:shadow-md">
                      <CardHeader>
                        <CardTitle className="text-lg">{link.name}</CardTitle>
                        <CardDescription className="text-xs">{link.url}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{link.description}</p>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            访问网站
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <h3 className="text-xl font-bold">申请友情链接</h3>
                  <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
                    如果您的网站或组织与 OSPO 和开源相关，欢迎申请加入我们的友情链接。我们会定期审核并更新链接列表。
                  </p>
                  <Button>
                    提交申请
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>链接说明</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>以上链接均为外部网站，我们会定期检查和更新。如果您发现任何失效链接或有新的推荐，请联系我们。</p>
                  <p>
                    这些资源涵盖了 OSPO 建设和运营的各个方面，从基础知识到高级实践，从工具平台到社区组织。
                    我们建议根据您的需求和兴趣，有选择地探索这些资源。
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    免责声明：外部链接的内容由各自网站负责，不代表本站观点。
                  </p>
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
