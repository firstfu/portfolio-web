/**
 * 軟實力技能區塊元件
 *
 * 展示溝通、領導、解決問題等軟實力技能
 * 使用互動式卡片和進度條展示
 */

"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Users, MessageCircle, Lightbulb, Target, Clock, Brain, Heart, Zap, CheckCircle, Star } from "lucide-react";

const softSkills = [
  {
    icon: MessageCircle,
    title: "溝通能力",
    level: 95,
    color: "from-blue-500 to-cyan-500",
    description: "清晰表達技術概念，與團隊有效溝通",
    strengths: ["技術文件撰寫", "跨部門協作", "客戶需求分析", "程式碼審查"],
  },
  {
    icon: Users,
    title: "團隊合作",
    level: 90,
    color: "from-green-500 to-teal-500",
    description: "在敏捷開發團隊中協作，推動專案成功",
    strengths: ["Scrum 流程執行", "Code Review", "知識分享", "新人指導"],
  },
  {
    icon: Lightbulb,
    title: "問題解決",
    level: 92,
    color: "from-yellow-500 to-orange-500",
    description: "系統性分析問題，提出創新解決方案",
    strengths: ["Bug 除錯", "效能優化", "架構設計", "技術選型"],
  },
  {
    icon: Target,
    title: "專案管理",
    level: 85,
    color: "from-purple-500 to-pink-500",
    description: "管理開發進度，確保專案如期交付",
    strengths: ["時程規劃", "風險評估", "資源分配", "品質控制"],
  },
  {
    icon: Clock,
    title: "時間管理",
    level: 88,
    color: "from-indigo-500 to-purple-500",
    description: "高效分配時間，平衡多個專案需求",
    strengths: ["優先順序排定", "效率工具運用", "截止期限管理", "工作生活平衡"],
  },
  {
    icon: Brain,
    title: "學習能力",
    level: 96,
    color: "from-pink-500 to-rose-500",
    description: "快速學習新技術，適應技術變化",
    strengths: ["新技術研究", "文件閱讀", "實驗性開發", "技術分享"],
  },
];

const workStyle = [
  {
    icon: Heart,
    title: "用戶導向",
    description: "始終以用戶體驗為核心，思考產品的實際價值",
  },
  {
    icon: Zap,
    title: "效率優先",
    description: "追求程式碼品質與開發效率的最佳平衡",
  },
  {
    icon: CheckCircle,
    title: "品質堅持",
    description: "注重程式碼可維護性，建立穩固的技術基礎",
  },
  {
    icon: Star,
    title: "持續改進",
    description: "不斷學習新知識，優化開發流程和技術架構",
  },
];

export function SoftSkillsSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">軟實力技能</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">除了技術能力，我也注重軟實力的培養，這些能力讓我在團隊協作和專案管理中發揮更大價值</p>
        </motion.div>

        {/* 軟實力技能網格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* 技能標題 */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{skill.title}</h3>
                  <p className="text-sm text-gray-500">{skill.level}% 熟練度</p>
                </div>
              </div>

              {/* 進度條 */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              {/* 描述 */}
              <p className="text-gray-600 mb-6">{skill.description}</p>

              {/* 強項列表 */}
              <div className="space-y-2">
                {skill.strengths.map((strength, strengthIndex) => (
                  <motion.div
                    key={strength}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + strengthIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${skill.color} rounded-full`} />
                    {strength}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 工作風格 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">工作風格與價值觀</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">這些是我在工作中秉持的理念，它們指導我做出正確的決策並與團隊建立良好的合作關係</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workStyle.map((style, index) => (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <style.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{style.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{style.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 團隊協作經驗 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">團隊協作經驗</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600">
                      <strong className="text-gray-900">敏捷開發實踐：</strong>
                      參與多個 Scrum 團隊，擔任開發者和技術負責人角色
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600">
                      <strong className="text-gray-900">跨功能協作：</strong>
                      與設計師、產品經理、QA 工程師密切合作，確保產品品質
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600">
                      <strong className="text-gray-900">知識傳承：</strong>
                      指導新進團隊成員，分享技術知識和最佳實踐
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600">
                      <strong className="text-gray-900">技術決策：</strong>
                      參與技術架構討論，評估技術方案的可行性和影響
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-2">溝通與協作</h4>
                  <p className="text-blue-700 text-sm">擅長將複雜的技術概念轉化為易懂的說明，促進團隊成員之間的理解與合作</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-900 mb-2">問題解決</h4>
                  <p className="text-green-700 text-sm">運用系統性思維分析問題根因，提出既實用又具前瞻性的解決方案</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-purple-900 mb-2">持續學習</h4>
                  <p className="text-purple-700 text-sm">保持對新技術的好奇心，主動學習並分享新知識給團隊成員</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
