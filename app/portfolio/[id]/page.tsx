/**
 * 專案詳細頁面
 *
 * 展示單個專案的完整資訊，包含詳細描述、技術棧、功能特色和開發過程
 * 支援動態路由和響應式設計
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailSection } from "../../components/sections/ProjectDetailSection";
import { RelatedProjectsSection } from "../../components/sections/RelatedProjectsSection";

// 模擬專案資料
const projects = [
  {
    id: "1",
    title: "電商購物平台",
    category: "web",
    shortDescription: "使用 Next.js 和 TypeScript 建構的現代化電商平台",
    fullDescription: `
      這是一個功能完整的電商購物平台，從零開始設計和開發。平台採用現代化的技術棧，
      提供流暢的購物體驗和強大的後台管理功能。

      專案的核心目標是創建一個可擴展、高效能的電商解決方案，能夠處理大量的商品數據
      和用戶訂單。我們特別注重用戶體驗設計，確保在各種設備上都能提供一致的購物體驗。

      在開發過程中，我負責了前端架構設計、用戶介面開發、狀態管理、API 整合以及
      支付系統的實現。這個專案讓我深入了解了電商業務邏輯和現代 Web 開發的最佳實踐。
    `,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma", "NextAuth.js", "Vercel"],
    features: [
      "響應式設計，支援所有設備",
      "完整的購物車和結帳流程",
      "Stripe 支付系統整合",
      "用戶認證和個人資料管理",
      "商品搜尋和篩選功能",
      "後台管理系統",
      "訂單追蹤和狀態管理",
      "SEO 優化和效能調優",
    ],
    challenges: [
      {
        title: "複雜的狀態管理",
        description: "購物車、用戶認證、訂單狀態等多個狀態需要統一管理，使用 Zustand 實現了高效的狀態管理方案。",
      },
      {
        title: "支付系統整合",
        description: "整合 Stripe 支付系統，處理各種支付場景和錯誤情況，確保交易的安全性和可靠性。",
      },
      {
        title: "效能優化",
        description: "針對大量商品數據進行優化，實現了虛擬滾動、圖片懶加載和分頁載入等技術。",
      },
    ],
    liveUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/username/ecommerce-platform",
    duration: "3 個月",
    role: "全端開發者",
    team: "個人專案",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "2",
    title: "任務管理系統",
    category: "web",
    shortDescription: "團隊協作的任務管理平台，支援即時通訊、檔案共享和進度追蹤功能",
    fullDescription: `
      這是一個為現代團隊設計的任務管理系統，旨在提升團隊協作效率和專案管理品質。
      系統整合了即時通訊、檔案共享、進度追蹤等多項功能，讓團隊成員能夠無縫協作。

      專案採用微服務架構，前端使用 React 構建響應式用戶介面，後端使用 Node.js
      和 Express 框架。為了實現即時功能，我們使用了 Socket.io 技術，確保團隊成員
      能夠即時收到任務更新和訊息通知。

      在開發過程中，我重點關注了用戶體驗設計，實現了直觀的拖拽操作、智能通知系統
      和強大的搜尋功能。這個專案讓我深入了解了即時通訊技術和大型 Web 應用的架構設計。
    `,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Redis", "JWT", "Material-UI"],
    features: ["看板式任務管理", "即時聊天和通知", "檔案上傳和共享", "進度追蹤和報表", "團隊成員管理", "時間追蹤功能", "行動裝置支援", "多語言支援"],
    challenges: [
      {
        title: "即時通訊實現",
        description: "使用 Socket.io 實現即時聊天和通知系統，處理多人同時線上的併發問題，確保訊息的即時性和可靠性。",
      },
      {
        title: "效能優化",
        description: "針對大量任務數據進行優化，實現了虛擬化列表、智能分頁和快取機制，大幅提升了應用效能。",
      },
      {
        title: "數據同步",
        description: "設計了完善的數據同步機制，確保多個用戶同時編輯時的數據一致性，避免衝突和數據遺失。",
      },
    ],
    liveUrl: "https://task-manager-demo.vercel.app",
    githubUrl: "https://github.com/username/task-manager",
    duration: "4 個月",
    role: "全端開發者",
    team: "3 人團隊",
    gallery: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "3",
    title: "天氣預報 App",
    category: "mobile",
    shortDescription: "使用 React Native 開發的跨平台天氣應用",
    fullDescription: `
      這是一個功能豐富的跨平台天氣應用程式，為用戶提供準確的天氣資訊和預報服務。
      應用採用現代化的設計語言，提供直觀的用戶介面和流暢的操作體驗。

      專案使用 React Native 框架開發，確保在 iOS 和 Android 平台上都能提供一致的
      用戶體驗。整合了多個天氣 API，提供詳細的天氣數據、7 天預報和惡劣天氣警報。

      在開發過程中，我特別注重原生功能的整合，實現了位置服務、推送通知和背景更新
      等功能。這個專案讓我深入學習了行動應用開發和跨平台技術的最佳實踐。
    `,
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "React Navigation", "Expo", "Weather API", "AsyncStorage"],
    features: ["即時天氣資訊", "7 天天氣預報", "每小時預報", "多城市管理", "天氣地圖", "惡劣天氣警報", "背景自動更新", "離線快取功能"],
    challenges: [
      {
        title: "位置服務整合",
        description: "實現了精確的位置定位功能，處理了各種權限問題和定位失敗的情況，確保用戶能夠獲得當地的天氣資訊。",
      },
      {
        title: "多平台適配",
        description: "針對 iOS 和 Android 平台的差異進行了細緻的調整，確保在不同設備上都能提供最佳的用戶體驗。",
      },
      {
        title: "效能與電池優化",
        description: "優化了 API 請求頻率和背景更新機制，在保證數據準確性的同時最大化電池續航能力。",
      },
    ],
    liveUrl: "https://weather-app-demo.vercel.app",
    githubUrl: "https://github.com/username/weather-app",
    duration: "2 個月",
    role: "行動應用開發者",
    team: "個人專案",
    gallery: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "4",
    title: "開源 UI 元件庫",
    category: "opensource",
    shortDescription: "基於 React 和 TypeScript 的現代化 UI 元件庫",
    fullDescription: `
      這是一個完整的開源 UI 元件庫專案，旨在為 React 開發者提供高品質、可重用的
      用戶介面元件。元件庫採用現代化的設計系統，支援主題定制和無障礙設計。

      專案使用 TypeScript 開發，確保了類型安全和良好的開發體驗。整合了 Storybook
      用於元件展示和文檔生成，使用 Rollup 進行打包優化，確保最小的檔案大小。

      作為開源專案，我特別注重程式碼品質和社群貢獻。實現了完整的測試覆蓋、
      持續整合流程和詳細的文檔。這個專案讓我深入了解了開源專案的維護和社群管理。
    `,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Storybook", "Rollup", "CSS-in-JS", "Jest", "Chromatic", "GitHub Actions"],
    features: ["30+ 高品質元件", "TypeScript 支援", "主題定制系統", "無障礙設計", "響應式支援", "暗色模式", "詳細文檔", "單元測試覆蓋"],
    challenges: [
      {
        title: "API 設計",
        description: "設計了一致且直觀的 API 介面，確保元件易於使用和學習，同時保持足夠的靈活性。",
      },
      {
        title: "主題系統",
        description: "實現了強大的主題定制系統，支援設計令牌和動態主題切換，讓開發者能夠輕鬆定制品牌樣式。",
      },
      {
        title: "打包優化",
        description: "使用 Tree Shaking 和模組化設計，確保開發者只會引入實際使用的元件，最小化最終的檔案大小。",
      },
    ],
    liveUrl: "https://ui-components-demo.vercel.app",
    githubUrl: "https://github.com/username/ui-components",
    duration: "6 個月",
    role: "開源維護者",
    team: "開源社群",
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    ],
  },
];

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return {
      title: "專案未找到",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectDetailSection project={project} />
      <RelatedProjectsSection currentProjectId={project.id} />
    </main>
  );
}
