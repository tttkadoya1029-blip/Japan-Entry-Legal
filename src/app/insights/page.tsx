import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical legal insights for tech companies in Japan and ASEAN — AI regulation, data protection, labor law, venture capital, and market entry.",
};

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white px-6 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-6">Insights</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
            Practical intelligence<br />for business decisions.
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Original analysis on Japan and ASEAN legal and regulatory developments — written for business leaders, not lawyers.
          </p>
        </div>
      </section>

      {/* Category labels */}
      <div className="border-b border-gray-100 px-6 py-5 overflow-x-auto bg-white sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex gap-3 min-w-max">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 cursor-default"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Articles grid */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group flex flex-col border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#00FFB3] bg-black px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="text-base font-semibold text-black leading-snug mb-3 group-hover:text-gray-700 transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{post.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <time className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  <span className="text-xs font-semibold text-black group-hover:text-gray-600 transition-colors">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 px-6 py-20 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay ahead of regulatory changes.</h2>
          <p className="text-gray-600 mb-8">
            Get notified when we publish new insights on Japan and ASEAN legal developments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-black text-white font-semibold px-8 py-3.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
