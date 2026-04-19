import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "We work with technology companies, AI and data-driven businesses, ASEAN startups, and venture-backed companies entering Japan.",
};

const industries = [
  {
    id: "technology",
    title: "Technology & SaaS",
    headline: "SaaS does not come with built-in Japan compliance.",
    desc: "Software products entering Japan face a distinct set of legal requirements — from data handling under APPI to consumer contract law implications for subscription terms. What works in the US or Europe needs to be adapted for Japan.",
    points: [
      "APPI compliance for products handling Japanese user data",
      "Terms of service and privacy policy adaptation for Japan",
      "Distribution agreements with Japanese resellers and agents",
      "Intellectual property protection — patents, trademarks, copyright",
      "Sector-specific licensing where the product touches regulated industries",
    ],
    insights: ["common-legal-mistakes-expanding-into-japan", "japan-vs-asean-key-legal-differences-tech-companies"],
  },
  {
    id: "ai",
    title: "AI & Data-Driven Companies",
    headline: "AI regulation in Asia is substantive, specific, and accelerating.",
    desc: "Companies building AI products for Asian markets face overlapping frameworks — data protection rules that constrain training data, sector-specific guidance from financial and health regulators, and emerging comprehensive legislation across ASEAN. We track this landscape so your team can focus on building.",
    points: [
      "AI governance compliance across Japan and ASEAN jurisdictions",
      "Personal data processing for AI training and inference",
      "Sector-specific AI rules in fintech, healthtech, and content platforms",
      "Explainability and transparency documentation for automated decisions",
      "EU AI Act extraterritorial reach analysis for ASEAN deployments",
    ],
    insights: ["indonesia-ai-regulation-explained", "asean-ai-governance-what-companies-need-to-know"],
  },
  {
    id: "asean",
    title: "ASEAN Startups Entering Japan",
    headline: "The two most commercially significant markets in Asia require completely different approaches.",
    desc: "ASEAN startups — particularly those from Indonesia, Singapore, and Thailand — are increasingly targeting Japan as their next major market. The legal gap between your home market and Japan is substantial. We help you bridge it without losing momentum.",
    points: [
      "Japan entity setup from an ASEAN operating base",
      "Cross-border structuring between ASEAN parent and Japan subsidiary",
      "Local team hiring and employment compliance in Japan",
      "Translation and adaptation of commercial agreements for Japanese counterparts",
      "Regulatory navigation for sector-specific requirements in Japan",
    ],
    insights: ["japan-vs-asean-key-legal-differences-tech-companies", "common-legal-mistakes-expanding-into-japan"],
  },
  {
    id: "venture",
    title: "Venture-Backed Companies",
    headline: "Investors expect scalable legal infrastructure. We help you build it.",
    desc: "VC-backed companies face specific legal challenges in Asia — from term sheet adaptation for Indonesian corporate law to cap table management in Japan. Post-investment, investor rights, board governance, and subsequent round readiness all require careful attention.",
    points: [
      "Series A and beyond legal support in Japan and Indonesia",
      "Investor rights agreement adaptation for local corporate law",
      "Singapore holding structure setup and ongoing maintenance",
      "ESOP and equity incentive plan design",
      "Due diligence preparation for fundraising processes",
    ],
    insights: ["venture-capital-regulation-indonesia-pmv-explained", "how-startups-raise-funds-indonesia-legal-perspective"],
  },
  {
    id: "crossborder",
    title: "Cross-Border Businesses",
    headline: "Operating across Japan and ASEAN simultaneously is where compliance complexity compounds.",
    desc: "Companies that operate across Japan and multiple ASEAN markets face overlapping requirements — multiple data protection regimes, varying employment rules, different IP registration systems, and contracting frameworks that do not translate across jurisdictions. We provide the integrated advisory that lets you manage this efficiently.",
    points: [
      "Multi-market compliance program design and implementation",
      "Regional privacy framework covering Japan and ASEAN",
      "Cross-border employment and executive mobility support",
      "Regional IP protection and registration strategy",
      "Group company governance and intercompany agreement framework",
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
          <div className="md:col-span-7">
            <p className="label-overline mb-5">Industries</p>
            <h1 className="text-3xl md:text-[2.75rem] font-light leading-snug tracking-tight text-[#1a1918] mb-6">
              We understand your industry,<br />not just the law.
            </h1>
            <p className="text-[#4a4744] text-[0.9375rem] leading-relaxed max-w-lg">
              Generic legal advice does not work for technology companies entering Asia. We focus on the industries where regulatory complexity is highest and business stakes are greatest.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {industries.map((ind, i) => (
          <section
            key={ind.id}
            id={ind.id}
            className={`py-16 md:py-20 ${i < industries.length - 1 ? "border-b border-[#e0ddd8]" : ""}`}
          >
            <div className="grid md:grid-cols-12 gap-10">
              {/* Content */}
              <div className="md:col-span-7">
                <p className="label-overline mb-4">{ind.title}</p>
                <h2 className="text-xl md:text-2xl font-semibold text-[#1a1918] mb-4 leading-snug">{ind.headline}</h2>
                <p className="text-[#4a4744] text-[0.9375rem] leading-relaxed mb-8">{ind.desc}</p>

                <div className="divider mb-0" />
                <ul className="divide-y divide-[#ece9e4]">
                  {ind.points.map((p) => (
                    <li key={p} className="py-3.5 flex gap-3 text-[0.875rem] text-[#4a4744]">
                      <span className="text-[#1e3557] shrink-0 font-medium mt-0.5">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related insights */}
              <div className="md:col-span-4 md:col-start-9">
                <p className="label-overline mb-5">Related Insights</p>
                <div className="space-y-4">
                  {ind.insights.map((slug) => {
                    const post = posts.find((p) => p.slug === slug);
                    if (!post) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/insights/${slug}`}
                        className="group block border border-[#e0ddd8] p-5 hover:bg-[#f8f7f5] transition-colors"
                      >
                        <span className="tag mb-3 block">{post.category}</span>
                        <p className="text-[0.875rem] font-medium text-[#1a1918] group-hover:text-[#1e3557] leading-snug transition-colors">
                          {post.title}
                        </p>
                        <p className="text-[0.75rem] text-[#b8b4af] mt-2">{post.readTime}</p>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="btn-text">
                    Discuss your situation →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#f2f1ee] border-t border-[#e0ddd8] px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#1a1918] leading-snug">
            Your industry, your market.
          </h2>
          <div className="md:flex md:justify-end">
            <div>
              <p className="text-[#4a4744] text-[0.9rem] mb-6 leading-relaxed">
                Tell us about your business and we will provide a direct assessment of your legal and regulatory position.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Direct Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
