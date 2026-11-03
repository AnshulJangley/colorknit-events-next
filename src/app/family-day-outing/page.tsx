import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plus, Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import PartnerBanner from "@/components/PartnerBanner";

const familyDayFaqs = [
  {
    question: "What is a corporate family day event?",
    answer: "A corporate family day event is a fun-filled gathering organized by a company to celebrate and reward its employees along with their families. It typically includes games, entertainment, food, and interactive activities, offering a break from the routine work environment and fostering a stronger bond between the organization and its workforce."
  },
  {
    question: "Why should companies organise a family day event?",
    answer: "Companies organize family day events to boost employee morale, increase loyalty, and show appreciation for the support provided by employees' families. These events help break cultural barriers, improve team dynamics, and create a sense of belonging, which ultimately leads to a happier and more productive workforce."
  },
  {
    question: "What activities can be included in a corporate family day event?",
    answer: "A successful family day event includes a mix of activities for all age groups. This can range from inflatable games, carnival stalls, and team-building exercises to live music, magic shows, dedicated kids' zones, and interactive craft stations. We customize these activities based on your theme, venue, and employee demographics."
  },
  {
    question: "Do you organise corporate family day events in Delhi, Gurgaon and Noida?",
    answer: "Yes, absolutely! Showmakerz is a premier corporate event management company, and we specialize in organizing flawless family day events across Delhi, Gurgaon, Noida, and the entire NCR region. We handle everything from venue sourcing to seamless execution."
  }
];

export const metadata = {
  title: "Corporate Family Day Event Organisers | EMG Showmakerz",
  description: "Premier family Day event Management Company in Delhi, Gurgaon & Noida",
};

