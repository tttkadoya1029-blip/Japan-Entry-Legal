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
    desc: "From entity selection to operational launch — every legal step of entering Japan, handled.",
    href: "/services#market-entry",
  },
  {
    title: "Employment & Labor Compliance",
    desc: "Japan and ASEAN employment law is complex and employee-protective. We help you hire and manage compliantly.",
    href: "/services#employment",
  },
  {
    title: "Data Protection & Privacy",
    desc: "APPI, UU PDP, PDPA — multi-market data compliance programs designed for how your business actually works.",
    href: "/services#data",
  },
  {
    title: "AI & Technology Regulation",
    desc: "Sector-specific AI rules across ASEAN are advancing quickly. We keep you ahead of binding requirements.",
    href: "/services#ai",
  },
  {
    title: "Startup & Venture Capital",
    desc: "From investment structuring to ESOP design — we understand how venture deals work in Asia.",
    href: "/services#vc",
  },
  {
    title: "Cross-Border Disputes & Exit",
    desc: "When commercial relationships break down across borders, resolution requires advisors who know both sides.",
    href: "/services#disputes",
  },
];

const painPoints = [
  {
    problem: "Contracts that do not hold up",
    solution:
      "Japanese courts enforce contracts under Japanese law. Agreements drafted elsewhere frequently fail in ways that only become visible during a dispute.",
  },
  {
    problem: "Employment relationships you cannot easily exit",
    solution:
      "Japan's statutory termination protections are robust and court-enforced. Employment frameworks must be designed with exit in mind from the outset.",
  },
  {
    problem: "Data compliance across multiple markets",
    solution:
      "APPI, UU PDP, PDPA — each framework has specific requirements. A single compliance program cannot satisfy all of them without market-by-market adaptation.",
  },
  {
    problem: "Regulatory approvals that stall your launch",
    solution:
      "Japan's licensing and approval landscape is dense. We identify what you need, who to engage, and how to move without creating downstream risk.",
  },
];

const steps = [
  {
    num: "01",
    title: "Initial Assessment",
    desc: "We map your business model against Japan and ASEAN requirements and identify the legal critical path.",
  },
  {
    num: "02",
    title: "Structure Design",
    desc: "We design the optimal legal architecture — corporate, employment, data, IP — for your specific situation.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "We drive the legal execution: entity formation, contract drafting, regulatory filings, licensing.",
  },
  {
    num: "04",
    title: "Ongoing Advisory",
    desc: "We monitor regulatory change, handle disputes, and advise as your operations grow.",
  },
];

const clients = [
  { name: "Exasoft Global", logo: "/exasoft-logo.svg", href: "https://exasoftglobal.com/" },
  { name: "Zentact Systems", logo: null, href: "https://zentactsystems.com/" },
];

const aseanAreas = [
  { label: "Indonesia PDP Law", sub: "Data protection compliance" },
  { label: "ASEAN AI Governance", sub: "Regulatory frameworks" },
  { label: "Indonesia Labor Law", sub: "Employment compliance" },
  { label: "VC & Startup Law", sub: "Investment structures" },
];

