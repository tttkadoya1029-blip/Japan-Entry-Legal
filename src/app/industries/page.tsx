import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "We work with technology companies, AI and data-driven businesses, ASEAN startups, and venture-backed companies entering Japan.",
};

const industries = [
  {
    id: "technology",
    title: "Technology & SaaS",
    headline: "SaaS doesn't come with built-in Japan compliance.",
    desc: "Software products entering Japan face a distinct set of legal requirements — from data handling under APPI to consumer contract law implications for subscription terms. What works in the US or Europe needs to be adapted for Japan.",
    points: [
      "APPI compliance for products handling Japanese user data",
      "Terms of service and privacy policy adaptation for Japan",
      "Distribution agreements with Japanese resellers and agents",
      "Intellectual property protection — patents, trademarks, copyright",
      "Sector-specific licensing if your product touches regulated industries",
    ],
    insights: ["common-legal-mistakes-expanding-into-japan", "japan-vs-asean-key-legal-differences-tech-companies"],
  },
  {
    id: "ai",
    title: "AI & Data-Driven Companies",
    headline: "AI regulation in Asia is real, specific, and moving fast.",
    desc: "Companies building AI products for Asian markets face overlapping frameworks — data protection rules that constrain training data, sector-specific AI guidance from financial and health regulators, and emerging comprehensive AI legislation across ASEAN. We track this landscape so you can focus on building.",
    points: [
      "AI governance compliance across Japan and ASEAN",
      "Personal data processing for AI training and inference",
      "Sector-specific AI rules in fintech, healthtech, and content platforms",
      "Explainability and transparency documentation",
      "EU AI Act extraterritorial reach analysis for ASEAN deployments",
    ],
    insights: ["indonesia-ai-regulation-explained", "asean-ai-governance-what-companies-need-to-know"],
  },
  {
    id: "asean",
    title: "ASEAN Startups Entering Japan",
    headline: "The two most promising markets in Asia require completely different approaches.",
    desc: "ASEAN startups — particularly Indonesian, Singaporean, and Thai companies — are increasingly targeting Japan as their next major market. The legal gap between your home market and Japan is significant. We help you bridge it without losing momentum.",
    points: [
      "Japan entity setup from ASEAN base",
      "Cross-border structuring between ASEAN parent and Japan subsidiary",
      "Local team hiring and employment compliance in Japan",
      "Translation and adaptation of commercial agreements",
      "Regulatory navigation for sector-specific requirements in Japan",
    ],
    insights: ["japan-vs-asean-key-legal-differences-tech-companies", "common-legal-mistakes-expanding-into-japan"],
  },
  {
    id: "venture",
    title: "Venture-Backed Companies",
    headline: "Investors expect scalable legal infrastructure. We build it.",
    desc: "VC-backed companies face specific legal challenges in Asia — from term sheet adaptation for Indonesian corporate law to cap table management in Japan. Post-investment, investor rights, board governance, and subsequent round readiness all require attention.",
    points: [
      "Series A and beyond legal support in Japan and Indonesia",
      "Investor rights agreement adaptation for local law",
      "Singapore holding structure setup and maintenance",
      "ESOP and equity incentive plan design",
      "Due diligence preparation for fundraising processes",
    ],
    insights: ["venture-capital-regulation-indonesia-pmv-explained", "how-startups-raise-funds-indonesia-legal-perspective"],
  },
  {
    id: "crossborder",
    title: "Cross-Border Businesses",
    headline: "Operating across Japan and ASEAN simultaneously is where complexity compounds.",
    desc: "Companies that operate across Japan and multiple ASEAN markets face compounding compliance requirements — multiple data protection regimes, varying employment rules, different IP registration systems, and contracting frameworks that don't translate across jurisdictions. We provide the integrated advisory that lets you manage this efficiently.",
    points: [
      "Multi-market compliance program design",
      "Regional privacy framework covering Japan and ASEAN",
      "Cross-border employment and mobility support",
      "Regional IP protection strategy",
      "Group company governance and intercompany agreement framework",
    ],
    insights: ["asean-data-protection-compliance-tech-companies", "japan-vs-asean-key-legal-differences-tech-companies"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white px-6 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-6">Industries</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
            We understand your industry,<br />not just the law.
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Generic legal advice doesn&apos;t work for tech companies in Asia. We focus on the industries where regulatory complexity is highest and business stakes are biggest.
          </p>
        </div>
      </section>

      {/* Industries */}
      <div className="max-w-7xl mx-auto px-6">
        {industries.map((ind, i) => (
          <section
            key={ind.id}
            id={ind.id}
            className={`py-20 md:py-24 ${i < industries.length - 1 ? "border-b border-gray-100" : ""}`}
          >
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">{ind.title}</p>
                <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 leading-tight">{ind.headline}</h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">{ind.desc}</p>
                <ul className="space-y-3">
                  {ind.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-gray-700">
                      <span className="text-[#00FFB3] font-bold shrink-0 mt-0.5 text-base">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Related Insights</p>
                {ind.insights.map((slug) => {
                  const { posts } = require("@/lib/posts");
                  const post = posts.find((p: { slug: string }) => p.slug === slug);
                  if (!post) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/insights/${slug}`}
                      className="group block border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
                    >
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#00FFB3] bg-black px-2.5 py-0.5 rounded-full mb-3">
                        {post.category}
                      </span>
                      <p className="text-sm font-semibold text-black group-hover:text-gray-700 transition-colors leading-snug">
                        {post.title}
                      </p>
                    </Link>
                  );
                })}
                <Link href="/contact" className="block mt-6 text-sm font-semibold text-black hover:text-gray-600 transition-colors">
                  Discuss your industry situation →
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-black text-white px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your industry, your market.</h2>
          <p className="text-gray-400 text-lg mb-10">
            Tell us about your business and we&apos;ll give you a direct assessment of what you&apos;re facing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#00FFB3] text-black font-semibold px-10 py-4 rounded-full hover:bg-white transition-colors"
          >
            Get a Direct Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
