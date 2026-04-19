import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical legal analysis for technology companies in Japan and ASEAN — AI regulation, data protection, labor law, venture capital, and market entry.",
};

const categories = Array.from(new Set(posts.map((p) => p.category)));

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="label-overline mb-5">Insights</p>
            <h1 className="text-3xl md:text-[2.75rem] font-light leading-snug tracking-tight text-[#1a1918] mb-6">
              Practical analysis for<br />business decisions.
            </h1>
            <p className="text-[#4a4744] text-[0.9375rem] leading-relaxed max-w-lg">
              Original analysis on Japan and ASEAN legal and regulatory developments — written for business leaders, not lawyers.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:flex md:justify-end">
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {categories.map((cat) => (
                <span key={cat} className="tag">{cat}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article list */}
      <section className="px-6 md:px-10 py-0">
        <div className="max-w-7xl mx-auto">
          {/* Featured — first article larger */}
          {posts.slice(0, 1).map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group grid md:grid-cols-12 gap-6 py-12 border-b border-[#e0ddd8] hover:bg-[#f8f7f5] -mx-6 md:-mx-10 px-6 md:px-10 transition-colors duration-150"
            >
              <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-2">
                <span className="tag">{post.category}</span>
                <span className="text-[0.75rem] text-[#b8b4af] mt-auto md:mt-2">{post.readTime}</span>
              </div>
              <div className="md:col-span-7">
                <h2 className="text-xl md:text-2xl font-medium text-[#1a1918] leading-snug mb-3 group-hover:text-[#1e3557] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#4a4744] text-[0.9rem] leading-relaxed line-clamp-2">{post.description}</p>
              </div>
              <div className="hidden md:flex md:col-span-3 items-start justify-end pt-1">
                <time className="text-[0.8rem] text-[#b8b4af]">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
            </Link>
          ))}

          {/* Remaining articles */}
          {posts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group grid md:grid-cols-12 gap-4 py-7 border-b border-[#e0ddd8] hover:bg-[#f8f7f5] -mx-6 md:-mx-10 px-6 md:px-10 transition-colors duration-150"
            >
              <div className="md:col-span-2">
                <span className="tag">{post.category}</span>
              </div>
              <div className="md:col-span-6">
                <h2 className="text-[0.9375rem] font-medium text-[#1a1918] leading-snug group-hover:text-[#1e3557] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#9a9895] text-[0.8125rem] leading-relaxed mt-1.5 line-clamp-1 hidden md:block">
                  {post.description}
                </p>
              </div>
              <div className="hidden md:flex md:col-span-4 items-center justify-end gap-6">
                <span className="text-[0.8rem] text-[#b8b4af]">{post.readTime}</span>
                <time className="text-[0.8rem] text-[#b8b4af]">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#e0ddd8] bg-[#f8f7f5] px-6 md:px-10 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[0.9375rem] font-medium text-[#1a1918] mb-1">Need advice on a specific regulatory matter?</p>
            <p className="text-[0.875rem] text-[#9a9895]">Our team works directly with international companies on Japan and ASEAN legal questions.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
