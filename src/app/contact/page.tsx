import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our cross-border legal advisory team. We work with international companies entering Japan and navigating ASEAN.",
};

const topics = [
  "Japan Market Entry",
  "Company Setup / Incorporation",
  "Contract & Commercial Law",
  "Employment & Labor (Japan)",
  "Employment & Labor (Indonesia / ASEAN)",
  "Data Protection (APPI / PDPA / UU PDP)",
  "AI & Technology Regulation",
  "Startup / Venture Capital",
  "Cross-Border Dispute",
  "Other",
];

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
          <div className="md:col-span-7">
            <p className="label-overline mb-5">Contact</p>
            <h1 className="text-3xl md:text-[2.75rem] font-light leading-snug tracking-tight text-[#1a1918] mb-6">
              Let&apos;s start with<br />a direct conversation.
            </h1>
            <p className="text-[#4a4744] text-[0.9375rem] leading-relaxed max-w-md">
              Tell us about your situation. We will give you a clear assessment of what you are facing and how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Main contact area */}
      <section className="px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">

          {/* Form */}
          <div className="md:col-span-7">
            <form
              action={`mailto:tttkadoya1029@gmail.com`}
              method="get"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="label-overline block mb-2.5">First Name *</label>
                  <input
                    name="first_name"
                    required
                    className="w-full border border-[#e0ddd8] bg-white px-4 py-3 text-[0.9rem] text-[#1a1918] placeholder:text-[#b8b4af] focus:outline-none focus:border-[#1a1918] transition-colors"
                    placeholder="Alex"
                  />
                </div>
                <div>
                  <label className="label-overline block mb-2.5">Last Name *</label>
                  <input
                    name="last_name"
                    required
                    className="w-full border border-[#e0ddd8] bg-white px-4 py-3 text-[0.9rem] text-[#1a1918] placeholder:text-[#b8b4af] focus:outline-none focus:border-[#1a1918] transition-colors"
                    placeholder="Johnson"
                  />
                </div>
              </div>

              <div>
                <label className="label-overline block mb-2.5">Company *</label>
                <input
                  name="company"
                  required
                  className="w-full border border-[#e0ddd8] bg-white px-4 py-3 text-[0.9rem] text-[#1a1918] placeholder:text-[#b8b4af] focus:outline-none focus:border-[#1a1918] transition-colors"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label className="label-overline block mb-2.5">Email Address *</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-[#e0ddd8] bg-white px-4 py-3 text-[0.9rem] text-[#1a1918] placeholder:text-[#b8b4af] focus:outline-none focus:border-[#1a1918] transition-colors"
                  placeholder="alex@company.com"
                />
              </div>

              <div>
                <label className="label-overline block mb-2.5">Topic</label>
                <select
                  name="topic"
                  className="w-full border border-[#e0ddd8] bg-white px-4 py-3 text-[0.9rem] text-[#4a4744] focus:outline-none focus:border-[#1a1918] transition-colors"
                >
                  <option value="">Select a topic…</option>
                  {topics.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label-overline block mb-2.5">Your Situation *</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full border border-[#e0ddd8] bg-white px-4 py-3 text-[0.9rem] text-[#1a1918] placeholder:text-[#b8b4af] focus:outline-none focus:border-[#1a1918] transition-colors resize-none"
                  placeholder="Brief description of your company, what you are planning, and the key questions you have…"
                />
              </div>

              <div className="divider" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Send Message
                </button>
                <p className="text-[0.8rem] text-[#b8b4af]">We respond to all inquiries within one business day.</p>
              </div>
            </form>
          </div>

          {/* Info panel */}
          <div className="md:col-span-4 md:col-start-9">
            <div className="space-y-10">

              <div>
                <p className="label-overline mb-4">Email</p>
                <a
                  href="mailto:tttkadoya1029@gmail.com"
                  className="text-[0.9rem] text-[#1a1918] hover:text-[#1e3557] transition-colors font-medium"
                >
                  tttkadoya1029@gmail.com
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

              <div className="border border-[#e0ddd8] bg-[#f8f7f5] p-6">
                <p className="text-[0.875rem] font-medium text-[#1a1918] mb-2">First time reaching out?</p>
                <p className="text-[0.8125rem] text-[#4a4744] leading-relaxed mb-4">
                  We offer an initial consultation to understand your situation and assess fit. No commitment required.
                </p>
                <Link href="/about" className="btn-text text-[0.8rem]">
                  Learn about our team →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
