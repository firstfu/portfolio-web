# 個人作品集網站 - UI 設計規範

## 文件資訊

- **文件版本**: v1.0
- **建立日期**: 2024 年 12 月
- **專案**: Portfolio-Web
- **設計語言**: 現代簡約專業風格

---

## 1. 設計理念

### 1.1 核心設計原則

- **簡約而不簡單**: 乾淨的視覺層次，突出重點內容
- **專業可信賴**: 建立專業形象，提升可信度
- **創新活力**: 展現技術創新能力與學習熱忱
- **用戶友善**: 優秀的用戶體驗，直觀的操作流程

### 1.2 設計目標

- 建立強烈的個人品牌識別
- 提供優秀的跨裝置體驗
- 確保內容的可讀性與可訪問性
- 創造令人印象深刻的視覺體驗

---

## 2. 色彩系統

### 2.1 主要色彩

```css
/* 主色調 - 深藍色系 (專業可信) */
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-200: #bfdbfe;
--primary-300: #93c5fd;
--primary-400: #60a5fa;
--primary-500: #3b82f6; /* 主色 */
--primary-600: #2563eb;
--primary-700: #1d4ed8;
--primary-800: #1e40af;
--primary-900: #1e3a8a;

/* 輔助色 - 淺藍色系 (創新活力) */
--secondary-50: #f0f9ff;
--secondary-100: #e0f2fe;
--secondary-200: #bae6fd;
--secondary-300: #7dd3fc;
--secondary-400: #38bdf8;
--secondary-500: #0ea5e9; /* 輔助色 */
--secondary-600: #0284c7;
--secondary-700: #0369a1;
--secondary-800: #075985;
--secondary-900: #0c4a6e;
```

### 2.2 強調色彩

```css
/* 強調色 - 橙色系 (熱情積極) */
--accent-50: #fff7ed;
--accent-100: #ffedd5;
--accent-200: #fed7aa;
--accent-300: #fdba74;
--accent-400: #fb923c;
--accent-500: #f97316; /* 強調色 */
--accent-600: #ea580c;
--accent-700: #c2410c;
--accent-800: #9a3412;
--accent-900: #7c2d12;

/* 成功色 - 綠色系 */
--success-500: #10b981;
--success-600: #059669;

/* 警告色 - 黃色系 */
--warning-500: #f59e0b;
--warning-600: #d97706;

/* 錯誤色 - 紅色系 */
--error-500: #ef4444;
--error-600: #dc2626;
```

### 2.3 中性色彩

```css
/* 灰色系 (文字與背景) */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;

/* 純色 */
--white: #ffffff;
--black: #000000;
```

### 2.4 色彩使用指南

- **主色調**: 導航、按鈕、連結、重要元素
- **輔助色**: 次要按鈕、標籤、裝飾元素
- **強調色**: CTA 按鈕、重要提示、高亮內容
- **中性色**: 文字、背景、邊框、陰影

---

## 3. 字體系統

### 3.1 字體選擇

```css
/* 主要字體 - Geist Sans */
--font-primary: "Geist", "Noto Sans TC", system-ui, -apple-system, sans-serif;

/* 等寬字體 - Geist Mono */
--font-mono: "Geist Mono", "SF Mono", Monaco, "Cascadia Code", monospace;

/* 中文字體 - Noto Sans TC */
--font-chinese: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif;
```

### 3.2 字體大小階層

```css
/* 標題字體 */
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px */
--text-6xl: 3.75rem; /* 60px */
--text-7xl: 4.5rem; /* 72px */
```

### 3.3 字重系統

```css
--font-thin: 100;
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;
```

### 3.4 行高系統

```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

---

## 4. 間距系統

### 4.1 基礎間距 (8px 基準)

```css
--spacing-0: 0;
--spacing-1: 0.25rem; /* 4px */
--spacing-2: 0.5rem; /* 8px */
--spacing-3: 0.75rem; /* 12px */
--spacing-4: 1rem; /* 16px */
--spacing-5: 1.25rem; /* 20px */
--spacing-6: 1.5rem; /* 24px */
--spacing-8: 2rem; /* 32px */
--spacing-10: 2.5rem; /* 40px */
--spacing-12: 3rem; /* 48px */
--spacing-16: 4rem; /* 64px */
--spacing-20: 5rem; /* 80px */
--spacing-24: 6rem; /* 96px */
--spacing-32: 8rem; /* 128px */
```

### 4.2 區段間距

```css
/* 區段間距 */
--section-padding-y: 4rem; /* 64px */
--section-padding-y-lg: 6rem; /* 96px */
--section-padding-x: 1rem; /* 16px */
--section-padding-x-lg: 2rem; /* 32px */

