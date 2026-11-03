import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import PartnerBanner from "@/components/PartnerBanner";

export const metadata: Metadata = {
  title: "Sports Event Management in Pune | ColorKnit Events",
  description:
    "Looking for sports event management in Pune? ColorKnit Events organises sports tournaments, cricket leagues, football and badminton competitions, corporate sports days and school sports events.",
};

export default function SportsPage() {
  const pillars = [
    {
      num: "01",
      title: "FORMAT & FIXTURES",
      desc: "We design tournament brackets, match schedules, league rules, and point systems tailored to your participant count and skill levels.",
    },
    {
      num: "02",
      title: "VENUE & TURF",
      desc: "We secure top-grade turfs, indoor arenas, stadiums, or school grounds suited to your sports categories and spectator requirements.",
    },
    {
      num: "03",
      title: "MEDICAL & SAFETY",
      desc: "Round-the-clock doctor and ambulance facilities, trained first-responders, and hydration zones ensure participant health and safety.",
    },
    {
      num: "04",
      title: "OFFICIALS & CEREMONIES",
      desc: "We coordinate certified referees, professional scoring systems, live match commentary, and customized medals, trophies, and awards.",
    },
  ];

  const services = [
    {
      title: "Sports Tournament Management",
      desc: "ColorKnit Events helps organise sports tournaments for companies, educational institutions, clubs and other organisations. We discuss the competition format and requirements to create an event that suits your participants.",
      image: "/images/highlight4.jpg",
      link: "#",
    },
    {
      title: "Cricket League Management",
      desc: "Be it a turf at the top of a high rise or a mini stadium curated as per your employee strength, we plan every detail based on your preferred format, number of teams, venue and participant requirements.",
      image: "/images/photo8.jpg",
      link: "#",
    },
    {
      title: "Football League Management",
      desc: "ColorKnit Events helps coordinate football tournaments and leagues based on the number of participating teams, competition format, venue and schedule.",
      image: "/images/card5.jpg",
      link: "#",
    },
    {
      title: "Badminton Competition Management",
      desc: "We help organise badminton competitions for companies, schools, colleges and other groups, coordinating indoor courts, tournament brackets, and certified match officials.",
      image: "/images/photo1.jpg",
      link: "#",
    },
    {
      title: "Adventure Sports Competitions",
      desc: "The adrenaline rush says it all when it comes to adventure sports. ColorKnit Events plans adventure sports competitions and activity-based experiences according to the nature of the activity, participant profile, venue and event objectives.",
      image: "/images/photo4.jpg",
      link: "#",
    },
    {
      title: "School, College & University Sports Events",
      desc: "We help schools, colleges and universities plan sporting events that bring students, teachers and participants together with well-coordinated logistics and athletics schedules.",
      image: "/images/photo2.jpg",
      link: "#",
    },
    {
      title: "Corporate Sports Event Management",
      desc: "ColorKnit Events helps businesses plan corporate sports activities based on employee engagement objectives, available time and budget, promoting team spirit and fitness.",
      image: "/images/photo3.jpg",
      link: "#",
    },
  ];

  const whyChoosePoints = [
    "Event Formats for Different Audiences",
    "Multiple Sporting Categories",
    "Participant-Focused Planning",
    "Round the clock Doctor and ambulance facility for outdoor events",
    "Flexible Event Requirements",
    "Coordinated Event Experience",
  ];

  const faqs = [
    {
      question: "Do you organise corporate sports events in Pune?",
      answer:
        "Yes. We help businesses plan corporate sports days, employee competitions, cricket tournaments, football matches, badminton events and other sporting activities based on their objectives.",
    },
    {
      question: "Can you organise multiple sports in one event?",
      answer:
        "Multi-sport events can be discussed according to your participant numbers, available facilities, schedule and budget. Share the sports you want to include so we can understand the requirements.",
    },
    {
      question: "Do you help with sports venue and match scheduling?",
      answer:
        "Venue coordination and match scheduling can be included depending on the event requirements and agreed scope. We discuss the suitable arrangements based on the sport, participants and event format.",
    },
    {
      question: "Can you plan a one-day sports event?",
      answer:
        "Yes. We can discuss one-day sports events as well as multi-day competitions. The format and arrangements depend on the number of participants and the selected activities.",
    },
  ];

  return (
    <>
      <Header />

      <main className="w-full flex-grow">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center py-24 md:py-32 px-4 bg-cover bg-center bg-no-repeat min-h-[580px]"
          style={{ backgroundImage: "url('/images/highlight4.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-4">
            <span className="inline-block bg-[#dc2626]/20 border border-[#dc2626]/40 text-[#ff6b6b] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Pune &amp; Across India
            </span>

            <h1 className="text-white text-3xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight mb-4 drop-shadow-md max-w-4xl leading-tight">
              Sports Event Management in Pune
            </h1>

            <div className="w-16 h-[3px] bg-[#dc2626] mb-6 shadow-sm"></div>

            <p className="text-[#f1f1f1] text-[17px] md:text-[20px] font-medium tracking-wide mb-6 max-w-3xl">
              Bringing People Together Through the Power of Sports
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-6 md:px-10 py-6 rounded-lg mb-8 max-w-3xl text-left md:text-center text-[#e2e2e2] text-[14.5px] leading-relaxed shadow-lg">
              <p className="mb-3">
                At <strong className="text-white font-semibold">ColorKnit Events</strong>, we provide Sports Event Management Service in Pune for businesses, educational institutions, organisations and groups looking to create engaging sporting experiences.
              </p>
              <p>
                From cricket and football leagues to badminton competitions, sports tournaments, adventure sports activities and corporate sports days, we help plan events around your participants, objectives and requirements.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase shadow-md rounded-[3px] hover:shadow-lg hover:-translate-y-0.5"
              >
                Plan Your Sports Event
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase rounded-[3px]"
              >
                Explore Sporting Events
              </Link>
            </div>
          </div>
        </section>

        {/* Four Pillars Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                Operational Framework
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                The Foundation of Every Successful Sporting Event
              </h3>
              <div className="w-[60px] h-[3px] bg-[#dc2626] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                Whether organizing a high-stakes league or a fun-filled corporate sports day, our structured management covers every on-ground detail.
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

        {/* Sports Events Designed for Every Audience */}
        <section id="services" className="w-full bg-[#efedea] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                Sports Events Designed for Every Audience
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                From Competitive Tournaments to Team-Building Experiences
              </h3>
              <div className="w-[60px] h-[3px] bg-[#008484] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                Explore our specialized sporting solutions tailored to corporate teams, educational institutions, and competitive leagues.
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
                  Passionate &amp; Reliable Sports Management
                </h2>
                <h3 className="text-[#2b2b2b] text-[26px] md:text-[34px] font-bold tracking-tight mb-4">
                  Why Choose ColorKnit Events for Sports Event Management?
                </h3>
                <div className="w-[50px] h-[3px] bg-[#dc2626] mb-8"></div>

                <p className="text-[#555] text-[14.5px] leading-relaxed mb-6">
                  At ColorKnit Events, we take the time to understand your event requirements and create an approach that suits your participants and objectives.
                </p>

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
                  Discuss Your Sports Event
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Event Photograph */}
              <div className="relative">
                <div className="relative p-2.5 border-[8px] border-[#e2d5c8] bg-white rounded-lg shadow-xl mx-auto w-full max-w-[500px]">
                  <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
                    <Image
                      src="/images/highlight4.jpg"
                      alt="ColorKnit Events sports tournament and corporate sports day in Pune"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#170a1c] text-white p-4 rounded shadow-lg max-w-[220px] hidden sm:block border-l-4 border-[#dc2626]">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#ff6b6b] mb-1">
                    Sporting Excellence
                  </p>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    Cricket, football, badminton &amp; corporate sports days in Pune.
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
              Get In The Game
            </span>
            <h2 className="text-white text-[26px] md:text-[36px] font-bold mb-6 tracking-tight">
              Let&apos;s Bring Your Sports Event to Life!
            </h2>
            <div className="w-[50px] h-[3px] bg-[#dc2626] mb-8"></div>

            <p className="text-[#e2e2e2] text-[15px] md:text-[16px] leading-relaxed mb-4 max-w-2xl">
              Whether you are planning a corporate sports day, cricket league, football competition, badminton tournament or an educational sports event, the right experience starts with a good plan.
            </p>
            <p className="text-[#c7c7c7] text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-2xl">
              At ColorKnit Events, we help organisations bring participants together through sporting experiences built around teamwork, participation and healthy competition. Have a sports event in mind? Let&apos;s discuss your requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="mailto:contact@colorknit.com?subject=Enquiry%20About%20Sports%20Event%20Management"
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white font-bold text-[13px] px-8 py-4 rounded-[3px] uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <Mail size={16} />
                Enquire About Sports Event Management
              </Link>

              <Link
                href="https://wa.me/919811121153?text=Hi%20ColorKnit%20Events%2C%20I%20would%20like%20to%20discuss%20a%20sports%20event."
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
                Frequently Asked Questions About Sports Event Management
              </h3>
              <div className="w-[40px] h-[2px] bg-[#a88f78] mx-auto mb-6"></div>
              <p className="text-[#555] text-[14.5px]">
                Common queries regarding tournament formats, venue selections, and corporate sports day logistics in Pune.
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
              <strong>ColorKnit Events</strong> is a premier sports event management company in Pune. We organize cricket tournaments, football leagues, badminton competitions, corporate sports days, and adventure sports experiences.
            </p>
            <p>
              Combining tournament structuring, venue and turf coordination, round-the-clock medical facilities, and professional officiating, we deliver high-energy sporting experiences built around teamwork and healthy competition.
            </p>
          </div>
        }
      />
    </>
  );
}

