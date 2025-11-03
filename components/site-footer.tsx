import Link from "next/link"
import { Github, Mail, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">关于 OSPO</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              开源项目办公室（OSPO）是企业管理开源战略、合规性和社区参与的核心机构。
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/introduction" className="text-muted-foreground hover:text-foreground">
                  OSPO 简介
                </Link>
              </li>
              <li>
                <Link href="/organization" className="text-muted-foreground hover:text-foreground">
                  组织形式
                </Link>
              </li>
              <li>
                <Link href="/operations" className="text-muted-foreground hover:text-foreground">
                  职责与运营
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-muted-foreground hover:text-foreground">
                  案例研究
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">资源</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                  图书与报告
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground">
                  社区与组织
                </Link>
              </li>
              <li>
                <Link href="/links" className="text-muted-foreground hover:text-foreground">
                  友情链接
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">联系我们</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 OSPO 中文社区. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
