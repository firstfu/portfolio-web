# 個人作品集網站

一個使用 Next.js 15、TypeScript 和 Tailwind CSS 構建的現代化個人作品集網站，展示專業技能、專案作品和職業經歷。

## ✨ 專案特色

- 🎨 **現代化設計** - 簡約優雅的視覺設計
- 📱 **響應式佈局** - 完美適配各種裝置螢幕
- ⚡ **高效能** - Next.js 15 帶來極速載入體驗
- 🔍 **SEO 優化** - 搜尋引擎友善設計
- ♿ **無障礙設計** - 遵循 WCAG 2.1 AA 標準
- 🌐 **國際化支援** - 繁體中文優化

## 🛠️ 技術棧

- **框架**: [Next.js 15.3.4](https://nextjs.org/) (App Router)
- **語言**: [TypeScript 5](https://www.typescriptlang.org/)
- **樣式**: [Tailwind CSS 4](https://tailwindcss.com/)
- **動畫**: [Framer Motion](https://www.framer.com/motion/)
- **表單**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **圖示**: [Lucide React](https://lucide.dev/)
- **字體**: [Geist](https://vercel.com/font) + [Noto Sans TC](https://fonts.google.com/noto/specimen/Noto+Sans+TC)

## 📁 專案結構

```
app/
├── components/          # 可重用元件
│   ├── ui/             # 基礎 UI 元件 (Button, Card, Modal)
│   ├── sections/       # 頁面區塊元件 (HeroSection, SkillsSection)
│   └── layout/         # 佈局元件 (Header, Footer, Container)
├── data/               # 靜態資料和配置
├── lib/                # 工具函數
├── types/              # TypeScript 型別定義
├── (pages)/            # 頁面路由
│   ├── about/          # 關於我
│   ├── skills/         # 技能展示
│   ├── portfolio/      # 作品集
│   └── contact/        # 聯繫資訊
├── globals.css         # 全域樣式
├── layout.tsx          # 根佈局
└── page.tsx           # 首頁
```

## 🚀 快速開始

### 環境需求

- Node.js 18+
- npm 或 yarn 或 pnpm

### 安裝依賴

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 開發模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

開啟 [http://localhost:3000](http://localhost:3000) 在瀏覽器中查看結果。

### 建置專案

```bash
npm run build
npm run start
```

## 📚 開發指南

### Cursor Rules

本專案已配置完整的 Cursor Rules，位於 `.cursor/rules/` 目錄：

- **專案結構指南** - 瞭解專案架構和檔案組織
- **程式碼風格** - TypeScript 和 React 開發標準
- **元件模式** - UI 元件開發模式和範例
- **開發工作流程** - 工具配置和開發流程
- **專案特定指引** - 作品集網站的特殊需求

### 程式碼風格

- 使用 TypeScript 嚴格模式
- 遵循 Tailwind CSS utility-first 方法
- 每個檔案頂部都要有詳細註解
- 優先使用 composition over inheritance
- 確保響應式設計和無障礙性

### 核心元件

- **UI 元件**: Button, Card, Modal 等基礎元件
- **佈局元件**: Header, Footer, Container
- **區塊元件**: HeroSection, SkillsSection, ProjectsSection
- **頁面元件**: 各頁面的主要內容元件

## 🎨 設計系統

### 色彩配置

- **主色調**: 深藍色 (#1a365d) - 專業可信
- **輔助色**: 淺藍色 (#3182ce) - 創新活力
- **強調色**: 橙色 (#ed8936) - 熱情積極
- **中性色**: 灰色系統

### 字體系統

- **英文**: Geist Sans / Geist Mono
- **中文**: Noto Sans TC
- **權重**: 300, 400, 500, 700

### 響應式斷點

```css
sm: 640px   /* 小型裝置 */
md: 768px   /* 中型裝置 */
lg: 1024px  /* 大型裝置 */
xl: 1280px  /* 超大型裝置 */
```

## 📄 專案文件

- [產品需求文件 (PRD)](docs/PRD-個人作品集網站.md)
- [技術規格文件](docs/技術規格文件.md)
- [UI 設計規範](docs/UI設計規範.md)
- [開發時程規劃](docs/開發時程規劃.md)

## 🔧 可用腳本

```bash
npm run dev          # 開發伺服器 (使用 Turbopack)
npm run build        # 生產環境建置
npm run start        # 啟動生產伺服器
npm run lint         # ESLint 檢查
```

## 📈 效能優化

- ✅ Next.js Image 元件優化圖片
- ✅ 自動程式碼分割
- ✅ 字體最佳化載入
- ✅ Tailwind CSS purge 功能
- ✅ 靜態生成 (SSG) 優先

## 🚀 部署

推薦使用 [Vercel](https://vercel.com/) 進行部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/your-username/portfolio-web)

也可以部署到其他平台：

- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## 📄 授權

[MIT License](LICENSE)

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

---

⭐ 如果這個專案對您有幫助，請給個星星支持！