/* 容器間距 */
--container-padding: 1rem; /* 16px */
--container-padding-lg: 2rem; /* 32px */
```

---

## 5. 圓角系統

### 5.1 圓角尺寸

```css
--rounded-none: 0;
--rounded-sm: 0.125rem; /* 2px */
--rounded: 0.25rem; /* 4px */
--rounded-md: 0.375rem; /* 6px */
--rounded-lg: 0.5rem; /* 8px */
--rounded-xl: 0.75rem; /* 12px */
--rounded-2xl: 1rem; /* 16px */
--rounded-3xl: 1.5rem; /* 24px */
--rounded-full: 9999px;
```

### 5.2 使用指南

- **按鈕**: `rounded-lg` (8px)
- **卡片**: `rounded-xl` (12px)
- **輸入框**: `rounded-md` (6px)
- **圖片**: `rounded-lg` (8px)
- **頭像**: `rounded-full`

---

## 6. 陰影系統

### 6.1 陰影層級

```css
/* 陰影系統 */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

/* 彩色陰影 */
--shadow-primary: 0 10px 15px -3px rgb(59 130 246 / 0.1);
--shadow-accent: 0 10px 15px -3px rgb(249 115 22 / 0.1);
```

### 6.2 使用指南

- **卡片**: `shadow-md`
- **按鈕 hover**: `shadow-lg`
- **模態框**: `shadow-2xl`
- **重要元素**: `shadow-primary` 或 `shadow-accent`

---

## 7. 元件設計規範

### 7.1 按鈕設計

#### 主要按鈕 (Primary Button)

```css
.btn-primary {
  background: var(--primary-500);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: var(--rounded-lg);
  font-weight: var(--font-medium);
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--primary-600);
  box-shadow: var(--shadow-lg);
  transform: translateY(-1px);
}
```

#### 次要按鈕 (Secondary Button)

```css
.btn-secondary {
  background: var(--secondary-500);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: var(--rounded-lg);
  font-weight: var(--font-medium);
  transition: all 0.2s ease;
}
```

#### 輪廓按鈕 (Outline Button)

```css
.btn-outline {
  background: transparent;
  color: var(--primary-500);
  border: 2px solid var(--primary-500);
  padding: 0.75rem 1.5rem;
  border-radius: var(--rounded-lg);
  font-weight: var(--font-medium);
  transition: all 0.2s ease;
}

.btn-outline:hover {
  background: var(--primary-500);
  color: var(--white);
}
```

### 7.2 卡片設計

#### 基礎卡片

```css
.card {
  background: var(--white);
  border-radius: var(--rounded-xl);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-6);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

#### 專案卡片

```css
.project-card {
  background: var(--white);
  border-radius: var(--rounded-xl);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
}

.project-card-image {
  aspect-ratio: 16/9;
  object-fit: cover;
}

.project-card-content {
  padding: var(--spacing-6);
}
```

### 7.3 輸入框設計

#### 基礎輸入框

```css
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--gray-300);
  border-radius: var(--rounded-md);
  font-size: var(--text-base);
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgb(59 130 246 / 0.1);
}
```

#### 文字區域

```css
.textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--gray-300);
  border-radius: var(--rounded-md);
  font-size: var(--text-base);
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;
}
```

---

## 8. 佈局系統

### 8.1 容器系統

```css
/* 最大寬度容器 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* 響應式容器 */
@media (min-width: 640px) {
  .container {
    padding: 0 var(--container-padding-lg);
  }
}
```

### 8.2 網格系統

```css
/* 12 欄網格 */
.grid {
  display: grid;
  gap: var(--spacing-6);
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

/* 響應式網格 */
@media (min-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .lg\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
```

---

## 9. 動畫系統

### 9.1 基礎動畫

```css
/* 過渡動畫 */
.transition-all {
  transition: all 0.3s ease;
}
.transition-colors {
  transition: color 0.2s ease, background-color 0.2s ease;
}
.transition-transform {
  transition: transform 0.3s ease;
}

/* 變換效果 */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
.hover\:scale-110:hover {
  transform: scale(1.1);
}
.hover\:-translate-y-1:hover {
  transform: translateY(-0.25rem);
}
.hover\:-translate-y-2:hover {
  transform: translateY(-0.5rem);
}
```

### 9.2 關鍵幀動畫

