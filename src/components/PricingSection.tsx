"use client";

import { useState } from "react";

export function PricingSection() {
  const [monthlySalary, setMonthlySalary] = useState<string>("");
  const [monthlyHours, setMonthlyHours] = useState<string>("");

  const salary = parseFloat(monthlySalary) || 0;
  const hours = parseFloat(monthlyHours) || 0;
  const hourlyRate = salary > 0 ? salary / 160 : 0;
  const totalCost = salary > 0 && hours > 0 ? hours * hourlyRate : 0;

  const plans = [
    {
      name: "スタートプラン",
      price: "¥76,800",
      priceSub: "/月（税別）",
      range: "〜500戸",
      items: ["議事録 月10件まで", "確認調整代行含む"],
      ctaClass: "bg-[#C9A84C] text-[#1B3A6B]",
      ctaText: "資料を受け取る",
      ctaSize: "text-lg",
      featured: false,
    },
    {
      name: "スタンダードプラン",
      price: "¥380,000",
      priceSub: "/月（税別）",
      range: "500〜2,000戸",
      items: [
        "議事録 月30件まで",
        "総会書類 月3棟まで",
        "月次報告書 月10件まで",
        "確認調整代行含む",
      ],
      ctaClass: "bg-[#C9A84C] text-[#1B3A6B]",
      ctaText: "資料を受け取る",
      ctaSize: "text-lg",
      featured: true,
    },
    {
      name: "プレミアムプラン",
      price: "個別お見積",
      priceSub: "",
      range: "2,000戸超",
      items: ["全サービスカスタム", "専任担当者付き", "SLA保証"],
      ctaClass: "bg-[#1B3A6B] text-white",
      ctaText: "まず話を聞いてみる",
      ctaSize: "text-sm whitespace-nowrap",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="bg-[#F5F6F8] py-24 md:py-32 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-bold text-3xl md:text-4xl text-[#1B3A6B] mb-4 text-center leading-tight"
          data-aos="fade-up"
        >
          「高いか安いか」は、
          <br />
          今の貴社のコストと比べてみてください。
        </h2>
        <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-14" data-aos="fade-up" />

        {/* ROI Calculator */}
        <div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
        >
          <h3 className="font-bold text-[#1B3A6B] text-xl mb-6">
            貴社の書類業務コストを、今すぐ計算してみてください
          </h3>

          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-bold text-[#2D2D2D] mb-2">
                フロント担当者の月給（円）
              </label>
              <input
                type="number"
                placeholder="例：250000"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/30 transition"
              />
              {salary > 0 && (
                <p className="text-sm text-[#2D2D2D] mt-2">
                  ÷ 月間労働時間：160時間 ＝ 時間単価：
                  <strong>{Math.round(hourlyRate).toLocaleString()} 円</strong>
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-[#2D2D2D] mb-2">
                書類業務の月間時間（時間）
              </label>
              <input
                type="number"
                placeholder="例：40"
                value={monthlyHours}
                onChange={(e) => setMonthlyHours(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/30 transition"
              />
              {salary > 0 && hours > 0 && (
                <div className="bg-[#C9A84C]/20 rounded-xl p-4 text-center mt-3">
                  <p className="text-sm text-[#2D2D2D]">
                    × 時間単価 {Math.round(hourlyRate).toLocaleString()} 円 ＝ 書類業務の月間コスト
                  </p>
                  <p className="text-2xl font-bold text-[#C9A84C] mt-1">
                    {Math.round(totalCost).toLocaleString()} 円
                  </p>
                </div>
              )}
            </div>

            <div className="bg-[#F5F6F8] rounded-xl p-5 text-sm text-[#2D2D2D] leading-relaxed">
              <p className="font-bold mb-2">【参考例】</p>
              <p>月給25万円の場合：時間単価約1,563円 → 40時間 × 1,563円 ＝ 月約62,500円</p>
              <p>月給30万円の場合：時間単価約1,875円 → 40時間 × 1,875円 ＝ 月約75,000円</p>
              <p>月給35万円の場合：時間単価約2,188円 → 40時間 × 2,188円 ＝ 月約87,500円</p>
              <p className="mt-2">＋ 残業代（月20時間分）を加算すると…</p>
              <p className="font-bold">いずれのケースでも月間コストは¥76,800を大きく上回ります</p>
            </div>
          </div>

          <p className="text-[#1B3A6B] font-bold text-xl text-center mt-8">
            このサービスは「コスト」ではなく、「投資」です。
          </p>
        </div>

        {/* Pricing Table - Desktop */}
        <div className="hidden md:flex items-end gap-6" data-aos="fade-up">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl shadow-xl p-8 flex-1 min-h-[360px] flex flex-col ${
                plan.featured
                  ? "border-2 border-[#C9A84C] scale-105 z-10 shadow-2xl"
                  : ""
              }`}
              data-aos-delay={i * 100}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#1B3A6B] font-bold px-4 py-1 rounded-full text-sm whitespace-nowrap">
                  ★ 最も選ばれています
                </span>
              )}
              <h3 className="font-bold text-[#1B3A6B] text-lg mb-2">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold text-[#2D2D2D]">{plan.price}</span>
                {plan.priceSub && (
                  <span className="text-sm text-gray-500 ml-1">{plan.priceSub}</span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-4">管理戸数目安：{plan.range}</p>
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {plan.items.map((item, j) => (
                  <li key={j} className="text-sm text-[#2D2D2D] flex items-start gap-2">
                    <span className="text-[#C9A84C]">・</span>{item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:tomoaki.fukuda@dxcj.co.jp?subject=【資料請求】マンション管理業務BPOについて"
                className={`min-h-[44px] w-full flex items-center justify-center ${plan.ctaClass} font-bold ${plan.ctaSize} py-4 px-10 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Pricing Table - Mobile Carousel */}
        <div
          className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 pb-6"
          data-aos="fade-up"
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl shadow-xl p-8 min-w-[280px] snap-center flex-shrink-0 flex flex-col ${
                plan.featured ? "border-2 border-[#C9A84C]" : ""
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#1B3A6B] font-bold px-4 py-1 rounded-full text-sm whitespace-nowrap">
                  ★ 最も選ばれています
                </span>
              )}
              <h3 className="font-bold text-[#1B3A6B] text-lg mb-2">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-3xl font-bold text-[#2D2D2D]">{plan.price}</span>
                {plan.priceSub && (
                  <span className="text-xs text-gray-500 ml-1">{plan.priceSub}</span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-4">管理戸数目安：{plan.range}</p>
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {plan.items.map((item, j) => (
                  <li key={j} className="text-sm text-[#2D2D2D] flex items-start gap-2">
                    <span className="text-[#C9A84C]">・</span>{item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:tomoaki.fukuda@dxcj.co.jp?subject=【資料請求】マンション管理業務BPOについて"
                className={`min-h-[44px] w-full flex items-center justify-center ${plan.ctaClass} font-bold py-4 rounded-full text-sm`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-600 mt-8" data-aos="fade-up">
          初期費用：¥0 ／ 最低契約期間：3ヶ月 ／ 解約：1ヶ月前通知・違約金なし ／ 超過分：1件あたり¥2,800（税別）
        </p>
      </div>
    </section>
  );
}
