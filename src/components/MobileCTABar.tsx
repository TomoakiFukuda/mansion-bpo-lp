"use client";

import { useEffect, useState } from "react";

interface MobileCTABarProps {
  heroRef: React.RefObject<HTMLElement | null>;
}

export function MobileCTABar({ heroRef }: MobileCTABarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible(!entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [heroRef]);

  if (!visible) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      style={{ boxShadow: "0 -4px 12px rgba(0,0,0,0.15)" }}
    >
      <a
        href="mailto:tomoaki.fukuda@dxcj.co.jp?subject=【資料請求】マンション管理業務BPOについて"
        className="min-h-[44px] block bg-[#C9A84C] text-[#1B3A6B] font-bold py-3 text-center text-sm"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        サービス資料を受け取る（無料）
      </a>
    </div>
  );
}
