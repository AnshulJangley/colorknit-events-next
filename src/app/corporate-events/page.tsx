import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Check, 
  Phone, 
  MessageCircle, 
  Mail, 
  Compass, 
  PiggyBank, 
  MapPin, 
  Wrench, 
  Users, 
  Sparkles, 
  CalendarCheck, 
  Award, 
  Briefcase, 
  Megaphone 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import PartnerBanner from "@/components/PartnerBanner";

export const metadata: Metadata = {
  title: "Corporate Event Management Company in Pune | ColorKnit",
  description:
    "ColorKnit Events is a corporate event management company in Pune, planning conferences, dealer meets, annual events, client engagements and corporate celebrations.",
};

export default function CorporateEvents() {
  const pillars = [
    {
      num: "01",
      title: "STRATEGY",
      icon: Compass,
      desc: "We begin by understanding your event objective, audience, key messages and expected outcomes.",
    },
    {
      num: "02",
      title: "BUDGET",
      icon: PiggyBank,
      desc: "We align the event plan with your budget, helping prioritize the elements that matter most to your guests and business.",
    },
    {
      num: "03",
      title: "VENUE",
      icon: MapPin,
      desc: "We help identify a suitable venue based on the event format, location, capacity, facilities and overall experience you want to create.",
    },
    {
      num: "04",
      title: "EXECUTION",
      icon: Wrench,
      desc: "We coordinate the event team, vendors, production and on-site requirements to keep the programme organized and on schedule.",
    },
  ];

  const services = [
    {
      title: "Dealer and Distributor Meets",
      desc: "Bring your channel partners together for business updates, product discussions, sales planning and relationship-building. We coordinate the event format, venue, branding and programme flow around your objectives.",
      image: "/images/photo3.jpg",
      icon: Users,
      link: "#",
    },
    {
      title: "Client Engagement Events",
      desc: "From professional gatherings to appreciation events, we help shape an environment that encourages interaction and strengthens business relationships.",
      image: "/images/photo1.jpg",
      icon: Sparkles,
      link: "#",
    },
    {
      title: "Corporate Annual Events",
      desc: "We coordinate the event concept, stage, production and programme requirements to suit your organization’s culture and scale.",
      image: "/images/photo8.jpg",
      icon: CalendarCheck,
      link: "/annual-day-gala-events",
    },
    {
      title: "Rewards and Recognition Events",
      desc: "Give employee achievements the recognition they deserve. We help organize award ceremonies, appreciation programmes and recognition events with a well-coordinated guest experience.",
      image: "/images/photo7.jpg",
      icon: Award,
      link: "/town-hall-rr",
    },
    {
      title: "Business Meetings & Town Halls",
      desc: "Support leadership communication, business updates and team alignment with organized meetings and town halls. We coordinate venue arrangements, audiovisual requirements, seating and the running order.",
      image: "/images/photo2.jpg",
      icon: Briefcase,
      link: "/town-hall-rr",
    },
    {
      title: "Product Launches & Announcements",
      desc: "With coordinated and meticulously planned details we help introduce a product, service or business initiative through coordinated venue planning, stage setup, branding, audiovisual production and event-day coordination.",
      image: "/images/photo4.jpg",
      icon: Megaphone,
      link: "#",
    },
  ];

  const whyChoosePoints = [
    "Planning Around Your Requirements",
    "Creative Concepts With Your Brand in Mind",
    "Coordination Across Event Elements",
    "A Structured Approach From Start to Finish",
    "Flexible Solutions for Different Event Formats",
  ];

  const faqs = [
    {
      question: "What does a corporate event management company in Pune do?",
      answer:
        "A corporate event management company helps businesses plan and coordinate events such as conferences, dealer meets, annual functions, client engagement programmes, town halls and employee recognition events. Services can include planning, venue selection, branding, audiovisual production, hospitality, vendor coordination and on-site execution.",
    },
    {
      question: "How early should we book a corporate event planner?",
      answer:
        "It is useful to begin planning as early as possible, particularly for large conferences, annual events or programmes requiring complex production and guest arrangements. The ideal timeline depends on your event date, venue availability, attendance and scope.",
    },
    {
      question: "Do you help with venue selection and event production?",
      answer:
        "Venue planning and event production are part of the service areas described on this page. Depending on the agreed scope, arrangements may include venue coordination, stage setup, branding, sound, lighting, screens and related technical requirements.",
    },
    {
      question: "How can we request a corporate event proposal?",
      answer:
        "Contact ColorKnit Events with your event type, preferred date, location, estimated number of attendees and budget range. This information helps the team understand your requirements and discuss the next steps.",
    },
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
          {/* Subtle dark overlay for contrast while preserving event stage ambiance */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-4">
            <span className="inline-block bg-[#dc2626]/20 border border-[#dc2626]/40 text-[#ff6b6b] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Pune &amp; Across India
            </span>

            <h1 className="text-white text-3xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight mb-4 drop-shadow-md max-w-4xl leading-tight">
              Corporate Event Management Company in Pune
            </h1>

            <div className="w-16 h-[3px] bg-[#dc2626] mb-6 shadow-sm"></div>

            <p className="text-[#f1f1f1] text-[17px] md:text-[20px] font-medium tracking-wide mb-6 max-w-3xl">
              Corporate events planned with purpose, creativity and attention to every detail.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-6 md:px-10 py-6 rounded-lg mb-8 max-w-3xl text-left md:text-center text-[#e2e2e2] text-[14.5px] leading-relaxed shadow-lg">
              <p className="mb-3">
                At <strong className="text-white font-semibold">ColorKnit Events</strong>, we bring people, ideas and businesses together through thoughtfully planned corporate experiences. As a corporate event management company in Pune, we help businesses organize events that reflect their brand, engage their audience and run smoothly from the first discussion to the final wrap-up.
              </p>
              <p>
                From MICE events and dealer meets to annual celebrations, client engagement programmes and employee recognition events, we coordinate the essential details so your team can focus on the people and purpose behind the occasion.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase shadow-md rounded-[3px] hover:shadow-lg hover:-translate-y-0.5"
              >
                Plan Your Corporate Event
                <ArrowRight size={16} />
              </Link>
              <Link 
                href="#services" 
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase rounded-[3px]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Four Pillars Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                Four Pillars of Successful Corporate Events
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                The Foundation of Every Successful Corporate Event
              </h3>
              <div className="w-[60px] h-[3px] bg-[#dc2626] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                Every event has a different objective. Our approach brings together the planning, resources and coordination needed to make each occasion work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={pillar.num}
                    className="bg-white rounded-lg p-7 border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[#dc2626] font-black text-[22px] tracking-wider">
                          {pillar.num}
                        </span>
                        <div className="w-12 h-12 rounded-full bg-[#fef2f2] flex items-center justify-center text-[#dc2626] group-hover:bg-[#dc2626] group-hover:text-white transition-colors duration-300">
                          <IconComponent size={22} />
                        </div>
                      </div>
                      <h4 className="text-[#2b2b2b] text-[17px] font-bold tracking-wider mb-3">
                        {pillar.title}
                      </h4>
                      <p className="text-[#555] text-[14px] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Specialized Corporate Event Services */}
        <section id="services" className="w-full bg-[#efedea] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                Our Specialized Corporate Event Services
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                Corporate Events We Plan and Manage
              </h3>
              <div className="w-[60px] h-[3px] bg-[#008484] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                Tailored solutions engineered around your brand vision, attendee profiles, and specific operational deliverables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((item, index) => {
                const Icon = item.icon;
                return (
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
                      <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#008484] shadow-sm">
                        <Icon size={18} />
                      </div>
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
                      {item.link !== "#" ? (
                        <Link 
                          href={item.link} 
                          className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#008484] hover:text-[#006666] uppercase tracking-wider transition-colors pt-2 border-t border-gray-100"
                        >
                          View Details <ArrowRight size={14} />
                        </Link>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#847565] uppercase tracking-wider pt-2 border-t border-gray-100">
                          Custom Solution <ArrowRight size={14} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose ColorKnit Events Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                  Proven Experience &amp; Dedication
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
                  Discuss Your Corporate Event
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Event Photograph */}
              <div className="relative">
                <div className="relative p-2.5 border-[8px] border-[#e2d5c8] bg-white rounded-lg shadow-xl mx-auto w-full max-w-[500px]">
                  <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
                    <Image 
                      src="/images/photo5.jpg" 
                      alt="Actual ColorKnit corporate event stage setup and audience" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#170a1c] text-white p-4 rounded shadow-lg max-w-[220px] hidden sm:block border-l-4 border-[#dc2626]">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#ff6b6b] mb-1">
                    On-Site Excellence
                  </p>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    Turnkey staging, production &amp; audience engagement in Pune.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Plan Your Next Corporate Event Section (CTA block) */}
        <section id="contact" className="w-full bg-gradient-to-r from-[#170a1c] via-[#2a1334] to-[#120815] py-20 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="text-[#ff6b6b] text-[13px] font-bold tracking-widest uppercase mb-3">
              Connect With ColorKnit Events
            </span>
            <h2 className="text-white text-[26px] md:text-[36px] font-bold mb-6 tracking-tight">
              Let&apos;s Plan Your Next Corporate Event
            </h2>
            <div className="w-[50px] h-[3px] bg-[#dc2626] mb-8"></div>
            
            <p className="text-[#e2e2e2] text-[15px] md:text-[16px] leading-relaxed mb-4 max-w-2xl">
              Every business event has a purpose, whether it is bringing teams together, appreciating clients, connecting with channel partners or celebrating a company milestone. ColorKnit Events can help you plan the details around that purpose.
            </p>
            <p className="text-[#c7c7c7] text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-2xl">
              Tell us what you are planning, and let&apos;s discuss an event approach suited to your requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white font-bold text-[13px] px-8 py-4 rounded-[3px] uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <Mail size={16} />
                Enquire About Your Event
              </Link>
              
              <Link 
                href="https://wa.me/919811121153?text=Hi%20ColorKnit%20Events%2C%20I%20would%20like%20to%20discuss%20planning%20a%20corporate%20event." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white font-bold text-[13px] px-8 py-4 rounded-[3px] uppercase tracking-wider transition-all"
              >
                <MessageCircle size={16} />
                Copy Enquiry Message
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
                Corporate Event Management in Pune
              </h3>
              <div className="w-[40px] h-[2px] bg-[#a88f78] mx-auto mb-6"></div>
              <p className="text-[#555] text-[14.5px]">
                Common questions about our corporate event planning, production, and execution capabilities.
              </p>
            </div>

            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Contact Banner Bar */}
        <PartnerBanner />
      </main>

      <Footer companyDescription={
        <div className="leading-relaxed mb-4 font-medium text-[#555]">
          <p className="mb-3">
            <strong>ColorKnit Events</strong> is a premier corporate event management company in Pune. We deliver thoughtfully planned corporate experiences—from MICE and dealer meets to annual celebrations, town halls, and client engagements.
          </p>
          <p>
            Combining creative strategy, venue expertise, and meticulous on-site execution, we ensure every event reflects your brand and accomplishes your business objectives.
          </p>
        </div>
      } />
    </>
  );
}
