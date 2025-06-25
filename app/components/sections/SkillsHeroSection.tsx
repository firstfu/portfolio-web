/**
 * 技能 Hero Section 元件
 *
 * 技能頁面的主要區塊，展示技能概述和專業能力
 * 使用與其他頁面一致的動態背景效果
 */

"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Code2, Palette, Zap, Target } from "lucide-react";

const skillHighlights = [
  { icon: Code2, label: "程式語言", value: "8+", color: "from-blue-500 to-blue-600" },
  { icon: Palette, label: "設計工具", value: "6+", color: "from-purple-500 to-purple-600" },
  { icon: Zap, label: "開發框架", value: "12+", color: "from-green-500 to-green-600" },
  { icon: Target, label: "專業經驗", value: "5+ 年", color: "from-orange-500 to-red-500" },
];

export function SkillsHeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
      {/* 動態背景裝飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* 浮動元素 */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-cyan-300 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-300 rounded-full animate-pulse animation-delay-4000"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center">
          {/* 主標題區域 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Code2 className="w-6 h-6 text-blue-500" />
              <span className="text-blue-600 font-semibold">我的技能</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              技術
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> 專長領域</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              持續學習和精進技術是我的熱忱所在。從前端到後端，從設計到部署， 我致力於掌握現代 Web 開發的各個層面，為客戶提供全方位的技術解決方案。
            </motion.p>
          </motion.div>

          {/* 技能亮點統計 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
          >
            {skillHighlights.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* 懸停背景效果 */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="text-2xl font-bold text-gray-900 mb-1">{skill.value}</div>

                  <div className="text-sm font-medium text-gray-600">{skill.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 滾動提示 */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className="hidden sm:block">
            <div className="flex flex-col items-center text-gray-500">
              <span className="text-sm mb-2">探索我的技術技能</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
              >
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
