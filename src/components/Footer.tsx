export function Footer() {
  return (
    <footer className="bg-[#1B3A6B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-8">
          {/* Left */}
          <div>
            <p className="font-bold text-lg">マンション管理業務BPO</p>
            <p className="text-gray-400 text-sm mt-2">マンション管理会社専門のAI×BPOサービス</p>
          </div>

          {/* Center */}
          <div>
            <p className="font-bold text-sm mb-4">サービスメニュー</p>
            {[
              { label: "課題", href: "#problem" },
              { label: "サービス", href: "#service" },
              { label: "料金", href: "#pricing" },
              { label: "代表について", href: "#founder" },
              { label: "よくあるご質問", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-400 text-sm mb-2 hover:text-[#C9A84C] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div>
            <p className="font-bold text-sm mb-4">お問い合わせ</p>
            {[
              { label: "お問い合わせ", href: "#contact" },
              { label: "プライバシーポリシー", href: "#" },
              { label: "特定商取引法に基づく表記", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-400 text-sm mb-2 hover:text-[#C9A84C] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-xs">
          © 2026 DXコンサルティングジャパン株式会社 All rights reserved.
        </div>
      </div>
    </footer>
  );
}
