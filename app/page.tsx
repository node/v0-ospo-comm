import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Building2, Users, FileText, Globe, LinkIcon } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: "OSPO 简介",
      description: "了解开源项目办公室的定义、价值和核心理念",
      href: "/introduction",
    },
    {
      icon: Building2,
      title: "组织形式",
      description: "探索不同规模企业的 OSPO 组织架构和团队配置",
      href: "/organization",
    },
    {
      icon: Users,
      title: "职责与运营",
      description: "深入了解 OSPO 的日常职责、工作流程和最佳实践",
      href: "/operations",
    },
    {
      icon: Globe,
      title: "国内外案例",
      description: "学习全球领先企业的 OSPO 实践经验和成功案例",
      href: "/cases",
    },
    {
      icon: FileText,
      title: "图书与报告",
      description: "获取权威的 OSPO 相关书籍、研究报告和白皮书",
      href: "/resources",
    },
    {
      icon: LinkIcon,
      title: "社区与组织",
      description: "连接全球 OSPO 社区和相关开源组织",
      href: "/community",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border py-20 md:py-32">
          {/* 背景图层 */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/diverse-open-source-community-collaboration-global.jpg')`,
            }}
          />
          {/* 渐变叠加层确保文字可读性 */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl">
                开源项目办公室
                <span className="block text-primary">OSPO 中文社区</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
                探索企业开源战略的核心机构，连接全球 OSPO 实践者，推动开源生态健康发展
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/introduction">
                    开始探索
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/community">加入社区</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance">探索 OSPO 的各个方面</h2>
              <p className="text-lg text-muted-foreground text-pretty">全面了解开源项目办公室的组织、运营和最佳实践</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Link key={feature.href} href={feature.href}>
                  <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">全球 OSPO 组织</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">开源项目管理</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">国内外案例</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-balance">准备建立您的 OSPO？</h2>
                <p className="max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
                  从全球领先企业的实践中学习，获取专业指导和资源支持，开启您的开源战略之旅
                </p>
                <Button size="lg" asChild>
                  <Link href="/resources">
                    获取资源
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
