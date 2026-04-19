import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are a cross-border legal and business advisory team specializing in Japan market entry, ASEAN regulatory compliance, and the intersection of technology and law.",
};

const values = [
  {
    title: "Business-first thinking",
    desc: "We measure success by your business outcomes, not by the weight of our legal opinions. Every recommendation we make connects directly to your commercial objectives.",
  },
  {
    title: "Real market experience",
    desc: "Our expertise is grounded in real project work across Japan and ASEAN — not theoretical frameworks. We have been through the problems you are facing.",
  },
  {
    title: "Direct communication",
    desc: "We tell you what you need to hear, not what you want to hear. Clear assessments of risk, realistic timelines, and straightforward advice.",
  },
  {
    title: "International fluency",
    desc: "We work seamlessly with global headquarters, regional teams, and local operators. We understand the dynamics of international businesses in Asian markets.",
  },
];

const expertise = [
  { area: "Japan Market Entry", detail: "Corporate setup, regulatory licensing, operational compliance" },
  { area: "ASEAN Regulatory Navigation", detail: "Indonesia, Singapore, Thailand, Vietnam" },
  { area: "AI & Technology Law", detail: "Governance frameworks, sector-specific rules, emerging regulation" },
  { area: "Data Protection", detail: "APPI, UU PDP, PDPA, multi-market programs" },
  { area: "Employment & Labor", detail: "Japan and Indonesia employment compliance, expat mobility" },
  { area: "Startup & VC", detail: "Investment structuring, cap table, ESOP, PMV licensing" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white px-6 py-28 md:py-40">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-6">About</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mb-8">
            We are a cross-border advisory team.<br />
            <span className="text-gray-400">Not a traditional law firm.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            We work with global technology companies and startups that need real legal and business expertise in Japan and ASEAN — delivered with the pace and directness that international business requires.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-4">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Making the complex navigable.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Japan and ASEAN are among the most commercially significant and legally complex markets in the world. Most international companies either underinvest in legal compliance — creating risk — or overspend on generic legal services that don&apos;t understand their business.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We exist to close that gap. We bring together legal expertise, market knowledge, and genuine understanding of how tech businesses and startups operate. The result is advice that is both rigorous and practical.
            </p>
          </div>
          <div className="bg-black text-white rounded-2xl p-10">
            <p className="text-5xl font-bold text-[#00FFB3] mb-2">6+</p>
            <p className="text-gray-400 text-sm mb-8">Practice areas across Japan and ASEAN</p>
            <p className="text-5xl font-bold text-[#00FFB3] mb-2">10+</p>
            <p className="text-gray-400 text-sm mb-8">Jurisdictions covered</p>
            <p className="text-5xl font-bold text-[#00FFB3] mb-2">100%</p>
            <p className="text-gray-400 text-sm">Focus on Japan and ASEAN cross-border work</p>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="bg-gray-50 px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-4">Why We&apos;re Different</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              We are not a generalist firm that covers Japan and ASEAN.<br />
              <span className="text-gray-400">We are specialists who cover nothing else.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8">
                <h3 className="text-base font-semibold text-black mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-4">Areas of Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Deep expertise across the legal dimensions that matter for tech companies in Asia.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((e) => (
              <div key={e.area} className="border border-gray-100 rounded-2xl p-8">
                <div className="w-8 h-0.5 bg-[#00FFB3] mb-6" />
                <h3 className="text-base font-semibold text-black mb-2">{e.area}</h3>
                <p className="text-gray-500 text-sm">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-black text-white px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              We work as your partner, not your vendor.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrated advisory",
                desc: "Legal, regulatory, and business considerations addressed together — not in separate silos.",
              },
              {
                title: "Proactive monitoring",
                desc: "We track regulatory changes in Japan and ASEAN and alert you when they affect your business, before you discover problems.",
              },
              {
                title: "Cross-border coordination",
                desc: "We coordinate across jurisdictions so you have a single point of contact for your Japan and ASEAN legal work.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gray-800 rounded-2xl p-8">
                <h3 className="text-base font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-gray-600 text-lg mb-10">
            Tell us about your situation and let&apos;s assess how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-black text-white font-semibold px-10 py-4 rounded-full hover:bg-gray-800 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
