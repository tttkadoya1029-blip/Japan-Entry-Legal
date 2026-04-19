import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getAllSlugs, posts } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: [post.keyword, post.category, "Japan legal", "ASEAN legal"],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const filled = related.length < 2
    ? [...related, ...posts.filter((p) => p.slug !== slug && !related.find((r) => r.slug === p.slug)).slice(0, 2 - related.length)]
    : related;

  return (
    <>
      {/* Article header */}
      <section className="bg-white px-6 md:px-10 pt-16 pb-10 md:pt-24 md:pb-14 border-b border-[#e0ddd8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-7">
            <Link href="/insights" className="text-[0.8125rem] text-[#9a9895] hover:text-[#1a1918] transition-colors">
              ← Insights
            </Link>
            <span className="text-[#e0ddd8]">/</span>
            <span className="tag">{post.category}</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-[2.25rem] font-semibold leading-snug tracking-tight text-[#1a1918] mb-5">
              {post.title}
            </h1>
            <p className="text-[#4a4744] text-base leading-relaxed mb-6">{post.description}</p>
            <div className="flex items-center gap-5 text-[0.8rem] text-[#b8b4af]">
              <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body + sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 grid md:grid-cols-12 gap-12">
        {/* Article */}
        <article className="md:col-span-7">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Sidebar */}
        <aside className="md:col-span-4 md:col-start-9">
          <div className="sticky top-[6rem] space-y-8">
            {/* CTA */}
            <div className="border border-[#e0ddd8] bg-[#f8f7f5] p-7">
              <p className="label-overline mb-4">Need Advice?</p>
              <p className="text-[0.875rem] text-[#4a4744] leading-relaxed mb-5">
                We work directly with international companies on Japan and ASEAN legal questions. Contact us for a direct assessment.
              </p>
              <Link href="/contact" className="btn-primary w-full text-center">
                Contact Our Team
              </Link>
            </div>

            {/* Related */}
            {filled.length > 0 && (
              <div>
                <p className="label-overline mb-5">Related Insights</p>
                <div className="space-y-4">
                  {filled.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/insights/${p.slug}`}
                      className="group block border-b border-[#ece9e4] pb-4 last:border-0 last:pb-0"
                    >
                      <span className="tag mb-2 block">{p.category}</span>
                      <p className="text-[0.875rem] font-medium text-[#1a1918] group-hover:text-[#1e3557] leading-snug transition-colors">
                        {p.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back */}
            <Link href="/insights" className="btn-text block">
              ← All Insights
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
