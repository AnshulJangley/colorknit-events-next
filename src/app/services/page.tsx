import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import PartnerBanner from "@/components/PartnerBanner";

export const metadata: Metadata = {
  title: "Event Management Services in Pune | ColorKnit Events",
  description:
    "Explore ColorKnit Events' services in Pune, including corporate events, exhibitions, weddings, corporate gifting, sports events and MICE event management.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Corporate Event Management",
      tagline: "We bring your people, partners and business goals together.",
      desc: "Create meaningful experiences that strengthen relationships and make business milestones memorable. From annual days and employee engagement activities to product launches, dealer meets and corporate celebrations, we help bring your business events to life.",
      image: "/images/photo5.jpg",
      link: "/corporate-events",
      ctaLabel: "Explore Corporate Event Management",
    },
    {
      title: "Exhibition Stall Design & Fabrication",
      tagline: "Make your brand stand out before the conversation even begins.",
      desc: "Give your brand a space that attracts attention and encourages visitors to connect. From exhibition stall concepts and creative designs to fabrication and on-site installation, we help transform your exhibition presence into a memorable brand experience.",
      image: "/images/photo3.jpg",
      link: "/services/exhibitions",
      ctaLabel: "Explore Exhibition Services",
    },
    {
      title: "Wedding Event Management",
      tagline: "Celebrate your story with moments worth remembering.",
      desc: "Every wedding deserves its own character. From intimate celebrations to grand wedding functions, we create beautiful experiences that reflect your own signature style, traditions and vision so that every moment feels special, personal and memorable.",
      image: "/images/highlight3.jpg",
      link: "/services/weddings",
      ctaLabel: "Explore Wedding Services",
    },
    {
      title: "Corporate Gifting Services",
      tagline: "Turn thoughtful gestures into lasting business relationships.",
      desc: "Make employees, clients and business partners feel valued with gifting solutions that reflect your brand. From employee welcome kits and festive gifts to customized gifts, return gifts, trophies and awards, we help make every gesture meaningful.",
      image: "/images/card1.jpg",
      link: "/services/corporate-gifting",
      ctaLabel: "Explore Corporate Gifting Services",
    },
    {
      title: "Sports Event Management",
      tagline: "Bring people together through energy, teamwork and competition.",
      desc: "A well planned game should always be an experience to remember. From cricket and football leagues to badminton competitions, adventure sports and corporate or institutional sports events, we help create engaging sporting experiences.",
      image: "/images/highlight4.jpg",
      link: "/services/sports",
      ctaLabel: "Explore Sports Event Management",
    },
    {
      title: "MICE Event Management",
      tagline: "Business experiences that inspire ideas and connections.",
      desc: "We organize meetings, conferences, corporate exhibitions, dealer and distributor meets, annual sales meetings and product launch conferences with meticulous event planning and coordination.",
      image: "/images/photo2.jpg",
      link: "/services/mice",
      ctaLabel: "Explore MICE Event Management",
    },
  ];

  const whyChoosePoints = [
    "Purpose-led planning — we begin by understanding your event objective",
    "Creative thinking that makes each experience engaging and memorable",
    "Attention to the details that help an event come together smoothly",
    "Solutions for corporate requirements, social gatherings and everything in between",
    "A structured approach from first discussion through to final execution",
  ];

  const faqs = [
    {
      question: "What event management services does ColorKnit Events offer in Pune?",
      answer:
        "ColorKnit Events offers a comprehensive range of event management services in Pune including corporate event management, exhibition stall design and fabrication, wedding event management, corporate gifting solutions, sports event management and MICE event planning and coordination.",
    },
    {
      question: "How early should we start planning an event with ColorKnit Events?",
      answer:
        "The earlier the better. For large-scale corporate conferences, MICE events or weddings, we recommend beginning discussions at least two to three months in advance. For smaller events such as team gatherings, product launches or sports days, four to six weeks of lead time is typically sufficient.",
    },
    {
      question: "Can ColorKnit Events manage events outside Pune?",
      answer:
        "Yes. While we are based in Pune, we regularly manage events across India including Mumbai, Delhi NCR, Bangalore, Hyderabad and destination event locations. Our team coordinates logistics, vendors and production to ensure quality delivery regardless of the event location.",
    },
    {
      question: "Do you offer end-to-end event management or individual services?",
      answer:
        "We offer both. ColorKnit Events can manage the entire event from concept to execution, or work with your internal team to support specific elements such as venue coordination, production, branding, gifting or on-site management. We adapt our scope of work to your requirements.",
    },
  ];

  return (
    <>
      <Header />

      <main className="w-full flex-grow">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center py-24 md:py-32 px-4 bg-cover bg-center bg-no-repeat min-h-[580px]"
          style={{ backgroundImage: "url('/images/pexels-enginakyurt-14827102.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-4">
            <span className="inline-block bg-[#dc2626]/20 border border-[#dc2626]/40 text-[#ff6b6b] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Pune &amp; Across India
            </span>

            <h1 className="text-white text-3xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight mb-4 drop-shadow-md max-w-4xl leading-tight">
              Event Management Services in Pune for Every Occasion
            </h1>

            <div className="w-16 h-[3px] bg-[#dc2626] mb-6 shadow-sm"></div>

            <p className="text-[#f1f1f1] text-[17px] md:text-[20px] font-medium tracking-wide mb-6 max-w-3xl">
              From huge business gatherings to customised team gatherings, we bring ideas to life through thoughtfully planned experiences.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-6 md:px-10 py-6 rounded-lg mb-8 max-w-3xl text-left md:text-center text-[#e2e2e2] text-[14.5px] leading-relaxed shadow-lg">
              <p className="mb-3">
                At <strong className="text-white font-semibold">ColorKnit Events</strong>, we believe every event has a purpose and every detail contributes to its success. As a premium event management company in Pune, we offer creative event solutions for businesses, brands and individuals — bringing different occasions together through planning, design and execution.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase shadow-md rounded-[3px] hover:shadow-lg hover:-translate-y-0.5"
              >
                Discuss Your Event With Us
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase rounded-[3px]"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full bg-[#efedea] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                What We Do
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                Our Event Management Services
              </h3>
              <div className="w-[60px] h-[3px] bg-[#008484] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                Six specialised service areas. One team committed to getting every detail right.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h4 className="text-[#222] text-[18px] font-bold mb-1 group-hover:text-[#008484] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[#847565] text-[13px] font-medium italic mb-3">
                        {item.tagline}
                      </p>
                      <p className="text-[#555] text-[13.5px] leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>
                    {item.link !== "#" ? (
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#008484] hover:text-[#006666] uppercase tracking-wider transition-colors pt-2 border-t border-gray-100"
                      >
                        {item.ctaLabel} <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#847565] uppercase tracking-wider pt-2 border-t border-gray-100">
                        Coming Soon <ArrowRight size={14} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose ColorKnit Events Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                  Different Events. One Commitment.
                </h2>
                <h3 className="text-[#2b2b2b] text-[26px] md:text-[34px] font-bold tracking-tight mb-4">
                  Why choose ColorKnit Events?
                </h3>
                <div className="w-[50px] h-[3px] bg-[#dc2626] mb-8"></div>

                <div className="flex flex-col gap-4 mb-8">
                  {whyChoosePoints.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3.5 bg-white p-4 rounded-md border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#e8f5e9] flex items-center justify-center shrink-0">
                        <Check className="text-[#2e7d32]" size={15} strokeWidth={3} />
                      </div>
                      <span className="text-[#333] text-[14.5px] font-semibold">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 font-bold text-[13px] uppercase transition-all shadow-md rounded-[3px] tracking-wider hover:shadow-lg"
                >
                  Discuss Your Event With Us
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Photograph */}
              <div className="relative">
                <div className="relative p-2.5 border-[8px] border-[#e2d5c8] bg-white rounded-lg shadow-xl mx-auto w-full max-w-[500px]">
                  <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
                    <Image
                      src="/images/photo5.jpg"
                      alt="ColorKnit Events — event management services in Pune"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#170a1c] text-white p-4 rounded shadow-lg max-w-[220px] hidden sm:block border-l-4 border-[#dc2626]">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#ff6b6b] mb-1">
                    Meaningful Experiences
                  </p>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    Purpose-led event planning across Pune and India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full bg-gradient-to-r from-[#170a1c] via-[#2a1334] to-[#120815] py-20 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="text-[#ff6b6b] text-[13px] font-bold tracking-widest uppercase mb-3">
              Connect With ColorKnit Events
            </span>
            <h2 className="text-white text-[26px] md:text-[36px] font-bold mb-6 tracking-tight">
              Let&apos;s Create Something Memorable Together
            </h2>
            <div className="w-[50px] h-[3px] bg-[#dc2626] mb-8"></div>

            <p className="text-[#e2e2e2] text-[15px] md:text-[16px] leading-relaxed mb-4 max-w-2xl">
              Whether you are planning a corporate gathering, preparing for an exhibition, organising a sporting event or planning for an intimate wedding, ColorKnit Events is ready to help you take the next step.
            </p>
            <p className="text-[#c7c7c7] text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-2xl">
              Tell us what you have in mind. Let&apos;s turn your ideas into an experience worth remembering.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white font-bold text-[13px] px-8 py-4 rounded-[3px] uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <Mail size={16} />
                Discuss Your Event With Us
              </Link>

              <Link
                href="https://wa.me/919811121153?text=Hi%20ColorKnit%20Events%2C%20I%20would%20like%20to%20discuss%20an%20event."
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

        {/* FAQ Section */}
        <section className="w-full bg-[#e9e6f0] py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cinzel text-[#847565] text-[13px] md:text-[14px] font-bold tracking-[0.2em] uppercase mb-2">
                Frequently Asked Questions
              </h2>
              <h3 className="text-[#222] text-[22px] md:text-[28px] font-bold tracking-tight mb-4">
                Event Management Services in Pune
              </h3>
              <div className="w-[40px] h-[2px] bg-[#a88f78] mx-auto mb-6"></div>
              <p className="text-[#555] text-[14.5px]">
                Common questions about our event planning, production and execution capabilities.
              </p>
            </div>

            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Contact Banner Bar */}
        <PartnerBanner />
      </main>

      <Footer
        companyDescription={
          <div className="leading-relaxed mb-4 font-medium text-[#555]">
            <p className="mb-3">
              <strong>ColorKnit Events</strong> is a premium event management company in Pune offering services across corporate events, exhibitions, weddings, corporate gifting, sports events and MICE event management.
            </p>
            <p>
              From concept to execution, we bring purpose, creativity and attention to detail to every occasion — helping businesses, brands and individuals create experiences worth remembering.
            </p>
          </div>
        }
      />
    </>
  );
}
