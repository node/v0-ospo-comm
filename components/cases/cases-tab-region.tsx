import { Badge } from "@/components/ui/badge"
import { CaseCardGrid } from "@/components/cases/case-card"
import type { CaseItem } from "@/data/cases"

interface CasesTabRegionProps {
  title: string
  description: string
  cases: CaseItem[]
}

export function CasesTabRegion({ title, description, cases }: CasesTabRegionProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Badge variant="secondary">{cases.length} 个案例</Badge>
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((item) => (
          <CaseCardGrid key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
