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

  const otherRelated = related.length < 2
    ? posts.filter((p) => p.slug !== slug && p.slug !== related[0]?.slug).slice(0, 2 - related.length)
    : [];

  const relatedPosts = [...related, ...otherRelated].slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/insights" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              ← Insights
            </Link>
            <span className="text-gray-700">·</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00FFB3] bg-gray-900 px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">{post.title}</h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* CTA Banner */}
      <section className="mx-6 mb-16 bg-black text-white rounded-2xl p-10 md:p-14 max-w-3xl md:mx-auto">
        <p className="text-[#00FFB3] text-xs font-semibold uppercase tracking-widest mb-4">Need Help?</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Have questions about this topic?
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          We work directly with international companies navigating Japan and ASEAN legal requirements. Get a direct answer from our team.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-[#00FFB3] text-black font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-colors"
        >
          Schedule a Consultation
        </Link>
      </section>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="px-6 py-16 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Related Insights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#00FFB3] bg-black px-2.5 py-0.5 rounded-full mb-3">
                    {p.category}
                  </span>
                  <h4 className="text-sm font-semibold text-black group-hover:text-gray-700 transition-colors leading-snug mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-gray-400">{p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
