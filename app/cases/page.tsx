import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { casesData } from "@/data/cases"

export default function CasesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance">OSPO 国内外案例</h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">学习全球领先企业的 OSPO 实践经验和成功案例</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-12">
            <section>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">国际案例</h2>
                <Badge variant="outline">{casesData.international.length} 个案例</Badge>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {casesData.international.map((case_) => (
                  <Card key={case_.company} className="h-full">
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between">
                        <CardTitle>{case_.company}</CardTitle>
                        <Badge>{case_.scale}</Badge>
                      </div>
                      <CardDescription>
                        {case_.country} · {case_.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="mb-2 text-sm font-semibold">主要成就：</h4>
                      <ul className="space-y-1.5">
                        {case_.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">国内案例</h2>
                <Badge variant="outline">{casesData.domestic.length} 个案例</Badge>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {casesData.domestic.map((case_) => (
                  <Card key={case_.company} className="h-full">
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between">
                        <CardTitle>{case_.company}</CardTitle>
                        <Badge>{case_.scale}</Badge>
                      </div>
                      <CardDescription>{case_.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="mb-2 text-sm font-semibold">主要成就：</h4>
                      <ul className="space-y-1.5">
                        {case_.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{highlight}</span>
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
                  <CardTitle>案例分析：共同特点</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {casesData.insights.commonFeatures.map((feature, index) => (
                    <div key={index}>
                      <h3 className="mb-2 font-semibold text-primary">
                        {index + 1}. {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>经验启示</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  {casesData.insights.lessons.map((lesson, index) => (
                    <p key={index}>{lesson}</p>
                  ))}
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
