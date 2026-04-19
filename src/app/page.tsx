import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Image src="/hp-logo.png" alt="Company Logo" width={160} height={40} priority className="object-contain" />
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-black transition-colors">サービス</a>
            <a href="#clients" className="hover:text-black transition-colors">クライアント</a>
            <a href="#contact" className="hover:text-black transition-colors">お問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-24 md:py-36 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#00FFB3] text-sm font-medium uppercase tracking-widest mb-4">Japan Entry Legal</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            日本市場への<br />
            <span className="text-[#00FFB3]">法務サポート</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10">
            外資系企業の日本進出を、法務・コンプライアンスの側面から包括的に支援します。
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#00FFB3] text-black font-semibold px-8 py-3 rounded-full hover:bg-white transition-colors"
          >
            無料相談を予約する
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">サービス内容</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "会社設立サポート",
                desc: "日本での法人設立に必要な手続きを一貫してサポートします。",
              },
              {
                title: "契約書レビュー",
                desc: "日本語・英語の契約書を精査し、法的リスクを最小化します。",
              },
              {
                title: "コンプライアンス対応",
                desc: "日本の法規制への対応策を立案・実施します。",
              },
            ].map((s) => (
              <div key={s.title} className="border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">クライアント実績</h2>
          <p className="text-gray-500 mb-14">信頼いただいている企業様をご紹介します</p>
          <div className="flex flex-wrap items-center justify-center gap-16">
            {/* Exasoft Global */}
            <a
              href="https://exasoftglobal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                <Image
                  src="/exasoft-logo.svg"
                  alt="Exasoft Global"
                  width={80}
                  height={80}
                />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors">
                Exasoft Global
              </span>
            </a>

            {/* Zentact Systems */}
            <a
              href="https://zentactsystems.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-xl tracking-tight">ZS</span>
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors">
                Zentact Systems
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-gray-500 mb-8">
            日本進出に関するご相談は、お気軽にご連絡ください。
          </p>
          <a
            href="mailto:tttkadoya1029@gmail.com"
            className="inline-block bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            メールで問い合わせる
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <Image src="/hp-logo.png" alt="Company Logo" width={120} height={30} className="object-contain" />
          <p>© {new Date().getFullYear()} Japan Entry Legal. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
