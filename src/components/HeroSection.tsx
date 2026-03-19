"use client";

import { useRef } from "react";
import Image from "next/image";

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLElement | null>;
}

export function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1B3A6B 0%, #2A5298 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gray-400" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text (60%) */}
          <div className="w-full md:w-[60%]" data-aos="fade-up">
            <h1 className="font-bold text-[28px] md:text-[40px] text-white leading-tight mb-6">
              <span className="block">議事録・総会書類・月次報告書</span>
              <span className="block">
                貴社のフロント担当者は、
                <br />
                <span className="text-[#C9A84C]">もう作らなくていい。</span>
              </span>
            </h1>

            <p className="text-white/80 text-base md:text-lg leading-loose mb-10">
              マンション管理会社専門のAI×BPOサービス。
              <br />
              書類業務と、理事会メンバーとの確認調整を、一気通貫で代行し、
              <br className="hidden md:block" />
              貴社のフロント担当者が管理組合との対話に集中できる環境をつくります。
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-4">
              <a
                href="mailto:tomoaki.fukuda@dxcj.co.jp?subject=【資料請求】マンション管理業務BPOについて"
                className="min-h-[44px] flex items-center justify-center bg-[#C9A84C] text-[#1B3A6B] font-bold text-lg py-4 px-10 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                サービス資料を受け取る
              </a>
              <a
                href="mailto:tomoaki.fukuda@dxcj.co.jp?subject=【資料請求】マンション管理業務BPOについて"
                className="min-h-[44px] flex items-center justify-center bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                まず話だけ聞いてみる（30分・無料）
              </a>
            </div>

            <p className="text-xs text-gray-300">
              ※資料は無料・登録不要・30秒で受け取れます
            </p>
          </div>

          {/* Right: Visual (40%) */}
          <div className="w-full md:w-[40%]" data-aos="fade-up" data-aos-delay="200">
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl rotate-2">
              <Image
                src="/placeholder-hero.png"
                alt="フロント担当者が管理組合と対話しているイメージ"
                fill
                unoptimized
                className="object-cover opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
