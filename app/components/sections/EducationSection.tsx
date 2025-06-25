/**
 * 教育經歷區塊元件
 *
 * 展示學歷背景、認證證書和持續學習的課程
 * 使用卡片式設計和動畫效果
 */

"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

const educationData = [
  {
    icon: GraduationCap,
    type: "學歷",
    title: "資訊工程學系",
    institution: "國立台灣大學",
    period: "2015-2019",
    description: "主修軟體工程與資料結構，輔修數位媒體設計。畢業專題為 Web 應用程式開發。",
    color: "bg-blue-500",
  },
  {
    icon: Award,
    type: "認證",
    title: "AWS Solutions Architect",
    institution: "Amazon Web Services",
    period: "2022",
    description: "雲端架構設計認證，熟悉 AWS 服務與最佳實踐，能夠設計可擴展的雲端解決方案。",
    color: "bg-orange-500",
  },
  {
    icon: BookOpen,
    type: "課程",
    title: "全端 Web 開發訓練營",
    institution: "線上學習平台",
    period: "2020",
    description: "深入學習現代 Web 開發技術棧，包括 React、Node.js、MongoDB 等技術。",
    color: "bg-green-500",
  },
  {
    icon: Users,
    type: "工作坊",
    title: "敏捷開發與 Scrum",
    institution: "技術社群",
    period: "2021",
    description: "學習敏捷開發方法論，提升團隊協作能力和專案管理技能。",
    color: "bg-purple-500",
  },
];

const achievements = ["資工系畢業專題優秀獎", "程式設計競賽前三名", "開源專案貢獻者", "技術文章發表"];

export function EducationSection() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            教育背景
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            紮實的學術基礎與持續的專業學習
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {educationData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{item.type}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-gray-600">
                    <span className="font-medium">{item.institution}</span>
                    <span className="hidden sm:block">•</span>
                    <span className="text-sm">{item.period}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 成就與榮譽 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">成就與榮譽</h3>
            <p className="text-gray-600">學習過程中獲得的認可與肯定</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 持續學習理念 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">終身學習者</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              在快速變化的技術領域中，我始終保持學習的熱忱。 透過線上課程、技術書籍、社群活動和實際專案， 不斷更新知識和技能，與時俱進。
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
