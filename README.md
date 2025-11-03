# OSPO 中文社区网站

这是一个关于开源项目办公室（OSPO）的中文社区网站，旨在为国内的 OSPO 从业者提供学习资源和交流平台。

## 项目结构

\`\`\`
├── app/                    # Next.js 应用页面
│   ├── introduction/       # OSPO 简介
│   ├── organization/       # 组织形式
│   ├── operations/         # 职责与运营
│   ├── cases/             # 国内外案例
│   ├── resources/         # 图书与报告
│   ├── community/         # 社区与组织
│   ├── links/             # 友情链接
│   └── contributors/      # 社区贡献榜
├── data/                  # 数据文件（可直接编辑）
│   ├── introduction.ts    # 简介页面数据
│   ├── cases.ts          # 案例数据
│   ├── resources.ts      # 资源数据
│   ├── community.ts      # 社区数据
│   ├── links.ts          # 链接数据
│   └── contributors.ts   # 贡献者数据
└── components/           # React 组件
\`\`\`

## 如何贡献

### 更新内容

所有网站内容都存储在 `data/` 目录下的 TypeScript 文件中。你可以直接编辑这些文件来更新内容：

1. **更新案例研究**：编辑 `data/cases.ts`
2. **添加资源链接**：编辑 `data/resources.ts` 或 `data/links.ts`
3. **更新社区信息**：编辑 `data/community.ts`
4. **修改简介内容**：编辑 `data/introduction.ts`

### 贡献流程

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 编辑 `data/` 目录下的相关文件
4. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
5. 推送到分支 (`git push origin feature/AmazingFeature`)
6. 开启一个 Pull Request

### 数据文件说明

- **TypeScript 类型安全**：所有数据文件都使用 TypeScript，提供类型检查
- **易于维护**：数据和展示逻辑分离，修改内容无需了解 React
- **版本控制友好**：纯文本格式，便于 Git 追踪变更

## 本地开发

\`\`\`bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
\`\`\`

## 技术栈

- **框架**：Next.js 16
- **样式**：Tailwind CSS v4
- **组件**：shadcn/ui
- **语言**：TypeScript

## 许可证

MIT License

## 联系我们

如有任何问题或建议，欢迎通过 GitHub Issues 联系我们。
