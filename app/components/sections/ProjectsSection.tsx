/**
 * 專案展示區塊元件
 *
 * 展示專案作品集，包含分類篩選、專案卡片和詳細資訊
 * 支援響應式設計和互動效果
 */

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Container } from "../layout/Container";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";

// 專案分類
const categories = [
  { id: "all", name: "全部", count: 12 },
  { id: "web", name: "Web 應用", count: 6 },
  { id: "mobile", name: "行動應用", count: 3 },
  { id: "opensource", name: "開源專案", count: 3 },
];

// 專案資料
const projects = [
  {
    id: 1,
    title: "電商購物平台",
    category: "web",
    description: "使用 Next.js 和 TypeScript 建構的現代化電商平台，具備完整的購物車、支付系統和後台管理功能。",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    liveUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
  },
  {
    id: 2,
    title: "任務管理系統",
    category: "web",
    description: "團隊協作的任務管理平台，支援即時通訊、檔案共享和進度追蹤功能。",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://task-manager-demo.vercel.app",
    githubUrl: "https://github.com/username/task-manager",
    featured: true,
  },
  {
    id: 3,
    title: "天氣預報 App",
    category: "mobile",
    description: "使用 React Native 開發的跨平台天氣應用，提供詳細的天氣資訊和預報功能。",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["React Native", "TypeScript", "Redux", "Weather API"],
    liveUrl: "https://weather-app-demo.vercel.app",
    githubUrl: "https://github.com/username/weather-app",
    featured: false,
  },
  {
    id: 4,
    title: "開源 UI 元件庫",
    category: "opensource",
    description: "基於 React 和 TypeScript 的現代化 UI 元件庫，提供豐富的元件和主題系統。",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Storybook", "Rollup", "CSS-in-JS"],
    liveUrl: "https://ui-components-demo.vercel.app",
    githubUrl: "https://github.com/username/ui-components",
    featured: true,
  },
  {
    id: 5,
    title: "部落格平台",
    category: "web",
    description: "功能完整的部落格平台，支援 Markdown 編輯、標籤分類和評論系統。",
    image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b4d3?w=600&h=400&fit=crop",
    technologies: ["Next.js", "MDX", "Prisma", "NextAuth.js", "Vercel"],
    liveUrl: "https://blog-platform-demo.vercel.app",
    githubUrl: "https://github.com/username/blog-platform",
    featured: false,
  },
  {
    id: 6,
    title: "投資組合追蹤器",
    category: "web",
    description: "個人投資組合管理工具，提供即時股價資訊和投資績效分析。",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Chart.js", "Firebase", "Alpha Vantage API"],
    liveUrl: "https://portfolio-tracker-demo.vercel.app",
    githubUrl: "https://github.com/username/portfolio-tracker",
    featured: false,
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === categoryId));
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        {/* 標題和篩選器 */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            精選專案
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            以下是我近期完成的一些代表性專案，展示了不同技術棧和解決方案
          </motion.p>

          {/* 分類篩選器 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">篩選專案：</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 專案網格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* 專案圖片 */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    精選專案
                  </div>
                )}

                {/* 懸停時的覆蓋層 */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                    aria-label="查看線上演示"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                    aria-label="查看原始碼"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* 專案資訊 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">{project.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* 技術標籤 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">+{project.technologies.length - 4}</span>
                  )}
                </div>

                {/* 連結按鈕 */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    線上演示
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    查看程式碼
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 更多專案提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">想看更多專案？</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              這裡只展示了部分代表性作品。如果您對我的其他專案感興趣， 歡迎查看我的 GitHub 或與我聯繫討論合作機會。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                查看 GitHub
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                聯繫合作
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
