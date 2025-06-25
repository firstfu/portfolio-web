/**
 * 404 錯誤頁面
 *
 * 當用戶訪問不存在的頁面時顯示的錯誤頁面
 * 提供友善的錯誤訊息和導航回首頁的選項
 */

import Link from "next/link";
import { Button } from "./components/ui/Button";
import { Container } from "./components/layout/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900">
      <Container>
        <div className="text-center space-y-8 py-20">
          <div className="space-y-4">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">404</h1>
            <h2 className="text-3xl font-bold text-white">頁面未找到</h2>
            <p className="text-lg text-gray-300 max-w-md mx-auto">抱歉，您要尋找的頁面不存在。可能已被移動、刪除或您輸入了錯誤的網址。</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
                回到首頁
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400">
                查看作品
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
