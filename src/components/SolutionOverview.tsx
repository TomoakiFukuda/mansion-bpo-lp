export function SolutionOverview() {
  const steps = [
    {
      step: "1",
      title: "貴社からデータをお送りいただく",
      body: "会議の録音データまたは既存書類をクラウド経由でアップロードするだけ",
    },
    {
      step: "2",
      title: "AIと専門スタッフがドラフトを作成",
      body: "生成AIが議事録・書類のドラフトを3営業日以内に自動作成",
    },
    {
      step: "3",
      title: "完成品をお届けし理事会メンバーへの確認・修正対応も代行",
      body: "管理業務主任者が法令チェック後、理事会メンバー全員への送付・修正対応・最終版管理まで一気通貫で対応",
    },
  ];

  return (
    <section id="service" className="bg-[#1B3A6B] py-24 md:py-32 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-bold text-3xl md:text-4xl text-white leading-tight mb-4"
          data-aos="fade-up"
        >
          貴社のフロント担当者に必要なのは、
          <br />
          「確認する時間」だけです。
        </h2>
        <div className="w-16 h-1 bg-white/50 mx-auto mb-8" data-aos="fade-up" />

        <div
          className="bg-white/5 rounded-2xl p-8 max-w-2xl mx-auto mb-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="italic text-gray-300 text-base md:text-lg leading-relaxed">
            書類を外注することは、仕事を手放すことではありません。
            <br />
            管理組合との対話・現場の判断・信頼関係の構築——
            <br />
            それこそが、貴社のフロント担当者にしかできない仕事です。
            <br />
            書類は、専門家に任せてください。
          </p>
        </div>

        {/* 3-Step Flow — Mobile */}
        <div className="flex flex-col gap-0 md:hidden">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="bg-white/10 backdrop-blur rounded-2xl p-8 flex flex-col items-center text-center w-full min-h-[280px] hover:bg-white/20 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-[#1B3A6B] font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <p className="text-lg font-bold text-white mb-3">{s.title}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="text-[#C9A84C] text-3xl font-bold text-center py-2">↓</div>
              )}
            </div>
          ))}
        </div>

        {/* 3-Step Flow — Desktop (7-col grid: card arrow card arrow card) */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
          {steps.map((s, i) => (
            <>
              <div
                key={s.step}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 flex flex-col items-center text-center min-h-[280px] hover:bg-white/20 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-[#1B3A6B] font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <p className="text-lg font-bold text-white mb-3">{s.title}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <div key={`arrow-${i}`} className="flex items-center justify-center text-[#C9A84C] text-3xl font-bold">
                  →
                </div>
              )}
            </>
          ))}
        </div>

        <div className="mt-14" data-aos="fade-up">
          <p className="text-white font-bold text-xl md:text-2xl mb-4 leading-relaxed">
            貴社がするのは、最終確認だけ。
            <br />
            書類作成も、理事会メンバーとの調整も、もう抱えなくていい。
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            既存の管理システムはそのままご利用いただけます。
            <br />
            IT専門知識は不要。今日から始められます。
          </p>
        </div>
      </div>
    </section>
  );
}
