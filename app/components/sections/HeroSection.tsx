/**
 * Hero Section 元件
 *
 * 首頁主要區塊，包含個人介紹、頭像、技能標籤和 CTA 按鈕
 * 採用現代專業設計風格，符合企業級標準
 */

"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "MongoDB", "PostgreSQL"];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-900" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: Mail, href: "mailto:contact@example.com", label: "Email", color: "hover:text-green-600" },
];

const achievements = [
  { number: "50+", label: "專案經驗" },
  { number: "3+", label: "年經驗" },
  { number: "100%", label: "客戶滿意度" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* 精簡背景裝飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左側：文字內容 */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            {/* 位置與狀態 */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>台北, 台灣</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>開放工作機會</span>
              </div>
            </div>

            {/* 主標題 */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                創造
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">數位體驗</span>
                <br />
                的全端工程師
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl"
              >
                專注於建構
                <span className="font-semibold text-gray-800">高效能、可擴展</span>
                的現代化網頁應用程式，為企業提供優質的數位解決方案
              </motion.p>
            </div>

            {/* 數據展示 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="grid grid-cols-3 gap-8">
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{item.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA 按鈕 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio">
                <Button size="lg" className="shadow-lg hover:shadow-xl w-full">
                  查看我的作品
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md">
                <Download className="w-4 h-4 mr-2" />
                下載履歷
              </Button>
            </motion.div>

            {/* 社群連結 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="flex items-center space-x-6">
              <span className="text-sm text-gray-500">聯繫我：</span>
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${link.color} transition-colors duration-200`}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* 右側：頭像與技能 */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-8">
            {/* 專業頭像 */}
            <div className="relative max-w-md mx-auto">
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl rotate-3"></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white p-2">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="專業個人照片"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-xl"
                      priority
                    />
                  </div>
                </div>

                {/* 狀態指示 */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* 技能標籤雲 */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-center text-gray-700">核心技術棧</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 滾動提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-3 font-medium">探索更多</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
