"use client";

import { useEffect, useState } from "react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    units: "",
    message: "",
  });

  const hasInput = Object.values(formData).some((v) => v !== "");

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasInput) {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasInput]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/PLACEHOLDER", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <p className="text-[#1B3A6B] font-bold text-lg">
          お問い合わせありがとうございます。2営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B] bg-white";
  const labelClass = "block text-sm font-bold text-[#2D2D2D] mb-1";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className={labelClass}>
          会社名 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="company"
          required
          placeholder="例：○○管理株式会社"
          value={formData.company}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          担当者名 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="例：山田太郎"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="例：yamada@example.co.jp"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>電話番号（任意）</label>
        <input
          type="tel"
          name="phone"
          placeholder="例：03-1234-5678"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          管理戸数 <span className="text-red-500">*</span>
        </label>
        <select
          name="units"
          required
          value={formData.units}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">選択してください</option>
          <option value="〜500戸">〜500戸</option>
          <option value="500〜1,000戸">500〜1,000戸</option>
          <option value="1,000〜2,000戸">1,000〜2,000戸</option>
          <option value="2,000〜5,000戸">2,000〜5,000戸</option>
          <option value="5,000戸以上">5,000戸以上</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>ご相談内容（任意）</label>
        <textarea
          name="message"
          rows={4}
          placeholder="ご質問やご要望があればご記入ください"
          value={formData.message}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="min-h-[44px] w-full bg-[#1B3A6B] text-white font-bold py-4 rounded-lg text-base hover:brightness-90 transition-all duration-200"
      >
        資料を受け取る（無料・30秒）
      </button>
    </form>
  );
}
