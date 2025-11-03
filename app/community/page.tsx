import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users } from "lucide-react"
import { communityData, iconMap } from "@/data/community"

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance">OSPO 相关社区与组织</h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">连接全球 OSPO 社区和相关开源组织</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-12">
            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">国际社区与组织</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {communityData.global.map((community) => {
                  const IconComponent = iconMap[community.icon as keyof typeof iconMap]
                  return (
                    <Card key={community.name} className="h-full">
                      <CardHeader>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{community.name}</CardTitle>
                        <CardDescription className="text-xs">{community.type}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{community.description}</p>
                        <Button variant="outline" size="sm">
                          访问网站
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">国内社区与组织</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {communityData.domestic.map((community) => (
                  <Card key={community.name} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{community.name}</CardTitle>
                      <CardDescription className="text-xs">{community.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{community.description}</p>
                      <Button variant="outline" size="sm">
                        了解更多
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">重要活动与会议</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {communityData.events.map((event) => (
                  <Card key={event.name}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-base">{event.name}</CardTitle>
                        <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {event.frequency}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>如何参与社区</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {communityData.participation.map((item, index) => (
                    <div key={index}>
                      <h3 className="mb-2 font-semibold text-primary">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <section>
              <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">加入我们的社区</h3>
                  <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
                    OSPO 中文社区致力于连接国内的 OSPO
                    从业者，分享实践经验，推动开源生态健康发展。欢迎加入我们的微信群和邮件列表。
                  </p>
                  <div className="flex gap-3">
                    <Button>
                      加入微信群
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">订阅邮件列表</Button>
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
