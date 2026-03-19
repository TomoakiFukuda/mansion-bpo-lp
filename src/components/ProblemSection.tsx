const items = [
  {
    num: "01",
    title: "書類作成に追われる",
    body: "議事録・総会書類・月次報告書の作成に毎月40時間以上。会議後の深夜・休日が書類作業で埋まる",
  },
  {
    num: "02",
    title: "多対一の確認地獄",
    body: "理事長・副理事長・各理事・監事…多いマンションでは10名以上に確認メールを一斉送付。バラバラに届く返信、割れる意見、修正・再送付の繰り返し。",
  },
  {
    num: "03",
    title: "最終版管理まで全部自分",
    body: "修正対応・最終版の保管・次回会議への引き継ぎまで、すべてフロント担当者が一人で抱える",
  },
  {
    num: "04",
    title: "残業・休日出勤が常態化",
    body: "月末・総会前は特に集中。終電帰り・休日出勤が当たり前になり、プライベートとの両立が困難に。",
  },
  {
    num: "05",
    title: "ベテランが疲弊して離職",
    body: "→ 後任に業務が集中 → さらに負荷が増す",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-[#F5F6F8] py-24 md:py-32 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="font-bold text-3xl md:text-4xl text-[#1B3A6B] leading-tight mb-4 text-center"
          data-aos="fade-up"
        >
          貴社のフロント担当者は今、
          <br />
          こんな「書類づくり」に
          <br />
          時間を奪われていませんか？
        </h2>
        <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-8" data-aos="fade-up" />

        <p
          className="text-center text-base md:text-lg leading-relaxed text-[#2D2D2D] mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          これは、能力の問題でも努力の問題でもありません。
          <br />
          マンション管理業界が構造的に抱える、<span className="bg-[#C9A84C]/20 px-1 rounded">仕組みの問題</span>です。
        </p>

        {/* Single white card with numbered list */}
        <div
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-6 md:gap-8 ${
                i < items.length - 1 ? "border-b border-gray-100 py-6 md:py-8" : "pt-6 md:pt-8"
              }`}
            >
              <span className="text-4xl md:text-5xl font-bold text-[#C9A84C]/30 leading-none flex-shrink-0 w-12 md:w-16 text-right">
                {item.num}
              </span>
              <div className="flex-1 min-w-0 pt-1">
                <p className="font-bold text-[#1B3A6B] text-lg mb-1">{item.title}</p>
                {item.body && (
                  <p className="text-sm md:text-base text-[#2D2D2D]/60 leading-relaxed w-full">{item.body}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Closing text */}
        <p
          className="text-center text-base md:text-lg leading-relaxed text-[#2D2D2D] mt-12"
          data-aos="fade-up"
        >
          このままでは、管理戸数を増やすほど、現場は疲弊する一方です。
          <br />
          でも、<span className="text-[#C9A84C] font-bold">この悪循環を断ち切っている</span>会社が、今確実に増えています。
        </p>
      </div>
    </section>
  );
}
