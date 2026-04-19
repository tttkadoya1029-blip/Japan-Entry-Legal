"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e0ddd8]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[4.25rem] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center" aria-label="Japan Entry Legal">
          <Image
            src="/hp-logo.png"
            alt="Japan Entry Legal"
            width={148}
            height={36}
            className="object-contain h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.8125rem] tracking-wide transition-colors duration-150 ${
                pathname.startsWith(item.href)
                  ? "text-[#1a1918] font-medium"
                  : "text-[#9a9895] hover:text-[#1a1918]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-4 btn-primary text-[0.8125rem] px-5 py-2">
            Contact Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 text-[#4a4744]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className={`block w-5 h-px bg-current transition-all duration-200 origin-center ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 origin-center ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[#e0ddd8] bg-white">
          <div className="max-w-7xl mx-auto px-6 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-sm text-[#4a4744] hover:text-[#1a1918] border-b border-[#ece9e4] last:border-0 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full text-center text-sm py-3"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
