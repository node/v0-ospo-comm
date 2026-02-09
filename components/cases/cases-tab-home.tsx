import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Building2, BarChart3, BookOpen, Lightbulb } from "lucide-react"
import { casesData, getInternationalCases, getDomesticCases, getAllIndustries } from "@/data/cases"

export function CasesTabHome() {
  const internationalCount = getInternationalCases().length
  const domesticCount = getDomesticCases().length
  const totalCount = casesData.cases.length
  const industries = getAllIndustries()

  const tabCards = [
    {
      icon: Globe,
      title: casesData.tabDescriptions.international.title,
      description: casesData.tabDescriptions.international.description,
      stat: `${internationalCount} 个案例`,
      tabValue: "international",
    },
    {
      icon: Building2,
      title: casesData.tabDescriptions.domestic.title,
      description: casesData.tabDescriptions.domestic.description,
      stat: `${domesticCount} 个案例`,
      tabValue: "domestic",
    },
    {
      icon: BarChart3,
      title: casesData.tabDescriptions.all.title,
      description: casesData.tabDescriptions.all.description,
      stat: `${totalCount} 个案例`,
      tabValue: "all",
    },
  ]

  return (
    <div className="space-y-10">
      {/* 总览描述 */}
      <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
        <p className="text-base text-foreground leading-relaxed">
          {casesData.tabDescriptions.home.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Globe className="h-4 w-4 text-primary" />
            <span>覆盖 {new Set(casesData.cases.map((c) => c.country)).size} 个国家/地区</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="h-4 w-4 text-primary" />
            <span>涵盖 {industries.length} 个行业领域</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span>共收录 {totalCount} 个典型案例</span>
          </div>
        </div>
      </div>

      {/* 子 Tab 卡片入口 */}
      <div className="grid gap-6 md:grid-cols-3">
        {tabCards.map((card) => (
          <Card
            key={card.tabValue}
            className="transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <CardHeader>
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <card.icon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">{card.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {card.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">{card.stat}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 案例洞察 */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-bold">案例洞察：成功 OSPO 的共同特点</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {casesData.insights.commonFeatures.map((feature, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 经验启示 */}
      <section>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle>经验启示</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {casesData.insights.lessons.map((lesson, index) => (
              <p key={index} className="text-sm text-muted-foreground leading-relaxed">
                {lesson}
              </p>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
