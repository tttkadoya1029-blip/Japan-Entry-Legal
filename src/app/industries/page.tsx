import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "We work with technology organizations, AI and data-driven teams, ASEAN ventures, and venture-backed projects entering Japan.",
};

const industries = [
  {
    id: "technology",
    title: "Technology & SaaS",
    headline: "SaaS does not come with built-in Japan compliance.",
    desc: "Software products entering Japan face a distinct set of regulatory requirements — from data handling under APPI to consumer contract implications for subscription terms. What works in the US or Europe needs to be adapted, not just translated.",
    points: [
      "APPI compliance for products handling Japanese user data",
      "Terms of service and privacy policy adaptation for Japan",
      "Distribution agreements with Japanese resellers and channel partners",
      "IP protection — patents, trademarks, copyright registration",
      "Sector authorization where the product touches regulated industries",
    ],
    insights: ["common-legal-mistakes-expanding-into-japan", "japan-vs-asean-key-legal-differences-tech-companies"],
  },
  {
    id: "ai",
    title: "AI & Data-Driven Organizations",
    headline: "AI compliance in Asia is substantive, specific, and accelerating.",
    desc: "Organizations building AI products for Asian markets face overlapping frameworks — data protection requirements that constrain training data use, sector-specific guidance from financial and health regulators, and comprehensive AI legislation advancing across ASEAN. We track this landscape so your team can focus on building.",
    points: [
      "AI governance compliance across Japan and ASEAN jurisdictions",
      "Personal data processing for AI training and inference pipelines",
      "Sector-specific AI requirements in fintech, healthtech, and content platforms",
      "Explainability and transparency documentation for automated decisions",
      "EU AI Act extraterritorial reach analysis for ASEAN-deployed products",
    ],
    insights: ["indonesia-ai-regulation-explained", "asean-ai-governance-what-companies-need-to-know"],
  },
  {
    id: "asean",
    title: "ASEAN Ventures Entering Japan",
    headline: "The two most commercially significant markets in Asia require completely different approaches.",
    desc: "ASEAN-based ventures — particularly those from Indonesia, Singapore, and Thailand — are increasingly targeting Japan as their next major market. The structural and regulatory gap between your home market and Japan is larger than it appears. We help you bridge it without losing momentum.",
    points: [
      "Japan entity setup from an ASEAN operating base",
      "Cross-border structure between ASEAN parent and Japan entity",
      "Local team building and workforce compliance in Japan",
      "Translation and adaptation of commercial agreements for Japanese counterparts",
      "Sector authorization and regulatory navigation in Japan",
    ],
    insights: ["japan-vs-asean-key-legal-differences-tech-companies", "common-legal-mistakes-expanding-into-japan"],
  },
  {
    id: "venture",
    title: "Venture-Backed Organizations",
    headline: "Investors expect scalable compliance infrastructure. We help you build it.",
    desc: "Venture-backed organizations face specific structural challenges in Asia — from term sheet adaptation for Indonesian corporate frameworks to cap table management in Japan. Post-investment, investor rights, board governance, and future-round readiness all require proactive attention.",
    points: [
      "Series A and beyond structural support in Japan and Indonesia",
      "Investor rights agreement adaptation for local corporate frameworks",
      "Singapore holding structure setup and ongoing maintenance",
      "ESOP and equity incentive plan design for ASEAN and Japan teams",
      "Due diligence preparation and data room structuring for fundraising",
    ],
    insights: ["venture-capital-regulation-indonesia-pmv-explained", "how-startups-raise-funds-indonesia-legal-perspective"],
  },
  {
    id: "crossborder",
    title: "Cross-Border Operations",
    headline: "Operating across Japan and ASEAN simultaneously is where complexity compounds.",
    desc: "Organizations that run operations across Japan and multiple ASEAN markets face overlapping compliance requirements — different data protection regimes, varying workforce frameworks, distinct IP registration systems, and contracting norms that do not translate across jurisdictions. We provide the integrated advisory that makes this manageable.",
    points: [
      "Multi-market compliance program design and implementation",
      "Regional privacy framework covering Japan and ASEAN jurisdictions",
      "Cross-border workforce and executive mobility support",
      "Regional IP protection and registration coordination",
      "Group structure governance and intercompany agreement framework",
    ],
    insights: ["asean-data-protection-compliance-tech-companies", "japan-vs-asean-key-legal-differences-tech-companies"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <AnimateIn className="md:col-span-7">
            <p className="label-overline mb-5">Industries</p>
            <h1 className="headline-lg mb-6">
              We understand your business,<br />not just the regulation.
            </h1>
            <p className="body leading-relaxed max-w-lg">
              Generic advisory does not work for technology organizations entering Asia. We focus on the sectors where regulatory complexity is highest and commercial stakes are greatest.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Industry sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {industries.map((ind, i) => (
          <section
            key={ind.id}
            id={ind.id}
            className={`py-16 md:py-20 ${i < industries.length - 1 ? "border-b border-[#e0ddd8]" : ""}`}
          >
            <div className="grid md:grid-cols-12 gap-10">
              <AnimateIn className="md:col-span-7" delay={0}>
                <p className="label-overline mb-4">{ind.title}</p>
                <h2 className="headline mb-5 leading-snug">{ind.headline}</h2>
                <p className="body leading-relaxed mb-8">{ind.desc}</p>

                <div className="divider mb-0" />
                <ul className="divide-y divide-[#ece9e4]">
                  {ind.points.map((p) => (
                    <li key={p} className="py-3.5 flex gap-3 text-[0.875rem] text-[#4a4744]">
                      <span className="text-[#1e3557] shrink-0 font-medium mt-0.5">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </AnimateIn>

              <AnimateIn className="md:col-span-4 md:col-start-9" delay={0.12}>
                <p className="label-overline mb-5">Related Insights</p>
                <div className="space-y-4">
                  {ind.insights.map((slug) => {
                    const post = posts.find((p) => p.slug === slug);
                    if (!post) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/insights/${slug}`}
                        className="group block border border-[#e0ddd8] p-5 hover:bg-[#f8f7f5] card-hover transition-colors"
                      >
                        <span className="tag mb-3 block">{post.category}</span>
                        <p className="text-[0.875rem] font-medium text-[#1a1918] group-hover:text-[#1e3557] leading-snug transition-colors">
                          {post.title}
                        </p>
                        <p className="caption mt-2">{post.readTime}</p>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="btn-text">
                    Discuss your situation →
                  </Link>
                </div>
              </AnimateIn>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#f2f1ee] border-t border-[#e0ddd8] px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <AnimateIn>
            <h2 className="headline-lg leading-snug">Your sector, your market.</h2>
          </AnimateIn>
          <AnimateIn delay={0.1} className="md:flex md:justify-end">
            <div>
              <p className="body mb-6 leading-relaxed">
                Tell us about your organization and expansion plan and we will give you a direct assessment of your structural and compliance position.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Direct Assessment
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
