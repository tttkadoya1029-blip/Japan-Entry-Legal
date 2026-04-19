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
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/hp-logo.png" alt="Japan Entry Legal" width={140} height={36} className="object-contain h-8 w-auto" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith(item.href)
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-black text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-sm font-medium text-gray-700 hover:text-black border-b border-gray-50"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
