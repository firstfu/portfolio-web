/**
 * 作品集頁面
 *
 * 展示專案作品集，包含專案縮圖、技術棧、描述和連結
 * 支援分類篩選和專案詳情查看功能
 */

import { Metadata } from "next";
import { PortfolioHeroSection } from "../components/sections/PortfolioHeroSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "作品集",
  description: "查看我的專案作品集，包含 Web 應用程式、開源專案和技術創新",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHeroSection />
      <ProjectsSection />
    </main>
  );
}
