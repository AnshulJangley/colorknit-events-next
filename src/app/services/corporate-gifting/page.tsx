import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import PartnerBanner from "@/components/PartnerBanner";

export const metadata: Metadata = {
  title: "Corporate Gifting Services in Pune | Customized Corporate Gifts – ColorKnit",
  description:
    "Looking for corporate gifting services in Pune? ColorKnit offers employee welcome kits, festive gifts, customized corporate gifts, return gifts, trophies and awards for businesses.",
};

export default function CorporateGiftingPage() {
  const pillars = [
    {
      num: "01",
      title: "OBJECTIVE & OCCASION",
      desc: "We begin by understanding the occasion, audience profile, and the core message you want your corporate gift to convey.",
    },
    {
      num: "02",
      title: "CURATION & SELECTION",
      desc: "We curate functional, high-quality gift options aligned with your company budget, recipient expectations, and brand standards.",
    },
    {
      num: "03",
      title: "BRANDING & PACKAGING",
      desc: "We coordinate bespoke customization including logos, company colors, personalized messages, and custom premium packaging.",
    },
    {
      num: "04",
      title: "FULFILLMENT & DELIVERY",
      desc: "We manage quality checks, bulk logistics, and doorstep delivery across Pune and pan-India locations on your committed timeline.",
    },
  ];

  const services = [
    {
      title: "Employee Welcome Kits",
      tagline: "Give Every New Employee a Welcome Worth Remembering.",
      desc: "We help businesses put together employee welcome kits with practical and branded essentials that make onboarding more personal.",
      image: "/images/card2.jpg",
      link: "#",
    },
    {
      title: "Corporate Festive Gifts",
      tagline: "Celebrate Special Occasions With Thoughtful Hampers.",
      desc: "Our corporate festive gifting solutions help companies celebrate special occasions with thoughtfully selected gift hampers and customized gift options.",
      image: "/images/card3.jpg",
      link: "#",
    },
    {
      title: "Customized Corporate Gifts",
      tagline: "Combine Everyday Usefulness With Brand Identity.",
      desc: "We help businesses explore customized corporate gifts that combine everyday usefulness with brand identity. Depending on the selected product, customization can include company logos, names, brand colours, personalized messages and packaging.",
      image: "/images/card1.jpg",
      link: "#",
    },
    {
      title: "Corporate Return Gifts",
      tagline: "Thoughtful Keepsakes for Corporate Events.",
      desc: "We have a curated menu to explore return gift options based on the type of event, recipient profile, quantity and available budget.",
      image: "/images/card4.jpg",
      link: "#",
    },
    {
      title: "Corporate Trophies & Awards",
      tagline: "Honour Achievements With Distinction.",
      desc: "Our customized trophy and award options always suit best for employee recognition programmes, annual functions, corporate celebrations and special achievements.",
      image: "/images/photo7.jpg",
      link: "#",
    },
    {
      title: "Employee Appreciation & Client Gifting",
      tagline: "Strengthening Professional Connections.",
      desc: "We help businesses explore suitable gifting options for employee appreciation, client relationships and special business occasions.",
      image: "/images/photo1.jpg",
      link: "#",
    },
  ];

  const whyChoosePoints = [
    "Solutions for Different Occasions",
    "Personalization and Branding",
    "Options for Different Budgets",
    "Thoughtful Gift Selection",
    "Coordinated Gifting Support",
  ];

  const faqs = [
    {
      question: "What types of corporate gifts does ColorKnit Events offer?",
      answer:
        "We offer corporate gifting solutions such as employee welcome kits, festive gift hampers, customized corporate gifts, corporate return gifts, trophies, awards and employee appreciation gifts.",
    },
    {
      question: "Do you provide customized corporate gifts with company logos?",
      answer:
        "Yes. Customization and branding options depend on the selected product. Options may include company logos, personalized names, brand colours, messages and customized packaging.",
    },
    {
      question: "Can we choose corporate gifts according to our budget?",
      answer:
        "Yes. Share your expected budget per gift, quantity and gifting requirements with us. We can discuss suitable options based on the available requirements.",
    },
    {
      question: "Do you provide corporate gifts for clients and business partners?",
      answer:
        "Yes. We help businesses explore suitable gifting options for client appreciation, business partner relationships, meetings, conferences and special corporate occasions.",
    },
  ];

  return (
    <>
      <Header />

      <main className="w-full flex-grow">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center py-24 md:py-32 px-4 bg-cover bg-center bg-no-repeat min-h-[580px]"
          style={{ backgroundImage: "url('/images/card1.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-4">
            <span className="inline-block bg-[#dc2626]/20 border border-[#dc2626]/40 text-[#ff6b6b] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Pune &amp; Across India
            </span>

            <h1 className="text-white text-3xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight mb-4 drop-shadow-md max-w-4xl leading-tight">
              Corporate Gifting Services in Pune
            </h1>

            <div className="w-16 h-[3px] bg-[#dc2626] mb-6 shadow-sm"></div>

            <p className="text-[#f1f1f1] text-[17px] md:text-[20px] font-medium tracking-wide mb-6 max-w-3xl">
              Thoughtful Gifts. Stronger Business Relationships.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-6 md:px-10 py-6 rounded-lg mb-8 max-w-3xl text-left md:text-center text-[#e2e2e2] text-[14.5px] leading-relaxed shadow-lg">
              <p className="mb-3">
                A meaningful gift can do more than mark an occasion. It can make employees feel valued, strengthen client relationships and create a positive impression of your business.
              </p>
              <p>
                At <strong className="text-white font-semibold">ColorKnit Events</strong>, we provide Corporate Gifting Services in Pune designed around the people and relationships that matter to your organisation. From employee welcome kits and festive gift hampers to customized corporate gifts, return gifts, trophies and awards, we help businesses find gifting solutions that reflect their identity and purpose.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase shadow-md rounded-[3px] hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Corporate Gifting Solutions
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white px-8 py-4 text-[13px] font-bold tracking-wider transition-all uppercase rounded-[3px]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Four Pillars Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                Our Structured Approach
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                The Foundation of Thoughtful Corporate Gifting
              </h3>
              <div className="w-[60px] h-[3px] bg-[#dc2626] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                From curation to doorstep fulfillment, our structured process ensures every corporate gift arrives beautifully branded, impeccably packaged, and right on schedule.
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

        {/* Corporate Gifting Solutions for Every Business Occasion */}
        <section id="services" className="w-full bg-[#efedea] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-[#847565] text-[14px] md:text-[15px] font-bold tracking-[0.2em] uppercase mb-2">
                Curated Gifting Portfolio
              </h2>
              <h3 className="text-[#2b2b2b] text-[24px] md:text-[32px] font-bold tracking-tight mb-4">
                Corporate Gifting Solutions for Every Business Occasion
              </h3>
              <div className="w-[60px] h-[3px] bg-[#008484] mx-auto mb-6"></div>
              <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed">
                Explore our full suite of branded corporate gifts, onboarding hampers, and recognition solutions tailored to your team and budget.
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
                  Gifting Solutions That Understand Your Business
                </h2>
                <h3 className="text-[#2b2b2b] text-[26px] md:text-[34px] font-bold tracking-tight mb-4">
                  Why Choose ColorKnit Events for Corporate Gifting?
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
                  Discuss Your Gifting Requirements
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Gifting Photograph Showcase */}
              <div className="relative">
                <div className="relative p-2.5 border-[8px] border-[#e2d5c8] bg-white rounded-lg shadow-xl mx-auto w-full max-w-[500px]">
                  <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
                    <Image
                      src="/images/card1.jpg"
                      alt="ColorKnit Events premium corporate gifting solutions in Pune"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#170a1c] text-white p-4 rounded shadow-lg max-w-[220px] hidden sm:block border-l-4 border-[#dc2626]">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#ff6b6b] mb-1">
                    Bespoke Gifting
                  </p>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    Custom welcome kits, festive hampers &amp; trophies in Pune.
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
              Meaningful Business Connections
            </span>
            <h2 className="text-white text-[26px] md:text-[36px] font-bold mb-6 tracking-tight">
              Make Every Business Relationship More Meaningful.
            </h2>
            <div className="w-[50px] h-[3px] bg-[#dc2626] mb-8"></div>

            <p className="text-[#e2e2e2] text-[15px] md:text-[16px] leading-relaxed mb-4 max-w-2xl">
              The right gift can communicate appreciation, strengthen connections and make important business occasions more memorable.
            </p>
            <p className="text-[#c7c7c7] text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-2xl">
              Whether you need employee welcome kits, festive hampers, customized corporate gifts, return gifts or trophies and awards, ColorKnit Events is ready to discuss your requirements. Let&apos;s find the right corporate gifting solutions for your business.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="mailto:contact@colorknit.com?subject=Corporate%20Gifting%20Quote%20Request"
                className="inline-flex items-center gap-2 bg-[#008484] hover:bg-[#006e6e] text-white font-bold text-[13px] px-8 py-4 rounded-[3px] uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <Mail size={16} />
                Request a Corporate Gifting Quote
              </Link>

              <Link
                href="https://wa.me/919811121153?text=Hi%20ColorKnit%20Events%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20corporate%20gifting."
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
                Frequently Asked Questions About Corporate Gifting
              </h3>
              <div className="w-[40px] h-[2px] bg-[#a88f78] mx-auto mb-6"></div>
              <p className="text-[#555] text-[14.5px]">
                Everything you need to know about corporate gift customization, minimum quantities, and delivery options in Pune.
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
              <strong>ColorKnit Events</strong> provides premium corporate gifting services in Pune. We deliver employee welcome kits, festive gift hampers, customized corporate merchandise, return gifts, trophies, and awards tailored to your brand identity.
            </p>
            <p>
              From curation and custom branding to quality packaging and timely fulfillment, we help businesses build lasting connections and make every corporate milestone memorable.
            </p>
          </div>
        }
      />
    </>
  );
}

