/**
 * 型別定義檔案
 *
 * 定義專案中使用的所有 TypeScript 型別和介面
 * 包括專案、經歷、技能等核心資料結構
 */

// 專案類別枚舉
export enum ProjectCategory {
  WEB = "web",
  MOBILE = "mobile",
  DESKTOP = "desktop",
  OTHER = "other",
}

// 技能類別枚舉
export enum SkillCategory {
  FRONTEND = "frontend",
  BACKEND = "backend",
  TOOLS = "tools",
  SOFT = "soft",
}

// 專案介面
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  category: ProjectCategory;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedAt: Date;
}

// 工作經歷介面
export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: {
    start: Date;
    end?: Date;
  };
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

// 技能介面
export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number; // 1-100
  icon?: string;
}

// 教育背景介面
export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  duration: {
    start: Date;
    end: Date;
  };
  description?: string;
  achievements?: string[];
}

// 服務項目介面
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  price?: string;
}

// 聯繫表單介面
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// 社群媒體連結介面
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}