export default function FamilyDayOutingPage() {
  return (
    <>
      <Header />
      
      <main className="w-full flex-grow">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-24 md:py-32 px-4 bg-[#1a0f1c]">
          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-6">
            <h1 className="text-white text-[24px] md:text-[32px] font-bold tracking-[0.02em] uppercase mb-6">
              CORPORATE FAMILY DAY EVENT ORGANISERS
            </h1>
            
            <div className="w-10 h-[2px] bg-[#d94a28] mb-8"></div>
            
            <div className="bg-[#2d1b30] border border-white/5 px-6 md:px-12 py-3.5 rounded-[4px] mb-10">
              <p className="text-[#f5f5f5] text-[13px] md:text-[14px] font-medium tracking-wide">
                Premier family Day event Management Company in Delhi, Gurgaon & Noida
              </p>
            </div>

            <Link href="#" className="bg-[#00c2c2] hover:bg-[#00a8a8] text-white px-8 py-3.5 font-bold text-[13px] uppercase transition-colors shadow-sm tracking-wider">
              TALK TO YOUR EVENT PLANNER
            </Link>
          </div>
        </section>

        {/* Info & Images Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Heading Block */}
            <div className="text-center mb-10">
              <h2 className="text-[#1a1a1a] text-[22px] md:text-[26px] font-bold uppercase tracking-wide mb-2">
                CORPORATE FAMILY DAY
              </h2>
              <h3 className="text-[#967455] text-[18px] md:text-[20px] font-medium mb-4">
                Event Planner & Organiser
              </h3>
              
              <div className="w-10 h-[2px] bg-[#967455] mx-auto mb-8"></div>
              
              <p className="text-[#555] text-[13.5px] md:text-[14px] leading-relaxed max-w-3xl mx-auto font-medium">
                <strong>Corporate Family Day</strong> is all about bringing your colleagues and their families together for a shared, enjoyable experience. It acts as a powerful staff motivation tool, fostering unity and celebrating success. It's a great opportunity to reward your team, break cultural barriers, and create lasting memories beyond the workplace.
              </p>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 w-full">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <Image src="/images/photo4.jpg" alt="Family Day Setup" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <Image src="/images/photo5.jpg" alt="Family Day Activity" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <Image src="/images/photo6.jpg" alt="Family Day Games" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <Image src="/images/photo7.jpg" alt="Family Day Stage" fill className="object-cover" />
              </div>
            </div>

            {/* Text Block Below Images */}
            <div className="text-center mb-10">
              <h3 className="text-[#008484] text-[18px] md:text-[20px] font-bold mb-6">
                Your One-Stop Solution For Family Day Events
              </h3>
              
              <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium space-y-5 max-w-[850px] mx-auto">
                <p>
                  Showmakerz is a premier <strong>family day event organizer in Delhi, Gurgaon, Noida & NCR</strong>. As companies prioritize employee engagement, an <strong>annual family day event</strong> is the perfect way to reward teams. As a <Link href="#" className="text-[#008484] font-semibold hover:underline">top event management company in India</Link>, we take complete charge of your celebration from concept to seamless execution.
                </p>
                <p>
                  Being a full-service <strong>Family Day Event Planner</strong>, we handle premium venue sourcing, immersive themes, and interactive activities for <strong>all age groups</strong>. If you are looking to host a flawless <strong>corporate family day event</strong>, our production team guarantees a memorable <strong>company event</strong>.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Link href="#" className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 font-bold text-[13px] uppercase transition-colors shadow-sm rounded-sm tracking-wider">
                GET CUSTOM FAMILY DAY IDEAS
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* BIG or SMALL Section */}
        <section className="w-full">
          {/* Top Dark Block */}
          <div className="bg-[#140b17] py-16 px-4 text-center">
            <h2 className="text-white text-[22px] md:text-[28px] font-bold mb-4 uppercase tracking-wide">
              BIG Or SMALL
            </h2>
            <p className="text-white text-[13.5px] md:text-[15px] font-medium tracking-wide">
              We cater for any sized event From 50 to 5000 Guests
            </p>
          </div>
          
          {/* Bottom Gradient Block */}
          <div className="bg-gradient-to-r from-[#440e5c] to-[#12106e] py-16 md:py-20 px-4 text-center border-t border-white/5">
            <div className="max-w-5xl mx-auto flex flex-col items-center">
              <h3 className="text-white text-[20px] md:text-[24px] font-bold mb-8">
                Over 18 Years of Experience & a Rich Portfolio
              </h3>
              
              <div className="text-white text-[13.5px] leading-[1.8] font-medium space-y-5 max-w-[900px] mb-12 text-center mx-auto">
                <p>
                  We specialize in <strong>corporate events</strong> and <strong>corporate family day celebrations</strong>. With 18+ years of unmatched experience, we've successfully organized over <strong>250 family day events</strong> for leading IT companies, BPOs, FMCG brands, and industrial units across Delhi, Gurgaon, Noida, and NCR.
                </p>
                <p>
                  When you partner with us, you can be confident your guests will have an enjoyable, engaging experience. We are recognized as one of the <strong>top family day event organizers in Delhi NCR</strong>, trusted by India's biggest brands.
                </p>
              </div>

              <Link href="#" className="inline-flex items-center gap-2 bg-[#00c2c2] hover:bg-[#00a3a3] text-white px-8 py-3.5 font-bold text-[13px] uppercase transition-colors shadow-sm rounded-sm tracking-wider">
                GET YOUR CUSTOM QUOTE
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Hire Us & Services Details Section */}
        <section className="w-full bg-[#f8f9f8] py-24 px-4">
          <div className="max-w-5xl mx-auto flex flex-col gap-24">
            
            {/* Why Hire Us */}
            <div className="text-center">
              <h2 className="text-[#1a1a1a] text-[22px] md:text-[26px] font-bold uppercase tracking-wide mb-2">
                WHY HIRE SHOWMAKERZ
              </h2>
              <h3 className="text-[#967455] text-[18px] md:text-[20px] font-medium mb-4">
                As Your Corporate Family Day Event Planners?
              </h3>
              <div className="w-10 h-[2px] bg-[#967455] mx-auto mb-8"></div>
              
              <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium max-w-[850px] mx-auto mb-10">
                <p>
                  We deliver high-caliber family fun days filled with unique <strong>engagement activities</strong>. Our professional team works closely with you to reward your loyal staff and their families with a flawless, memorable experience.
                </p>
              </div>

              <div className="bg-[#f0f2f0] border-l-[3px] border-[#008484] p-6 max-w-[850px] mx-auto text-left mb-8 shadow-sm">
                <p className="text-[#555] text-[14px] font-medium leading-relaxed">
                  With Showmakerz as your family day planner in Delhi NCR, every detail is covered — ensuring your event runs flawlessly.
                </p>
              </div>
            </div>

            {/* Tailored Packages */}
            <div className="text-center">
              <h3 className="text-[#008484] text-[18px] md:text-[20px] font-bold mb-6">
                Tailored Packages to Match Your Needs
              </h3>
              <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium max-w-[850px] mx-auto mb-10">
                We provide fully customizable, bespoke packages built around your specific goals. Simply choose your favorite activities, interactive games, entertainment setups, and theme-based décor, and we will bring your vision to life. Trust India's leading <Link href="#" className="text-[#008484] font-semibold hover:underline">Family Day Event Management Agency</Link> to handle the rest.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo1.jpg" alt="Family Day Activities" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo2.jpg" alt="Family Day Setup" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo3.jpg" alt="Family Day Entertainment" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Locating Venue */}
            <div className="text-center">
              <h3 className="text-[#008484] text-[18px] md:text-[20px] font-bold mb-6">
                Locating & Finalization of Venue
              </h3>
              
              <div className="bg-[#f0f2f0] border-l-[3px] border-[#008484] p-6 max-w-[850px] mx-auto text-left mb-8 shadow-sm">
                <p className="text-[#555] text-[14px] font-medium leading-relaxed">
                  From selecting a suitable venue to theme décor, employee engagement, kids' activities, and entertainment—we manage every element for a perfect family day celebration.
                </p>
              </div>
              
              <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium max-w-[850px] mx-auto">
                We have a long list of event venues, hotels & party lawns with us, spread throughout Delhi NCR. We maintain cordial relationships with most venues, allowing us to negotiate better deals for our clients. Please leave your query here and ask for our free <Link href="#" className="text-[#008484] font-semibold hover:underline">venue suggestion service</Link>.
              </p>
            </div>

            {/* Theme Ideas */}
            <div className="text-center">
              <h3 className="text-[#008484] text-[18px] md:text-[20px] font-bold mb-10">
                Theme Ideas
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo4.jpg" alt="Superhero Theme" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo5.jpg" alt="Winter Theme" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo6.jpg" alt="Carnival Theme" fill className="object-cover" />
                </div>
              </div>
              
              <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium max-w-[850px] mx-auto space-y-5">
                <p>
                  A <Link href="#" className="text-[#008484] font-semibold hover:underline">unique theme for a family day event</Link> delivers the exclusivity needed to make your celebration stand out and engage guests. The Showmakerz creative team specializes in designing bespoke corporate themes tailored to your brand identity.
                </p>
                <p>
                  With 18+ years of expertise, we curate immersive themed experiences across India for all audience sizes and budget ranges. No matter your location, we bring our incredible lineup of creative concepts directly to your venue.
                </p>
              </div>
            </div>

            {/* Fun Booth Games */}
            <div className="text-center">
              <h3 className="text-[#008484] text-[18px] md:text-[20px] font-bold mb-10">
                Fun Booth Games & Engagement Activities
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo7.jpg" alt="Toss Game" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo8.jpg" alt="Shooting Game" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo9.jpg" alt="Track Game" fill className="object-cover" />
                </div>
              </div>
              
              <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium max-w-[850px] mx-auto">
                To make your family day event more amazing, we have a unique collection of fun games booths, customized &quot;play-to-win&quot; game stalls, and engagement activities. From inflatable games to gun shooting, toss-the-ball, tattoo corners, mechanical games, segways, zorbing, and quad bikes — we have many <Link href="#" className="text-[#008484] font-semibold hover:underline">funfair games & activities ideas</Link> to make your day more engaging.
              </p>
            </div>

            {/* Family Day Entertainment */}
            <div className="text-center">
              <h3 className="text-[#008484] text-[18px] md:text-[20px] font-bold mb-10">
                Family Day Entertainment
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo1.jpg" alt="Entertainer" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo2.jpg" alt="Dance Troupe" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo3.jpg" alt="Special Act" fill className="object-cover" />
                </div>
              </div>
              
              <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium max-w-[850px] mx-auto space-y-4">
                <p>
                  We provide a diverse lineup of high-energy entertainment and interactive activities curated to keep guests of all ages engaged throughout your corporate family day.
                </p>
                <ul className="text-left max-w-[650px] mx-auto space-y-3 py-4">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 text-lg">🎭</span>
                    <span><strong>Live Performers:</strong> Stand-up comedy, hilarious mimicry acts, and dynamic dance troupes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 text-lg">🎵</span>
                    <span><strong>Music & Vibes:</strong> Theme-based special acts, professional live singers, and top corporate DJs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 text-lg">🎈</span>
                    <span><strong>Kids & Family Fun:</strong> Captivating magic shows, traditional puppet theatres, and flash mobs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 text-lg">🎨</span>
                    <span><strong>Interactive Zones:</strong> Engaging team games and DIY craft stations to keep everyone creative.</span>
                  </li>
                </ul>
                <p>
                  Whatever atmosphere you want to build, we deliver the perfect entertainment mix for an unforgettable day.
                </p>
              </div>
            </div>

            {/* Event Infrastructure */}
            <div className="text-center">
              <h3 className="text-[#008484] text-[18px] md:text-[20px] font-bold mb-10">
                Event Infrastructure & Complete Event Planning
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo4.jpg" alt="Dhol Welcome" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo5.jpg" alt="Tent Setup" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/photo6.jpg" alt="Registration Desk" fill className="object-cover" />
                </div>
              </div>
              
              <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium max-w-[850px] mx-auto space-y-4">
                <p>
                  We offer a dynamic range of temporary structures — from big top tents to gaming zones, theme props, event furniture, main stage arenas, catering sheds, and everything required to transform your event space into a spectacular party zone. We have something to suit any style and size of event. With our experience, expertise, and <Link href="#" className="text-[#008484] font-semibold hover:underline">ideas to organize a family fun day event</Link>, we can plan a fun-filled and engaging <strong>family fun day event</strong> for your company.
                </p>
              </div>
            </div>

            {/* We Are Your Event Specialists */}
            <div className="text-center mt-4">
              <h3 className="text-[#008484] text-[18px] md:text-[20px] font-bold mb-8">
                We Are Your Event Specialists
              </h3>
              
              <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium max-w-[850px] mx-auto space-y-5 mb-10">
                <p>
                  We are a leading <Link href="#" className="text-[#008484] font-semibold hover:underline">corporate event management company</Link> in Delhi Gurgaon Noida NCR. From initial planning to promoting the event within your organization, coordinating infrastructure, managing health and safety, arranging entertainment, and executing the day's schedule — we cover it all thoroughly with utmost professionalism.
                </p>
                <p>
                  If you are looking to hire an experienced & competent agency to organize a family day event, please call us now and start building your event with us.
                </p>
              </div>

              <Link href="#" className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 font-bold text-[13px] uppercase transition-colors shadow-sm rounded-sm tracking-wider">
                PLAN YOUR FAMILY DAY EVENT NOW
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-[#eae5f2] py-20 px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-[#1a1a1a] text-[22px] md:text-[26px] font-bold uppercase tracking-wide mb-2">
                FREQUENTLY ASKED QUESTIONS &ndash;
              </h2>
              <h3 className="text-[#967455] text-[18px] md:text-[20px] font-medium mb-4">
                Corporate Family Day Events
              </h3>
              <div className="w-10 h-[2px] bg-[#967455] mx-auto mb-8"></div>
              
              <p className="text-[#555] text-[14px] font-medium">
                Everything You Need To Know About Our <Link href="#" className="text-[#008484] font-semibold hover:underline">Event Management Services</Link>
              </p>
            </div>

            {/* Accordion Items */}
            <div className="w-full max-w-3xl">
              <FaqAccordion faqs={familyDayFaqs} />
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <PartnerBanner />
      </main>

      <Footer 
        companyDescription={
          <p className="leading-relaxed mb-6 font-medium">
            We are a group of seasoned and experienced event managers, event planners, event organizers and a complete corporate event management company in Delhi, Gurgaon, Noida NCR. We are often counted in the list of <Link href="#" className="text-[#008484] font-semibold hover:underline">premium event management companies in Delhi Gurgaon NCR</Link>.
          </p>
        }
      />
    </>
  );
}
