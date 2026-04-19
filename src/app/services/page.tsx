import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cross-border advisory services for organizations entering Japan and navigating ASEAN — market entry, employment, data protection, AI compliance, and venture capital.",
};

const services = [
  {
    id: "market-entry",
    tag: "Japan Market Entry",
    title: "Japan Market Entry & Structural Setup",
    intro:
      "Entering Japan is not a corporate filing exercise. The structural decisions made at entry — entity type, governance, intercompany architecture — shape your tax exposure, liability profile, operational flexibility, and how Japanese counterparts perceive your commitment to the market.",
    problems: [
      "Which entity type is right — KK, GK, or representative office?",
      "What authorizations and registrations are required before operations begin?",
      "How should cross-border transactions between the Japan entity and parent be structured?",
      "What ongoing compliance obligations apply from day one?",
    ],
    solutions: [
      "Entity design tailored to your business model, tax position, and growth trajectory",
      "Regulatory mapping to identify all required authorizations and approvals",
      "Corporate governance framework for foreign-owned Japanese entities",
      "Ongoing compliance calendar so nothing is missed post-launch",
    ],
  },
  {
    id: "contracts",
    tag: "Contract & Commercial",
    title: "Contract & Commercial Advisory",
    intro:
      "Agreements used in Japan operate under Japanese law and are interpreted by Japanese courts. Contracts structured for other jurisdictions frequently create exposure that only becomes visible during a dispute. Japanese commercial practice also carries relationship norms that affect how agreements are read and enforced.",
    problems: [
      "Agreements that appear solid but carry unenforceable provisions under Japanese law",
      "Automatic renewal clauses that commit your organization longer than intended",
      "Distribution and partner agreements that leave IP and exit rights inadequately protected",
      "Liability and indemnification terms that will not hold up under Japanese standards",
    ],
    solutions: [
      "Commercial agreement structuring and review support in bilingual form for Japanese operations",
      "Guidance on distribution, licensing, technology, and SaaS agreements in Japan",
      "NDA and IP protection frameworks aligned with Japanese commercial relationships",
      "Contract review with risk identification and amendment recommendations",
    ],
  },
  {
    id: "employment",
    tag: "Employment & Labor",
    title: "Employment & Workforce Compliance (Japan + ASEAN)",
    intro:
      "Japan's workforce framework is heavily protective — termination without cause is effectively prohibited by court precedent. ASEAN markets add further complexity. Organizations that build teams without understanding the framework face liability that surfaces at the worst possible moment.",
    problems: [
      "Workforce reductions in Japan without triggering wrongful dismissal exposure",
      "Fixed-term arrangements in Indonesia that convert automatically to permanent employment",
      "BPJS enrollment and manpower reporting obligations in Indonesia",
      "Working hours and overtime compliance under Japan's Work Style Reform legislation",
    ],
    solutions: [
      "Employment agreement structuring aligned with the Japanese Labor Standards Act",
      "Work rules (shugyo kisoku) design and guidance on labor office registration",
      "Indonesia workforce compliance assessments and remediation programs",
      "Expatriate work authorization guidance and coordination across Japan and ASEAN",
      "Performance management framework design and workforce exit process structuring",
    ],
  },
  {
    id: "data",
    tag: "Data & Privacy",
    title: "Data Protection & Privacy Compliance",
    intro:
      "Japan's APPI and Indonesia's UU PDP both carry extraterritorial reach and significant penalties. Running technology products or data-driven services across Asia requires a compliance architecture that is built for how your product actually operates — not just what the law says on paper.",
    problems: [
      "APPI cross-border transfer requirements that differ materially from GDPR",
      "UU PDP obligations applying to any organization processing Indonesian personal data",
      "Breach notification timelines shorter than most teams expect",
      "Data localization requirements constraining cloud and infrastructure decisions",
    ],
    solutions: [
      "APPI compliance assessment and gap analysis for Japan operations",
      "UU PDP compliance program design and structuring for Indonesia",
      "Multi-market ASEAN data protection framework development",
      "Privacy notice and consent mechanism design",
      "Data protection officer support and incident response planning",
    ],
  },
  {
    id: "ai",
    tag: "AI & Technology",
    title: "AI & Technology Regulatory Guidance",
    intro:
      "AI governance frameworks across ASEAN are advancing from voluntary guidelines toward binding requirements. Organizations deploying AI products in Asian markets need to build compliance infrastructure now — retrofitting after regulation arrives is significantly more expensive.",
    problems: [
      "AI systems that process personal data face overlapping data protection and AI governance requirements",
      "Sector-specific AI requirements in financial services and healthcare are already active",
      "Explainability obligations for automated decision-making are being enforced",
      "EU AI Act extraterritorial reach affects products in ASEAN built on EU-origin technology",
    ],
    solutions: [
      "AI governance gap analysis against applicable ASEAN and Japan frameworks",
      "AI system documentation and explainability architecture",
      "Sector-specific compliance assessment across regulated industries",
      "Responsible use policy and internal governance framework development",
      "Regulatory engagement strategy for jurisdictions with emerging AI requirements",
    ],
  },
  {
    id: "vc",
    tag: "Startup & VC",
    title: "Startup & Venture Capital Structuring",
    intro:
      "International VC term sheets do not map cleanly onto Indonesian or Japanese corporate frameworks. Getting the structural architecture right before the first institutional round saves significant cost and complexity in later rounds and at exit.",
    problems: [
      "US-form SAFEs and convertible notes that are not executable under Indonesian corporate law",
      "Singapore holding structures that have not been established before the fundraise",
      "ESOP arrangements that create tax and regulatory complications for Indonesian team members",
      "Japan share issuance mechanics that delay cap table updates and closing timelines",
    ],
    solutions: [
      "Investment instrument structuring for Indonesia and Japan contexts",
      "Singapore holding structure setup and flip structuring guidance",
      "Cap table structuring and shareholder agreement review support",
      "Indonesia PMV authorization guidance and VC fund structuring",
      "ESOP and equity incentive plan design for ASEAN and Japan teams",
    ],
  },
  {
    id: "disputes",
    tag: "Disputes & Exit",
    title: "Cross-Border Dispute & Exit Support",
    intro:
      "When commercial relationships break down across borders, resolution is rarely straightforward. Jurisdiction, governing law, enforcement of judgments, and divergent expectations about how disputes should be handled all add complexity.",
    problems: [
      "Commercial disputes between Japan and international parties with unclear jurisdiction",
      "Exit from Indonesia joint ventures or partnership arrangements",
      "Workforce dispute resolution within Japan's industrial relations framework",
      "Cross-border contract enforcement where assets are distributed across jurisdictions",
    ],
    solutions: [
      "Dispute assessment and strategy guidance across Japan and ASEAN",
      "Negotiated resolution support in commercial and employment disputes",
      "Joint venture exit and share transfer structuring",
      "Coordination with local counsel where formal proceedings are required",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <AnimateIn className="md:col-span-7">
            <p className="label-overline mb-5">Advisory Services</p>
            <h1 className="headline-lg mb-6">
              Structured advisory across every<br />dimension of your expansion.
            </h1>
            <p className="body max-w-lg leading-relaxed">
              We focus on the structural, regulatory, and operational questions that determine whether your expansion into Japan and ASEAN succeeds — built around the real challenges international organizations face.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Sticky service navigation */}
      <nav className="sticky top-[4.25rem] z-40 bg-white border-b border-[#e0ddd8] overflow-x-auto">
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

      {/* Service entries */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`py-16 md:py-20 ${i < services.length - 1 ? "border-b border-[#e0ddd8]" : ""}`}
          >
            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
              <AnimateIn className="md:col-span-5" delay={0}>
                <span className="tag mb-5 block">{s.tag}</span>
                <h2 className="headline mb-5 leading-snug">{s.title}</h2>
                <p className="body leading-relaxed mb-8">{s.intro}</p>

                <div>
                  <p className="label-overline mb-4">Common Challenges</p>
                  <ul className="space-y-3">
                    {s.problems.map((p) => (
                      <li key={p} className="flex gap-3 text-[0.875rem] text-[#4a4744]">
                        <span className="text-[#1e3557] shrink-0 font-medium mt-0.5">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>

              <AnimateIn className="md:col-span-6 md:col-start-7" delay={0.1}>
                <div className="border border-[#e0ddd8] bg-white p-8 md:p-10">
                  <p className="label-overline mb-6">How We Help</p>
                  <ul className="space-y-3.5">
                    {s.solutions.map((sol) => (
                      <li key={sol} className="flex gap-3 text-[0.875rem] text-[#1a1918]">
                        <span className="text-[#b8b4af] shrink-0 mt-0.5">—</span>
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
              </AnimateIn>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#f2f1ee] border-t border-[#e0ddd8] px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <AnimateIn>
            <h2 className="headline-lg leading-snug">
              Not sure which areas apply to your situation?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1} className="md:flex md:justify-end">
            <div>
              <p className="body mb-6 leading-relaxed">
                Tell us about your expansion plan and we will identify the structural and regulatory requirements specific to your situation.
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
