"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LayoutGrid, List, Search, X } from "lucide-react"

interface CaseFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  region: string
  onRegionChange: (value: string) => void
  industry: string
  onIndustryChange: (value: string) => void
  scale: string
  onScaleChange: (value: string) => void
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
  industries: string[]
  resultCount: number
  onReset: () => void
}

export function CaseFilters({
  search,
  onSearchChange,
  region,
  onRegionChange,
  industry,
  onIndustryChange,
  scale,
  onScaleChange,
  viewMode,
  onViewModeChange,
  industries,
  resultCount,
  onReset,
}: CaseFiltersProps) {
  const hasFilters = search || region !== "all" || industry !== "all" || scale !== "all"

  return (
    <div className="space-y-4">
      {/* 搜索 + 视图切换 */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="搜索企业名称、描述、标签..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {resultCount} 个案例
          </span>
          <div className="flex rounded-md border border-border">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="sm"
              className="h-9 rounded-r-none px-3"
              onClick={() => onViewModeChange("grid")}
            >
              <LayoutGrid className="h-4 w-4" />
              <span className="sr-only">宫格视图</span>
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="sm"
              className="h-9 rounded-l-none px-3"
              onClick={() => onViewModeChange("list")}
            >
              <List className="h-4 w-4" />
              <span className="sr-only">列表视图</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 筛选条件 */}
      <div className="flex flex-wrap items-center gap-3">
        <Select value={region} onValueChange={onRegionChange}>
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="地区" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">全部地区</SelectItem>
            <SelectItem value="international">国际</SelectItem>
            <SelectItem value="domestic">国内</SelectItem>
          </SelectContent>
        </Select>

        <Select value={industry} onValueChange={onIndustryChange}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="行业" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">全部行业</SelectItem>
            {industries.map((ind) => (
              <SelectItem key={ind} value={ind}>
                {ind}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={scale} onValueChange={onScaleChange}>
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="规模" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">全部规模</SelectItem>
            <SelectItem value="大型">大型</SelectItem>
            <SelectItem value="中型">中型</SelectItem>
            <SelectItem value="小型">小型</SelectItem>
          </SelectContent>
        </Select>

        {hasFilters && (
          <Button variant="ghost" size="sm" className="h-9 gap-1.5" onClick={onReset}>
            <X className="h-3.5 w-3.5" />
            重置筛选
          </Button>
        )}
      </div>
    </div>
  )
}
