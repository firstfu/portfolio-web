/**
 * 技能頁面
 *
 * 展示技術技能、工具和專業能力
 * 包含前端、後端、工具和軟技能等分類
 */

import { Metadata } from "next";
import { SkillsHeroSection } from "../components/sections/SkillsHeroSection";
import { TechnicalSkillsSection } from "../components/sections/TechnicalSkillsSection";
import { ToolsSection } from "../components/sections/ToolsSection";
import { SoftSkillsSection } from "../components/sections/SoftSkillsSection";

export const metadata: Metadata = {
  title: "技能",
  description: "了解我的技術技能、開發工具和專業能力",
};

export default function SkillsPage() {
  return (
    <main>
      <SkillsHeroSection />
      <TechnicalSkillsSection />
      <ToolsSection />
      <SoftSkillsSection />
    </main>
  );
}
