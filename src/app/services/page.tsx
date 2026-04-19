import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Legal and business advisory services for companies entering Japan and navigating ASEAN — market entry, employment, data protection, AI regulation, and venture capital.",
};

const services = [
  {
    id: "market-entry",
    tag: "Japan Market Entry",
    title: "Japan Market Entry & Company Setup",
    intro:
      "Entering Japan is not just a corporate filing exercise. The structure you choose affects your tax exposure, liability, operational flexibility, and how Japanese business counterparts perceive you.",
    problems: [
      "Which legal entity is right — KK, GK, or branch office?",
      "What licenses and approvals do you need before you can operate?",
      "How do you structure cross-border transactions between your Japanese entity and parent?",
      "What ongoing compliance obligations apply from day one?",
    ],
    solutions: [
      "Entity design based on your specific business model, tax position, and growth plan",
      "Regulatory mapping to identify licenses, approvals, and filing requirements",
      "Corporate governance framework designed for foreign-owned Japanese entities",
      "Ongoing compliance calendar to ensure nothing is missed post-launch",
    ],
  },
  {
    id: "contracts",
    tag: "Contract Law",
    title: "Contract & Commercial Law Support",
    intro:
      "Japanese contracts are enforced in Japan, under Japanese law, by Japanese courts. Agreements drafted for other jurisdictions do not simply transfer. And Japanese commercial relationships operate under cultural and legal norms that differ from common law jurisdictions.",
    problems: [
      "Commercial agreements that look solid but are unenforceable in Japan",
      "Automatic renewal clauses that bind you longer than intended",
      "Distributor and partner agreements that don't protect your IP or exit rights",
      "Liability caps and indemnification provisions that won't hold up in a dispute",
    ],
    solutions: [
      "Japanese-law compliant commercial agreements drafted in bilingual form",
      "Distribution, agency, licensing, and technology agreements purpose-built for Japan",
      "NDA and IP protection frameworks appropriate for Japanese commercial practice",
      "Contract review for existing agreements with identified risk areas",
    ],
  },
  {
    id: "employment",
    tag: "Employment & Labor",
    title: "Employment & Labor Compliance (Japan + ASEAN)",
    intro:
      "Japan's employment framework is heavily employee-protective — termination without cause is effectively prohibited. ASEAN markets add further complexity with their own statutory frameworks. Hiring without understanding the rules creates liability that surfaces at the worst moment.",
    problems: [
      "Terminating employees in Japan without triggering wrongful dismissal claims",
      "Fixed-term contracts in Indonesia that convert to permanent employment",
      "BPJS enrollment and manpower reporting compliance in Indonesia",
      "Work rules and overtime compliance under Japan's Work Style Reform legislation",
    ],
    solutions: [
      "Employment agreement templates compliant with Japanese Labor Standards Act",
      "Work rules (shugyo kisoku) drafting and labor standards office filing",
      "Indonesia employment compliance audits and remediation plans",
      "Expat visa and work permit coordination in Japan and ASEAN",
      "Performance management and termination process design",
    ],
  },
  {
    id: "data",
    tag: "Data Protection",
    title: "Data Protection & Privacy (Indonesia PDP, ASEAN Frameworks)",
    intro:
      "Japan's APPI and Indonesia's UU PDP are both comprehensive data protection frameworks with extraterritorial reach and significant penalties. Operating AI products, SaaS platforms, or consumer applications in Asia requires a market-by-market compliance program.",
    problems: [
      "APPI cross-border transfer requirements differ from GDPR — compliance gaps are common",
      "Indonesia UU PDP applies to any company processing Indonesian personal data, wherever it's based",
      "Breach notification timelines vary across markets and are shorter than most companies expect",
      "Data localization requirements in Indonesia and Vietnam constrain cloud architecture choices",
    ],
    solutions: [
      "APPI compliance audit and gap analysis for Japan operations",
      "UU PDP compliance program design for Indonesia",
      "Multi-market ASEAN data protection framework",
      "Privacy notice and consent mechanism drafting",
      "Data Protection Officer (DPO) support and breach response protocols",
    ],
  },
  {
    id: "ai",
    tag: "AI & Technology",
    title: "AI & Technology Regulation (ASEAN + Global Trends)",
    intro:
      "AI regulation in Asia is developing rapidly. Indonesia, Singapore, and Thailand have all published AI governance frameworks. Companies deploying AI products in ASEAN need to track these requirements now — binding legislation is coming.",
    problems: [
      "AI systems that process personal data face overlapping data protection and AI governance requirements",
      "Sector-specific AI rules in financial services, healthcare, and content platforms are already active",
      "Explainability and transparency requirements for automated decision-making are being enforced",
      "EU AI Act extraterritorial reach affects products deployed in ASEAN with EU-origin technology",
    ],
    solutions: [
      "AI governance gap analysis against ASEAN frameworks",
      "AI system documentation and explainability framework",
      "Sector-specific compliance assessment (fintech, healthtech, content platforms)",
      "AI ethics and responsible use policy drafting",
      "Regulatory engagement strategy for jurisdictions with emerging AI rules",
    ],
  },
  {
    id: "vc",
    tag: "Startup & VC",
    title: "Startup & Venture Capital Legal Support",
    intro:
      "International VC term sheets don't map cleanly onto Indonesian or Japanese corporate law. Getting the legal architecture right early — before the first institutional round — saves significant cost and complexity later.",
    problems: [
      "US-form SAFEs and convertible notes that are not executable under Indonesian corporate law",
      "Singapore holding structures that haven't been properly set up before the fundraise",
      "ESOP plans that create tax and regulatory problems for Indonesian employees",
      "Japan corporate mechanics that delay share issuance and cap table updates",
    ],
    solutions: [
      "Investment instrument structuring for Indonesia and Japan (SAFE adaptation, convertible notes, equity)",
      "Singapore holding company setup and flip structuring",
      "Cap table management and shareholder agreement drafting",
      "Indonesia PMV licensing and VC fund structuring",
      "ESOP and equity incentive plan design for ASEAN and Japan",
    ],
  },
  {
    id: "disputes",
    tag: "Disputes & Exit",
    title: "Cross-Border Dispute & Exit Support",
    intro:
      "When commercial relationships break down across borders, the path to resolution is rarely straightforward. Jurisdiction, governing law, enforcement of judgments, and cultural expectations about dispute resolution all create complexity.",
    problems: [
      "Disputes between Japanese and foreign parties where jurisdiction is unclear",
      "Exit from an Indonesia joint venture or partnership arrangement",
      "Employment dispute resolution in Japan's industrial relations framework",
      "Cross-border contract enforcement where assets are in multiple jurisdictions",
    ],
    solutions: [
      "Dispute assessment and strategy advice across Japan and ASEAN",
      "Negotiated settlement support in commercial and employment disputes",
      "Joint venture exit and share transfer coordination",
      "Coordination with local litigation counsel where proceedings are necessary",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white px-6 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-6">Services</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
            Legal support that moves at business speed.
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            We focus on the legal questions that actually determine whether your business succeeds in Japan and ASEAN — not the abstract ones.
          </p>
        </div>
      </section>

      {/* Service nav */}
      <nav className="border-b border-gray-100 sticky top-16 bg-white z-40 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8 py-4 min-w-max">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-sm font-medium text-gray-500 hover:text-black transition-colors whitespace-nowrap">
                {s.tag}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`py-16 md:py-20 ${i < services.length - 1 ? "border-b border-gray-100" : ""}`}
          >
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00FFB3] bg-black px-3 py-1 rounded-full mb-4">
                  {s.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-snug">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">{s.intro}</p>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Common Challenges</h4>
                  <ul className="space-y-2.5">
                    {s.problems.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-gray-600">
                        <span className="text-red-400 shrink-0 mt-0.5">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 md:p-10 h-fit">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">How We Help</h4>
                <ul className="space-y-3">
                  {s.solutions.map((sol) => (
                    <li key={sol} className="flex gap-3 text-sm text-gray-800">
                      <span className="text-[#00FFB3] font-bold shrink-0 mt-0.5">✓</span>
                      {sol}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center text-sm font-semibold text-black hover:text-gray-600 transition-colors"
                >
                  Discuss your situation →
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-black text-white px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Not sure where to start?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Tell us about your situation and we&apos;ll map out the legal and regulatory landscape specific to your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#00FFB3] text-black font-semibold px-10 py-4 rounded-full hover:bg-white transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
