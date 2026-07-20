import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

const annualDayFaqs = [
  {
    question: "What is a corporate annual day event?",
    answer: "A corporate annual day event is a grand celebration hosted by companies to mark their foundation day, celebrate achievements, recognize employee contributions, and foster team bonding through entertainment and engaging activities."
  },
  {
    question: "Do you organize corporate annual day events in Delhi, Gurgaon and Noida?",
    answer: "Yes, we provide end-to-end event management services across Delhi, Gurgaon, Noida, and the wider NCR region, offering premium venues and flawless execution."
  },
  {
    question: "What services are included in your annual day event planning?",
    answer: "Our services include venue selection, theme and d&eacute;cor, stage setup, audiovisual production, artist and celebrity management, employee engagement activities, catering coordination, and complete on-ground execution."
  },
  {
    question: "Can you manage large corporate annual day events?",
    answer: "Absolutely! We specialize in managing events of all scales, from intimate team gatherings of 50 people to massive corporate annual days with up to 5,000+ guests."
  },
  {
    question: "How early should we plan a corporate annual day event?",
    answer: "We recommend starting the planning process at least 2 to 3 months in advance to secure the best venues, artists, and ensure ample time for custom theme creation and employee engagement activities."
  },
  {
    question: "Do you also provide themes and entertainment for annual day events?",
    answer: "Yes, we are a leading provider of corporate entertainment and thematic experiences. From Casino Night and Bollywood Galas to live bands and celebrity performers, we handle it all."
  },
  {
    question: "How can we book your services for a corporate annual day event?",
    answer: "You can easily book our services by contacting us via phone, email, or by filling out the inquiry form on our website. Our event planners will get in touch with you to discuss your specific requirements."
  }
];

export const metadata = {
  title: "Corporate Annual Day Event Organisers | EMG Showmakerz",
  description: "Premier Annual Day event Management Company in Delhi, Gurgaon & Noida",
};

export default function AnnualDayGalaEventsPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="w-full bg-[#1a0f1c] bg-gradient-to-r from-[#170a1c] to-[#120815] py-24 flex flex-col items-center justify-center min-h-[400px]">
          <div className="text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-white text-[24px] md:text-[32px] lg:text-[40px] font-bold uppercase tracking-wide mb-6">
              CORPORATE ANNUAL DAY EVENT ORGANISERS
            </h1>
            
            <div className="w-12 h-1 bg-[#d35400] mx-auto mb-8"></div>
            
            <div className="bg-[#2a1a2e]/60 border border-white/5 rounded-md py-4 px-6 mb-10 w-full max-w-3xl">
              <p className="text-gray-200 text-[14px] md:text-[15px] font-medium tracking-wide">
                Premier Annual Day event Management Company in Delhi, Gurgaon & Noida
              </p>
            </div>
            
            <Link 
              href="#" 
              className="bg-[#00b4b4] hover:bg-[#009b9b] text-white px-8 py-3.5 font-bold text-[13px] uppercase transition-colors shadow-sm tracking-wider"
            >
              TALK TO YOUR EVENT PLANNER
            </Link>
          </div>
        </section>

        {/* Annual Day Planners Section */}
        <section className="w-full bg-[#f8f9f8] py-24 px-4">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-[#1a1a1a] text-[20px] md:text-[24px] font-bold uppercase tracking-wide mb-1">
                ANNUAL DAY EVENT PLANNERS
              </h2>
              <h3 className="text-[#967455] text-[15px] md:text-[17px] font-medium mb-4">
                in Delhi NCR
              </h3>
              <div className="w-10 h-[2px] bg-[#967455] mx-auto"></div>
            </div>

            {/* Top Text */}
            <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium max-w-[850px] mx-auto space-y-6 mb-16">
              <p>
                A <strong>corporate annual day event</strong> is a powerful way to celebrate achievements, strengthen team culture, and bring employees together. It provides a platform for recognition, engagement, and meaningful connections within the organization.
              </p>
              <p>
                Annual day celebrations also help leadership connect with teams, reward top performers, and share the company&apos;s vision for the future in an engaging and memorable format.
              </p>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-[1000px] mb-16">
              <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/photo7.jpg" alt="Photo Booth Fun" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/photo8.jpg" alt="Silver Backdrop" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/photo9.jpg" alt="Red Carpet" fill className="object-cover" />
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium max-w-[850px] mx-auto space-y-6">
              <p>
                We help you organise <strong>annual day events</strong> from concept to flawless execution. From venue selection and theme design to d&eacute;cor, entertainment, and full-scale production &mdash; our team manages every aspect seamlessly.
              </p>
              <p>
                Whether you are planning a small team celebration or a large corporate annual day, we ensure a professionally managed and engaging experience for your employees.
              </p>
            </div>
          </div>
        </section>

        {/* Stats & Big Or Small Section */}
        <section className="w-full">
          {/* Top Dark Stats Block */}
          <div className="bg-[#140b17] py-16 px-4 text-center">
            <h2 className="text-white text-[18px] md:text-[22px] font-bold mb-12 max-w-3xl mx-auto leading-relaxed">
              18+ Years Experienced Corporate Annual Day Event Management Company in Delhi NCR (Gurgaon & Noida)
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {/* Stat 1 */}
              <div className="bg-[#1f1322] border border-white/5 rounded-md py-8 px-4 flex flex-col items-center justify-center gap-2">
                <span className="text-[#d35400] text-[24px] md:text-[28px] font-bold">3600+</span>
                <span className="text-gray-300 text-[11px] md:text-[12px] uppercase tracking-wider font-medium">Successfully Executed Events</span>
              </div>
              {/* Stat 2 */}
              <div className="bg-[#1f1322] border border-white/5 rounded-md py-8 px-4 flex flex-col items-center justify-center gap-2">
                <span className="text-[#d35400] text-[24px] md:text-[28px] font-bold">18+</span>
                <span className="text-gray-300 text-[11px] md:text-[12px] uppercase tracking-wider font-medium">Years of Experience</span>
              </div>
              {/* Stat 3 */}
              <div className="bg-[#1f1322] border border-white/5 rounded-md py-8 px-4 flex flex-col items-center justify-center gap-2">
                <span className="text-[#d35400] text-[24px] md:text-[28px] font-bold">500+</span>
                <span className="text-gray-300 text-[11px] md:text-[12px] uppercase tracking-wider font-medium">Corporate Clients Served</span>
              </div>
              {/* Stat 4 */}
              <div className="bg-[#1f1322] border border-white/5 rounded-md py-8 px-4 flex flex-col items-center justify-center gap-2">
                <span className="text-[#d35400] text-[24px] md:text-[28px] font-bold">36+</span>
                <span className="text-gray-300 text-[11px] md:text-[12px] uppercase tracking-wider font-medium">Awards & Recognitions</span>
              </div>
            </div>
          </div>
          
          {/* Bottom Gradient Block */}
          <div className="bg-gradient-to-r from-[#2c1b3d] to-[#120815] py-16 px-4 text-center">
            <h2 className="text-white text-[22px] md:text-[26px] font-bold mb-3">
              Big Or Small
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[13px] font-bold tracking-wide uppercase">
              We Cater To Corporate Annual Day Events From 50 To 5000 Guests
            </p>
          </div>
        </section>

        {/* Leading Management Company Section */}
        <section className="w-full bg-[#f8f9f8] py-24 px-4">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-[#1a1a1a] text-[20px] md:text-[24px] font-bold uppercase tracking-wide mb-1">
                WE ARE A LEADING
              </h2>
              <h3 className="text-[#967455] text-[15px] md:text-[17px] font-medium mb-4">
                Annual Day Event Management Company
              </h3>
              <div className="w-10 h-[2px] bg-[#967455] mx-auto"></div>
            </div>

            {/* Text */}
            <div className="text-[#555] text-[13px] md:text-[14px] leading-[1.8] font-medium max-w-[850px] mx-auto space-y-6 mb-16">
              <p>
                We are a full-service <Link href="#" className="text-[#008484] font-semibold hover:underline">corporate event management company in Delhi NCR</Link>. Over the years, we have successfully executed a wide range of corporate annual day events, from small intimate gatherings to large-scale themed productions.
              </p>
              <p>
                Our comprehensive services ensure that every element required to deliver a successful and memorable corporate annual day event is professionally planned and executed.
              </p>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[850px] mb-12">
              <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-sm">
                <Image src="/images/photo10.jpg" alt="Neon Sign Decor" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-sm">
                <Image src="/images/photo11.jpg" alt="Red Carpet Entrance" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-sm">
                <Image src="/images/photo12.jpg" alt="Award Ceremony" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-sm">
                <Image src="/images/photo13.jpg" alt="Bollywood Gala Theme" fill className="object-cover" />
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 bg-[#d60b8e] hover:bg-[#b80879] text-white px-8 py-3.5 font-bold text-[13px] uppercase transition-colors shadow-sm rounded-sm tracking-wider"
            >
              VIEW ANNUAL DAY EVENTS GALLERY
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </section>

        {/* Specialized Services Section */}
        <section className="w-full bg-gradient-to-r from-[#2b083d] via-[#1f1146] to-[#141249] py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-white text-[18px] md:text-[22px] font-bold mb-4">
              We Offer Specialized & Customizable Services For Your Corporate Annual Day Event
            </h2>
            
            <p className="text-gray-200 text-[12px] md:text-[13px] font-medium leading-[1.8] max-w-3xl mb-8">
              We offer every service required to host a memorable corporate annual day event in Delhi NCR from start to finish. If you are looking for specific services like stage setup or d&eacute;cor only, we can also cater to your requirements.
            </p>
            
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 bg-[#00b4b4] hover:bg-[#009b9b] text-white px-6 py-3 font-bold text-[12px] uppercase transition-colors shadow-sm rounded-sm tracking-wider"
            >
              ASK FOR ANNUAL DAY QUOTE
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="w-full bg-[#f8f9f8] py-24 px-4">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-[#1a1a1a] text-[20px] md:text-[24px] font-bold uppercase tracking-wide mb-1">
                WHAT WE OFFER FOR YOUR
              </h2>
              <h3 className="text-[#967455] text-[15px] md:text-[17px] font-medium mb-4">
                Corporate Annual Day Event
              </h3>
              <div className="w-10 h-[2px] bg-[#967455] mx-auto"></div>
            </div>

            <div className="w-full flex flex-col gap-16 md:gap-24 mb-20">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-[#008484] text-[16px] font-bold mb-3">Venue Selection & Management</h4>
                    <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium">
                      We source and secure the ideal premium venue, hotel, or lawn tailored to your guest count and budget. Benefit from our long-standing industry relationships for premium F&B, operational standards, and negotiated deals. Share your brief for free venue recommendations.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#008484] text-[16px] font-bold mb-3">Themes & Ideas</h4>
                    <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium">
                      Transform your celebration with immersive themes like Casino Night, Bollywood, Retro, and Winter Wonderland. We craft creative details that turn standard gatherings into memorable experiences. Explore our dedicated page for <Link href="#" className="text-[#008484] hover:underline font-semibold">annual day themes & ideas</Link>.
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm order-first md:order-last">
                  <Image src="/images/photo14.jpg" alt="Bollywood Theme Party" fill className="object-cover" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
                  <Image src="/images/photo15.jpg" alt="Yamaha Event" fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-[#008484] text-[16px] font-bold mb-3">Employee Engagement</h4>
                    <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium">
                      Boost workplace excitement with targeted pre-event hype. We manage internal email campaigns, video teasers, choreography, professional skits, costume styling, and custom corporate merchandise to ensure high participation and alignment with your HR goals.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#008484] text-[16px] font-bold mb-3">Event Entertainment</h4>
                    <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium">
                      With 18+ years in <Link href="#" className="text-[#008484] hover:underline font-semibold">corporate event planning</Link>, we deliver the perfect entertainment lineup. As a premier <Link href="#" className="text-[#008484] hover:underline font-semibold">corporate entertainment</Link> provider, we seamlessly source and manage celebrity artists, <strong>live bands</strong>, Sufi groups, and top DJs for your <strong>annual day celebration</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-[#008484] text-[16px] font-bold mb-3">Complete Event Management</h4>
                    <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium mb-4">
                      As a full-service <strong>annual day event management company</strong>, we provide end-to-end execution. Our team handles professional AV, lighting, official event licensing, emcees, photography, hospitality logistics, and custom corporate gifts for a seamless experience.
                    </p>
                    <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium mb-4">
                      Apart from corporate annual day events, we also offer related corporate celebration services including:
                    </p>
                    <ul className="text-[#333] text-[12.5px] font-bold space-y-1.5 ml-1">
                      <li>Corporate Annual Party Events</li>
                      <li>Corporate Annual Gala Events</li>
                      <li>Corporate Foundation Day Events</li>
                    </ul>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm order-first md:order-last">
                  <Image src="/images/photo16.jpg" alt="Event Host" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center w-full max-w-3xl">
              <h3 className="text-[#444] text-[16px] md:text-[18px] font-bold mb-3">
                Hire Showmakerz For Your Corporate Annual Day Event
              </h3>
              <p className="text-[#777] text-[12.5px] md:text-[13.5px] font-medium mb-8 leading-relaxed">
                As experienced corporate annual day organizers, we specialize in planning and executing events of all scales with precision and creativity.
              </p>
              
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 bg-[#d60b8e] hover:bg-[#b80879] text-white px-8 py-3.5 font-bold text-[13px] uppercase transition-colors shadow-sm rounded-sm tracking-wider"
              >
                PLAN YOUR ANNUAL DAY
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* Explore Ideas Section */}
        <section className="w-full bg-[#ebe9e4] py-20 px-4">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-[#333] text-[18px] md:text-[20px] font-bold uppercase tracking-wide mb-1">
                EXPLORE MORE ANNUAL DAY EVENT
              </h2>
              <h3 className="text-[#967455] text-[14px] md:text-[15px] font-medium mb-4">
                Ideas & Inspirations
              </h3>
              <div className="w-8 h-[2px] bg-[#967455] mx-auto"></div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl mx-auto">
              {/* Item 1 */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative aspect-square w-full rounded-sm overflow-hidden border-[6px] border-white shadow-sm">
                  <Image src="/images/photo17.jpg" alt="Dhol Player" fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center gap-1 text-[#444] hover:text-[#008484] text-[12px] font-medium transition-colors">
                  <ArrowRight size={14} />
                  <span className="underline underline-offset-2">Explore Annual Day Event Ideas</span>
                </Link>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative aspect-square w-full rounded-sm overflow-hidden border-[6px] border-white shadow-sm">
                  <Image src="/images/photo18.jpg" alt="Masquerade Masks" fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center gap-1 text-[#444] hover:text-[#008484] text-[12px] font-medium transition-colors">
                  <ArrowRight size={14} />
                  <span className="underline underline-offset-2">Explore Annual Day Themes</span>
                </Link>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative aspect-square w-full rounded-sm overflow-hidden border-[6px] border-white shadow-sm">
                  <Image src="/images/photo19.jpg" alt="Photo Booth" fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center gap-1 text-[#444] hover:text-[#008484] text-[12px] font-medium transition-colors">
                  <ArrowRight size={14} />
                  <span className="underline underline-offset-2">Explore Photo Booth Ideas</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="w-full bg-[#ebe7f2] py-20 px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-[#333] text-[18px] md:text-[22px] font-bold uppercase tracking-wide mb-2">
                EVENT MANAGEMENT FAQS
              </h2>
              <p className="text-[#666] text-[13px] md:text-[14px] font-medium">
                Everything You Need To Know About Our <Link href="#" className="text-[#008484] hover:underline font-semibold">Event Management Services</Link>
              </p>
            </div>

            {/* Accordion */}
            <div className="w-full">
              <FaqAccordion faqs={annualDayFaqs} />
            </div>
          </div>
        </section>

        {/* Contact Strip Section */}
        <section className="w-full bg-[#1a0f1c] bg-gradient-to-r from-[#170a1c] to-[#120815] py-16 px-4 border-t border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-white text-[16px] md:text-[18px] font-bold tracking-wide mb-8">
              Our Corporate Annual Day Events Are Engaging & Inspiring
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Link 
                href="#" 
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 bg-transparent text-white px-6 py-3 font-bold text-[11px] md:text-[12px] uppercase transition-colors rounded-[3px] tracking-wider w-full sm:w-auto min-w-[200px]"
              >
                <Phone size={14} />
                CALL US NOW
              </Link>
              <Link 
                href="#" 
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 bg-transparent text-white px-6 py-3 font-bold text-[11px] md:text-[12px] uppercase transition-colors rounded-[3px] tracking-wider w-full sm:w-auto min-w-[200px]"
              >
                <MessageCircle size={14} />
                CHAT ON WHATSAPP
              </Link>
              <Link 
                href="#" 
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 bg-transparent text-white px-6 py-3 font-bold text-[11px] md:text-[12px] uppercase transition-colors rounded-[3px] tracking-wider w-full sm:w-auto min-w-[200px]"
              >
                <Mail size={14} />
                ENQUIRY FORM
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer 
        companyDescription={
          <p className="leading-[1.8] mb-6 font-medium text-[13px] md:text-[14px]">
            As an experienced corporate annual day event management company, we specialize in crafting inspiring and engaging celebrations. From custom theme d&eacute;cor and premium live entertainment to rewards, recognition, and employee engagement, we deliver seamless end-to-end event execution across Delhi NCR.
          </p>
        }
      />
    </>
  );
}
