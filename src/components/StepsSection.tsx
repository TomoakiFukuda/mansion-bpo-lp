import React from "react";

const steps = [
  {
    num: "1",
    title: "資料を受け取る",
    meta: "無料・30秒",
    body: "サービス内容・料金・事例をまずご確認ください",
    gold: false,
  },
  {
    num: "2",
    title: "30分の無料相談",
    meta: "無料・30分",
    body: "現状の課題・業務量をヒアリング。費用対効果を一緒に試算します",
    gold: false,
  },
  {
    num: "3",
    title: "無料トライアル",
    meta: "完全無料・2〜3週間",
    body: "議事録3件を実際に代行。品質・速度・自社フォーマット適合を確認し、継続判断の材料にしてください",
    gold: false,
  },
  {
    num: "4",
    title: "本契約・運用開始",
    meta: "月額¥29,800〜",
    body: "効果を確認後、必要なプランでスタート。いつでも拡張・変更可能",
    gold: true,
  },
];

const reassurances = [
  "STEP3まで費用は一切発生しません",
  "無理な営業・勧誘は行いません",
  "契約後もいつでも解約可能（1ヶ月前通知・違約金なし）",
];

export function StepsSection() {
  return (
    <section className="bg-[#F5F6F8] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-bold text-3xl md:text-4xl text-[#1B3A6B] mb-4 text-center"
          data-aos="fade-up"
        >
          導入までの流れ
        </h2>
        <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-14" data-aos="fade-up" />

        {/* Desktop: grid with arrows between cards */}
        <div
          className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-stretch"
          data-aos="fade-up"
        >
          {steps.map((s, i) => (
            <React.Fragment key={s.num}>
              <div
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center h-full min-h-[280px] w-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div
                  className={`w-12 h-12 rounded-full font-bold text-lg flex items-center justify-center mb-4 flex-shrink-0 ${
                    s.gold
                      ? "bg-[#C9A84C] text-white"
                      : "bg-[#1B3A6B] text-white"
                  }`}
                >
                  {s.num}
                </div>
                <p className="font-bold text-base text-[#1B3A6B] mb-2 whitespace-nowrap">{s.title}</p>
                <p className="text-[#C9A84C] font-semibold text-sm mb-3">{s.meta}</p>
                <p className="text-[#2D2D2D] text-sm leading-relaxed">{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center text-[#C9A84C] text-2xl font-bold flex-shrink-0">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: vertical stack with down arrows */}
        <div className="md:hidden flex flex-col gap-0" data-aos="fade-up">
          {steps.map((s, i) => (
            <div key={s.num} className="flex flex-col items-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center min-h-[280px] w-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-full font-bold text-lg flex items-center justify-center mb-4 flex-shrink-0 ${
                    s.gold
                      ? "bg-[#C9A84C] text-white"
                      : "bg-[#1B3A6B] text-white"
                  }`}
                >
                  {s.num}
                </div>
                <p className="font-bold text-base text-[#1B3A6B] mb-2">{s.title}</p>
                <p className="text-[#C9A84C] font-semibold text-sm mb-3">{s.meta}</p>
                <p className="text-[#2D2D2D] text-sm leading-relaxed">{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="text-[#C9A84C] text-2xl font-bold text-center py-3">↓</div>
              )}
            </div>
          ))}
        </div>

        {/* Reassurances */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-4 md:gap-8" data-aos="fade-up">
          {reassurances.map((text, i) => (
            <p key={i} className="text-sm text-[#2D2D2D] text-center flex items-center justify-center gap-1">
              <span className="text-[#C9A84C] font-bold">✓</span>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
