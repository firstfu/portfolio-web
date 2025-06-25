/**
 * 工具函數庫
 *
 * 提供專案中常用的工具函數，包括樣式合併、類型檢查等
 * 主要用於 Tailwind CSS 類名的條件合併和衝突解決
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合併 CSS 類名的工具函數
 * 使用 clsx 進行條件合併，使用 tailwind-merge 解決 Tailwind 類名衝突
 *
 * @param inputs - CSS 類名或條件對象
 * @returns 合併後的類名字符串
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 延遲執行函數
 *
 * @param ms - 延遲毫秒數
 * @returns Promise
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 格式化日期
 *
 * @param date - 日期對象
 * @param locale - 地區設定，預設為繁體中文
 * @returns 格式化後的日期字符串
 */
export function formatDate(date: Date, locale: string = "zh-TW"): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