```css
/* 淡入動畫 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* 滑入動畫 */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in-up {
  animation: slideInUp 0.6s ease-out;
}

/* 脈動動畫 */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

---

## 10. 響應式設計

### 10.1 斷點系統

```css
/* 手機優先設計 */
/* xs: 0px - 639px (預設) */

/* 小平板 */
@media (min-width: 640px) {
  /* sm */
}

/* 平板 */
@media (min-width: 768px) {
  /* md */
}

/* 小桌面 */
@media (min-width: 1024px) {
  /* lg */
}

/* 大桌面 */
@media (min-width: 1280px) {
  /* xl */
}

/* 超大桌面 */
@media (min-width: 1536px) {
  /* 2xl */
}
```

### 10.2 響應式字體

```css
/* 標題響應式字體 */
.responsive-title {
  font-size: var(--text-2xl);
  line-height: var(--leading-tight);
}

@media (min-width: 768px) {
  .responsive-title {
    font-size: var(--text-4xl);
  }
}

@media (min-width: 1024px) {
  .responsive-title {
    font-size: var(--text-5xl);
  }
}
```

---

## 11. 圖示系統

### 11.1 圖示使用規範

- **主要圖示庫**: Lucide React
- **圖示大小**: 16px, 20px, 24px, 32px
- **圖示顏色**: 繼承文字顏色或使用主色調
- **圖示間距**: 與文字保持 8px 間距

### 11.2 常用圖示

```typescript
// 導航圖示
import { Home, User, Briefcase, FolderOpen, Mail, Menu, X } from "lucide-react";

// 社群媒體圖示
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

// 技能圖示
import { Code, Database, Globe, Smartphone, Palette, Zap } from "lucide-react";
```

---

## 12. 深色模式設計

### 12.1 深色模式色彩

```css
/* 深色模式變數 */
:root[data-theme="dark"] {
  --bg-primary: var(--gray-900);
  --bg-secondary: var(--gray-800);
  --bg-tertiary: var(--gray-700);

  --text-primary: var(--gray-100);
  --text-secondary: var(--gray-300);
  --text-tertiary: var(--gray-400);

  --border-primary: var(--gray-700);
  --border-secondary: var(--gray-600);
}
```

### 12.2 深色模式實作

```css
/* 自動切換 */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--gray-900);
    --text-primary: var(--gray-100);
  }
}

/* 手動切換 */
.dark {
  --bg-primary: var(--gray-900);
  --text-primary: var(--gray-100);
}
```

---

## 13. 無障礙設計

### 13.1 色彩對比度

- **正常文字**: 最低 4.5:1 對比度
- **大文字**: 最低 3:1 對比度
- **圖形元素**: 最低 3:1 對比度

### 13.2 焦點指示器

```css
/* 自定義焦點樣式 */
.focus-visible {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
}

/* 跳過連結 */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-500);
  color: var(--white);
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

---

## 14. 品牌元素

### 14.1 Logo 設計規範

- **最小尺寸**: 24px 高度
- **安全區域**: Logo 周圍至少預留 Logo 高度的一半空間
- **配色**: 主色調或純白/純黑

### 14.2 個人照片規範

- **尺寸比例**: 1:1 (正方形) 或 4:5 (直立)
- **解析度**: 最低 400x400px
- **格式**: WebP 優先，JPEG 備用
- **風格**: 專業、清晰、背景簡潔

---

## 15. 設計檢查清單

### 15.1 視覺一致性

- [ ] 色彩使用符合設計系統
- [ ] 字體大小與層級正確
- [ ] 間距符合 8px 基準
- [ ] 圓角使用一致
- [ ] 陰影層級合理

### 15.2 互動體驗

- [ ] 按鈕有明確的 hover 狀態
- [ ] 連結有適當的視覺回饋
- [ ] 表單有清楚的錯誤提示
- [ ] 載入狀態有適當指示

### 15.3 響應式設計

- [ ] 在所有斷點下正常顯示
- [ ] 文字大小適中易讀
- [ ] 觸控目標大小足夠 (44px+)
- [ ] 圖片自適應不變形

### 15.4 無障礙檢查

- [ ] 色彩對比度符合標準
- [ ] 所有互動元素可鍵盤操作
- [ ] 圖片有適當的 alt 文字
- [ ] 表單有正確的標籤關聯

---

這份 UI 設計規範為個人作品集網站提供了完整的視覺設計指導，確保整個網站的視覺一致性和用戶體驗品質。設計系統的建立將大大提升開發效率，同時保證設計品質。
