import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { introductionData } from "@/data/introduction"

export default function IntroductionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance">OSPO 简介</h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">了解开源项目办公室的定义、价值和核心理念</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>{introductionData.sections.whatIsOSPO.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                {introductionData.sections.whatIsOSPO.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{introductionData.sections.whyNeedOSPO.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{introductionData.sections.whyNeedOSPO.content}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  {introductionData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{introductionData.sections.coreValues.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {introductionData.sections.coreValues.items.map((item, index) => (
                  <div key={index}>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{introductionData.sections.history.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                {introductionData.sections.history.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
