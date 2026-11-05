import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Heart, Sparkles, Calendar, Utensils, Camera, MapPin, Users, Mail, Music } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import PartnerBanner from "@/components/PartnerBanner";

export const metadata: Metadata = {
  title: "Wedding Planner in Pune | Wedding Event Management – ColorKnit",
  description:
    "Looking for a wedding planner in Pune? ColorKnit Weddings manages wedding planning, decor, catering, photography, destination weddings and guest hospitality.",
  keywords: "Wedding Event Management, wedding planner in Pune, destination weddings Pune, wedding decor, catering coordination",
  alternates: {
    canonical: "https://www.colorknit.in/services/weddings",
  },
  openGraph: {
    title: "Wedding Planner in Pune | Wedding Event Management – ColorKnit",
    description:
      "Looking for a wedding planner in Pune? ColorKnit Weddings manages wedding planning, decor, catering, photography, destination weddings and guest hospitality.",
    url: "https://www.colorknit.in/services/weddings",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Planner in Pune | Wedding Event Management – ColorKnit",
    description:
      "Looking for a wedding planner in Pune? ColorKnit Weddings manages wedding planning, decor, catering, photography, destination weddings and guest hospitality.",
    images: ["/images/og-image.jpg"],
  },
};

export default function WeddingsPage() {
  const pillars = [
    {
      num: "01",
      title: "Your Vision",
      desc: "We begin by understanding your preferences, traditions, family expectations, celebration style and budget. The planning starts with what matters most to you.",
      icon: Heart,
    },
    {
      num: "02",
      title: "Creative Details",
      desc: "From wedding themes and floral arrangements to invitations, entertainment and guest experiences, we bring the different elements together around a consistent vision.",
      icon: Sparkles,
    },
    {
      num: "03",
      title: "Coordinated Execution",
      desc: "We coordinate schedules, vendors, arrangements and on-ground activities so that the celebrations follow the agreed plan and families can focus on enjoying the occasion.",
      icon: Calendar,
    },
  ];

  const services = [
    {
      title: "Full Wedding Planning",
      desc: "From the initial concept to the final event-day arrangements, we coordinate the major planning elements, timelines, vendors and celebration requirements around your preferences and budget.",
      image: "/images/highlight3.jpg",
      icon: Sparkles,
    },
    {
      title: "Wedding Decor and Florals",
      desc: "We make your dream wedding setup come true through thoughtfully selected flowers, stage styling, mandap design, lighting, drapes and venue decor. Each detail contributes to the overall look and feel of your celebration.",
      image: "/images/photo4.jpg",
      icon: Heart,
    },
    {
      title: "Catering Coordination",
      desc: "More than a basic requirement, wedding food is a platform to bring families and guests together for never ending chit chat . We coordinate catering requirements, menu discussions, cuisine preferences and service arrangements with the selected catering team.",
      image: "/images/card1.jpg",
      icon: Utensils,
    },
    {
      title: "Photography and Videography",
      desc: "Your wedding deserves to be remembered beyond the day itself. We coordinate photography and videography arrangements to capture ceremonies, candid interactions, family moments and important details.",
      image: "/images/photo3.jpg",
      icon: Camera,
    },
    {
      title: "Destination Wedding Planning",
      desc: "A destination wedding is more than a celebration; it’s a beautiful experience shared with the people who matter most. We take care of every detail, from planning to execution, so you can be present in every moment and make memories that last a lifetime.",
      image: "/images/photo5.jpg",
      icon: MapPin,
    },
    {
      title: "Guest Hospitality",
      desc: "From invitations and attendance confirmations to arrival coordination, accommodation assistance and guest support, we help make the experience comfortable for the people celebrating with you.",
      image: "/images/photo7.jpg",
      icon: Users,
    },
    {
      title: "Wedding Stationery",
      desc: "Set the tone for your celebration with coordinated invitations, save-the-dates, welcome cards, event itineraries and other stationery that reflects your wedding style.",
      image: "/images/photo8.jpg",
      icon: Mail,
    },
    {
      title: "Artist and Entertainment Management",
      desc: "Music and performances add personality to wedding celebrations. We coordinate artist selection, DJ arrangements, entertainment schedules and on-ground requirements according to the event plan.",
      image: "/images/card4.jpg",
      icon: Music,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      desc: "We discuss your wedding dates, functions, guest expectations, preferred style, location and estimated budget. This gives us a starting point for understanding your vision.",
    },
    {
      step: "02",
      title: "Personalized Wedding Plan",
      desc: "Based on the discussion, we outline the planning requirements, key services, timelines and possible creative directions for your celebration.",
    },
    {
      step: "03",
      title: "Vendor and Detail Coordination",
      desc: "We coordinate the selected vendors and arrangements for decor, catering, photography, entertainment, hospitality and other agreed services.",
    },
    {
      step: "04",
      title: "Final Preparations",
      desc: "As the wedding approaches, we review schedules, responsibilities, venue arrangements and event-day requirements with the involved teams.",
    },
    {
      step: "05",
      title: "Wedding Day Coordination",
      desc: "Our team coordinates the agreed on-ground arrangements so that the celebrations can progress according to the planned schedule.",
    },
  ];

  const faqs = [
    {
      question: "What wedding planning services does ColorKnit offer?",
      answer:
        "ColorKnit Weddings lists full wedding planning, decor and florals, catering coordination, photography and videography, destination weddings, RSVP and guest hospitality, wedding stationery and artist management.",
    },
    {
      question: "Does ColorKnit plan destination weddings?",
      answer:
        "Destination wedding planning is listed among ColorKnit's services. The team can discuss the destination, venue, guest arrangements, travel requirements and event schedule to understand the scope of your celebration.",
    },
    {
      question: "How early should we book a wedding planner?",
      answer:
        "It is advisable to begin planning as soon as your preferred wedding dates and general requirements are known. Larger weddings and destination celebrations may need more preparation for venue selection, vendor availability, travel and guest arrangements.",
    },
    {
      question: "Can we customize the wedding decor according to our theme?",
      answer:
        "Yes. Wedding decor can be planned around your preferred colours, flowers, theme, venue and overall celebration style. Sharing inspiration images and references can help the team understand the look you have in mind.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center py-24 md:py-32 px-4 bg-cover bg-center bg-no-repeat min-h-[600px]"
          style={{ backgroundImage: "url('/images/highlight3.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/70 text-[13px] font-medium tracking-wider uppercase mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-[#ff6b6b]">Weddings</span>
            </div>

            <span className="inline-block bg-[#dc2626]/20 border border-[#dc2626]/40 text-[#ff6b6b] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Pune &amp; Destination Weddings
            </span>

            <h1 className="text-white text-3xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight mb-4 drop-shadow-md max-w-4xl leading-tight">
              Wedding Event Management in Pune
            </h1>

            <div className="w-16 h-[3px] bg-[#dc2626] mb-6 shadow-sm"></div>

            <p className="text-[#f1f1f1] text-[17px] md:text-[20px] font-medium tracking-wide mb-6 max-w-3xl">
              Thoughtfully planned weddings. Beautifully designed celebrations. Memories that stay with you forever.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-6 md:px-10 py-6 rounded-lg mb-8 max-w-3xl text-left md:text-center text-[#e2e2e2] text-[14.5px] leading-relaxed shadow-lg space-y-3">
              <p>
                Your wedding is more than a date on the calendar. It is a gathering of families, traditions, emotions and moments that deserve to be celebrated in a way that feels truly yours.
              </p>
              <p>
                At <strong className="text-white font-semibold">ColorKnit Weddings</strong>, we bring your ideas together through thoughtful planning, creative decor and carefully coordinated execution. As wedding planners in Pune, we help manage the details behind your celebration, from the first planning conversation to the final Vidaai Ceremony.
              </p>
              <p>
                Whether you are imagining an intimate ceremony, a traditional wedding or a multi-day destination celebration, our team works to create an experience that reflects your story, style and priorities.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://colorknitweddings.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase shadow-md rounded-[3px] hover:shadow-lg hover:-translate-y-0.5"
              >
                Start Planning Your Wedding
                <ArrowRight size={16} />
              </a>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase rounded-[3px]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Three Pillars Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                Three Pillars of a Thoughtfully Planned Wedding
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                Every Beautiful Wedding Begins With Thoughtful Planning
              </h3>
              <div className="w-[60px] h-[3px] bg-[#dc2626] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                A memorable celebration comes together when the vision, people and details work in harmony. Our approach focuses on three important elements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-[4px] border-[#dc2626] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#dc2626] font-bold text-2xl tracking-tight">
                          {pillar.num}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#dc2626]">
                          <Icon size={20} />
                        </div>
                      </div>
                      <h4 className="font-cinzel text-[#222] font-bold text-[18px] mb-3">
                        {pillar.title}
                      </h4>
                      <p className="text-[#666] text-[14px] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Specialized Wedding Services Section */}
        <section id="services" className="w-full bg-[#efedea] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                Our Specialized Wedding Services
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                Comprehensive Wedding Planning &amp; Coordination
              </h3>
              <div className="w-[60px] h-[3px] bg-[#008484] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                From intimate haldi ceremonies to opulent destination weddings, we orchestrate every dimension of your celebration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col group"
                  >
                    <div className="relative w-full h-[180px] overflow-hidden bg-gray-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#dc2626] shadow-sm">
                        <Icon size={16} />
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-[#222] font-bold text-[16px] mb-2 leading-snug">
                          {service.title}
                        </h4>
                        <p className="text-[#666] text-[13px] leading-relaxed mb-4">
                          {service.desc}
                        </p>
                      </div>
                      <a
                        href="https://colorknitweddings.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#008484] hover:text-[#006e6e] text-[12.5px] font-bold tracking-wide uppercase transition-colors"
                      >
                        Learn More
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wedding Planning Process Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                Our Wedding Planning Process
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                From Your First Conversation to the Wedding Celebrations
              </h3>
              <div className="w-[60px] h-[3px] bg-[#dc2626] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                Planning a wedding can involve many decisions. A clear process helps keep the arrangements organized and gives you a better understanding of what comes next.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-sm border-t-[3px] border-[#008484] flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <span className="inline-block text-[#008484] font-extrabold text-2xl mb-3">
                      {step.step}
                    </span>
                    <h4 className="font-cinzel text-[#222] font-bold text-[15px] mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[#666] text-[12.5px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Wedding Planner in Pune - CTA Banner */}
        <section
          className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/photo5.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#005f5f]/90"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <span className="font-cinzel inline-block text-[#ff9999] text-[13px] font-bold uppercase tracking-[0.2em] mb-3">
              Best Wedding Planner in Pune
            </span>
            <h2 className="font-cinzel text-white text-[26px] md:text-[36px] font-bold mb-4 tracking-tight">
              Your Wedding Story Deserves a Beautiful Beginning
            </h2>
            <div className="w-12 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white/90 text-[15px] md:text-[17px] mb-4 max-w-2xl mx-auto leading-relaxed">
              Every couple has a different vision of their perfect celebration. Let's bring yours together with thoughtful planning, beautiful details and coordinated execution.
            </p>
            <p className="text-white/80 text-[14px] md:text-[15.5px] mb-8 max-w-2xl mx-auto leading-relaxed">
              Share your ideas with ColorKnit Weddings and take the first step towards a celebration that feels like you.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://colorknitweddings.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase shadow-md rounded-[3px] hover:shadow-lg hover:-translate-y-0.5"
              >
                Start Planning Your Wedding
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/919922222222?text=Hello%20ColorKnit%20Weddings,%20I%20would%20like%20to%20inquire%20about%20wedding%20planning%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase shadow-md rounded-[3px]"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cinzel text-[#847565] text-[13px] md:text-[14px] font-bold tracking-[0.2em] uppercase mb-2">
                Frequently Asked Questions
              </h2>
              <h3 className="text-[#222] text-[22px] md:text-[28px] font-bold tracking-tight mb-4">
                Wedding Event Management in Pune
              </h3>
              <div className="w-[40px] h-[2px] bg-[#dc2626] mx-auto mb-6"></div>
              <p className="text-[#555] text-[14.5px]">
                Got questions about wedding planning, decor, venues, catering or destinations? Here are answers to commonly asked questions.
              </p>
            </div>

            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Contact Banner Bar */}
        <PartnerBanner />
      </main>

      <Footer />
    </div>
  );
}

