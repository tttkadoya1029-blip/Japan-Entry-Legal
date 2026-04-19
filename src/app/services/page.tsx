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
      "Entering Japan is not a corporate filing exercise. The entity structure you choose affects tax exposure, liability, operational flexibility, and how Japanese business counterparts perceive your commitment to the market.",
    problems: [
      "Which legal entity is right — KK, GK, or branch office?",
      "What licenses and approvals are required before operations can begin?",
      "How should cross-border transactions between the Japanese entity and the parent be structured?",
      "What ongoing compliance obligations apply from day one?",
    ],
    solutions: [
      "Entity design tailored to your business model, tax position, and growth plan",
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
      "Japanese contracts are enforced in Japan, under Japanese law, by Japanese courts. Agreements drafted for other jurisdictions do not simply transfer, and Japanese commercial relationships operate under legal norms that differ substantially from common law systems.",
    problems: [
      "Commercial agreements that appear solid but are unenforceable under Japanese law",
      "Automatic renewal clauses that bind the company longer than intended",
      "Distribution and partner agreements that inadequately protect IP or exit rights",
      "Liability caps and indemnification provisions that will not hold up in dispute",
    ],
    solutions: [
      "Japanese-law compliant commercial agreements drafted in bilingual form",
      "Distribution, agency, licensing, and technology agreements for Japanese operations",
      "NDA and IP protection frameworks appropriate for Japanese commercial practice",
      "Contract review with identified risk areas and recommended amendments",
    ],
  },
  {
    id: "employment",
    tag: "Employment & Labor",
    title: "Employment & Labor Compliance (Japan + ASEAN)",
    intro:
      "Japan's employment framework is heavily employee-protective — termination without cause is effectively prohibited by court precedent. ASEAN markets add further complexity. Hiring without understanding the rules creates liability that surfaces at the worst moment.",
    problems: [
      "Terminating employees in Japan without triggering wrongful dismissal claims",
      "Fixed-term contracts in Indonesia that convert automatically to permanent employment",
      "BPJS enrollment and manpower reporting compliance obligations in Indonesia",
      "Work rules and overtime compliance under Japan's Work Style Reform legislation",
    ],
    solutions: [
      "Employment agreement templates compliant with the Japanese Labor Standards Act",
      "Work rules (shugyo kisoku) drafting and labor standards office filing",
      "Indonesia employment compliance audits and remediation programs",
      "Expat visa and work permit coordination in Japan and across ASEAN",
      "Performance management and termination process design",
    ],
  },
  {
    id: "data",
    tag: "Data Protection",
    title: "Data Protection & Privacy (Indonesia PDP, ASEAN Frameworks)",
    intro:
      "Japan's APPI and Indonesia's UU PDP are comprehensive data protection frameworks with extraterritorial reach and significant penalties. Operating technology products or SaaS platforms across Asia requires a market-by-market compliance program.",
    problems: [
      "APPI cross-border transfer requirements that differ materially from GDPR",
      "UU PDP obligations applying to any company processing Indonesian personal data",
      "Breach notification timelines that are shorter than most companies expect",
      "Data localization requirements constraining cloud architecture decisions",
    ],
    solutions: [
      "APPI compliance audit and gap analysis for Japan operations",
      "UU PDP compliance program design for Indonesia",
      "Multi-market ASEAN data protection framework",
      "Privacy notice and consent mechanism drafting",
      "Data Protection Officer support and breach response protocols",
    ],
  },
  {
    id: "ai",
    tag: "AI & Technology",
    title: "AI & Technology Regulation (ASEAN + Global Trends)",
    intro:
      "AI regulation in Asia is advancing rapidly. Indonesia, Singapore, and Thailand have each published governance frameworks. Binding legislation is coming. Companies deploying AI products in ASEAN need to build compliance infrastructure now.",
    problems: [
      "AI systems that process personal data face overlapping data protection and AI governance requirements",
      "Sector-specific AI rules in financial services, healthcare, and content platforms are already active",
      "Explainability requirements for automated decision-making are being enforced",
      "EU AI Act extraterritorial reach affects products deployed in ASEAN with EU-origin technology",
    ],
    solutions: [
      "AI governance gap analysis against applicable ASEAN frameworks",
      "AI system documentation and explainability framework",
      "Sector-specific compliance assessment across regulated industries",
      "AI ethics and responsible use policy drafting",
      "Regulatory engagement strategy for jurisdictions with emerging AI rules",
    ],
  },
  {
    id: "vc",
    tag: "Startup & VC",
    title: "Startup & Venture Capital Legal Support",
    intro:
      "International VC term sheets do not map cleanly onto Indonesian or Japanese corporate law. Getting the legal architecture right before the first institutional round saves significant cost and complexity in subsequent rounds and at exit.",
    problems: [
      "US-form SAFEs and convertible notes that are not executable under Indonesian corporate law",
      "Singapore holding structures that have not been set up before the fundraise",
      "ESOP plans that create tax and regulatory problems for Indonesian employees",
      "Japan corporate mechanics that delay share issuance and cap table updates",
    ],
    solutions: [
      "Investment instrument structuring for Indonesia and Japan",
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
      "Disputes between Japanese and foreign parties where jurisdiction and governing law are unclear",
      "Exit from an Indonesia joint venture or partnership arrangement",
      "Employment dispute resolution within Japan's industrial relations framework",
      "Cross-border contract enforcement where assets are distributed across jurisdictions",
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
      <section className="bg-white px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <p className="label-overline mb-5">Services</p>
            <h1 className="text-3xl md:text-[2.75rem] font-light leading-snug tracking-tight text-[#1a1918] mb-6">
              Legal support that moves<br />at the speed of business.
            </h1>
            <p className="text-[#4a4744] text-[0.9375rem] leading-relaxed max-w-lg">
              We focus on the legal questions that determine whether your business succeeds in Japan and ASEAN — structured around the real operational challenges international companies face.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky service navigation */}
      <nav
        className="sticky top-[4.25rem] z-40 bg-white border-b border-[#e0ddd8] overflow-x-auto"
        aria-label="Service sections"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex gap-6 py-3 min-w-max">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-[0.75rem] tracking-wide text-[#9a9895] hover:text-[#1a1918] whitespace-nowrap transition-colors py-1"
              >
                {s.tag}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`py-16 md:py-20 ${i < services.length - 1 ? "border-b border-[#e0ddd8]" : ""}`}
          >
            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
              {/* Left */}
              <div className="md:col-span-5">
                <span className="tag mb-5 block">{s.tag}</span>
                <h2 className="text-xl md:text-2xl font-semibold text-[#1a1918] mb-5 leading-snug">{s.title}</h2>
                <p className="text-[#4a4744] text-[0.9rem] leading-relaxed mb-8">{s.intro}</p>

                <div>
                  <p className="label-overline mb-4">Common Challenges</p>
                  <ul className="space-y-3">
                    {s.problems.map((p) => (
                      <li key={p} className="flex gap-3 text-[0.875rem] text-[#4a4744]">
                        <span className="text-[#1e3557] shrink-0 mt-0.5 font-medium">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right */}
              <div className="md:col-span-6 md:col-start-7">
                <div className="border border-[#e0ddd8] bg-[#f8f7f5] p-8 md:p-10">
                  <p className="label-overline mb-6">How We Help</p>
                  <ul className="space-y-3.5">
                    {s.solutions.map((sol) => (
                      <li key={sol} className="flex gap-3 text-[0.875rem] text-[#1a1918]">
                        <span className="text-[#1e3557] shrink-0 font-semibold mt-0.5">✓</span>
                        {sol}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-[#e0ddd8]">
                    <Link href="/contact" className="btn-text">
                      Discuss your situation →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#f2f1ee] border-t border-[#e0ddd8] px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#1a1918] leading-snug">
              Not sure which services apply to your situation?
            </h2>
          </div>
          <div className="md:flex md:justify-end">
            <div>
              <p className="text-[#4a4744] text-[0.9rem] mb-6 leading-relaxed">
                Tell us about your business and we will identify the legal and regulatory requirements specific to your entry plan.
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
