import Image from "next/image";
import Link from "next/link";

const cols = [
  {
    heading: "Services",
    links: [
      { label: "Japan Market Entry", href: "/services#market-entry" },
      { label: "Contract & Commercial", href: "/services#contracts" },
      { label: "Employment & Labor", href: "/services#employment" },
      { label: "Data Protection", href: "/services#data" },
      { label: "AI & Technology", href: "/services#ai" },
      { label: "Startup & Venture Capital", href: "/services#vc" },
    ],
  },
  {
    heading: "Advisory Team",
    links: [
      { label: "About", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Practice Regions",
    links: [
      { label: "Japan", href: "/services" },
      { label: "Indonesia", href: "/insights/indonesia-ai-regulation-explained" },
      { label: "Singapore", href: "/industries" },
      { label: "Southeast Asia (ASEAN)", href: "/industries" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e0ddd8] bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-8">

        {/* Top row */}
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 pr-8">
            <Link href="/">
              <Image
                src="/hp-logo.png"
                alt="Japan Entry Legal"
                width={140}
                height={34}
                className="object-contain h-7 w-auto mb-5"
              />
            </Link>
            <p className="text-[0.8125rem] text-[#9a9895] leading-relaxed max-w-xs">
              Cross-border business and regulatory advisory for international organizations entering Japan and navigating ASEAN.
            </p>
            <div className="mt-6">
              <a
                href="mailto:tttkadoya@gmail.com"
                className="text-[0.8125rem] text-[#4a4744] hover:text-[#1e3557] transition-colors"
              >
                tttkadoya@gmail.com
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="label-overline mb-4">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.8125rem] text-[#9a9895] hover:text-[#1a1918] transition-colors leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="divider mb-6" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[0.75rem] text-[#b8b4af]">
          <p>© {new Date().getFullYear()} Japan Entry Legal. All rights reserved.</p>
          <p className="tracking-wide">Business &amp; Regulatory Advisory · Japan · ASEAN</p>
        </div>
      </div>
    </footer>
  );
}
