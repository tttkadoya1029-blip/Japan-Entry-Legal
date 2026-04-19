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
    desc: "We measure success by your business outcomes, not by the weight of our legal opinions. Every recommendation connects directly to your commercial objectives.",
  },
  {
    title: "Real market experience",
    desc: "Our expertise is grounded in substantive project work across Japan and ASEAN — not theoretical frameworks. We have worked through the problems you are facing.",
  },
  {
    title: "Direct communication",
    desc: "We tell you what you need to hear. Clear assessments of risk, realistic timelines, and straightforward advice — without caveats that obscure the answer.",
  },
  {
    title: "International fluency",
    desc: "We work with global headquarters, regional teams, and local operators. We understand the dynamics of international businesses operating in Asian markets.",
  },
];

const expertise = [
  { area: "Japan Market Entry", detail: "Corporate setup, regulatory licensing, operational compliance" },
  { area: "ASEAN Regulatory Navigation", detail: "Indonesia, Singapore, Thailand, Vietnam" },
  { area: "AI & Technology Law", detail: "Governance frameworks, sector-specific rules, emerging regulation" },
  { area: "Data Protection", detail: "APPI, UU PDP, PDPA, multi-market compliance programs" },
  { area: "Employment & Labor", detail: "Japan and Indonesia employment compliance, expat mobility" },
  { area: "Startup & VC", detail: "Investment structuring, cap table, ESOP, PMV licensing" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <p className="label-overline mb-5">About</p>
            <h1 className="text-3xl md:text-[2.75rem] font-light leading-snug tracking-tight text-[#1a1918] mb-6">
              A cross-border advisory team.<br />
              <span className="font-semibold">Not a traditional law firm.</span>
            </h1>
            <p className="text-[#4a4744] text-[0.9375rem] leading-relaxed max-w-xl">
              We work with global technology companies and startups that need substantive legal and business expertise in Japan and ASEAN — delivered with the pace and directness that international business requires.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white px-6 md:px-10 section-pad border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label-overline mb-5">Our Mission</p>
            <h2 className="text-2xl md:text-[2rem] font-light tracking-tight text-[#1a1918] leading-snug mb-6">
              Making the complex navigable.
            </h2>
            <p className="text-[#4a4744] text-[0.9375rem] leading-relaxed mb-5">
              Japan and ASEAN are among the most commercially significant and legally complex markets in the world. Most international companies either underinvest in legal compliance — creating serious risk — or overspend on generic legal services that do not understand their business model.
            </p>
            <p className="text-[#4a4744] text-[0.9375rem] leading-relaxed">
              We exist to close that gap. We combine legal expertise, genuine market knowledge, and a deep understanding of how technology businesses and startups operate. The result is advice that is both legally rigorous and commercially practical.
            </p>
          </div>

          <div className="border border-[#e0ddd8]">
            {[
              { num: "6+", label: "Practice areas across Japan and ASEAN" },
              { num: "10+", label: "Jurisdictions covered" },
              { num: "100%", label: "Focus on Japan and ASEAN cross-border work" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`p-8 md:p-10 ${i < 2 ? "border-b border-[#e0ddd8]" : ""}`}
              >
                <p className="text-[2rem] font-light text-[#1e3557] tracking-tight mb-1">{item.num}</p>
                <p className="text-[0.875rem] text-[#9a9895]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why different */}
      <section className="bg-[#f8f7f5] px-6 md:px-10 section-pad border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="label-overline mb-5">Why We Are Different</p>
            <h2 className="text-2xl md:text-[2rem] font-light tracking-tight text-[#1a1918] leading-snug">
              We are not a generalist firm that covers Japan and ASEAN among many other things.<br />
              We cover nothing else.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[#e0ddd8]">
            {values.map((v) => (
              <div key={v.title} className="bg-[#f8f7f5] p-8 md:p-10">
                <div className="w-5 h-px bg-[#1e3557] mb-6" />
                <h3 className="text-[0.9375rem] font-semibold text-[#1a1918] mb-3">{v.title}</h3>
                <p className="text-[#4a4744] text-[0.875rem] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-white px-6 md:px-10 section-pad border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="label-overline mb-5">Areas of Expertise</p>
            <h2 className="text-2xl md:text-[2rem] font-light tracking-tight text-[#1a1918] leading-snug">
              Deep expertise across the legal dimensions that matter for technology companies in Asia.
            </h2>
          </div>
          <div className="divider mb-0" />
          <div className="grid md:grid-cols-3">
            {expertise.map((e, i) => (
              <div
                key={e.area}
                className={`py-8 px-0 md:px-8 border-b border-[#e0ddd8] ${
                  i % 3 !== 2 ? "md:border-r" : ""
                } ${i % 3 === 0 ? "md:pl-0" : ""} ${i % 3 === 2 ? "md:pr-0" : ""}`}
              >
                <p className="text-[0.875rem] font-semibold text-[#1a1918] mb-2">{e.area}</p>
                <p className="text-[0.8125rem] text-[#9a9895]">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#f8f7f5] px-6 md:px-10 section-pad border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="label-overline mb-5">Our Approach</p>
            <h2 className="text-2xl md:text-[2rem] font-light tracking-tight text-[#1a1918] leading-snug">
              We work as your partner, not your vendor.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrated advisory",
                desc: "Legal, regulatory, and business considerations are addressed together — not in separate silos that leave coordination gaps.",
              },
              {
                title: "Proactive monitoring",
                desc: "We track regulatory change in Japan and ASEAN and notify you when developments affect your business before they create problems.",
              },
              {
                title: "Cross-border coordination",
                desc: "We coordinate across jurisdictions, giving you a single point of contact for your Japan and ASEAN legal work.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-[#e0ddd8] p-8">
                <h3 className="text-[0.9rem] font-semibold text-[#1a1918] mb-3">{item.title}</h3>
                <p className="text-[#4a4744] text-[0.875rem] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#1a1918] leading-snug">
            Ready to work together?
          </h2>
          <div className="md:flex md:justify-end">
            <div>
              <p className="text-[#4a4744] text-[0.9rem] mb-6 leading-relaxed">
                Tell us about your situation and we will assess how we can help.
              </p>
              <Link href="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
