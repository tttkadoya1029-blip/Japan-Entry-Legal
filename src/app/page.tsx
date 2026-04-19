"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateIn, StaggerIn, staggerChild } from "@/components/AnimateIn";
import { JapanMark } from "@/components/JapanMark";
import { posts } from "@/lib/posts";

const services = [
  {
    title: "Japan Market Entry",
    desc: "From entity selection to operational launch — every structural decision your expansion requires.",
    href: "/services#market-entry",
    num: "01",
  },
  {
    title: "Employment & Labor",
    desc: "Japan and ASEAN workforce frameworks are complex and protective. We help you build teams compliantly.",
    href: "/services#employment",
    num: "02",
  },
  {
    title: "Data & Privacy Compliance",
    desc: "APPI, UU PDP, PDPA — multi-jurisdiction compliance designed around how your product actually operates.",
    href: "/services#data",
    num: "03",
  },
  {
    title: "AI & Technology",
    desc: "Sector-specific AI requirements across ASEAN are advancing quickly. We keep you ahead of binding mandates.",
    href: "/services#ai",
    num: "04",
  },
  {
    title: "Startup & Venture Capital",
    desc: "From investment structuring to ESOP design — we understand how venture ecosystems work in Asia.",
    href: "/services#vc",
    num: "05",
  },
  {
    title: "Disputes & Exit",
    desc: "When cross-border relationships fracture, resolution requires advisors fluent in both sides.",
    href: "/services#disputes",
    num: "06",
  },
];

const challenges = [
  {
    label: "Structural complexity",
    text: "The right entity, governance, and intercompany architecture must be designed upfront — retrofitting after launch is expensive.",
  },
  {
    label: "Employment exposure",
    text: "Japan's workforce protections are statutory and court-enforced. Organizations that hire without a compliant framework face significant exit costs.",
  },
  {
    label: "Data across borders",
    text: "APPI, UU PDP, and PDPA each impose jurisdiction-specific requirements that a single global policy cannot satisfy.",
  },
  {
    label: "Regulatory timing",
    text: "Japan's licensing and approval landscape requires mapping before you begin — delays discovered mid-launch are costly and avoidable.",
  },
];

const steps = [
  { num: "01", title: "Assessment", desc: "We map your business model against Japan and ASEAN requirements and define the critical path." },
  { num: "02", title: "Architecture", desc: "We design the optimal structural framework — entity, employment, data, IP — for your specific situation." },
  { num: "03", title: "Execution", desc: "We drive formation, contract drafting, regulatory filings, and licensing from start to completion." },
  { num: "04", title: "Continuity", desc: "We monitor regulatory change, support your team's decisions, and advise as your footprint expands." },
];

const aseanAreas = [
  { label: "Indonesia PDP Law", sub: "Data protection compliance" },
  { label: "ASEAN AI Governance", sub: "Regulatory frameworks" },
  { label: "Indonesia Labor Law", sub: "Workforce compliance" },
  { label: "VC & Startup Structuring", sub: "Investment architecture" },
];

const clients = [
  { name: "Exasoft Global", logo: "/exasoft-logo.svg", href: "https://exasoftglobal.com/" },
  { name: "Zentact Systems", logo: null, href: "https://zentactsystems.com/" },
];

