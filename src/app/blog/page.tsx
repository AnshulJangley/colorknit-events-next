import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, BookOpen, Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerBanner from "@/components/PartnerBanner";
import { blogPosts } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Event Management Blog & Guides | ColorKnit Events Pune",
  description:
    "Expert insights, planning guides, and industry trends on corporate events, family days, conferences, exhibition management, and event technology in Pune.",
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <>
      <Header />

      <main className="w-full flex-grow">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center py-24 md:py-32 px-4 bg-cover bg-center bg-no-repeat min-h-[520px]"
          style={{ backgroundImage: "url('/images/photo5.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-4">
            <span className="inline-block bg-[#dc2626]/20 border border-[#dc2626]/40 text-[#ff6b6b] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Insights &amp; Resources
            </span>

            <h1 className="text-white text-3xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight mb-4 drop-shadow-md max-w-4xl leading-tight">
              Event Management Insights &amp; Guides
            </h1>

            <div className="w-16 h-[3px] bg-[#dc2626] mb-6 shadow-sm"></div>

            <p className="text-[#f1f1f1] text-[17px] md:text-[20px] font-medium tracking-wide mb-6 max-w-3xl">
              Practical guides, industry trends, and strategic advice for corporate, social, and experiential events in Pune.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-6 md:px-10 py-5 rounded-lg max-w-2xl text-center text-[#e2e2e2] text-[14px] leading-relaxed shadow-lg">
              Explore comprehensive articles on conference planning, family days, tech innovations, and marketing strategies crafted by the team at ColorKnit Events.
            </div>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="w-full bg-[#f8f9f8] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dc2626]"></span>
              <h2 className="font-cinzel text-[#847565] text-[13px] font-bold tracking-[0.2em] uppercase">
                Featured Article
              </h2>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 grid grid-cols-1 lg:grid-cols-12">
              <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#008484]/10 text-[#008484] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-400 text-[12px] flex items-center gap-1">
                      <Clock size={13} /> {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-[#222] text-[22px] md:text-[26px] font-extrabold tracking-tight mb-4 leading-snug hover:text-[#008484] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>

                  <p className="text-[#555] text-[14.5px] leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-[#008484] hover:text-[#006666] font-bold text-[13px] uppercase tracking-wider group pt-4 border-t border-gray-100"
                >
                  Read Full Article
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* All Articles Grid */}
        <section className="w-full bg-[#efedea] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] font-bold tracking-[0.2em] uppercase mb-2">
                Knowledge Hub
              </h2>
              <h3 className="text-[#2b2b2b] text-[26px] md:text-[34px] font-extrabold tracking-tight mb-4">
                Latest Articles &amp; Event Guides
              </h3>
              <div className="w-[60px] h-[3px] bg-[#008484] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                Browse our complete collection of insights covering corporate event execution, entertainment ideas, technology trends, and budgeting tips.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/95 backdrop-blur-xs text-[#008484] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-gray-400 text-[12px] mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} /> {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={13} /> {post.readTime}
                        </span>
                      </div>

                      <h4 className="text-[#222] text-[17px] font-bold tracking-tight mb-3 group-hover:text-[#008484] transition-colors leading-snug">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h4>

                      <p className="text-[#555] text-[13.5px] leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#008484] hover:text-[#006666] uppercase tracking-wider transition-colors pt-3 border-t border-gray-100 group-hover:translate-x-0.5"
                    >
                      Read Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-[#170a1c] via-[#2a1334] to-[#120815] py-20 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="text-[#ff6b6b] text-[13px] font-bold tracking-widest uppercase mb-3">
              Need Professional Event Execution?
            </span>
            <h2 className="text-white text-[26px] md:text-[36px] font-extrabold mb-6 tracking-tight">
              Turn These Ideas Into An Extraordinary Event
            </h2>
            <div className="w-[50px] h-[3px] bg-[#dc2626] mb-8"></div>

            <p className="text-[#e2e2e2] text-[15px] md:text-[16px] leading-relaxed mb-4 max-w-2xl">
              Whether you are planning a corporate conference, a festive family day, or an exhibition showcase, the team at ColorKnit Events is ready to bring your vision to life.
            </p>
            <p className="text-[#c7c7c7] text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-2xl">
              Let&apos;s discuss your upcoming event requirements, venue preferences, and goals in Pune.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="mailto:contact@colorknit.com?subject=Enquiry%20from%20Blog"
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white font-bold text-[13px] px-8 py-4 rounded-[3px] uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <Mail size={16} />
                Discuss Your Event
              </Link>

              <Link
                href="https://wa.me/919811121153?text=Hi%20ColorKnit%20Events%2C%20I%20read%20your%20blog%20and%20would%20like%20to%20discuss%20planning%20an%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white font-bold text-[13px] px-8 py-4 rounded-[3px] uppercase tracking-wider transition-all"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Banner Bar */}
        <PartnerBanner />
      </main>

      <Footer
        companyDescription={
          <div className="leading-relaxed mb-4 font-medium text-[#555]">
            <p className="mb-3">
              <strong>ColorKnit Events</strong> is a premier event management company in Pune. We deliver end-to-end solutions for corporate conferences, family days, exhibitions, sports tournaments, and social celebrations.
            </p>
            <p>
              Explore our blog for expert perspectives, event planning guides, and technology trends that keep your brand ahead.
            </p>
          </div>
        }
      />
    </>
  );
}

