/**
 * 根佈局元件
 *
 * 定義整個應用程式的基礎佈局結構
 * 包含字體設定、metadata 和全域樣式
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | 個人作品集",
    default: "個人作品集 - 前端工程師",
  },
  description: "專業前端工程師作品集，展示 React、Next.js 等技術專案",
  keywords: ["前端", "工程師", "React", "Next.js", "TypeScript"],
  authors: [{ name: "開發者姓名" }],
  openGraph: {
    type: "website",
    locale: "zh_TW",
    siteName: "個人作品集",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansTC.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
