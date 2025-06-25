/**
 * Hero Section 元件
 *
 * 首頁主要區塊，展示全端軟體工程師的專業形象
 * 以全端開發為主軸，AI Agent 開發作為進階技能展示
 */

"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download, Code, Server, Smartphone, Bot, Database, Globe } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";

// 全端技能組合，AI Agent 作為其中一項技能
const fullStackSkills = ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AI Agent", "Python", "Docker"];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-900" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: Mail, href: "mailto:contact@example.com", label: "Email", color: "hover:text-green-600" },
];

// 全端開發成就，包含 AI 專案但不只是 AI
const achievements = [
  { number: "100+", label: "專案經驗", icon: Code },
  { number: "5+", label: "年開發經驗", icon: Server },
  { number: "15+", label: "AI 專案", icon: Bot },
];

// 浮動圖示改為全端開發相關
const floatingElements = [
  { icon: Code, position: "top-20 left-20", delay: 0 },
  { icon: Server, position: "top-40 right-32", delay: 0.5 },
  { icon: Database, position: "bottom-32 left-32", delay: 1 },
  { icon: Globe, position: "bottom-20 right-20", delay: 1.5 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* 現代化背景裝飾 */}
      <div className="absolute inset-0">
        {/* 動態光球 */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* 格子背景 */}
        <div className="absolute inset-0 bg-grid-pattern" style={{ backgroundSize: "50px 50px" }}></div>

        {/* 浮動開發圖示 */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} text-cyan-400/30`}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <element.icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左側：文字內容 */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            {/* 角色標籤與狀態 */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1">
                <Code className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300">全端軟體工程師</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-2 py-1">
                <Bot className="w-3 h-3 text-purple-400" />
                <span className="text-purple-300 text-xs">+ AI Agent</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Ready for Projects</span>
              </div>
            </div>

            {/* 主標題 */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-white">打造</span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">完整解決方案</span>
                <br />
                <span className="text-white">的</span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">全端工程師</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl"
              >
                專精於
                <span className="text-cyan-400 font-semibold">前後端開發</span>與<span className="text-blue-400 font-semibold">系統架構</span>
                ，具備<span className="text-purple-400 font-semibold">AI Agent 開發</span>能力，創造智能化應用
              </motion.p>
            </div>

            {/* 成就數據展示 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="grid grid-cols-3 gap-8">
              {achievements.map((item, index) => (
                <motion.div key={index} className="text-center group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="flex items-center justify-center mb-2">
                    <item.icon className="w-6 h-6 text-cyan-400 mr-2 group-hover:text-cyan-300 transition-colors" />
                    <div className="text-2xl md:text-3xl font-bold text-white">{item.number}</div>
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA 按鈕 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 w-full"
                >
                  <Code className="w-5 h-5 mr-2" />
                  查看作品集
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                下載履歷
              </Button>
            </motion.div>

            {/* 社群連結 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="flex items-center space-x-6">
              <span className="text-sm text-gray-400">Connect:</span>
              {socialLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* 右側：專業頭像與技能 */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-8">
            {/* 專業頭像 */}
            <div className="relative max-w-md mx-auto">
              <div className="relative">
                {/* 外層光環 */}
                <motion.div
                  className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* 中層光環 */}
                <motion.div
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-blue-500/30 blur-sm"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl rotate-3 blur-sm opacity-75"></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-800 p-2 border border-cyan-500/50">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="全端軟體工程師"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-xl"
                      priority
                    />
                    {/* 專業覆層效果 */}
                    <div className="absolute inset-2 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20"></div>
                  </div>
                </div>

                {/* 技能指示 */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-slate-800 border border-cyan-500 rounded-full p-3 shadow-lg shadow-cyan-500/50"
                  animate={{ boxShadow: ["0 0 20px rgba(34, 211, 238, 0.5)", "0 0 30px rgba(34, 211, 238, 0.8)", "0 0 20px rgba(34, 211, 238, 0.5)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Code className="w-5 h-5 text-cyan-400" />
                </motion.div>
              </div>
            </div>

            {/* 全端技能標籤雲 */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-center text-cyan-300 flex items-center justify-center">
                <Server className="w-5 h-5 mr-2" />
                技術棧
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {fullStackSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-sm font-medium border shadow-lg transition-all duration-200 cursor-default ${
                      skill === "AI Agent"
                        ? "text-purple-300 border-purple-500/30 hover:shadow-purple-500/25 hover:border-purple-400/50"
                        : "text-cyan-300 border-cyan-500/30 hover:shadow-cyan-500/25 hover:border-cyan-400/50"
                    }`}
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center text-cyan-400/60"
        >
          <span className="text-sm mb-3 font-medium">探索更多專案</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