const featured = posts.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-28 border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="label-overline mb-6">Cross-Border Legal &amp; Business Advisory</p>
            <h1 className="text-4xl md:text-[3.5rem] lg:text-[4.25rem] font-light leading-[1.08] tracking-[-0.02em] text-[#1a1918] mb-8">
              Expanding into Japan<br />
              is complex.<br />
              <span className="font-semibold">We make it work.</span>
            </h1>
            <p className="text-[#4a4744] text-base md:text-lg leading-relaxed max-w-xl mb-10">
              A strategic, cross-border advisory team partnering with global technology companies, ASEAN startups, and international businesses navigating Japan and Southeast Asia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:col-span-4 justify-end pb-2">
            <div className="space-y-1 text-right">
              <p className="text-[0.75rem] text-[#b8b4af] tracking-widest uppercase">Coverage</p>
              {["Japan", "Indonesia", "Singapore", "Thailand", "Vietnam"].map((c) => (
                <p key={c} className="text-[0.8125rem] text-[#9a9895]">{c}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted By ───────────────────────────────────────────── */}
      <section className="bg-[#f8f7f5] px-6 md:px-10 py-10 border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-8 sm:gap-14">
          <p className="label-overline shrink-0">Clients include</p>
          <div className="flex flex-wrap items-center gap-10 sm:gap-16">
            {clients.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group opacity-50 hover:opacity-90 transition-opacity duration-200"
              >
                {c.logo ? (
                  <Image src={c.logo} alt={c.name} width={28} height={28} className="rounded-full" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-[#1a1918] flex items-center justify-center">
                    <span className="text-white text-[0.55rem] font-semibold tracking-tight">ZS</span>
                  </div>
                )}
                <span className="text-[0.8125rem] text-[#4a4744] font-medium group-hover:text-[#1a1918] transition-colors">
                  {c.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Japan Is Hard ────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 section-pad">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-5">
              <p className="label-overline mb-5">The Challenge</p>
              <h2 className="text-2xl md:text-[2rem] font-light leading-snug text-[#1a1918] tracking-tight">
                Japan is the world&apos;s third-largest economy.<br />
                It is also one of the hardest markets for foreign companies to enter correctly.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-[#4a4744] text-[0.9375rem] leading-relaxed">
                Most international companies underestimate the gap between their home market experience and Japan&apos;s legal, cultural, and regulatory environment. The result is delays, costly restructuring, and commercial relationships that begin poorly.
              </p>
            </div>
          </div>

          <div className="divider mb-0" />
          <div className="grid md:grid-cols-2">
            {painPoints.map((p, i) => (
              <div
                key={p.problem}
                className={`py-8 px-0 md:px-10 border-b border-[#e0ddd8] ${
                  i % 2 === 0 ? "md:border-r md:pl-0 md:pr-10" : "md:pl-10 md:pr-0"
                }`}
              >
                <p className="text-[0.8125rem] font-medium text-[#1e3557] mb-3">{p.problem}</p>
                <p className="text-[#4a4744] text-[0.9rem] leading-relaxed">{p.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Overview ─────────────────────────────────────── */}
      <section className="bg-[#f8f7f5] px-6 md:px-10 section-pad border-t border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="label-overline mb-4">Practice Areas</p>
              <h2 className="text-2xl md:text-[2rem] font-light tracking-tight text-[#1a1918] leading-snug">
                Comprehensive legal support<br />across every dimension of your entry.
              </h2>
            </div>
            <Link href="/services" className="btn-text shrink-0">
              All Services →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#e0ddd8]">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-[#f8f7f5] hover:bg-white p-8 group transition-colors duration-150"
              >
                <div className="w-5 h-px bg-[#e0ddd8] group-hover:bg-[#1e3557] mb-6 transition-colors duration-150" />
                <h3 className="text-[0.9rem] font-medium text-[#1a1918] mb-3 leading-snug">{s.title}</h3>
                <p className="text-[#9a9895] text-[0.8125rem] leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASEAN Expertise ──────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 section-pad">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label-overline mb-5">ASEAN Expertise</p>
            <h2 className="text-2xl md:text-[2rem] font-light tracking-tight text-[#1a1918] leading-snug mb-6">
              Deep expertise in the regulatory environments that matter most.
            </h2>
            <p className="text-[#4a4744] text-[0.9375rem] leading-relaxed mb-4">
              We bring specialized knowledge of ASEAN regulatory environments — particularly Indonesia, where AI governance, data protection law, labor regulation, and venture capital frameworks are evolving rapidly.
            </p>
            <p className="text-[#4a4744] text-[0.9375rem] leading-relaxed mb-8">
              For ASEAN companies entering Japan, and for international businesses expanding into Southeast Asia, we bridge the gap between two complex regulatory worlds.
            </p>
            <Link href="/industries" className="btn-text">
              Our Industry Focus →
            </Link>
          </div>

          <div>
            <div className="divider mb-0" />
            {aseanAreas.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-5 border-b border-[#e0ddd8]">
                <div>
                  <p className="text-[0.875rem] font-medium text-[#1a1918]">{item.label}</p>
                  <p className="text-[0.8rem] text-[#9a9895] mt-0.5">{item.sub}</p>
                </div>
                <span className="text-[#b8b4af] text-lg ml-4">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section className="bg-[#f2f1ee] px-6 md:px-10 section-pad border-t border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="label-overline mb-5">How We Work</p>
            <h2 className="text-2xl md:text-[2rem] font-light tracking-tight text-[#1a1918] leading-snug">
              A structured approach to market entry — from assessment to ongoing advisory.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0 border border-[#e0ddd8] divide-x divide-[#e0ddd8] bg-white">
            {steps.map((s) => (
              <div key={s.num} className="p-8">
                <p className="text-[0.675rem] font-medium tracking-[0.18em] uppercase text-[#b8b4af] mb-5">{s.num}</p>
                <h3 className="text-[0.875rem] font-semibold text-[#1a1918] mb-3">{s.title}</h3>
                <p className="text-[#9a9895] text-[0.8125rem] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Insights ─────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 section-pad border-t border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="label-overline mb-4">Insights</p>
              <h2 className="text-2xl md:text-[2rem] font-light tracking-tight text-[#1a1918]">
                Analysis and guidance from our advisory team.
              </h2>
            </div>
            <Link href="/insights" className="btn-text shrink-0">
              All Articles →
            </Link>
          </div>

          <div className="divider mb-0" />
          <div className="grid md:grid-cols-3 divide-x divide-[#e0ddd8]">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group py-8 px-0 md:first:pl-0 md:px-8 first:px-0 hover:bg-[#f8f7f5] transition-colors duration-150"
              >
                <span className="tag mb-4 block">{post.category}</span>
                <h3 className="text-[0.9rem] font-medium text-[#1a1918] leading-snug mb-3 group-hover:text-[#1e3557] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#9a9895] text-[0.8125rem] leading-relaxed mb-5 line-clamp-3">
                  {post.description}
                </p>
                <p className="text-[0.75rem] text-[#b8b4af]">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="bg-[#1a1918] text-white px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="label-overline text-[#9a9895] mb-5">Ready to Start?</p>
            <h2 className="text-2xl md:text-[2.5rem] font-light leading-snug tracking-tight text-white">
              Let us help you build<br />
              <span className="font-semibold">a compliant path into Japan.</span>
            </h2>
          </div>
          <div className="md:flex md:justify-end">
            <div className="space-y-3 max-w-sm">
              <p className="text-[#9a9895] text-[0.9rem] leading-relaxed">
                Whether you are planning your entry or already facing legal challenges in Japan or ASEAN, we are ready to advise.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/contact" className="bg-white text-[#1a1918] font-medium text-[0.8125rem] tracking-wide px-6 py-3 hover:bg-[#f2f1ee] transition-colors">
                  Schedule a Consultation
                </Link>
                <Link href="/services" className="border border-[#4a4744] text-[#9a9895] font-medium text-[0.8125rem] tracking-wide px-6 py-3 hover:border-white hover:text-white transition-colors">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
