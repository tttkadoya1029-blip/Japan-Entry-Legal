"use client";

import { useState } from "react";

const topics = [
  "Japan Market Entry",
  "Entity Setup / Incorporation",
  "Contract & Commercial Advisory",
  "Workforce & Employment (Japan)",
  "Workforce & Employment (Indonesia / ASEAN)",
  "Data Protection (APPI / PDPA / UU PDP)",
  "AI & Technology Compliance",
  "Startup / Venture Capital Structuring",
  "Cross-Border Dispute",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("first_name") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("last_name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      topic: (form.elements.namedItem("topic") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "sent" : "error");
  }

  if (status === "sent") {
    return (
      <div className="py-16 border border-[#e0ddd8] px-10 text-center">
        <p className="text-[0.875rem] font-semibold text-[#1a1918] mb-2">Message received.</p>
        <p className="caption">We will respond within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        <label className="label-overline block mb-2.5">Organization *</label>
        <input
          name="company"
          required
          className="w-full border border-[#e0ddd8] bg-white px-4 py-3 text-[0.9rem] text-[#1a1918] placeholder:text-[#b8b4af] focus:outline-none focus:border-[#1a1918] transition-colors"
          placeholder="Your Organization"
        />
      </div>

      <div>
        <label className="label-overline block mb-2.5">Email Address *</label>
        <input
          name="email"
          type="email"
          required
          className="w-full border border-[#e0ddd8] bg-white px-4 py-3 text-[0.9rem] text-[#1a1918] placeholder:text-[#b8b4af] focus:outline-none focus:border-[#1a1918] transition-colors"
          placeholder="alex@organization.com"
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
          placeholder="Brief description of your organization, your expansion plan, and the key questions you are working through…"
        />
      </div>

      <div className="divider" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        {status === "error" && (
          <p className="caption text-red-500">Something went wrong. Please try again.</p>
        )}
        {status === "idle" && (
          <p className="caption">We respond to all inquiries within one business day.</p>
        )}
      </div>
    </form>
  );
}
