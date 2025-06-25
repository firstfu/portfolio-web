/**
 * 核心價值觀區塊元件
 *
 * 展示個人工作理念、核心價值觀和職業哲學
 * 使用圖標和動畫效果呈現
 */

"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Target, Users, Lightbulb, Heart, Shield, Zap } from "lucide-react";

const coreValues = [
  {
    icon: Target,
    title: "追求卓越",
    description: "對程式碼品質和用戶體驗的極致追求，永遠不滿足於現狀，持續改進和優化。",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "團隊合作",
    description: "相信團隊的力量勝過個人英雄主義，樂於分享知識，協助團隊成員共同成長。",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Lightbulb,
    title: "創新思維",
    description: "勇於嘗試新技術和方法，用創意解決問題，將想法轉化為實際的解決方案。",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Heart,
    title: "用戶至上",
    description: "始終以用戶需求為出發點，設計直觀易用的產品，為用戶創造真正的價值。",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "責任感",
    description: "對自己的程式碼負責，確保安全性和可維護性，承擔起專業開發者的責任。",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Zap,
    title: "持續學習",
    description: "保持對新技術的好奇心，主動學習和分享，在快速變化的領域中保持競爭力。",
    color: "from-cyan-500 to-blue-500",
  },
];

const workingPrinciples = [
  "簡潔優雅的程式碼勝過複雜的解決方案",
  "用戶體驗是產品成功的關鍵因素",
  "測試和文檔是專業開發的必要組成",
  "持續整合和部署提升開發效率",
  "開放溝通促進團隊協作",
  "技術債務需要及時償還",
];

export function ValuesSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            核心價值觀
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            指引我前進的信念與工作哲學
          </motion.p>
        </div>

        {/* 核心價值觀卡片 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* 背景漸層 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">{value.title}</h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 工作原則 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 sm:p-12 rounded-2xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">工作原則</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">這些原則指導著我的日常工作和決策過程</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {workingPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700 leading-relaxed">{principle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 個人使命宣言 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 p-1 rounded-2xl">
            <div className="bg-white p-8 sm:p-12 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">我的使命</h3>

              <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto italic">
                "透過優雅的程式碼和創新的思維，創造能夠改善人們生活的數位產品。 我致力於建立高品質、可維護的軟體解決方案，
                同時培養和分享知識，推動整個開發社群的進步。"
              </blockquote>

              <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
