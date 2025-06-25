/**
 * 相關專案區塊元件
 *
 * 在專案詳細頁面底部展示其他相關專案
 * 幫助用戶發現更多作品
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

// 模擬相關專案資料
const relatedProjects = [
  {
    id: "2",
    title: "任務管理系統",
    category: "web",
    description: "團隊協作的任務管理平台，支援即時通訊、檔案共享和進度追蹤功能。",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "Socket.io"],
    liveUrl: "https://task-manager-demo.vercel.app",
    githubUrl: "https://github.com/username/task-manager",
  },
  {
    id: "4",
    title: "開源 UI 元件庫",
    category: "opensource",
    description: "基於 React 和 TypeScript 的現代化 UI 元件庫，提供豐富的元件和主題系統。",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Storybook"],
    liveUrl: "https://ui-components-demo.vercel.app",
    githubUrl: "https://github.com/username/ui-components",
  },
  {
    id: "5",
    title: "部落格平台",
    category: "web",
    description: "功能完整的部落格平台，支援 Markdown 編輯、標籤分類和評論系統。",
    image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b4d3?w=600&h=400&fit=crop",
    technologies: ["Next.js", "MDX", "Prisma"],
    liveUrl: "https://blog-platform-demo.vercel.app",
    githubUrl: "https://github.com/username/blog-platform",
  },
];

interface RelatedProjectsSectionProps {
  currentProjectId: string;
}

export function RelatedProjectsSection({ currentProjectId }: RelatedProjectsSectionProps) {
  // 過濾掉當前專案
  const filteredProjects = relatedProjects.filter(project => project.id !== currentProjectId);

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">其他專案</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">探索更多精彩的專案作品</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
                </div>
              </div>

              {/* 專案資訊 */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                    {project.category === "web" ? "Web 應用" : project.category === "mobile" ? "行動應用" : "開源專案"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">{project.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* 技術標籤 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">+{project.technologies.length - 3}</span>
                  )}
                </div>

                {/* 查看詳情按鈕 */}
                <Link
                  href={`/portfolio/${project.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                >
                  查看詳情
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 查看所有專案 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            查看所有專案
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
