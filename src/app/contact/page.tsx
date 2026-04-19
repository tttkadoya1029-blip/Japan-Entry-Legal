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

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white px-6 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-6">Contact</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
            Let&apos;s start with<br />a direct conversation.
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Tell us about your situation. We&apos;ll give you a direct assessment of what you&apos;re facing and how we can help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16">
          {/* Form */}
          <div className="md:col-span-3">
            <form
              action={`mailto:tttkadoya1029@gmail.com`}
              method="get"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                    First Name *
                  </label>
                  <input
                    name="first_name"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    placeholder="Alex"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                    Last Name *
                  </label>
                  <input
                    name="last_name"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    placeholder="Johnson"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                  Company *
                </label>
                <input
                  name="company"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  placeholder="alex@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                  Topic
                </label>
                <select
                  name="topic"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors bg-white text-gray-700"
                >
                  <option value="">Select a topic...</option>
                  {topics.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                  Tell us about your situation *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Brief description of your company, what you're trying to do, and the key questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-4 rounded-full hover:bg-gray-800 transition-colors text-sm"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-400 text-center">
                We respond to all inquiries within one business day.
              </p>
            </form>
          </div>

          {/* Info */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Email</h3>
              <a
                href="mailto:tttkadoya1029@gmail.com"
                className="text-black font-medium hover:text-gray-600 transition-colors"
              >
                tttkadoya1029@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Coverage</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Japan (nationwide)</p>
                <p>Indonesia</p>
                <p>Singapore</p>
                <p>Thailand</p>
                <p>Vietnam</p>
                <p>Philippines</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Languages</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>English</p>
                <p>Japanese</p>
                <p>Bahasa Indonesia</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-black mb-3">First time reaching out?</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We offer an initial consultation to understand your situation and assess whether we&apos;re the right fit. No commitment required.
              </p>
              <Link href="/about" className="text-xs font-semibold text-black hover:text-gray-600 transition-colors">
                Learn more about our team →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
