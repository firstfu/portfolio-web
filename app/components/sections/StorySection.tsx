/**
 * 職業故事區塊元件
 *
 * 展示個人職業發展歷程、成長故事和職業轉折點
 * 使用時間軸設計和動畫效果
 */

"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Code, Lightbulb, Rocket, Heart } from "lucide-react";

const storyMilestones = [
  {
    icon: Code,
    year: "2019",
    title: "開始程式設計之旅",
    description: "從第一行 Hello World 開始，我就被程式設計的魅力深深吸引。開始學習 HTML、CSS 和 JavaScript，建立了第一個個人網站。",
    color: "bg-blue-500",
  },
  {
    icon: Lightbulb,
    year: "2020",
    title: "深入前端開發",
    description: "掌握了 React 和現代前端工具鏈，開始參與開源專案。這個階段讓我理解了良好的用戶體驗設計的重要性。",
    color: "bg-green-500",
  },
  {
    icon: Rocket,
    year: "2021",
    title: "全端開發轉型",
    description: "學習 Node.js 和資料庫技術，成為全端開發者。開始獨立完成完整的 Web 應用程式專案，從構思到部署。",
    color: "bg-purple-500",
  },
  {
    icon: Heart,
    year: "2022-現在",
    title: "追求技術卓越",
    description: "專注於程式碼品質、系統架構和團隊協作。持續學習新技術，並開始分享技術文章，幫助其他開發者成長。",
    color: "bg-red-500",
  },
];

export function StorySection() {
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
            我的職業故事
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            從初學者到全端開發者，每一步都是成長的足跡
          </motion.p>
        </div>

        <div className="relative">
          {/* 時間軸線 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {storyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* 內容卡片 */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 ${milestone.color} rounded-xl flex items-center justify-center`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* 時間軸節點 */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* 空白區域 (用於對齊) */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 總結 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">持續學習，永不止步</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              技術的世界日新月異，我相信保持學習的熱忱和開放的心態， 是成為優秀開發者的關鍵。每一個專案都是新的挑戰，每一次挑戰都是成長的機會。
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
