"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, ExternalLink } from "lucide-react"
import type { CaseItem } from "@/data/cases"

function LinkIcon({ type }: { type: string }) {
  switch (type) {
    case "github":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    case "gitee":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H8.37a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h5.852z" />
        </svg>
      )
    case "twitter":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    case "linkedin":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    default:
      return <Globe className="h-4 w-4" />
  }
}

/** 宫格模式卡片 */
export function CaseCardGrid({ item }: { item: CaseItem }) {
  return (
    <Card className="flex h-full flex-col transition-all hover:border-primary/50 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="mb-2 flex items-center justify-between">
          <CardTitle className="text-lg">{item.company}</CardTitle>
          <Badge variant="secondary" className="text-xs">
            {item.scale}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="outline" className="text-xs">
            {item.country}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {item.industry}
          </Badge>
          {item.year && (
            <Badge variant="outline" className="text-xs">
              {item.year} 年成立
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <CardDescription className="line-clamp-3 leading-relaxed">
          {item.description}
        </CardDescription>

        <div className="space-y-1.5">
          <h4 className="text-xs font-semibold text-foreground">主要成就：</h4>
          <ul className="space-y-1">
            {item.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span className="line-clamp-1">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-primary/10 px-1.5 py-0.5 text-xs text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-1.5 border-t border-border pt-3">
          {item.links.map((link) => (
            <Button
              key={link.url}
              variant="ghost"
              size="sm"
              className="h-7 gap-1 px-2 text-xs"
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <LinkIcon type={link.type} />
                {link.label || link.type}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

/** 列表模式卡片 */
export function CaseCardList({ item }: { item: CaseItem }) {
  return (
    <Card className="transition-all hover:border-primary/50 hover:shadow-md">
      <div className="flex flex-col gap-4 p-4 md:flex-row md:items-start md:p-6">
        {/* 左侧信息 */}
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold">{item.company}</h3>
            <Badge variant="secondary" className="text-xs">{item.scale}</Badge>
            <Badge variant="outline" className="text-xs">{item.country}</Badge>
            <Badge variant="outline" className="text-xs">{item.industry}</Badge>
            {item.year && (
              <Badge variant="outline" className="text-xs">{item.year} 年成立</Badge>
            )}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.highlights.map((h, i) => (
              <span
                key={i}
                className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {h}
              </span>
            ))}
          </div>

          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-primary/10 px-1.5 py-0.5 text-xs text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 右侧链接 */}
        <div className="flex shrink-0 flex-wrap gap-1.5 md:flex-col">
          {item.links.map((link) => (
            <Button
              key={link.url}
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 text-xs bg-transparent"
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <LinkIcon type={link.type} />
                {link.label || link.type}
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  )
}
