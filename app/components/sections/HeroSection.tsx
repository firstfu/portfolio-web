/**
 * Hero Section 元件
 *
 * 首頁主要區塊，包含個人介紹、頭像、技能標籤和 CTA 按鈕
 * 具有動態背景效果和滾動動畫
 */

"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "MongoDB", "PostgreSQL"];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center">
          {/* 頭像 */}
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-600">你</span>
                </div>
              </div>
              {/* 裝飾環 */}
              <div className="absolute -inset-4 rounded-full border-2 border-blue-200 animate-spin-slow"></div>
            </div>
          </motion.div>

          {/* 主標題 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              你好，我是 <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">開發者</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              熱愛創造數位體驗的全端開發者，專注於建構現代化、高效能的網頁應用程式
            </p>
          </motion.div>

          {/* 技能標籤 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm border border-white/20 hover:shadow-md transition-shadow"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA 按鈕 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-lg hover:shadow-xl">
                查看我的作品
              </Button>
              <Button variant="outline" size="lg" className="shadow-lg hover:shadow-xl">
                下載履歷
              </Button>
            </div>
          </motion.div>

          {/* 社群連結 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="mb-12">
            <div className="flex justify-center space-x-6">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* 滾動提示 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-gray-500">
              <span className="text-sm mb-2">向下滾動探索更多</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
