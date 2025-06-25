/**
 * 開發工具區塊元件
 *
 * 展示常用的開發工具、軟體和服務
 * 使用卡片式設計和分類展示
 */

"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Code, Palette, Database, Cloud, Terminal, Briefcase, Monitor, Zap } from "lucide-react";

const toolCategories = [
  {
    icon: Code,
    title: "編輯器與 IDE",
    color: "from-blue-500 to-indigo-500",
    tools: [
      { name: "Visual Studio Code", description: "主要開發環境", logo: "🔵" },
      { name: "WebStorm", description: "進階 JavaScript 開發", logo: "💙" },
      { name: "Android Studio", description: "Android 應用開發", logo: "🤖" },
      { name: "Xcode", description: "iOS 應用開發", logo: "🍎" },
    ],
  },
  {
    icon: Palette,
    title: "設計工具",
    color: "from-purple-500 to-pink-500",
    tools: [
      { name: "Figma", description: "UI/UX 設計與原型", logo: "🎨" },
      { name: "Adobe XD", description: "用戶體驗設計", logo: "✨" },
      { name: "Photoshop", description: "圖像處理", logo: "🖼️" },
      { name: "Illustrator", description: "向量圖形設計", logo: "🎯" },
    ],
  },
  {
    icon: Terminal,
    title: "終端機與命令列",
    color: "from-green-500 to-teal-500",
    tools: [
      { name: "iTerm2", description: "macOS 終端機", logo: "💻" },
      { name: "Zsh", description: "Unix Shell", logo: "🐚" },
      { name: "Oh My Zsh", description: "Zsh 配置框架", logo: "⚡" },
      { name: "Git", description: "版本控制", logo: "🌿" },
    ],
  },
  {
    icon: Database,
    title: "資料庫工具",
    color: "from-orange-500 to-red-500",
    tools: [
      { name: "pgAdmin", description: "PostgreSQL 管理", logo: "🐘" },
      { name: "MongoDB Compass", description: "MongoDB GUI", logo: "🍃" },
      { name: "TablePlus", description: "多資料庫客戶端", logo: "📊" },
      { name: "Redis Desktop Manager", description: "Redis 管理", logo: "⚡" },
    ],
  },
  {
    icon: Cloud,
    title: "雲端與部署",
    color: "from-cyan-500 to-blue-500",
    tools: [
      { name: "Vercel", description: "前端應用部署", logo: "▲" },
      { name: "AWS Console", description: "雲端服務管理", logo: "☁️" },
      { name: "Docker", description: "容器化部署", logo: "🐳" },
      { name: "GitHub Actions", description: "CI/CD 自動化", logo: "🚀" },
    ],
  },
  {
    icon: Briefcase,
    title: "專案管理",
    color: "from-indigo-500 to-purple-500",
    tools: [
      { name: "Notion", description: "知識管理與筆記", logo: "📝" },
      { name: "Trello", description: "專案任務管理", logo: "📋" },
      { name: "Slack", description: "團隊溝通", logo: "💬" },
      { name: "Linear", description: "軟體開發管理", logo: "📈" },
    ],
  },
];

export function ToolsSection() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">開發工具</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">這些是我日常開發中使用的工具和軟體，它們幫助我提高開發效率和程式碼品質</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* 分類標題 */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  <p className="text-sm text-gray-500">{category.tools.length} 個工具</p>
                </div>
              </div>

              {/* 工具列表 */}
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + toolIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="text-2xl flex-shrink-0">{tool.logo}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{tool.name}</h4>
                      <p className="text-sm text-gray-500 truncate">{tool.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 工作流程說明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">開發工作流程</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">我使用這些工具建立了高效的開發工作流程，從設計到部署的每個階段都有對應的工具支援</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">設計</h4>
                <p className="text-sm text-gray-600">使用 Figma 進行 UI/UX 設計和原型製作</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">開發</h4>
                <p className="text-sm text-gray-600">使用 VS Code 進行程式碼編寫和調試</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Terminal className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">版本控制</h4>
                <p className="text-sm text-gray-600">使用 Git 進行版本控制和協作開發</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">部署</h4>
                <p className="text-sm text-gray-600">使用 Vercel 進行自動化部署和監控</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
