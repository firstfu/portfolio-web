/**
 * 技術技能區塊元件
 *
 * 展示前端、後端和其他技術技能
 * 使用進度條和互動效果呈現技能水平
 */

"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Code, Database, Server, Smartphone, Cloud, GitBranch, Monitor, Layers } from "lucide-react";

const skillCategories = [
  {
    icon: Monitor,
    title: "前端開發",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 95, experience: "3 年" },
      { name: "Next.js", level: 90, experience: "2 年" },
      { name: "TypeScript", level: 88, experience: "2.5 年" },
      { name: "Tailwind CSS", level: 92, experience: "2 年" },
      { name: "Vue.js", level: 75, experience: "1 年" },
      { name: "JavaScript ES6+", level: 95, experience: "4 年" },
    ],
  },
  {
    icon: Server,
    title: "後端開發",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85, experience: "2.5 年" },
      { name: "Express.js", level: 80, experience: "2 年" },
      { name: "Python", level: 75, experience: "1.5 年" },
      { name: "PostgreSQL", level: 78, experience: "2 年" },
      { name: "MongoDB", level: 82, experience: "2 年" },
      { name: "RESTful API", level: 90, experience: "3 年" },
    ],
  },
  {
    icon: Smartphone,
    title: "行動開發",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React Native", level: 80, experience: "1.5 年" },
      { name: "Expo", level: 75, experience: "1 年" },
      { name: "Flutter", level: 60, experience: "6 個月" },
      { name: "PWA", level: 85, experience: "2 年" },
    ],
  },
  {
    icon: Cloud,
    title: "雲端與部署",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "AWS", level: 70, experience: "1 年" },
      { name: "Vercel", level: 90, experience: "2 年" },
      { name: "Docker", level: 65, experience: "1 年" },
      { name: "CI/CD", level: 75, experience: "1.5 年" },
    ],
  },
  {
    icon: GitBranch,
    title: "開發工具",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Git", level: 90, experience: "4 年" },
      { name: "VS Code", level: 95, experience: "4 年" },
      { name: "Figma", level: 80, experience: "2 年" },
      { name: "Postman", level: 85, experience: "2.5 年" },
    ],
  },
  {
    icon: Layers,
    title: "其他技能",
    color: "from-teal-500 to-blue-500",
    skills: [
      { name: "GraphQL", level: 70, experience: "1 年" },
      { name: "Socket.io", level: 75, experience: "1 年" },
      { name: "Jest", level: 80, experience: "1.5 年" },
      { name: "Webpack", level: 65, experience: "1 年" },
    ],
  },
];

export function TechnicalSkillsSection() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">技術技能</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">這些是我在專業開發中掌握和運用的核心技術</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* 分類標題 */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  <p className="text-sm text-gray-500">{category.skills.length} 項技能</p>
                </div>
              </div>

              {/* 技能列表 */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">{skill.experience}</span>
                        <span className="text-sm font-semibold text-gray-700">{skill.level}%</span>
                      </div>
                    </div>

                    {/* 進度條 */}
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        {/* 發光效果 */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-full opacity-50 blur-sm`}></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 學習態度說明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">持續學習的心態</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              技術在不斷演進，我保持開放的學習心態，定期更新技能組合。 這些百分比代表我目前的熟練程度，而不是學習的終點。 我相信每一個專案都是學習和成長的機會。
            </p>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>90%+ 精通</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>70-89% 熟練</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>50-69% 學習中</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
