/**
 * 關於我 Hero Section 元件
 *
 * 關於我頁面的主要區塊，包含個人介紹、職業概述和個人照片
 * 使用與首頁一致的動態背景和視覺效果
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../layout/Container";
import { MapPin, Calendar, Coffee, Sparkles } from "lucide-react";

const personalInfo = [
  { icon: MapPin, label: "位置", value: "台灣 台北" },
  { icon: Calendar, label: "經驗", value: "5+ 年開發經驗" },
  { icon: Coffee, label: "狀態", value: "開放新機會" },
];

export function AboutHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
      {/* 動態背景裝飾 - 與首頁一致 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* 額外的裝飾元素 */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-cyan-300 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-300 rounded-full animate-pulse animation-delay-4000"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左側內容 */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-2 mb-4"
              >
                <Sparkles className="w-6 h-6 text-blue-500" />
                <span className="text-blue-600 font-semibold">關於我的故事</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              >
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">創造</span> 數位體驗
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                我是一位充滿熱忱的全端開發者
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg text-gray-700 mb-8"
            >
              <p>我專注於創造優雅、高效的數位解決方案，擁有超過 5 年的軟體開發經驗。 我熱愛學習新技術，並致力於將創新的想法轉化為實際的產品。</p>
              <p>從前端的用戶體驗設計到後端的系統架構，我享受解決複雜問題的過程， 並相信技術應該為人們的生活帶來正面的影響。</p>
            </motion.div>

            {/* 個人資訊卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid sm:grid-cols-3 gap-4"
            >
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="group relative overflow-hidden p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* 懸停時的背景效果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{info.label}</p>
                      <p className="text-sm font-semibold text-gray-900">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 右側照片區域 */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="order-1 lg:order-2">
            <div className="relative">
              {/* 主要照片容器 */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-400 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                      alt="個人照片"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* 動態裝飾元素 */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60"
                ></motion.div>

                <motion.div
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-200 rounded-full opacity-40"
                ></motion.div>

                {/* 浮動的小元素 */}
                <motion.div
                  animate={{
                    y: [-10, 10],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 -left-8 w-6 h-6 bg-purple-300 rounded-full"
                ></motion.div>

                <motion.div
                  animate={{
                    y: [10, -10],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-1/3 -right-8 w-8 h-8 bg-blue-300 rounded-full"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
