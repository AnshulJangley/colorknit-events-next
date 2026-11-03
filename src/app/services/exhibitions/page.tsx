import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import PartnerBanner from "@/components/PartnerBanner";

export const metadata: Metadata = {
  title: "Exhibition Planning & Management in Pune | ColorKnit Events",
  description:
    "ColorKnit Events offers exhibition planning and management in Pune — stall design, 3D visualization, fabrication, branding, installation and dismantling for trade shows, expos and corporate exhibitions.",
};

export default function ExhibitionsPage() {
  const pillars = [
    {
      num: "01",
      title: "PRESENTATION",
      desc: "We organise the stall layout, product displays, graphics and visitor areas to present your brand and offerings clearly within the available space.",
    },
    {
      num: "02",
      title: "DESIGN",
      desc: "We develop exhibition concepts around your brand identity, objectives, space dimensions and practical requirements, helping balance visual impact with usability.",
    },
    {
      num: "03",
      title: "INSTALLATION",
      desc: "We coordinate the fabrication, transportation, setup and final checks required to prepare the stall for the exhibition, subject to the agreed project scope and venue rules.",
    },
  ];

  const services = [
    {
      title: "Exhibition Stall Design and 3D Visualisation",
      desc: "We develop stall concepts that reflect your brand, product display needs and exhibition objectives. Where required, 3D visualisation helps you review the proposed layout, visual elements and use of space before fabrication begins.",
      image: "/images/photo3.jpg",
      link: "#",
    },
    {
      title: "Stall Fabrication and Production",
      desc: "We coordinate the production of stall structures, counters, display units and other agreed design elements, with attention to the approved concept, materials and event specifications.",
      image: "/images/photo6.jpg",
      link: "#",
    },
    {
      title: "Installation and Dismantling",
      desc: "We coordinate the assembly and setup of the exhibition stall at the venue, followed by dismantling after the event according to the organiser's schedule and applicable venue requirements.",
      image: "/images/photo1.jpg",
      link: "#",
    },
    {
      title: "Interactive Displays and Product Presentation",
      desc: "Where appropriate, we coordinate screens, demonstration areas, digital displays and other interactive elements that help visitors explore your products or services at the stall.",
      image: "/images/photo4.jpg",
      link: "#",
    },
    {
      title: "Logistics and On-Site Project Management",
      desc: "We coordinate material movement, delivery schedules, setup requirements and on-site support within the agreed project scope, helping address practical issues as the exhibition approaches and during the event.",
      image: "/images/photo7.jpg",
      link: "#",
    },
    {
      title: "Specialised Industry Exhibitions",
      desc: "We plan and manage exhibition presence across trade shows, consumer expos, technology and innovation exhibitions, industrial shows, food and agriculture expos, automotive shows and product showcases.",
      image: "/images/photo2.jpg",
      link: "#",
    },
  ];

  const whyChoosePoints = [
    "Design tailored to your brand identity, product range and exhibition objectives",
    "Better use of available space through considered layout and visitor flow planning",
    "End-to-end coordination from concept through fabrication to installation",
    "Consistent branding across graphics, signage, display elements and stall structure",
    "Practical project coordination around your exhibition timeline and venue requirements",
  ];

  const faqs = [
    {
      question: "What does exhibition planning and management include?",
      answer:
        "Exhibition planning and management can include stall concept development, layout planning, 3D visualisation, fabrication, branding, graphics, transportation, installation, on-site coordination and dismantling. The exact scope depends on the project requirements and agreed services.",
    },
    {
      question: "Does ColorKnit Events provide exhibition stall design and fabrication in Pune?",
      answer:
        "Yes. Our exhibition service covers stall design, fabrication, installation, branding, graphics, logistics and dismantling. Contact the team to discuss your exhibition location, stall size, design requirements and project timeline.",
    },
    {
      question: "Can you design a customised exhibition stall for our brand?",
      answer:
        "Exhibition stall concepts can be tailored to your brand identity, product range, objectives, space dimensions and visitor requirements. Sharing your brand guidelines and exhibition details helps the team develop a relevant concept.",
    },
    {
      question: "Do you provide 3D exhibition stall designs before fabrication?",
      answer:
        "Yes. Where required, 3D stall visualisation is part of the design process, helping you review the proposed layout, visual elements and use of space before fabrication begins. Discuss the visualisation requirements with the team to confirm the deliverables, revision process and approval timeline for your project.",
    },
  ];

  return (
    <>
      <Header />

      <main className="w-full flex-grow">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center py-24 md:py-32 px-4 bg-cover bg-center bg-no-repeat min-h-[580px]"
          style={{ backgroundImage: "url('/images/photo3.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-4">
            <span className="inline-block bg-[#dc2626]/20 border border-[#dc2626]/40 text-[#ff6b6b] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Pune &amp; Across India
            </span>

            <h1 className="text-white text-3xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight mb-4 drop-shadow-md max-w-4xl leading-tight">
              Exhibition Planning &amp; Management
            </h1>

            <div className="w-16 h-[3px] bg-[#dc2626] mb-6 shadow-sm"></div>

            <p className="text-[#f1f1f1] text-[17px] md:text-[20px] font-medium tracking-wide mb-6 max-w-3xl">
              Make your brand stand out before the conversation even begins.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-6 md:px-10 py-6 rounded-lg mb-8 max-w-3xl text-left md:text-center text-[#e2e2e2] text-[14.5px] leading-relaxed shadow-lg">
              <p className="mb-3">
                At <strong className="text-white font-semibold">ColorKnit Events</strong>, we help businesses transform exhibition spaces into purposeful brand experiences. From creative concepts and 3D stall design to fabrication, branding, installation and dismantling, our exhibition planning and management services bring the essential elements together under one coordinated plan.
              </p>
              <p>
                Whether you are preparing for a trade show, industry exhibition, consumer expo or product showcase, we focus on making your space functional, visually engaging and aligned with your business objectives.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase shadow-md rounded-[3px] hover:shadow-lg hover:-translate-y-0.5"
              >
                Plan Your Exhibition Stall
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase rounded-[3px]"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </div>
        </section>

        {/* Three Pillars Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                The Essentials
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                What Makes an Exhibition Stand Out?
              </h3>
              <div className="w-[60px] h-[3px] bg-[#dc2626] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                Every exhibition has a different audience and objective. Our approach brings together the design, fabrication and coordination needed to make your brand presence work at any exhibition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* Exhibition Services Section */}
        <section id="services" className="w-full bg-[#efedea] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                Our Exhibition Planning and Management Services
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                What We Offer
              </h3>
              <div className="w-[60px] h-[3px] bg-[#008484] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                From the first design discussion to the final dismantling, we coordinate the key elements involved in preparing an exhibition stall.
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
                  Exhibition Solutions That Bring Your Brand to Life
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
                  Discuss Your Exhibition Project
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Event Photograph */}
              <div className="relative">
                <div className="relative p-2.5 border-[8px] border-[#e2d5c8] bg-white rounded-lg shadow-xl mx-auto w-full max-w-[500px]">
                  <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
                    <Image
                      src="/images/photo6.jpg"
                      alt="ColorKnit Events exhibition stall design and installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#170a1c] text-white p-4 rounded shadow-lg max-w-[220px] hidden sm:block border-l-4 border-[#dc2626]">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#ff6b6b] mb-1">
                    Stall Excellence
                  </p>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    Custom design, fabrication &amp; on-site installation in Pune.
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
              Let&apos;s Create an Exhibition Space That Suits Your Brand Voice
            </h2>
            <div className="w-[50px] h-[3px] bg-[#dc2626] mb-8"></div>

            <p className="text-[#e2e2e2] text-[15px] md:text-[16px] leading-relaxed mb-4 max-w-2xl">
              Your exhibition stall should make it easy for visitors to discover your business, explore your products and start meaningful conversations.
            </p>
            <p className="text-[#c7c7c7] text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-2xl">
              Let ColorKnit Events know about your upcoming exhibition, your space requirements and your goals. Let&apos;s discuss a stall design and management plan suited to your needs.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="mailto:contact@colorknit.com?subject=Enquiry%20About%20Exhibition%20Stall"
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white font-bold text-[13px] px-8 py-4 rounded-[3px] uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <Mail size={16} />
                Discuss Your Exhibition
              </Link>

              <Link
                href="https://wa.me/919811121153?text=Hi%20ColorKnit%20Events%2C%20I%20would%20like%20to%20discuss%20an%20exhibition%20stall."
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
                Exhibition Planning &amp; Management in Pune
              </h3>
              <div className="w-[40px] h-[2px] bg-[#a88f78] mx-auto mb-6"></div>
              <p className="text-[#555] text-[14.5px]">
                Common questions about our exhibition stall design, fabrication and installation services.
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
              <strong>ColorKnit Events</strong> offers exhibition planning and management in Pune — helping businesses transform exhibition spaces into purposeful brand experiences through stall design, fabrication, installation and on-site coordination.
            </p>
            <p>
              From trade shows and industry exhibitions to consumer expos and product showcases, we manage the details that help your brand show up well at every exhibition.
            </p>
          </div>
        }
      />
    </>
  );
}
