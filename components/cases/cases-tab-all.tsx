"use client"

import { useState, useMemo } from "react"
import { CaseCardGrid, CaseCardList } from "@/components/cases/case-card"
import { CaseFilters } from "@/components/cases/case-filters"
import { casesData, getAllIndustries } from "@/data/cases"

export function CasesTabAll() {
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("all")
  const [industry, setIndustry] = useState("all")
  const [scale, setScale] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const industries = getAllIndustries()

  const filtered = useMemo(() => {
    return casesData.cases.filter((item) => {
      // 关键词搜索
      if (search) {
        const q = search.toLowerCase()
        const matchesSearch =
          item.company.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q)) ||
          item.industry.toLowerCase().includes(q) ||
          item.country.toLowerCase().includes(q)
        if (!matchesSearch) return false
      }
      // 地区筛选
      if (region !== "all" && item.region !== region) return false
      // 行业筛选
      if (industry !== "all" && item.industry !== industry) return false
      // 规模筛选
      if (scale !== "all" && item.scale !== scale) return false
      return true
    })
  }, [search, region, industry, scale])

  const handleReset = () => {
    setSearch("")
    setRegion("all")
    setIndustry("all")
    setScale("all")
  }

  return (
    <div className="space-y-6">
      <CaseFilters
        search={search}
        onSearchChange={setSearch}
        region={region}
        onRegionChange={setRegion}
        industry={industry}
        onIndustryChange={setIndustry}
        scale={scale}
        onScaleChange={setScale}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        industries={industries}
        resultCount={filtered.length}
        onReset={handleReset}
      />

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
          <p className="text-lg font-medium text-muted-foreground">未找到匹配的案例</p>
          <p className="mt-1 text-sm text-muted-foreground">请尝试调整搜索条件或重置筛选</p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <CaseCardGrid key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((item) => (
            <CaseCardList key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
