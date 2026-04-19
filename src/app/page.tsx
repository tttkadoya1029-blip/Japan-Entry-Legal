import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Japan Entry Legal | Cross-Border Legal & Business Advisory",
  description:
    "Strategic legal and business advisory for global tech companies entering Japan and navigating ASEAN regulations.",
};

const services = [
  {
    title: "Japan Market Entry & Company Setup",
    desc: "From entity selection to operational launch — we guide you through every legal step of entering Japan.",
    href: "/services#market-entry",
  },
  {
    title: "Employment & Labor Compliance",
    desc: "Japan and ASEAN employment law is complex and employee-protective. We help you hire, manage, and exit compliantly.",
    href: "/services#employment",
  },
  {
    title: "Data Protection & Privacy",
    desc: "APPI, PDPA, UU PDP, PDPA — we handle your data compliance across Japan and every major ASEAN market.",
    href: "/services#data",
  },
  {
    title: "AI & Technology Regulation",
    desc: "Operating AI products in Asia requires navigating sector-specific rules that are evolving fast. We track it for you.",
    href: "/services#ai",
  },
  {
    title: "Startup & Venture Capital",
    desc: "From fundraising structures to ESOP plans and investor rights, we understand how venture deals work in Asia.",
    href: "/services#vc",
  },
  {
    title: "Cross-Border Disputes & Exit",
    desc: "When relationships break down, you need advisors who understand both the legal framework and commercial reality.",
    href: "/services#disputes",
  },
];

const painPoints = [
  {
    problem: "Contracts that don't hold up",
    solution: "Japanese courts interpret contracts under Japanese law. We draft agreements that are enforceable, not just familiar.",
  },
  {
    problem: "Employment relationships you can't exit",
    solution: "Japan's termination protections are statutory and enforced. We build employment frameworks that give you flexibility.",
  },
  {
    problem: "Data compliance across multiple markets",
    solution: "APPI, UU PDP, PDPA — each market has different rules. We build programs that work across all of them efficiently.",
  },
  {
    problem: "Regulatory approvals that stall your launch",
    solution: "We know which approvals you need, who to engage, and how to move quickly without creating downstream risk.",
  },
];

const steps = [
  { num: "01", title: "Initial Assessment", desc: "We map your business model against Japan and ASEAN regulatory requirements and identify the critical path." },
  { num: "02", title: "Structure Design", desc: "We design the optimal legal structure — corporate, employment, data, IP — for your specific situation." },
  { num: "03", title: "Execution", desc: "We drive the legal execution: company formation, contract drafting, regulatory filings, licensing applications." },
  { num: "04", title: "Ongoing Support", desc: "We stay engaged as your operations grow — monitoring regulatory changes, handling disputes, and advising on expansion." },
];

const clients = [
  { name: "Exasoft Global", logo: "/exasoft-logo.svg", href: "https://exasoftglobal.com/" },
  { name: "Zentact Systems", logo: null, href: "https://zentactsystems.com/" },
];

const featured = posts.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white px-6 py-32 md:py-44">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            Cross-Border Legal & Business Advisory
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8 max-w-4xl">
            Expanding into Japan<br />
            <span className="text-[#00FFB3]">is complex.</span><br />
            We make it work.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            We are a strategic, cross-border advisory team that partners with global tech companies, ASEAN startups, and international businesses navigating Japan and Southeast Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#00FFB3] text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-gray-700 text-white font-semibold px-8 py-4 rounded-full hover:border-gray-400 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-y border-gray-100 px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center mb-10">
            Trusted by international companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {clients.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity"
              >
                {c.logo ? (
                  <Image src={c.logo} alt={c.name} width={56} height={56} className="rounded-full" />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                    <span className="text-white font-bold text-base">ZS</span>
                  </div>
                )}
                <span className="text-xs font-medium text-gray-600 group-hover:text-black transition-colors">{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Japan is Hard */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-4">The Reality</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Japan is the world&apos;s third-largest economy.<br />
              <span className="text-gray-400">It&apos;s also one of the hardest markets to enter.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Most foreign companies underestimate the gap between their home market experience and Japan&apos;s legal, cultural, and regulatory reality. The result is delays, costly restructuring, and relationships that start badly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-gray-100">
            {painPoints.map((p) => (
              <div key={p.problem} className="bg-white p-8 md:p-10">
                <p className="text-sm font-semibold text-red-500 mb-3">⟶ {p.problem}</p>
                <p className="text-gray-700 leading-relaxed">{p.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-black text-white px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-4">What We Do</p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Strategic legal support<br />across every dimension.
              </h2>
            </div>
            <Link href="/services" className="shrink-0 text-sm font-semibold text-gray-400 hover:text-white transition-colors underline underline-offset-4">
              All Services →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-gray-800">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="bg-black p-8 group hover:bg-gray-900 transition-colors">
                <h3 className="text-base font-semibold text-white mb-3 group-hover:text-[#00FFB3] transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ASEAN Expertise */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-4">ASEAN Expertise</p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Deep expertise where<br />it matters most.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our team brings specialized knowledge of ASEAN regulatory environments — particularly Indonesia, where AI governance, data protection (UU PDP), labor law, and venture capital regulation are evolving rapidly.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                For ASEAN companies entering Japan, and Japanese companies expanding into Southeast Asia, we bridge the gap between two complex regulatory worlds.
              </p>
              <Link href="/industries" className="inline-flex items-center text-sm font-semibold text-black hover:text-gray-600 transition-colors">
                Our Industry Focus →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Indonesia PDP Law", sub: "Data protection compliance" },
                { label: "ASEAN AI Governance", sub: "Regulatory compliance" },
                { label: "Indonesia Labor Law", sub: "Employment compliance" },
                { label: "VC & Startup Law", sub: "Funding structures" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-sm font-semibold text-black mb-1">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-4">How We Work</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              A structured approach<br />to market entry.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative">
                <p className="text-5xl font-bold text-gray-100 mb-4">{s.num}</p>
                <h3 className="text-base font-semibold text-black mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-4">Insights</p>
              <h2 className="text-3xl md:text-4xl font-bold">Latest from our team.</h2>
            </div>
            <Link href="/insights" className="shrink-0 text-sm font-semibold text-gray-400 hover:text-black transition-colors underline underline-offset-4">
              All Articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00FFB3] bg-black px-3 py-1 rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-base font-semibold text-black leading-snug mb-3 group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">{post.description}</p>
                <p className="text-xs text-gray-400">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-6">Ready to Start?</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Let&apos;s build your<br />path into Japan.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12">
            Whether you&apos;re planning your entry or already facing legal challenges in Japan or ASEAN, we&apos;re ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#00FFB3] text-black font-semibold px-10 py-5 rounded-full text-base hover:bg-white transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
