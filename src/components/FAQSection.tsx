"use client";

import { useState } from "react";

const faqs = [
  {
    q: "情報セキュリティは大丈夫ですか？",
    a: "全データはSSL暗号化通信で送受信し、国内サーバーにのみ保存します。スタッフ全員がNDA（秘密保持契約）を締結しており、お客様との間でも個別にNDAを締結します。ISO27001取得に向けて現在申請準備中です。",
  },
  {
    q: "AIが作った書類の精度は信頼できますか？",
    a: "AI生成のドラフトは、必ず管理業務主任者資格保有スタッフが①法令整合・②定足数・議決権の正確性・③修繕積立金との整合性の3点を確認・修正します。最終納品物は人間がチェックした完成品です。修正依頼は無制限で対応しますので、AI精度への不安は不要です。",
  },
  {
    q: "今使っている管理システムはそのまま使えますか？",
    a: "はい。既存システムの変更は不要です。Google Drive・Dropbox等のクラウドストレージ経由でデータをやり取りするため、特別なシステム導入は必要ありません。",
  },
  {
    q: "管理戸数が少ない（500戸以下）ですが使えますか？",
    a: "スタータープランは500戸以下を想定した価格設計です。棟数・件数が少なくても十分にROIが出るよう設計しています。まず無料トライアルでお試しください。",
  },
  {
    q: "書類のフォーマットは自社のものを使えますか？",
    a: "はい。貴社の既存フォーマット（Wordテンプレート等）に完全対応します。初回契約時にフォーマットをご共有いただければ、以降は統一フォーマットで納品します。",
  },
  {
    q: "解約はいつでもできますか？",
    a: "1ヶ月前にご連絡いただければ、いつでも解約可能です。違約金は一切発生しません。",
  },
  {
    q: "担当者が替わっても引き継ぎは大丈夫ですか？",
    a: "はい。業務フロー・フォーマット・過去の全納品物はすべて当社システムで管理しています。貴社側の担当者が替わっても、当社への説明・引き継ぎは一切不要です。",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#F5F6F8] py-24 md:py-32 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-bold text-3xl md:text-4xl text-[#1B3A6B] mb-4 text-center"
          data-aos="fade-up"
        >
          よくあるご質問
        </h2>
        <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-12" data-aos="fade-up" />

        <div className="flex flex-col" data-aos="fade-up">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full min-h-[44px] flex justify-between items-center text-left gap-4 px-4 py-5 hover:bg-[#F5F6F8] rounded-lg transition"
              >
                <span className="font-semibold text-[#2D2D2D] text-base md:text-lg leading-relaxed">
                  {faq.q}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 text-[#C9A84C] flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  {openIndex === i ? "−" : "+"}
                </div>
              </button>
              {openIndex === i && (
                <div className="bg-[#F5F6F8] rounded-xl p-6 mt-0 mb-4 mx-2">
                  <p className="text-[#2D2D2D] text-base leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
