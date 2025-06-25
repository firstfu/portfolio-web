/**
 * Header 導航元件
 *
 * 網站頂部導航列，包含 Logo、導航選單和響應式設計
 * 採用 AI 主題深色科技風格，與首頁風格一致
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Brain } from "lucide-react";
import { cn } from "../../lib/utils";
import { Container } from "./Container";
import { Button } from "../ui/Button";

const navigation = [
  { name: "首頁", href: "/" },
  { name: "關於我", href: "/about" },
  { name: "技能", href: "/skills" },
  { name: "作品集", href: "/portfolio" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10 border-b border-cyan-500/20" : "bg-slate-900/60 backdrop-blur-sm"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* AI Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-200">
                <Brain className="text-white w-5 h-5" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-200">
                AI Portfolio
              </div>
              <div className="text-xs text-cyan-400/80 -mt-1">智能工程師</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 font-medium transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 font-medium transition-all duration-200"
            >
              聯繫我
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "關閉選單" : "開啟選單"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-300" /> : <Menu className="h-6 w-6 text-gray-300" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-cyan-500/20 bg-slate-900/95 backdrop-blur-md">
            <nav className="py-6 space-y-2">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 font-medium transition-all duration-200 rounded-lg mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2 pt-4 border-t border-cyan-500/20 mt-4">
                <Button variant="outline" size="sm" className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 font-medium">
                  聯繫我
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
