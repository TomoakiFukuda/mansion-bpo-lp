import { ContactForm } from "./ContactForm";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 scroll-mt-20"
      style={{
        background: "linear-gradient(90deg, #C9A84C 0%, #D4B85A 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-bold text-2xl md:text-4xl text-[#1B3A6B] mb-6 leading-tight">
            まずは資料請求から。
            <br />
            費用も登録作業も一切不要です。
          </h2>
          <p className="text-[#2D2D2D] text-base md:text-lg leading-relaxed">
            資料には、サービス詳細・料金・導入ステップ・費用対効果の試算表を
            <br className="hidden md:block" />
            すべて掲載しています。社内でのご検討にもそのままお使いいただけます。
          </p>
        </div>

        {/* Form */}
        <div
          className="bg-white rounded-2xl p-8 md:p-10 shadow-xl mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <ContactForm />
        </div>

      </div>
    </section>
  );
}
