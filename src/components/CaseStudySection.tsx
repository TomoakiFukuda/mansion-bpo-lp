const monitorItems = [
  "貴社の業務理解・キャッチアップも含めて最大2ヶ月間サービスを完全無料でご利用いただけます。",
  "議事録・総会書類・月次報告書の作成代行をフルでお試しいただけます",
  "モニター期間終了後、継続の義務はありません",
];

const conditionItems = [
  "導入事例・数値実績のLP掲載にご協力いただけること",
  "議事録作成業務を月5件以上お持ちの管理会社様",
  "モニター期間中、簡単なフィードバックにご協力いただけること",
];

export function CaseStudySection() {
  return (
    <section id="case" className="bg-white py-24 md:py-32 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="font-bold text-3xl md:text-4xl text-[#1B3A6B] text-center"
          data-aos="fade-up"
        >
          無料モニター企業を募集しています
        </h2>

        <p
          className="text-center text-base md:text-lg text-[#2D2D2D]/70 leading-relaxed mb-12"
          data-aos="fade-up"
        >
          サービス立ち上げにつき、導入事例として
          <br />
          ご紹介させていただける企業様を
          <br />
          3社限定で募集しています。
        </p>

        <div
          className="bg-[#F5F6F8] rounded-3xl p-8 md:p-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* モニター内容 */}
          <div className="mb-10">
            <p className="text-lg font-bold text-[#1B3A6B] mb-4">モニター内容</p>
            {monitorItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-3">
                <span className="text-[#C9A84C] font-bold text-lg shrink-0">✓</span>
                <span className="text-base text-[#2D2D2D] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* 募集条件 */}
          <div className="mb-10">
            <p className="text-lg font-bold text-[#1B3A6B] mb-4">募集条件</p>
            {conditionItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-3">
                <span className="text-[#C9A84C] font-bold text-lg shrink-0">✓</span>
                <span className="text-base text-[#2D2D2D] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* 募集枠 */}
          <div className="text-center mb-8">
            <p className="text-sm text-[#2D2D2D]/60 mb-2">残り募集枠</p>
            <p className="text-5xl md:text-6xl font-bold text-[#C9A84C]">3社限定</p>
            <p className="text-sm text-[#2D2D2D]/60 mt-2">定員に達し次第、募集を締め切ります。</p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="mailto:tomoaki.fukuda@dxcj.co.jp?subject=【資料請求】マンション管理業務BPOについて"
              className="bg-[#C9A84C] text-[#1B3A6B] font-bold text-lg rounded-full py-4 px-10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block text-center"
            >
              無料モニターに応募する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
