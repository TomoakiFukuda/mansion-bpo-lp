"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "課題", href: "#problem" },
    { label: "サービス", href: "#service" },
    { label: "料金", href: "#pricing" },
    { label: "無料モニター募集", href: "#case" },
    { label: "運営会社", href: "#founder" },
    { label: "お問い合わせ", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-[#2D2D2D]" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-lg">
          マンション管理業務BPO
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:tomoaki.fukuda@dxcj.co.jp?subject=【資料請求】マンション管理業務BPOについて"
            className="min-h-[44px] min-w-[44px] flex items-center bg-[#C9A84C] text-[#1B3A6B] font-bold px-4 py-2 rounded-lg text-sm hover:brightness-90 transition-all duration-200"
          >
            資料を受け取る
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 min-h-[44px] min-w-[44px] justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-[#2D2D2D]" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-[#2D2D2D]" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-[#2D2D2D]" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-[#2D2D2D] shadow-lg px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 border-b border-gray-100 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:tomoaki.fukuda@dxcj.co.jp?subject=【資料請求】マンション管理業務BPOについて"
            className="mt-4 block text-center bg-[#C9A84C] text-[#1B3A6B] font-bold px-4 py-3 rounded-lg text-sm"
            onClick={() => setMenuOpen(false)}
          >
            資料を受け取る
          </a>
        </div>
      )}
    </header>
  );
}
