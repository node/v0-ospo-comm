"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CasesTabHome } from "@/components/cases/cases-tab-home"
import { CasesTabRegion } from "@/components/cases/cases-tab-region"
import { CasesTabAll } from "@/components/cases/cases-tab-all"
import { casesData, getInternationalCases, getDomesticCases } from "@/data/cases"
import { Home, Globe, Building2, Database } from "lucide-react"

export default function CasesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* 页面头部 */}
        <div className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance">
              {casesData.tabDescriptions.home.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              汇集全球领先企业的 OSPO 实践经验，为您的开源战略提供参考
            </p>
          </div>
        </div>

        {/* Tab 内容区 */}
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-7xl">
            <Tabs defaultValue="home" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
                <TabsTrigger value="home" className="gap-1.5">
                  <Home className="hidden h-4 w-4 sm:block" />
                  案例库首页
                </TabsTrigger>
                <TabsTrigger value="international" className="gap-1.5">
                  <Globe className="hidden h-4 w-4 sm:block" />
                  国际案例
                </TabsTrigger>
                <TabsTrigger value="domestic" className="gap-1.5">
                  <Building2 className="hidden h-4 w-4 sm:block" />
                  国内案例
                </TabsTrigger>
                <TabsTrigger value="all" className="gap-1.5">
                  <Database className="hidden h-4 w-4 sm:block" />
                  全部案例库
                </TabsTrigger>
              </TabsList>

              <TabsContent value="home">
                <CasesTabHome />
              </TabsContent>

              <TabsContent value="international">
                <CasesTabRegion
                  title={casesData.tabDescriptions.international.title}
                  description={casesData.tabDescriptions.international.description}
                  cases={getInternationalCases()}
                />
              </TabsContent>

              <TabsContent value="domestic">
                <CasesTabRegion
                  title={casesData.tabDescriptions.domestic.title}
                  description={casesData.tabDescriptions.domestic.description}
                  cases={getDomesticCases()}
                />
              </TabsContent>

              <TabsContent value="all">
                <CasesTabAll />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
