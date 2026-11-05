import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerBanner from "@/components/PartnerBanner";

export const metadata: Metadata = {
  title: "About ColorKnit Events | Event Management Company in Pune",
  description:
    "Get to know ColorKnit Events, an event management company in Pune offering corporate events, exhibitions, weddings, corporate gifting, sports and MICE event solutions.",
  alternates: {
    canonical: "https://www.colorknit.in/about",
  },
  openGraph: {
    title: "About ColorKnit Events | Event Management Company in Pune",
    description:
      "Get to know ColorKnit Events, an event management company in Pune offering corporate events, exhibitions, weddings, corporate gifting, sports and MICE event solutions.",
    url: "https://www.colorknit.in/about",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ColorKnit Events | Event Management Company in Pune",
    description:
      "Get to know ColorKnit Events, an event management company in Pune offering corporate events, exhibitions, weddings, corporate gifting, sports and MICE event solutions.",
    images: ["/images/og-image.jpg"],
  },
};

export default function AboutPage() {
  const whyChoosePoints = [
    "Understanding your objectives, audience and expectations from day one",
    "Fresh ideas and creative perspectives to make every event distinctive",
    "Customized approaches for corporate, social, exhibitions and sporting events",
    "End-to-end coordination: planning, fabrication, technical setups and execution",
    "Leaving memorable impressions and building connections that last for a lifetime",
  ];

  const galleryImages = [
    { src: "/images/photo5.jpg", title: "Corporate Stage Production", category: "Corporate Events" },
    { src: "/images/photo3.jpg", title: "Custom Exhibition Fabrication", category: "Exhibitions" },
    { src: "/images/highlight3.jpg", title: "Grand Wedding Decor", category: "Weddings" },
    { src: "/images/card1.jpg", title: "Bespoke Corporate Gifting", category: "Corporate Gifting" },
    { src: "/images/highlight4.jpg", title: "Sports Tournament Management", category: "Sports" },
    { src: "/images/photo2.jpg", title: "National MICE Conference", category: "MICE" },
  ];

  const clientLogos = [
    "/images/clients/oie_4f0yDxTfOU9V.webp",
    "/images/clients/oie_fOMtanGo2lIp.webp",
    "/images/clients/oie_gtt8Bg6H4kcl.webp",
    "/images/clients/oie_MiRxT9q2fAff.webp",
    "/images/clients/oie_nBJ8X9qgakjW.webp",
    "/images/clients/oie_OV94nmdAgb7m.webp",
    "/images/clients/oie_UuUaFNPUpi9r.webp",
    "/images/clients/oie_VoKy5ZfvnoJm.webp",
  ];

  return (
    <>
      <Header />

      <main className="w-full flex-grow">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center py-24 md:py-32 px-4 bg-cover bg-center bg-no-repeat min-h-[580px]"
          style={{ backgroundImage: "url('/images/photo5.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-4">
            <span className="inline-block bg-[#dc2626]/20 border border-[#dc2626]/40 text-[#ff6b6b] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Pune &amp; Across India
            </span>

            <h1 className="text-white text-3xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight mb-4 drop-shadow-md max-w-4xl leading-tight">
              About ColorKnit Events
            </h1>

            <div className="w-16 h-[3px] bg-[#dc2626] mb-6 shadow-sm"></div>

            <p className="text-[#f1f1f1] text-[17px] md:text-[20px] font-medium tracking-wide mb-6 max-w-3xl">
              Creating experiences. Building connections. Making every occasion memorable.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-6 md:px-10 py-6 rounded-lg mb-8 max-w-3xl text-left md:text-center text-[#e2e2e2] text-[14.5px] leading-relaxed shadow-lg">
              <p>
                At <strong className="text-white font-semibold">ColorKnit Events</strong>, we believe that every event has a story worth bringing to life. Through creative thinking, thoughtful planning and a commitment to meaningful experiences, we help businesses, brands and individuals turn their ideas into memorable occasions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#story"
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase shadow-md rounded-[3px] hover:shadow-lg hover:-translate-y-0.5"
              >
                Our Story
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase rounded-[3px]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* 1. Our Story Section */}
        <section id="story" className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                  1. Our Story
                </h2>
                <h3 className="text-[#2b2b2b] text-[26px] md:text-[34px] font-bold tracking-tight mb-4">
                  Every Great Experience Begins With an Idea
                </h3>
                <div className="w-[50px] h-[3px] bg-[#dc2626] mb-8"></div>

                <div className="text-[#555] text-[14.5px] leading-[1.85] space-y-4 mb-8">
                  <p>
                    Every event is more than a gathering. It is an opportunity to connect people, share ideas, celebrate achievements and create lasting memories.
                  </p>
                  <p>
                    At ColorKnit Events, our journey is driven by a passion for creating experiences that bring people together.
                  </p>
                  <p>
                    From corporate events and exhibitions to weddings, sports events, corporate gifting and MICE gatherings, we believe each occasion deserves a customized approach.
                  </p>
                  <p>
                    As a premium event management company in Pune, we aim to make the event journey more meaningful by understanding the purpose behind every requirement and turning ideas into experiences people remember.
                  </p>
                  <p className="font-semibold text-[#222]">
                    Our belief is simple: Every event deserves thoughtful planning, a creative approach and attention to what matters most.
                  </p>
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white px-8 py-3.5 font-bold text-[13px] uppercase transition-all shadow-md rounded-[3px] tracking-wider hover:shadow-lg"
                >
                  Explore Our Services
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Event Photograph */}
              <div className="relative">
                <div className="relative p-2.5 border-[8px] border-[#e2d5c8] bg-white rounded-lg shadow-xl mx-auto w-full max-w-[500px]">
                  <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
                    <Image
                      src="/images/photo1.jpg"
                      alt="ColorKnit Events actual corporate event in Pune"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#170a1c] text-white p-4 rounded shadow-lg max-w-[220px] hidden sm:block border-l-4 border-[#dc2626]">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#ff6b6b] mb-1">
                    Thoughtful Planning
                  </p>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    Turning ideas into experiences people remember.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Why Choose Us Section */}
        <section className="w-full bg-[#efedea] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                  2. Why Choose Us
                </h2>
                <h3 className="text-[#2b2b2b] text-[26px] md:text-[34px] font-bold tracking-tight mb-4">
                  Your Vision. Our Creative Approach. Memorable Experiences.
                </h3>
                <div className="w-[50px] h-[3px] bg-[#008484] mb-8"></div>

                <div className="text-[#555] text-[14.5px] leading-[1.85] space-y-4 mb-8">
                  <p>
                    Choosing an event partner is about finding a team that understands your expectations and values your vision. At ColorKnit Events, we focus on creating experiences that are meaningful, engaging and suited to the purpose of each occasion.
                  </p>
                  <p>
                    We take the time to understand your objectives, audience and expectations and based on that bring fresh ideas and creative perspectives to help make every event distinctive.
                  </p>
                  <p>
                    Our aim goes beyond organising an occasion. We help create experiences that bring people together and leave memorable impressions for a lifetime.
                  </p>
                </div>

                <div className="flex flex-col gap-3.5 mb-8">
                  {whyChoosePoints.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3.5 bg-white p-4 rounded-md border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#e8f5e9] flex items-center justify-center shrink-0">
                        <Check className="text-[#2e7d32]" size={15} strokeWidth={3} />
                      </div>
                      <span className="text-[#333] text-[14px] font-semibold">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 font-bold text-[13px] uppercase transition-all shadow-md rounded-[3px] tracking-wider hover:shadow-lg"
                >
                  Discuss Your Event
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Event Photograph */}
              <div className="relative">
                <div className="relative p-2.5 border-[8px] border-[#e2d5c8] bg-white rounded-lg shadow-xl mx-auto w-full max-w-[500px]">
                  <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
                    <Image
                      src="/images/photo5.jpg"
                      alt="ColorKnit Events stage and audience experience"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#170a1c] text-white p-4 rounded shadow-lg max-w-[220px] hidden sm:block border-l-4 border-[#008484]">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#00a8a8] mb-1">
                    Creative Perspectives
                  </p>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    Distinctive event execution across Pune.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery of Our Work */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] font-bold tracking-[0.2em] uppercase mb-2">
                Portfolio Showcase
              </h2>
              <h3 className="text-[#2b2b2b] text-[26px] md:text-[34px] font-extrabold tracking-tight mb-4">
                Gallery of Our Work
              </h3>
              <div className="w-[60px] h-[3px] bg-[#dc2626] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                A glimpse into our recent corporate conferences, custom exhibition stalls, sports tournaments, gifting solutions and social celebrations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/95 text-[#008484] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-50">
                    <h4 className="text-[#222] text-[15px] font-bold group-hover:text-[#008484] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Our Clients Section */}
        <section className="w-full bg-[#efedea] py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-cinzel text-[#847565] text-[14px] font-bold tracking-[0.2em] uppercase mb-2">
              3. Our Clients
            </h2>
            <h3 className="text-[#2b2b2b] text-[26px] md:text-[32px] font-extrabold tracking-tight mb-4">
              Trusted by Leading Organizations
            </h3>
            <div className="w-[50px] h-[3px] bg-[#008484] mx-auto mb-10"></div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
              {clientLogos.map((logo, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-lg shadow-xs border border-gray-200 flex items-center justify-center aspect-[3/2] hover:shadow-md transition-shadow"
                >
                  <Image
                    src={logo}
                    alt={`ColorKnit Client ${idx + 1}`}
                    width={140}
                    height={60}
                    className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
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
              <strong>ColorKnit Events</strong> is an event management company in Pune offering corporate events, exhibitions, weddings, corporate gifting, sports and MICE event solutions.
            </p>
            <p>
              Through creative thinking, thoughtful planning and attention to what matters most, we help businesses and individuals turn their ideas into memorable occasions.
            </p>
          </div>
        }
      />
    </>
  );
}
