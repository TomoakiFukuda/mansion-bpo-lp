const rows = [
  { label: "会社名", value: "DXコンサルティングジャパン株式会社" },
  { label: "設立", value: "2024年9月" },
  { label: "所在地", value: "〒150-0002 東京都渋谷区渋谷2丁目19-15 宮益坂ビルディング609" },
  { label: "代表", value: "福田 友亮" },
  { label: "事業内容", value: "マンション管理会社向けAI×BPOサービスの提供" },
  { label: "対応エリア", value: "全国（オンライン対応）" },
];

export function FounderSection() {
  return (
    <section id="founder" className="bg-[#F5F6F8] py-24 md:py-32 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="font-bold text-3xl md:text-4xl text-[#1B3A6B] text-center"
          data-aos="fade-up"
        >
          運営会社
        </h2>
        <div className="w-16 h-1 bg-[#C9A84C] mx-auto mt-4 mb-12" data-aos="fade-up" />

        <div
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {rows.map((row, i) => (
            <div
              key={i}
              className={`flex gap-6 ${i < rows.length - 1 ? "border-b border-gray-100 py-5" : "pt-5"}`}
            >
              <span className="w-32 md:w-40 shrink-0 text-sm font-bold text-[#C9A84C]">
                {row.label}
              </span>
              <span className="text-base text-[#2D2D2D]">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
