/**
 * 興趣愛好區塊元件
 *
 * 展示個人興趣愛好、生活態度和工作之外的活動
 * 使用卡片設計和互動效果
 */

"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Camera, Music, Plane, Book, Coffee, Gamepad2, Mountain, Code2 } from "lucide-react";

const interests = [
  {
    icon: Camera,
    title: "攝影",
    description: "喜歡用鏡頭捕捉生活中的美好瞬間，街頭攝影和風景攝影是我的最愛。",
    color: "bg-purple-500",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    icon: Music,
    title: "音樂",
    description: "古典音樂和爵士樂愛好者，偶爾也會彈吉他放鬆心情。",
    color: "bg-blue-500",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: Plane,
    title: "旅行",
    description: "熱愛探索不同的文化和風景，每次旅行都能帶來新的靈感和視野。",
    color: "bg-green-500",
    gradient: "from-green-400 to-green-600",
  },
  {
    icon: Book,
    title: "閱讀",
    description: "技術書籍、科幻小說和哲學著作都是我的閱讀範圍，知識無邊界。",
    color: "bg-orange-500",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    icon: Coffee,
    title: "咖啡",
    description: "精品咖啡愛好者，享受手沖咖啡的過程，也喜歡探索不同產區的風味。",
    color: "bg-amber-600",
    gradient: "from-amber-500 to-amber-700",
  },
  {
    icon: Mountain,
    title: "登山",
    description: "週末喜歡到山裡走走，在大自然中找到內心的平靜和力量。",
    color: "bg-emerald-500",
    gradient: "from-emerald-400 to-emerald-600",
  },
  {
    icon: Gamepad2,
    title: "遊戲",
    description: "獨立遊戲和策略遊戲愛好者，欣賞遊戲設計中的創意和技術。",
    color: "bg-red-500",
    gradient: "from-red-400 to-red-600",
  },
  {
    icon: Code2,
    title: "開源貢獻",
    description: "參與開源專案，分享程式碼和知識，回饋開發者社群。",
    color: "bg-cyan-500",
    gradient: "from-cyan-400 to-cyan-600",
  },
];

const lifePhilosophy = ["工作與生活的平衡是長期成功的關鍵", "保持好奇心，對世界充滿探索慾望", "從不同的經歷中汲取創作靈感", "與志同道合的人建立深度連結"];

export function InterestsSection() {
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
            興趣愛好
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            工作之外的熱忱，豐富人生的色彩
          </motion.p>
        </div>

        {/* 興趣愛好網格 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${interest.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <interest.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">{interest.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed">{interest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 生活哲學 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-100 mb-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">生活哲學</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">這些信念指導著我的生活方式和人生選擇</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {lifePhilosophy.map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700 font-medium">{philosophy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 聯繫邀請 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 sm:p-12 rounded-2xl text-white">
            <Coffee className="w-12 h-12 mx-auto mb-6 opacity-90" />

            <h3 className="text-2xl sm:text-3xl font-bold mb-4">一起聊聊吧！</h3>

            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              如果你也對技術、攝影、音樂或任何有趣的話題感興趣， 我很樂意與你分享經驗和想法。讓我們在咖啡香中暢談未來！
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                發送訊息
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                查看作品
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
