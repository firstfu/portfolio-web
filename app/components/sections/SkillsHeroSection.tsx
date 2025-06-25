/**
 * 技能頁面 Hero 區塊元件
 *
 * 展示技能頁面的介紹和概述
 * 包含動態背景效果和技能統計
 */

"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Code, Palette, Database, Cloud, Users, Trophy, TrendingUp, Award } from "lucide-react";

const skillStats = [
  {
    icon: Code,
    number: "15+",
    label: "程式語言",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    number: "20+",
    label: "框架技術",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    number: "10+",
    label: "資料庫系統",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cloud,
    number: "8+",
    label: "雲端平台",
    color: "from-orange-500 to-red-500",
  },
];

const highlights = [
  {
    icon: Trophy,
    title: "全端開發",
    description: "精通前端與後端技術堆疊",
  },
  {
    icon: TrendingUp,
    title: "持續學習",
    description: "緊跟技術趨勢，不斷提升能力",
  },
  {
    icon: Award,
    title: "最佳實踐",
    description: "遵循業界標準與開發規範",
  },
  {
    icon: Users,
    title: "團隊協作",
    description: "優秀的溝通與協作能力",
  },
];

export function SkillsHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* 動態背景粒子 */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 背景圖案 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-cyan-500 rounded-full blur-2xl" />
      </div>

      <Container className="relative z-10 pt-20">
        <div className="text-center">
          {/* 主標題 */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              我的
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">技能</span>
              組合
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              從前端到後端，從設計到部署，我具備全方位的技術能力
              <br />
              讓我們一起探索這些技能如何創造卓越的數位體驗
            </p>
          </motion.div>

          {/* 技能統計 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {skillStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 技能亮點 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* 滾動提示 */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }} className="flex flex-col items-center gap-4">
            <p className="text-gray-500 text-sm">探索我的技能組合</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
            >
              <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