const featured = posts.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden border-b border-[#e0ddd8] px-6 md:px-10 pt-24 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-0 items-center">

          {/* Text column */}
          <div className="md:col-span-7 relative z-10">
            <motion.p
              className="label-overline mb-7"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Cross-Border Advisory &amp; Strategic Guidance
            </motion.p>

            <div className="overflow-hidden mb-2">
              <motion.h1
                className="display"
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                Entering Japan<br />
                takes more than<br />
                <em className="not-italic font-semibold text-[#1e3557]">a local office.</em>
              </motion.h1>
            </div>

            <motion.p
              className="body-lg max-w-lg mt-7 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            >
              We are a cross-border advisory and project coordination team partnering with international technology organizations, ASEAN-based ventures, and global businesses navigating Japan and Southeast Asia.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62 }}
            >
              <Link href="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </motion.div>

            {/* Coverage pills */}
            <motion.div
              className="flex flex-wrap gap-2 mt-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {["Japan", "Indonesia", "Singapore", "Thailand", "Vietnam"].map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </motion.div>
          </div>

          {/* Japan mark */}
          <motion.div
            className="hidden md:block md:col-span-5 md:col-start-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <JapanMark className="w-full max-w-[420px] ml-auto opacity-85" />
          </motion.div>
        </div>
      </section>

      {/* ══ CLIENTS ════════════════════════════════════════════════ */}
      <section className="bg-[#f8f7f5] border-b border-[#e0ddd8] px-6 md:px-10 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-14">
          <p className="label-overline shrink-0">Organizations we advise</p>
          <div className="flex flex-wrap items-center gap-10 sm:gap-16">
            {clients.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group opacity-45 hover:opacity-100 transition-opacity duration-300"
              >
                {c.logo ? (
                  <Image src={c.logo} alt={c.name} width={26} height={26} className="rounded-full" />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#1a1918] flex items-center justify-center">
                    <span className="text-white text-[0.5rem] font-semibold">ZS</span>
                  </div>
                )}
                <span className="text-[0.8125rem] text-[#4a4744] font-medium">{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CHALLENGES ═════════════════════════════════════════════ */}
      <section className="bg-white px-6 md:px-10 section-pad">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-14">
            <AnimateIn className="md:col-span-5" delay={0}>
              <p className="label-overline mb-5">The Challenge</p>
              <h2 className="headline-lg">
                Japan is the world&apos;s third-largest economy.<br />
                <span className="text-[#9a9895]">Most organizations underestimate the gap.</span>
              </h2>
            </AnimateIn>
            <AnimateIn className="md:col-span-5 md:col-start-8 flex items-end" delay={0.12}>
              <p className="body leading-relaxed">
                The distance between your home-market experience and Japan&apos;s regulatory, cultural, and commercial environment is wider than it appears. Organizations that do not account for it face delays, structural rework, and partnerships that begin on the wrong footing.
              </p>
            </AnimateIn>
          </div>

          <div className="divider mb-0" />
          <StaggerIn className="grid md:grid-cols-2" stagger={0.08} delay={0.1}>
            {challenges.map((c, i) => (
              <motion.div
                key={c.label}
                variants={staggerChild}
                className={`py-9 border-b border-[#e0ddd8] ${
                  i % 2 === 0
                    ? "md:border-r md:pr-12"
                    : "md:pl-12"
                }`}
              >
                <p className="text-[0.8125rem] font-semibold text-[#1e3557] tracking-wide mb-3">{c.label}</p>
                <p className="body leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* ══ SERVICES ════════════════════════════════════════════════ */}
      <section className="bg-[#f8f7f5] border-t border-b border-[#e0ddd8] px-6 md:px-10 section-pad">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <p className="label-overline mb-4">Advisory Services</p>
              <h2 className="headline-lg max-w-lg">
                Comprehensive cross-border guidance — from day one to ongoing operations.
              </h2>
            </div>
            <Link href="/services" className="btn-text shrink-0 self-end md:self-auto">
              All Services →
            </Link>
          </AnimateIn>

          <StaggerIn className="grid md:grid-cols-3 gap-px bg-[#e0ddd8]" stagger={0.06} delay={0.1}>
            {services.map((s) => (
              <motion.div key={s.title} variants={staggerChild}>
                <Link
                  href={s.href}
                  className="group block bg-[#f8f7f5] hover:bg-white p-8 md:p-9 h-full card-hover transition-colors duration-200"
                >
                  <p className="label-overline text-[#e0ddd8] group-hover:text-[#b8b4af] mb-5 transition-colors">{s.num}</p>
                  <h3 className="text-[0.9375rem] font-semibold text-[#1a1918] mb-3 leading-snug group-hover:text-[#1e3557] transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="caption leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* ══ ASEAN EXPERTISE ════════════════════════════════════════ */}
      <section className="bg-white px-6 md:px-10 section-pad">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <AnimateIn delay={0}>
            <p className="label-overline mb-5">Regional Depth</p>
            <h2 className="headline-lg mb-6">
              Deep expertise in the ASEAN regulatory environments that are changing fastest.
            </h2>
            <p className="body leading-relaxed mb-4">
              Our team carries specialized knowledge of ASEAN regulatory environments — particularly Indonesia, where AI governance, data protection law, labor frameworks, and venture capital structuring are all evolving rapidly.
            </p>
            <p className="body leading-relaxed mb-8">
              For ASEAN-based organizations targeting Japan, and international teams expanding into Southeast Asia, we bridge the gap between two complex and distinct regulatory worlds.
            </p>
            <Link href="/industries" className="btn-text">
              Industries we work with →
            </Link>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="divide-y divide-[#e0ddd8]">
              {aseanAreas.map((item) => (
                <div key={item.label} className="group flex items-center justify-between py-5 cursor-default">
                  <div>
                    <p className="text-[0.9rem] font-medium text-[#1a1918] group-hover:text-[#1e3557] transition-colors">{item.label}</p>
                    <p className="caption mt-0.5">{item.sub}</p>
                  </div>
                  <motion.span
                    className="text-[#e0ddd8] text-base ml-4 group-hover:text-[#1e3557] transition-colors"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    →
                  </motion.span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══ PROCESS ════════════════════════════════════════════════ */}
      <section className="bg-[#1a1918] text-white px-6 md:px-10 section-pad">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="max-w-xl mb-16">
              <p className="label-overline text-[#4a4744] mb-5">Engagement Model</p>
              <h2 className="headline-lg text-white">
                A structured approach from initial assessment to continuous advisory.
              </h2>
            </div>
          </AnimateIn>

          <StaggerIn className="grid md:grid-cols-4" stagger={0.1} delay={0.1}>
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                variants={staggerChild}
                className={`py-8 md:py-0 md:px-8 ${i === 0 ? "md:pl-0" : ""} ${i === steps.length - 1 ? "md:pr-0" : ""} ${i < steps.length - 1 ? "border-b md:border-b-0 md:border-r border-[#2a2928]" : ""}`}
              >
                <p className="label-overline text-[#3a3938] mb-6">{s.num}</p>
                <h3 className="text-[0.9375rem] font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-[#6a6764] text-[0.875rem] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* ══ INSIGHTS ═══════════════════════════════════════════════ */}
      <section className="bg-white px-6 md:px-10 section-pad border-t border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="label-overline mb-4">Insights</p>
              <h2 className="headline-lg">
                Analysis and perspective from our advisory team.
              </h2>
            </div>
            <Link href="/insights" className="btn-text shrink-0 self-end md:self-auto">
              All Articles →
            </Link>
          </AnimateIn>

          <div className="divider mb-0" />
          <StaggerIn className="grid md:grid-cols-3 divide-x divide-[#e0ddd8]" stagger={0.1} delay={0.1}>
            {featured.map((post) => (
              <motion.div key={post.slug} variants={staggerChild}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex flex-col py-8 px-0 md:px-8 first:pl-0 last:pr-0 hover:bg-[#f8f7f5] transition-colors duration-200 h-full"
                >
                  <span className="tag mb-4">{post.category}</span>
                  <h3 className="text-[0.9375rem] font-medium text-[#1a1918] leading-snug mb-3 flex-1 group-hover:text-[#1e3557] transition-colors">
                    {post.title}
                  </h3>
                  <p className="caption leading-relaxed mb-4 line-clamp-2">{post.description}</p>
                  <p className="text-[0.75rem] text-[#b8b4af]">{post.readTime}</p>
                </Link>
              </motion.div>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* ══ CTA BANNER ══════════════════════════════════════════════ */}
      <section className="relative bg-[#f2f1ee] border-t border-[#e0ddd8] px-6 md:px-10 py-20 md:py-28 overflow-hidden">
        {/* Decorative background mark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.035] pointer-events-none select-none">
          <JapanMark className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <AnimateIn delay={0}>
            <p className="label-overline mb-5">Begin Your Expansion</p>
            <h2 className="headline-lg">
              Let us help you build a sound path into Japan.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15} className="md:flex md:justify-end">
            <div className="max-w-sm">
              <p className="body leading-relaxed mb-7">
                Whether you are in the planning stage or already navigating Japan or ASEAN, our advisory team is ready to provide a direct, structured assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary">
                  Schedule a Consultation
                </Link>
                <Link href="/about" className="btn-secondary">
                  About Our Team
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
