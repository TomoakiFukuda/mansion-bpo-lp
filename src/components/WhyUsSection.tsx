export function WhyUsSection() {
  const reasons = [
    {
      icon: "🏢",
      title: "マンション管理業界への完全特化",
      body: "汎用BPO会社は管理組合特有の用語・法令・慣習を知りません。理事会メンバーへの多対一確認コミュニケーションの大変さも、総会シーズンの繁忙期の実態も、最初から理解しています。貴社のフロント担当者が当たり前に使っている言葉・ルールを、当社は最初から理解しています。",
    },
    {
      icon: "📜",
      title: "管理業務主任者による全件品質保証",
      body: "AIが生成したドラフトは、必ず管理業務主任者資格保有スタッフが法令整合性・決議要件・積立金整合性の3観点で全件確認。「AIの出力をそのまま使って問題が起きた」というリスクはゼロです。",
    },
    {
      icon: "🏷️",
      title: "中小管理会社のための透明な料金設計",
      body: "大手BPO会社のほとんどが「要見積もり」で価格を開示していません。貴社が予算を判断できるよう、当社はスタータープランの価格をWEB上に明示しています。商談の前に、費用対効果をご自身で計算できます。",
    },
    {
      icon: "🔌",
      title: "既存システムそのまま・導入工事ゼロ",
      body: "いえらぶ・管理王・スーモなど主要管理システムとの連携に対応しています。新しいシステムへの乗り換えは不要です。貴社のやり方を変えずに、書類業務だけを外出しできます。",
    },
    {
      icon: "🛡️",
      title: "まず資料を受け取るだけ・失敗しない入口",
      body: "いきなりの契約は不要です。まずサービス資料をご覧いただき、貴社に合うかどうかをご判断ください。その後の無料相談・無料トライアルも、いつでもキャンセル可能です。",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-bold text-3xl md:text-4xl text-[#1B3A6B] mb-4 text-center leading-tight"
          data-aos="fade-up"
        >
          貴社が安心して任せられる理由が、
          <br />
          5つあります。
        </h2>
        <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-12" data-aos="fade-up" />

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {reasons.slice(0, 3).map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start min-h-[320px] h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-2xl mb-4 flex-shrink-0">
                {r.icon}
              </div>
              <p className="font-bold text-[#1B3A6B] text-lg mb-3">{r.title}</p>
              <p className="text-[#2D2D2D] text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2xl md:mx-auto">
          {reasons.slice(3).map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start min-h-[320px] h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-2xl mb-4 flex-shrink-0">
                {r.icon}
              </div>
              <p className="font-bold text-[#1B3A6B] text-lg mb-3">{r.title}</p>
              <p className="text-[#2D2D2D] text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
