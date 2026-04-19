import Image from "next/image";
import Link from "next/link";

const links = {
  Services: [
    { label: "Japan Market Entry", href: "/services#market-entry" },
    { label: "Contract & Commercial", href: "/services#contracts" },
    { label: "Employment & Labor", href: "/services#employment" },
    { label: "Data Protection", href: "/services#data" },
    { label: "AI & Tech Regulation", href: "/services#ai" },
    { label: "Startup & VC", href: "/services#vc" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Image src="/hp-logo.png" alt="Japan Entry Legal" width={140} height={36} className="object-contain h-8 w-auto invert mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Cross-border legal and business advisory for global tech companies entering Japan and navigating ASEAN.
            </p>
          </div>
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Contact</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ready to enter Japan or navigate ASEAN?
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-[#00FFB3] text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Japan Entry Legal. All rights reserved.</p>
          <p>Legal & Business Advisory · Japan · ASEAN</p>
        </div>
      </div>
    </footer>
  );
}
