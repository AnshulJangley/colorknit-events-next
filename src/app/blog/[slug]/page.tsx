import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerBanner from "@/components/PartnerBanner";
import { blogPosts } from "@/data/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | ColorKnit Events",
    };
  }

  const postUrl = `https://www.colorknit.in/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `https://www.colorknit.in${post.image}`;

  return {
    title: `${post.title} | ColorKnit Events Pune`,
    description: post.excerpt,
    keywords: [
      post.category,
      "event management Pune",
      "corporate events Pune",
      post.title.toLowerCase(),
      "ColorKnit events",
    ],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: `${post.title} | ColorKnit Events Pune`,
      description: post.excerpt,
      url: postUrl,
      type: "article",
      publishedTime: post.date,
      authors: ["ColorKnit Editorial Team"],
      siteName: "ColorKnit Events Pune",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ColorKnit Events Pune`,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postUrl = `https://www.colorknit.in/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `https://www.colorknit.in${post.image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "ColorKnit Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "ColorKnit Events Pune",
      logo: {
        "@type": "ImageObject",
        url: "https://www.colorknit.in/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="w-full flex-grow bg-white">
        {/* Article Header & Breadcrumb */}
        <section className="w-full bg-[#170a1c] text-white py-14 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] text-gray-400 uppercase tracking-wider mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#ff6b6b] truncate max-w-[240px] sm:max-w-none">{post.category}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#dc2626]/30 border border-[#dc2626]/50 text-[#ff6b6b] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-400 text-[12px] flex items-center gap-1.5">
                <Calendar size={13} /> {post.date}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 text-[12px] flex items-center gap-1.5">
                <Clock size={13} /> {post.readTime}
              </span>
            </div>

            <h1 className="text-white text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-[#d8d8d8] text-[15px] md:text-[17px] leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="w-full max-w-4xl mx-auto px-4 -mt-6 sm:-mt-10 relative z-10">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        {/* Article Body */}
        <section className="w-full max-w-4xl mx-auto px-4 py-14">
          <div className="text-[#333] text-[15.5px] leading-[1.85] font-normal space-y-6">
            {post.content.split("\n\n").map((block, idx) => {
              const trimmed = block.trim();
              if (!trimmed) return null;

              // H2 Heading
              if (trimmed.startsWith("## ")) {
                return (
                  <h2
                    key={idx}
                    className="text-[#1a1a1a] text-[22px] md:text-[26px] font-extrabold tracking-tight pt-6 pb-2 border-b border-gray-100"
                  >
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }

              // H3 Heading
              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="text-[#2b2b2b] text-[18px] md:text-[21px] font-bold tracking-tight pt-4 text-[#008484]"
                  >
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }

              // Bullet list
              if (trimmed.startsWith("- ") || trimmed.startsWith("1. ")) {
                const lines = trimmed.split("\n");
                return (
                  <ul key={idx} className="space-y-2.5 my-4 pl-4">
                    {lines.map((line, liIdx) => (
                      <li key={liIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] mt-2.5 shrink-0"></span>
                        <span className="text-[#444] text-[15px]">
                          {line.replace(/^-\s+|\d+\.\s+/, "")}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }

              // Standard paragraph
              return (
                <p key={idx} className="text-[#444] text-[15px] md:text-[15.5px] leading-[1.85]">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Post Author / Share Callout */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#008484] hover:text-[#006666] font-bold text-[13px] uppercase tracking-wider transition-colors"
            >
              <ArrowLeft size={16} /> Back to All Articles
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-2.5 rounded-[3px] text-[12px] font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Discuss Your Event With ColorKnit
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Related Posts */}
        <section className="w-full bg-[#f8f9f8] py-16 px-4 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="font-cinzel text-[#847565] text-[13px] font-bold tracking-[0.2em] uppercase mb-2">
                Continue Reading
              </h3>
              <h2 className="text-[#2b2b2b] text-[22px] md:text-[28px] font-extrabold tracking-tight">
                Related Articles &amp; Insights
              </h2>
              <div className="w-[50px] h-[3px] bg-[#008484] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <article
                  key={related.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group border border-gray-100"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="text-[#008484] text-[11px] font-bold uppercase tracking-wider mb-2 block">
                        {related.category}
                      </span>
                      <h4 className="text-[#222] text-[16px] font-bold tracking-tight mb-3 group-hover:text-[#008484] transition-colors leading-snug">
                        <Link href={`/blog/${related.slug}`}>
                          {related.title}
                        </Link>
                      </h4>
                      <p className="text-[#666] text-[13px] leading-relaxed line-clamp-2 mb-4">
                        {related.excerpt}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${related.slug}`}
                      className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#008484] uppercase tracking-wider pt-3 border-t border-gray-100"
                    >
                      Read Article <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Contact Strip */}
        <PartnerBanner />
      </main>

      <Footer
        companyDescription={
          <div className="leading-relaxed mb-4 font-medium text-[#555]">
            <p className="mb-3">
              <strong>ColorKnit Events</strong> is an event management and production company in Pune delivering conferences, family days, corporate sports, exhibitions, and brand experiences.
            </p>
            <p>
              Connect with our planning team to discuss your venue, format, and production requirements across Pune and India.
            </p>
          </div>
        }
      />
    </>
  );
}

