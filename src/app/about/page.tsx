import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are a cross-border business and regulatory advisory team specializing in Japan market entry, ASEAN regulatory navigation, and the intersection of technology and commercial expansion.",
};

const values = [
  {
    title: "Business-first orientation",
    desc: "We measure success by your commercial outcomes. Every recommendation connects directly to your expansion objectives — not to the complexity of the advice itself.",
  },
  {
    title: "Real market experience",
    desc: "Our depth comes from substantive project work across Japan and ASEAN — not academic frameworks. We have navigated the same situations your team is facing.",
  },
  {
    title: "Direct communication",
    desc: "We give you clear assessments of risk, realistic timelines, and unambiguous guidance — without the hedging that makes advisory hard to act on.",
  },
  {
    title: "International fluency",
    desc: "We work fluidly with global headquarters, regional management, and local operators. We understand how international organizations think and what they need to move.",
  },
];

const expertise = [
  { area: "Japan Market Entry", detail: "Entity setup, regulatory authorization, operational structure" },
  { area: "ASEAN Regulatory Navigation", detail: "Indonesia, Singapore, Thailand, Vietnam" },
  { area: "AI & Technology Compliance", detail: "Governance frameworks, sector rules, emerging regulation" },
  { area: "Data Protection", detail: "APPI, UU PDP, PDPA, multi-market programs" },
  { area: "Workforce & Employment", detail: "Japan and Indonesia workforce compliance, expatriate mobility" },
  { area: "Startup & VC Structuring", detail: "Investment architecture, cap table, ESOP, PMV authorization" },
];

const stats = [
  { num: "6+", label: "Advisory practice areas across Japan and ASEAN" },
  { num: "10+", label: "Jurisdictions covered" },
  { num: "100%", label: "Focus on Japan and ASEAN cross-border work" },
];

const approach = [
  {
    title: "Integrated perspective",
    desc: "Structural, regulatory, and operational dimensions are addressed together — not in separate workstreams that leave coordination gaps for your team to fill.",
  },
  {
    title: "Proactive monitoring",
    desc: "We track regulatory change in Japan and ASEAN and surface developments that affect your business before they create problems — not after.",
  },
  {
    title: "Cross-border coordination",
    desc: "We operate across jurisdictions, giving you a single advisory relationship for Japan and ASEAN rather than managing multiple local teams.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-24 border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <AnimateIn className="md:col-span-8">
            <p className="label-overline mb-5">About Our Team</p>
            <h1 className="display mb-7">
              A cross-border<br />
              advisory team.<br />
              <span className="font-semibold text-[#1e3557]">Built differently.</span>
            </h1>
            <p className="body-lg max-w-xl leading-relaxed">
              We work with international technology organizations and ASEAN-based ventures that need substantive advisory expertise in Japan and Southeast Asia — delivered with the pace and directness that expansion requires.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white px-6 md:px-10 section-pad border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <AnimateIn delay={0}>
            <p className="label-overline mb-5">Our Purpose</p>
            <h2 className="headline-lg mb-6">Making the complex navigable.</h2>
            <p className="body leading-relaxed mb-5">
              Japan and ASEAN are among the most commercially significant and structurally complex markets in the world. Most international organizations either underinvest in compliance — creating compounding risk — or overspend on generalist advisory that does not understand how technology businesses operate.
            </p>
            <p className="body leading-relaxed">
              We close that gap by combining deep regional expertise with genuine understanding of how product organizations, startups, and scale-ups think and move. The result is guidance that is both structurally sound and commercially actionable.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.12}>
            <div className="border border-[#e0ddd8] divide-y divide-[#e0ddd8]">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="p-8 md:p-10 hover:bg-[#f8f7f5] hover:translate-x-1 transition-all duration-200"
                >
                  <p className="text-[2.25rem] font-light text-[#1e3557] tracking-tight mb-1">{item.num}</p>
                  <p className="caption">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why different */}
      <section className="bg-[#f8f7f5] px-6 md:px-10 section-pad border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="max-w-2xl mb-14">
            <p className="label-overline mb-5">What Makes Us Different</p>
            <h2 className="headline-lg">
              We are not a generalist team that covers Japan and ASEAN among many other things.
              <span className="text-[#9a9895]"> We cover nothing else.</span>
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-px bg-[#e0ddd8]">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={0.07 * i}>
                <div className="bg-[#f8f7f5] p-8 md:p-10 h-full">
                  <div className="w-5 h-px bg-[#1e3557] mb-6" />
                  <h3 className="text-[0.9375rem] font-semibold text-[#1a1918] mb-3">{v.title}</h3>
                  <p className="body text-[0.875rem] leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise grid */}
      <section className="bg-white px-6 md:px-10 section-pad border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="max-w-xl mb-14">
            <p className="label-overline mb-5">Practice Depth</p>
            <h2 className="headline-lg">
              Expertise across every dimension that matters for technology organizations in Asia.
            </h2>
          </AnimateIn>

          <div className="divider mb-0" />
          <div className="grid md:grid-cols-3">
            {expertise.map((e, i) => (
              <AnimateIn
                key={e.area}
                delay={0.06 * i}
                className={`py-8 border-b border-[#e0ddd8] ${
                  i % 3 !== 2 ? "md:border-r md:pr-8" : ""
                } ${i % 3 !== 0 ? "md:pl-8" : ""}`}
              >
                <p className="text-[0.9rem] font-semibold text-[#1a1918] mb-2">{e.area}</p>
                <p className="caption">{e.detail}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#1a1918] text-white px-6 md:px-10 section-pad">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="max-w-xl mb-14">
            <p className="label-overline text-[#4a4744] mb-5">How We Engage</p>
            <h2 className="headline-lg text-white">
              We work as your partner in market, not a vendor at arm&apos;s length.
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-px bg-[#2a2928]">
            {approach.map((item, i) => (
              <AnimateIn key={item.title} delay={0.09 * i}>
                <div className="bg-[#1a1918] p-8 md:p-10 h-full">
                  <div className="w-5 h-px bg-[#2a2928] mb-6" />
                  <h3 className="text-[0.9375rem] font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-[#6a6764] text-[0.875rem] leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <AnimateIn>
            <h2 className="headline-lg leading-snug">Ready to work together?</h2>
          </AnimateIn>
          <AnimateIn delay={0.1} className="md:flex md:justify-end">
            <div>
              <p className="body mb-6 leading-relaxed">
                Tell us about your situation and we will give you a direct assessment of how we can help.
              </p>
              <Link href="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
