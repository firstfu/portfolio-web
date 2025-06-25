/**
 * 專案詳細區塊元件
 *
 * 展示單個專案的完整資訊，包含詳細描述、技術棧、功能特色和開發挑戰
 * 使用豐富的視覺效果和互動元素
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { ExternalLink, Github, ArrowLeft, Calendar, User, Users, CheckCircle, Lightbulb, Star, Eye } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: Array<{
    title: string;
    description: string;
  }>;
  liveUrl: string;
  githubUrl: string;
  duration: string;
  role: string;
  team: string;
  gallery: string[];
}

interface ProjectDetailSectionProps {
  project: Project;
}

export function ProjectDetailSection({ project }: ProjectDetailSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* 頂部導航 */}
      <div className="pt-20 pb-8">
        <Container>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4" />
              <span>返回作品集</span>
            </Link>
          </motion.div>
        </Container>
      </div>

      {/* 專案標題區域 */}
      <section className="pb-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左側資訊 */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
                  {project.category === "web" ? "Web 應用" : project.category === "mobile" ? "行動應用" : "開源專案"}
                </span>

                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>

                <p className="text-xl text-gray-600 leading-relaxed">{project.shortDescription}</p>
              </div>

              {/* 專案資訊 */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20">
                  <Calendar className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-500">開發時間</div>
                  <div className="text-sm font-semibold text-gray-900">{project.duration}</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20">
                  <User className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-500">角色</div>
                  <div className="text-sm font-semibold text-gray-900">{project.role}</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20">
                  <Users className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-500">團隊</div>
                  <div className="text-sm font-semibold text-gray-900">{project.team}</div>
                </div>
              </div>

              {/* 行動按鈕 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white text-center py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  查看線上演示
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  查看原始碼
                </a>
              </div>
            </motion.div>

            {/* 右側圖片 */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src={project.image} alt={project.title} width={800} height={600} className="w-full h-auto" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 詳細內容區域 */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* 主要內容 */}
            <div className="lg:col-span-2">
              {/* 專案描述 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">專案概述</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  {project.fullDescription.split("\n").map(
                    (paragraph, index) =>
                      paragraph.trim() && (
                        <p key={index} className="mb-4">
                          {paragraph.trim()}
                        </p>
                      )
                  )}
                </div>
              </motion.div>

              {/* 主要功能 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">主要功能</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 開發挑戰 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">開發挑戰與解決方案</h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Lightbulb className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 側邊欄 */}
            <div className="lg:col-span-1">
              {/* 技術棧 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">技術棧</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* 專案統計 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">專案亮點</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">精選專案</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">響應式設計</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">已上線運行</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
