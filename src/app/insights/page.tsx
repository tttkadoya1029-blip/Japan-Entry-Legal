import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical analysis for technology organizations in Japan and ASEAN — AI compliance, data protection, workforce law, venture capital, and market entry.",
};

const categories = Array.from(new Set(posts.map((p) => p.category)));

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-end">
          <AnimateIn className="md:col-span-7">
            <p className="label-overline mb-5">Insights</p>
            <h1 className="headline-lg mb-6">
              Practical analysis<br />for expansion decisions.
            </h1>
            <p className="body leading-relaxed max-w-lg">
              Original perspective on Japan and ASEAN regulatory developments — written for business leaders and expansion teams, not specialists.
            </p>
          </AnimateIn>
          <AnimateIn className="md:col-span-4 md:col-start-9 md:flex md:justify-end" delay={0.1}>
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {categories.map((cat) => (
                <span key={cat} className="tag">{cat}</span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Article list */}
      <section className="px-6 md:px-10 py-0">
        <div className="max-w-7xl mx-auto">

          {/* Featured first article */}
          <AnimateIn delay={0.05}>
            <Link
              href={`/insights/${posts[0].slug}`}
              className="group grid md:grid-cols-12 gap-6 py-12 border-b border-[#e0ddd8] hover:bg-[#f8f7f5] -mx-6 md:-mx-10 px-6 md:px-10 transition-colors duration-200"
            >
              <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-2">
                <span className="tag">{posts[0].category}</span>
                <span className="caption mt-auto md:mt-2">{posts[0].readTime}</span>
              </div>
              <div className="md:col-span-7">
                <h2 className="text-xl md:text-2xl font-medium text-[#1a1918] leading-snug mb-3 group-hover:text-[#1e3557] transition-colors">
                  {posts[0].title}
                </h2>
                <p className="body leading-relaxed line-clamp-2">{posts[0].description}</p>
              </div>
              <div className="hidden md:flex md:col-span-3 items-start justify-end pt-1">
                <time className="caption">
                  {new Date(posts[0].date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
            </Link>
          </AnimateIn>

          {/* Remaining articles */}
          {posts.slice(1).map((post, i) => (
            <AnimateIn key={post.slug} delay={0.05 + 0.05 * i}>
              <Link
                href={`/insights/${post.slug}`}
                className="group grid md:grid-cols-12 gap-4 py-6 border-b border-[#e0ddd8] hover:bg-[#f8f7f5] -mx-6 md:-mx-10 px-6 md:px-10 transition-colors duration-200"
              >
                <div className="md:col-span-2">
                  <span className="tag">{post.category}</span>
                </div>
                <div className="md:col-span-6">
                  <h2 className="text-[0.9375rem] font-medium text-[#1a1918] leading-snug group-hover:text-[#1e3557] transition-colors">
                    {post.title}
                  </h2>
                  <p className="caption leading-relaxed mt-1.5 line-clamp-1 hidden md:block">
                    {post.description}
                  </p>
                </div>
                <div className="hidden md:flex md:col-span-4 items-center justify-end gap-6">
                  <span className="caption">{post.readTime}</span>
                  <time className="caption">
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                  </time>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#e0ddd8] bg-[#f8f7f5] px-6 md:px-10 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <AnimateIn>
            <p className="text-[0.9375rem] font-medium text-[#1a1918] mb-1">
              Have a question on a specific regulatory matter?
            </p>
            <p className="caption">Our advisory team works directly with international organizations on Japan and ASEAN questions.</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <Link href="/contact" className="btn-primary shrink-0">
              Contact Our Team
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
