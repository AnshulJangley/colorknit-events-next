import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import PartnerBanner from "@/components/PartnerBanner";

export const metadata: Metadata = {
  title: "MICE Event Management in Pune | Meetings & Conferences – ColorKnit",
  description:
    "Looking for MICE event management in Pune? ColorKnit plans corporate meetings, conferences, exhibitions, dealer meets, sales meetings and business events.",
};

export default function MicePage() {
  const pillars = [
    {
      num: "01",
      title: "MEETINGS",
      desc: "Structured boardroom meetings, executive retreats, and town halls equipped with seamless AV, presentation tech, and refined hospitality.",
    },
    {
      num: "02",
      title: "INCENTIVES",
      desc: "Reward programmes, curated retreats, and team-building experiences designed to motivate employees and acknowledge key achievements.",
    },
    {
      num: "03",
      title: "CONFERENCES",
      desc: "National and international industry conferences, symposiums, multi-track agendas, keynote staging, and delegate management.",
    },
    {
      num: "04",
      title: "EXHIBITIONS",
      desc: "Corporate expositions, buyer-seller trade meets, custom branded pavilions, and floor management built for maximum brand engagement.",
    },
  ];

  const services = [
    {
      title: "Corporate Meetings & Business Meetings",
      desc: "We help businesses organise meetings that offer a professional and comfortable setting for productive discussions.",
      image: "/images/photo1.jpg",
      link: "#",
    },
    {
      title: "National & International Conferences",
      desc: "Whether planning a professional knowledge-sharing event or a large business conference, ColorKnit Events works around your programme, audience and organisational requirements.",
      image: "/images/photo2.jpg",
      link: "#",
    },
    {
      title: "Corporate Exhibitions & Trade Shows",
      desc: "From business showcases to industry trade exhibitions, we help coordinate the arrangements that support your exhibition objectives.",
      image: "/images/photo6.jpg",
      link: "#",
    },
    {
      title: "Dealer & Distributor Conferences",
      desc: "We plan seamless dealer and distributor events, making sure that they receive the best service and have a lasting impression about your brand and its products.",
      image: "/images/photo3.jpg",
      link: "#",
    },
    {
      title: "Annual Sales Meetings",
      desc: "We help businesses create organised sales gatherings where important messages, team achievements and future plans receive the attention they deserve.",
      image: "/images/photo4.jpg",
      link: "#",
    },
    {
      title: "Product Launch Conferences",
      desc: "From business presentations to product unveiling experiences, we help bring the different elements of your launch together.",
      image: "/images/photo5.jpg",
      link: "#",
    },
  ];

  const whyChoosePoints = [
    "Planning Around Business Objectives",
    "Support Across Different MICE Formats",
    "Professional Event Presentation",
    "Attendee-Focused Coordination",
    "Organised Event Execution",
  ];

  const industries = [
    "Manufacturing & Engineering",
    "Healthcare & Pharmaceuticals",
    "Information Technology",
    "Banking & Financial Services",
    "Real Estate & Infrastructure",
    "FMCG & Retail",
    "Government & Public Sector",
  ];

  const faqs = [
    {
      question: "What does MICE stand for in event management?",
      answer:
        "MICE stands for Meetings, Incentives, Conferences and Exhibitions. It refers to business events that bring professionals, employees, clients and industry stakeholders together for communication, networking, learning, recognition and business development.",
    },
    {
      question: "What types of MICE events does ColorKnit Events organise?",
      answer:
        "Our current MICE service categories include corporate meetings, national and international conferences, corporate exhibitions and trade shows, dealer and distributor conferences, annual sales meetings and product launch conferences.",
    },
    {
      question: "Can you help organise national and international conferences?",
      answer:
        "We can discuss conference requirements involving speakers and delegates from different locations. The planning scope, venue arrangements, travel-related coordination and other services will depend on the event brief and agreed responsibilities.",
    },
    {
      question: "How early should we start planning a MICE event?",
      answer:
        "The ideal timeline depends on the event's size, venue, attendee numbers, technical requirements and programme. Larger conferences and exhibitions generally benefit from earlier planning. Share your tentative date and requirements so we can discuss a suitable timeline.",
    },
  ];

  return (
    <>
      <Header />

      <main className="w-full flex-grow">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center py-24 md:py-32 px-4 bg-cover bg-center bg-no-repeat min-h-[580px]"
          style={{ backgroundImage: "url('/images/photo2.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-4">
            <span className="inline-block bg-[#dc2626]/20 border border-[#dc2626]/40 text-[#ff6b6b] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Pune &amp; Across India
            </span>

            <h1 className="text-white text-3xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight mb-4 drop-shadow-md max-w-4xl leading-tight">
              MICE Event Management in Pune
            </h1>

            <div className="w-16 h-[3px] bg-[#dc2626] mb-6 shadow-sm"></div>

            <p className="text-[#f1f1f1] text-[17px] md:text-[20px] font-medium tracking-wide mb-6 max-w-3xl">
              Creating Meaningful Business Experiences Through Meetings, Incentives, Conferences &amp; Exhibitions
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-6 md:px-10 py-6 rounded-lg mb-8 max-w-3xl text-left md:text-center text-[#e2e2e2] text-[14.5px] leading-relaxed shadow-lg">
              <p className="mb-3">
                At <strong className="text-white font-semibold">ColorKnit Events</strong>, we provide MICE Event Management in Pune for companies and organisations looking to create well-planned, professional and engaging business experiences.
              </p>
              <p>
                MICE stands for Meetings, Incentives, Conferences and Exhibitions. Each format serves a different business purpose, but all require thoughtful planning, organised coordination and attention to the attendee experience.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase shadow-md rounded-[3px] hover:shadow-lg hover:-translate-y-0.5"
              >
                Discuss Your MICE Event
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase rounded-[3px]"
              >
                Explore MICE Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Four Pillars Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                Core Competencies
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                The Four Pillars of MICE Excellence
              </h3>
              <div className="w-[60px] h-[3px] bg-[#dc2626] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                From high-level executive meetings to grand-scale international symposiums, our framework guarantees precision execution across every MICE format.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="bg-white rounded-lg p-7 border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="mb-6">
                      <span className="text-[#dc2626] font-black text-[22px] tracking-wider">
                        {pillar.num}
                      </span>
                    </div>
                    <h4 className="text-[#2b2b2b] text-[17px] font-bold tracking-wider mb-3">
                      {pillar.title}
                    </h4>
                    <p className="text-[#555] text-[14px] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MICE Event Solutions for Every Business Requirement */}
        <section id="services" className="w-full bg-[#efedea] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                MICE Event Solutions for Every Business Requirement
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                Professional Gatherings That Support Your Business Goals
              </h3>
              <div className="w-[60px] h-[3px] bg-[#008484] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                Meticulously coordinated business conferences, delegate meets, and executive forums designed to elevate your company presence.
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
                      <h4 className="text-[#222] text-[18px] font-bold mb-3 group-hover:text-[#008484] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[#555] text-[13.5px] leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#847565] uppercase tracking-wider pt-2 border-t border-gray-100">
                      Custom Solution <ArrowRight size={14} />
                    </div>
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
                  Proven Corporate Expertise
                </h2>
                <h3 className="text-[#2b2b2b] text-[26px] md:text-[34px] font-bold tracking-tight mb-4">
                  Why Choose ColorKnit Events for MICE Event Management?
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

                {/* Industries Sub-block */}
                <div className="mb-8 pt-4 border-t border-gray-200">
                  <h4 className="text-[#333] text-[14px] font-bold uppercase tracking-wider mb-3">
                    MICE Event Management for Different Industries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((ind) => (
                      <span
                        key={ind}
                        className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#444] text-[12.5px] font-medium shadow-xs"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 font-bold text-[13px] uppercase transition-all shadow-md rounded-[3px] tracking-wider hover:shadow-lg"
                >
                  Discuss Your MICE Requirements
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Event Photograph */}
              <div className="relative">
                <div className="relative p-2.5 border-[8px] border-[#e2d5c8] bg-white rounded-lg shadow-xl mx-auto w-full max-w-[500px]">
                  <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
                    <Image
                      src="/images/photo2.jpg"
                      alt="ColorKnit Events MICE conference in Pune"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#170a1c] text-white p-4 rounded shadow-lg max-w-[220px] hidden sm:block border-l-4 border-[#dc2626]">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#ff6b6b] mb-1">
                    MICE Excellence
                  </p>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    Conferences, dealer meets &amp; executive forums in Pune.
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
              Plan Your Next MICE Event in Pune with ColorKnit Events
            </h2>
            <div className="w-[50px] h-[3px] bg-[#dc2626] mb-8"></div>

            <p className="text-[#e2e2e2] text-[15px] md:text-[16px] leading-relaxed mb-4 max-w-2xl">
              At ColorKnit Events, we help businesses coordinate MICE events with attention to their objectives, audience and requirements.
            </p>
            <p className="text-[#c7c7c7] text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-2xl">
              Planning a meeting, conference, exhibition or corporate gathering? Let&apos;s discuss your event.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="mailto:contact@colorknit.com?subject=Enquiry%20About%20MICE%20Event%20Management"
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white font-bold text-[13px] px-8 py-4 rounded-[3px] uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <Mail size={16} />
                Enquire About MICE Event Management
              </Link>

              <Link
                href="https://wa.me/919811121153?text=Hi%20ColorKnit%20Events%2C%20I%20would%20like%20to%20discuss%20a%20MICE%20event."
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
                Frequently Asked Questions About MICE Event Management
              </h3>
              <div className="w-[40px] h-[2px] bg-[#a88f78] mx-auto mb-6"></div>
              <p className="text-[#555] text-[14.5px]">
                Common questions regarding meetings, incentive tours, national conferences, and corporate exhibitions in Pune.
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
              <strong>ColorKnit Events</strong> is a premier MICE event management company in Pune. We plan and manage corporate meetings, national and international conferences, corporate exhibitions, dealer meets, sales meets, and business launch events.
            </p>
            <p>
              From strategic agenda design and speaker coordination to on-site audiovisual production and delegate hospitality, we ensure seamless business experiences that support your organisational objectives.
            </p>
          </div>
        }
      />
    </>
  );
}

