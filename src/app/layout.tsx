import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mansion-bpo-lp.vercel.app"),
  title: "マンション管理会社の議事録・総会書類をAIで代行｜DXコンサルティングジャパン",
  description:
    "フロント担当者の書類業務を月38時間削減。理事会議事録・総会書類・月次報告書の作成から理事会メンバーとの確認調整まで一気通貫で代行。管理業務主任者が全件品質チェック。まず資料を無料でお受け取りください。",
  openGraph: {
    title: "マンション管理会社の議事録・総会書類をAIで代行｜DXコンサルティングジャパン",
    description:
      "フロント担当者の書類業務を月38時間削減。理事会議事録・総会書類・月次報告書の作成から理事会メンバーとの確認調整まで一気通貫で代行。管理業務主任者が全件品質チェック。まず資料を無料でお受け取りください。",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
