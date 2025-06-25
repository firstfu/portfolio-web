/**
 * 關於我頁面
 *
 * 展示個人詳細介紹、職業背景、教育經歷、核心價值觀和興趣愛好
 * 提供完整的個人品牌故事和專業形象
 */

import { Metadata } from "next";
import { AboutHeroSection } from "../components/sections/AboutHeroSection";
import { StorySection } from "../components/sections/StorySection";
import { EducationSection } from "../components/sections/EducationSection";
import { ValuesSection } from "../components/sections/ValuesSection";
import { InterestsSection } from "../components/sections/InterestsSection";

export const metadata: Metadata = {
  title: "關於我",
  description: "了解我的職業背景、教育經歷、核心價值觀和興趣愛好",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <StorySection />
      <EducationSection />
      <ValuesSection />
      <InterestsSection />
    </main>
  );
}
