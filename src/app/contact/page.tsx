import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our cross-border advisory team. We work with international organizations entering Japan and navigating ASEAN.",
};

const coverage = [
  "Japan (nationwide)",
  "Indonesia",
  "Singapore",
  "Thailand",
  "Vietnam",
  "Philippines",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 md:px-10 pt-20 pb-14 md:pt-28 md:pb-18 border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <AnimateIn className="md:col-span-7">
            <p className="label-overline mb-5">Get in Touch</p>
            <h1 className="headline-lg mb-6">
              Let&apos;s start with<br />a direct conversation.
            </h1>
            <p className="body leading-relaxed max-w-md">
              Tell us about your situation. We will give you a clear, direct assessment of the landscape you are entering and how we can support your expansion.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Contact layout */}
      <section className="px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">

          {/* Form */}
          <AnimateIn className="md:col-span-7" delay={0}>
            <ContactForm />
          </AnimateIn>

          {/* Info panel */}
          <AnimateIn className="md:col-span-4 md:col-start-9" delay={0.15}>
            <div className="space-y-10">
              <div>
                <p className="label-overline mb-4">Direct Contact</p>
                <a
                  href="mailto:tttkadoya@gmail.com"
                  className="text-[0.9rem] text-[#1a1918] hover:text-[#1e3557] transition-colors font-medium"
                >
                  tttkadoya@gmail.com
                </a>
              </div>

              <div>
                <p className="label-overline mb-4">Geographic Coverage</p>
                <ul className="space-y-2">
                  {coverage.map((c) => (
                    <li key={c} className="text-[0.875rem] text-[#4a4744]">{c}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="label-overline mb-4">Working Languages</p>
                <ul className="space-y-2">
                  {["English", "Japanese", "Bahasa Indonesia"].map((lang) => (
                    <li key={lang} className="text-[0.875rem] text-[#4a4744]">{lang}</li>
                  ))}
                </ul>
              </div>

              <div className="border border-[#e0ddd8] bg-white p-6">
                <p className="text-[0.875rem] font-semibold text-[#1a1918] mb-2">First time reaching out?</p>
                <p className="caption leading-relaxed mb-4">
                  We offer an initial consultation to understand your situation and assess fit. No commitment required.
                </p>
                <Link href="/about" className="btn-text text-[0.8rem]">
                  Learn about our team →
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
