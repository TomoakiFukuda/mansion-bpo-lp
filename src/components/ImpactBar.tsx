"use client";

import { useCountUpRef } from "@/lib/useCountUp";

function CountUpItem({
  target,
  prefix = "",
  suffix = "",
  label,
  note,
  isLast = false,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  note: string;
  isLast?: boolean;
}) {
  const { count, ref } = useCountUpRef(target);

  return (
    <div
      ref={ref}
      className={`text-center p-6 md:p-8 ${!isLast ? "border-b md:border-b-0 md:border-r border-white/20" : ""}`}
    >
      <div className="text-[#C9A84C] font-bold text-4xl md:text-5xl mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-white text-sm mb-1">{label}</div>
      <div className="text-gray-400 text-xs">{note}</div>
    </div>
  );
}

export function ImpactBar() {
  return (
    <section className="bg-[#1B3A6B] py-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <CountUpItem
            target={38}
            suffix="時間"
            prefix="月"
            label="フロント1名あたりの削減時間"
            note="10棟担当・議事録中心のケース"
          />
          <CountUpItem
            target={3}
            suffix="営業日"
            label="議事録納品までの標準日数"
            note="録音データ受領後"
          />
          {/* Static item */}
          <div className="text-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/20">
            <div className="text-[#C9A84C] font-bold text-3xl md:text-4xl mb-2">
              管理業務
              <br />
              主任者が
              <br />
              全件確認
            </div>
            <div className="text-white text-sm mb-1">品質保証の根拠</div>
            <div className="text-gray-400 text-xs">合格率約12%の国家資格</div>
          </div>
          <CountUpItem
            target={29800}
            prefix="¥"
            suffix="〜"
            label="月額スタートプラン（税別）"
            note="初期費用・最低契約期間なし"
            isLast
          />
        </div>
      </div>
    </section>
  );
}
