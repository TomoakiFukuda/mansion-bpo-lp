"use client";

import { useState } from "react";

const tabs = ["まずはここから（推奨）", "次のステップ", "将来の拡張オプション"];

function Tab1() {
  const beforeSteps = [
    "会議録音 → 文字起こし → ドラフト作成（2〜3h）",
    "理事長・副理事長・各理事・監事（最大10名超）へ確認メール一斉送付",
    "バラバラに届く返信・意見調整・修正・再送付",
    "最終版の保管・管理",
  ];

  const afterSteps = [
    "録音データを送る → 3営業日で完成品が届く",
    "理事会メンバーへの確認・修正対応も完結",
    "内容を確認するだけ（月2時間）",
  ];

  const checkItems = [
    "音声録音データをアップロードするだけ",
    "管理業務主任者による全件法令チェック",
    "理事会メンバー全員への確認送付・修正対応も代行",
    "貴社フォーマットに完全対応",
    "修正依頼は何度でも無料",
  ];

  return (
    <div>
      {/* Badge & Title */}
      <div className="inline-block bg-[#C9A84C]/20 border border-[#C9A84C] text-[#C9A84C] px-4 py-2 rounded-full font-bold mb-6 text-sm">
        🏆 初手として最も推奨・最も効果が出やすい業務
      </div>
      <h3 className="font-bold text-[#1B3A6B] text-xl mb-8">
        理事会・総会 議事録作成＋理事会メンバー確認調整 代行
      </h3>

      {/* Before: 現在の業務フロー */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-4">
        <p className="text-sm text-gray-500 font-medium mb-6">現在の業務フロー</p>
        <div className="flex flex-col items-start gap-0">
          {beforeSteps.map((step, i) => (
            <div key={i} className="w-full flex flex-col items-start">
              <div className="bg-[#F5F6F8] rounded-xl px-6 py-3 text-[#2D2D2D] text-sm w-full">
                {step}
              </div>
              {i < beforeSteps.length - 1 && (
                <span className="text-[#C9A84C] text-xl font-bold pl-6 py-1">↓</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-[#2D2D2D] font-bold text-sm mt-6">
          合計：1棟あたり月3〜4時間 × 10棟 ＝ 月40時間以上
        </p>
      </div>

      {/* Arrow */}
      <div className="text-[#C9A84C] text-4xl text-center py-4">▼</div>

      {/* After: 導入後の業務フロー */}
      <div className="bg-[#1B3A6B]/5 border-2 border-[#C9A84C]/30 rounded-2xl p-8 md:p-10 mb-8">
        <p className="text-sm text-[#C9A84C] font-medium mb-6">導入後の業務フロー</p>
        <div className="flex flex-col">
          {afterSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-3 py-2">
              <span className="text-[#C9A84C] font-bold flex-shrink-0">✓</span>
              <span className="text-[#2D2D2D] text-sm">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <p className="text-[#C9A84C] font-bold text-4xl">月38時間</p>
          <p className="text-[#2D2D2D] text-sm mt-1">削減時間</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <p className="text-[#C9A84C] font-bold text-4xl">月約114,000円</p>
          <p className="text-[#2D2D2D] text-sm mt-1">削減コスト換算</p>
        </div>
      </div>

      {/* Checklist pills */}
      <div className="flex flex-wrap gap-3">
        {checkItems.map((item, i) => (
          <span
            key={i}
            className="bg-[#F5F6F8] rounded-full px-5 py-2 text-sm text-[#2D2D2D] flex items-center gap-1"
          >
            <span className="text-[#C9A84C] font-bold">✓</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Tab2() {
  const cards = [
    {
      title: "総会書類一式ドラフト＋理事会メンバー調整代行",
      body: "招集通知・議案書・収支報告書・委任状・議決権行使書の全セット作成に加え、理事会メンバー全員への確認送付・修正対応・最終版管理まで代行。繁忙期の山を丸ごと外出しできる。",
      note: "削減時間目安: 1棟20〜40時間",
    },
    {
      title: "月次管理報告書作成",
      body: "収支状況・工事進捗・クレーム対応状況の月次サマリーを自動生成・納品。毎月発生する定型業務を継続的に削減する安定プラン。",
      note: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >
          <h3 className="font-bold text-[#1B3A6B] text-base mb-3">{card.title}</h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">{card.body}</p>
          {card.note && (
            <p className="text-[#C9A84C] font-bold text-sm">{card.note}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function Tab3() {
  const cards = [
    "長期修繕計画 ドラフト作成サポート",
    "管理費督促・入居者通知文 作成代行",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="relative bg-white rounded-2xl shadow-xl p-8 opacity-50"
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >
          <span className="absolute top-3 right-3 bg-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full">
            近日公開予定
          </span>
          <p className="font-bold text-[#1B3A6B] text-sm mt-4">{card}</p>
        </div>
      ))}
    </div>
  );
}

const tabMeta = [
  { icon: "🏆", title: "まずはここから", sub: "推奨", subActive: "text-[#C9A84C]", subInactive: "text-gray-400" },
  { icon: "📋", title: "次のステップ", sub: "総会書類・月次報告書", subActive: "text-gray-300", subInactive: "text-gray-400" },
  { icon: "🔮", title: "将来の拡張オプション", sub: "近日公開予定", subActive: "text-gray-300", subInactive: "text-gray-400" },
];

export function ServiceLineup() {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const tabContent = [<Tab1 key={0} />, <Tab2 key={1} />, <Tab3 key={2} />];

  return (
    <section className="bg-[#F5F6F8] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-bold text-3xl md:text-4xl text-[#1B3A6B] text-center leading-tight mb-4"
          data-aos="fade-up"
        >
          貴社が今すぐ手放せる業務から、始められます。
        </h2>
        <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-12" data-aos="fade-up" />

        {/* Desktop Card Tabs */}
        <div className="hidden md:block" data-aos="fade-up">
          <div className="grid grid-cols-3 gap-4 mb-0">
            {tabMeta.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`cursor-pointer rounded-2xl p-5 md:p-6 border-2 transition-all duration-300 text-center ${
                  activeTab === i
                    ? "bg-[#1B3A6B] border-[#1B3A6B] text-white shadow-xl scale-[1.02]"
                    : "bg-white border-gray-200 text-[#2D2D2D] hover:border-[#C9A84C]/50 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                <div className="text-2xl mb-2">{tab.icon}</div>
                <p className="font-bold text-base md:text-lg">{tab.title}</p>
                <p className={`text-xs font-bold mt-1 ${activeTab === i ? tab.subActive : tab.subInactive}`}>
                  {tab.sub}
                </p>
              </button>
            ))}
          </div>

          {/* Active tab indicator arrow */}
          <div className="grid grid-cols-3 gap-4">
            {tabMeta.map((_, i) => (
              <div key={i} className="text-center">
                {activeTab === i && (
                  <span className="text-[#1B3A6B] text-2xl leading-none">▼</span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            {tabContent[activeTab]}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden flex flex-col gap-4" data-aos="fade-up">
          {tabMeta.map((tab, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-xl">
              <button
                onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                className={`w-full min-h-[44px] flex justify-between items-center px-6 py-4 font-bold text-left transition-all duration-300 ${
                  openAccordion === i
                    ? "bg-[#1B3A6B] text-white"
                    : "bg-white text-[#1B3A6B]"
                }`}
              >
                <span className="flex items-center gap-3 text-sm">
                  <span>{tab.icon}</span>
                  {tab.title}
                </span>
                <span className={`text-xl font-bold ml-2 ${openAccordion === i ? "text-[#C9A84C]" : "text-[#C9A84C]"}`}>
                  {openAccordion === i ? "−" : "+"}
                </span>
              </button>
              {openAccordion === i && (
                <div className="bg-white px-6 pb-6 pt-4">{tabContent[i]}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
