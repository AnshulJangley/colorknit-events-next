import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowRightCircle, Check, Plus, Phone, MessageCircle, Mail, ImageIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import PartnerBanner from "@/components/PartnerBanner";

export const metadata = {
  title: "Employee Engagement Activities | EMG Showmakerz",
  description: "Boost employee morale and team spirit with our expert employee engagement event planning services in Delhi NCR.",
};

const employeeEngagementFaqs = [
  {
    question: "What types of employee engagement events do you organize?",
    answer: "We organize a comprehensive range of employee engagement events designed to boost workplace morale and team synergy. Our portfolio includes interactive team-building offsites, corporate family day outings, leadership town halls, annual gala dinners, festive office celebrations, and specialized wellness workshops across Delhi NCR. Each event is strategically planned to align with your internal HR objectives and corporate culture."
  },
  {
    question: "Can employee engagement programs be customized for our company culture?",
    answer: "Absolutely. Customization is at the core of our corporate event planning services. We collaborate closely with your HR and administrative teams to understand your company's core values, workforce demographics, and specific goals. Whether you need a high-energy outdoor challenge to foster collaboration or a sophisticated evening reception for executive networking, we tailor every aspect—from thematic decor and engagement activities to catering and entertainment—ensuring the experience perfectly reflects your brand identity."
  },
  {
    question: "Do you provide venue selection and event management support?",
    answer: "Yes, we provide end-to-end event management support. Our turnkey corporate solutions cover everything from meticulous venue sourcing and negotiation across premier locations in Delhi, Gurugram, and Noida, to complete on-site execution. We handle technical production, stage design, vendor coordination, artist management, and safety compliance, allowing your internal teams to participate in the event completely stress-free."
  },
  {
    question: "Can you share event ideas and budget estimates before confirmation?",
    answer: "Certainly! We believe in complete transparency during the planning phase. Once we understand your initial requirements, our execution consultants will provide you with a customized event proposal featuring creative thematic ideas, proposed engagement activities, and a comprehensive, itemized budget estimate. We work collaboratively to refine these blueprints until they meet both your experiential vision and financial parameters."
  },
  {
    question: "How much time is required to plan an employee engagement event?",
    answer: "The planning timeline depends on the scale and complexity of the initiative. For standard team-building activities or internal office celebrations, 2 to 4 weeks is generally sufficient. However, for large-scale annual galas, multi-day offsites, or major corporate family days, we recommend initiating the planning process 2 to 3 months in advance. This allows ample time for premium venue securing, custom fabrication, and seamless logistical coordination to guarantee a flawless execution."
  }
];

export default function EmployeeEngagement() {
  return (
    <>
      <Header />
      
      <main className="w-full flex-grow">
        {/* Hero Section */}
        <section 
          className="relative flex flex-col items-center justify-center py-20 px-4 bg-[#120a17] min-h-[400px]"
        >
          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-4">
            <h1 className="text-white text-2xl md:text-3xl lg:text-[32px] font-bold tracking-wide uppercase mb-6 drop-shadow-md">
              EMPLOYEE ENGAGEMENT EVENTS
            </h1>
            
            <div className="w-12 h-[3px] bg-[#d94a28] mb-12 shadow-sm"></div>
            
            <div className="bg-[#361e27] border border-white/5 px-12 py-[18px] rounded-[5px] mb-12 shadow-md max-w-4xl">
              <p className="text-white text-[15px] font-medium tracking-wide leading-relaxed">
                Innovative corporate activities designed to boost team morale, foster deep collaboration, and drive performance.
              </p>
            </div>
            
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 bg-[#00a8a8] hover:bg-[#008f8f] text-white px-8 py-3.5 text-[13px] font-bold tracking-wider transition-colors uppercase shadow-md rounded-[2px]"
            >
              <Phone size={16} fill="currentColor" />
              TALK TO YOUR EVENT PLANNER
            </Link>
          </div>
        </section>

        {/* Gray Info Strip */}
        <section className="w-full bg-[#e3e2e0] py-[22px] px-4 shadow-inner">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-[#4b5258] text-[18px] md:text-[20px] font-bold tracking-wide">
              Engaging & Inspiring
            </h2>
          </div>
        </section>
        
        {/* Celebrating Moments Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Headers */}
            <div className="text-center mb-14">
              <h2 className="text-[#2b2b2b] text-[22px] md:text-[26px] font-bold tracking-[0.1em] uppercase mb-2">
                CELEBRATING MOMENTS,
              </h2>
              <h3 className="text-[#847565] text-[18px] md:text-[20px] font-semibold tracking-wide mb-6">
                Creating Memories
              </h3>
              <div className="w-[60px] h-[2px] bg-[#a88f78] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
              {/* Text Column */}
              <div className="text-[#444] text-[14.5px] leading-[1.8] flex flex-col gap-6 pt-2">
                <p>
                  At Showmakerz, we understand the vital role that HR and corporate administration teams play in shaping a high-performance workplace culture. From custom internal employee engagement programs and strategic incentive events to seamless executive town halls and national business conferences, our expert planners ensure absolute logistical precision.
                </p>
                
                <p>
                  As a premier <strong className="text-[#333]">employee engagement event planner in Delhi, Gurugram, and NCR</strong>, we design activations that unite workforces, strengthen corporate teams, and cultivate a deep sense of corporate belonging. Our customized engagement roadmaps are engineered to align with your corporate values, maximize workforce morale, and inspire long-term employee collaboration.
                </p>
                
                <p>
                  Our <Link href="#" className="text-[#008484] hover:underline font-semibold">corporate event planning experts</Link> specialize across all experiential formats—including virtual, hybrid, and immersive live on-site campaigns. Backed by nearly two decades of execution expertise, our internal portfolio spans multi-city conferences, interactive leadership town halls, strategic brand launches, media press meets, and prestigious annual award galas.
                </p>
              </div>

              {/* Image Column */}
              <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-[8px] overflow-hidden shadow-lg mx-auto">
                <Image 
                  src="/images/photo6.jpg" 
                  alt="Employee Engagement Archery Activity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contact Button */}
            <div className="mt-16 flex justify-center">
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 bg-[#00a8a8] hover:bg-[#008f8f] text-white px-8 py-3.5 text-[13px] font-bold tracking-wider transition-colors uppercase shadow-md rounded-[2px]"
              >
                CONTACT SHOWMAKERZ
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* Employee Engagement Matters Section */}
        <section className="w-full bg-gradient-to-r from-[#240a2c] to-[#0f0e40] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-white text-[24px] md:text-[28px] font-bold tracking-wide mb-8">
              Employee Engagement Matters
            </h2>
            
            <p className="text-[#e2e2e2] text-[14.5px] leading-[1.8] mb-6 max-w-4xl text-left md:text-center">
              At Showmakerz, we believe <strong className="text-white font-bold">people matter</strong>. Whether you are planning a high-energy corporate outing, an interactive team-building activity, a milestone foundation day, an immersive <strong className="text-white font-bold">office celebration</strong>, or an annual gala—we are here to relieve your HR and administrative teams from the operational pressures of event planning.
            </p>
            
            <p className="text-[#e2e2e2] text-[14.5px] leading-[1.8] mb-14 max-w-4xl text-left md:text-center">
              Boost workplace productivity and retain top enterprise talent through meaningful corporate experiences. Enhancing internal employee engagement is not just a trend—it is a core strategic advantage. Engaged workforces are significantly more productive, loyal, and fundamentally invested in your organization's long-term commercial success.
            </p>
            
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 bg-[#00a8a8] hover:bg-[#008f8f] text-white px-8 py-3.5 text-[13px] font-bold tracking-wider transition-colors uppercase shadow-md rounded-[2px]"
            >
              VIEW PICTURE GALLERY
              <ImageIcon size={18} strokeWidth={2} />
            </Link>
          </div>
        </section>

        {/* Explore Our Services Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Headers */}
            <div className="text-center mb-10">
              <h2 className="text-[#2b2b2b] text-[22px] md:text-[26px] font-bold tracking-[0.1em] uppercase mb-2">
                EXPLORE OUR SERVICES
              </h2>
              <h3 className="text-[#847565] text-[18px] md:text-[20px] font-semibold tracking-wide mb-6">
                For Employee Engagement
              </h3>
              <div className="w-[60px] h-[2px] bg-[#a88f78] mx-auto"></div>
            </div>

            {/* Paragraphs */}
            <div className="max-w-4xl mx-auto text-center text-[#555] text-[14.5px] leading-[1.8] mb-16">
              <p className="mb-6">
                Higher engagement reduces absenteeism and lowers turnover, saving your company significant time and costs in talent acquisition. This allows your enterprise team to focus on what truly matters—innovation and business growth.
              </p>
              <p>
                We take the stress out of managing these corporate internal initiatives with creative, tailored planning and flawless production. From team-building exercises and interactive family days to corporate induction sessions and large-scale annual galas, our structural solutions leave a lasting impact on your workforce.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {/* Card 1 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm mb-4">
                  <Image src="/images/photo1.jpg" alt="Annual Parties" fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center gap-2 text-[#00a8a8] hover:text-[#008f8f] font-bold text-[16px] transition-colors tracking-wide">
                  <ArrowRightCircle size={18} strokeWidth={2.5} />
                  Annual Parties
                </Link>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm mb-4">
                  <Image src="/images/photo4.jpg" alt="Family Day Outings" fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center gap-2 text-[#00a8a8] hover:text-[#008f8f] font-bold text-[16px] transition-colors tracking-wide">
                  <ArrowRightCircle size={18} strokeWidth={2.5} />
                  Family Day Outings
                </Link>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm mb-4">
                  <Image src="/images/photo3.jpg" alt="Town Hall & R&R" fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center gap-2 text-[#00a8a8] hover:text-[#008f8f] font-bold text-[16px] transition-colors tracking-wide">
                  <ArrowRightCircle size={18} strokeWidth={2.5} />
                  Town Hall & R&R
                </Link>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm mb-4">
                  <Image src="/images/photo5.jpg" alt="Team Offsite" fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center gap-2 text-[#00a8a8] hover:text-[#008f8f] font-bold text-[16px] transition-colors tracking-wide">
                  <ArrowRightCircle size={18} strokeWidth={2.5} />
                  Team Offsite
                </Link>
              </div>

              {/* Card 5 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm mb-4">
                  <Image src="/images/photo6.jpg" alt="Team Building Programs" fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center gap-2 text-[#00a8a8] hover:text-[#008f8f] font-bold text-[16px] transition-colors tracking-wide">
                  <ArrowRightCircle size={18} strokeWidth={2.5} />
                  Team Building Programs
                </Link>
              </div>

              {/* Card 6 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm mb-4">
                  <Image src="/images/photo1.jpg" alt="Facility Launch Events" fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center gap-2 text-[#00a8a8] hover:text-[#008f8f] font-bold text-[16px] transition-colors tracking-wide">
                  <ArrowRightCircle size={18} strokeWidth={2.5} />
                  Facility Launch Events
                </Link>
              </div>

              {/* Card 7 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm mb-4">
                  <Image src="/images/photo2.jpg" alt="Festival Decoration" fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center gap-2 text-[#00a8a8] hover:text-[#008f8f] font-bold text-[16px] transition-colors tracking-wide">
                  <ArrowRightCircle size={18} strokeWidth={2.5} />
                  Festival Decoration
                </Link>
              </div>

              {/* Card 8 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm mb-4">
                  <Image src="/images/photo4.jpg" alt="Milestone Celebration" fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center gap-2 text-[#00a8a8] hover:text-[#008f8f] font-bold text-[16px] transition-colors tracking-wide">
                  <ArrowRightCircle size={18} strokeWidth={2.5} />
                  Milestone Celebration
                </Link>
              </div>

              {/* Card 9 */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm mb-4">
                  <Image src="/images/photo3.jpg" alt="Corporate Parties" fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center gap-2 text-[#00a8a8] hover:text-[#008f8f] font-bold text-[16px] transition-colors tracking-wide">
                  <ArrowRightCircle size={18} strokeWidth={2.5} />
                  Corporate Parties
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 flex flex-col items-center text-center">
              <h4 className="text-[#4b5258] text-[18px] md:text-[20px] font-bold mb-10 max-w-4xl leading-relaxed">
                Let us help you design experiences that motivate, reward, and retain your team—professionally and passionately.
              </h4>
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 bg-[#00a8a8] hover:bg-[#008f8f] text-white px-8 py-3.5 text-[13px] font-bold tracking-wider transition-colors uppercase shadow-md rounded-[2px]"
              >
                BOOK YOUR PROGRAM
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* Your Go-To Employee Engagement Planner Section */}
        <section className="w-full bg-[#ebe9e4] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Headers */}
            <div className="text-center mb-14">
              <h2 className="text-[#333] text-[22px] md:text-[26px] font-bold tracking-[0.1em] uppercase mb-2">
                YOUR GO-TO EMPLOYEE ENGAGEMENT
              </h2>
              <h3 className="text-[#847565] text-[18px] md:text-[20px] font-semibold tracking-wide mb-6">
                Event Planner in Delhi NCR
              </h3>
              <div className="w-[60px] h-[2px] bg-[#a88f78] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Text Column */}
              <div className="text-[#444] text-[14.5px] leading-[1.8] flex flex-col gap-6">
                <p>
                  Planning a premier <strong className="text-[#333]">corporate event</strong> takes more than basic logistics—it demands immersive creativity, technical precision, and proven agency expertise. At Showmakerz, we bring all three elements to every single internal workforce campaign.
                </p>
                
                <p>
                  Recognised among the top <Link href="#" className="text-[#6b3a8e] hover:underline font-semibold underline">corporate event management companies in Delhi NCR</Link>, we have helped leading enterprises across diverse industries craft meaningful, high-impact workforce experiences.
                </p>
                
                <p>
                  From bespoke internal employee engagement activations to high-stakes leadership summits, we translate corporate ideas into lasting experiential milestones—strengthening internal branding, corporate alignment, and cross-departmental team connections along the way.
                </p>
              </div>

              {/* Image Column */}
              <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden shadow-md border-[6px] border-white mx-auto">
                <Image 
                  src="/images/photo5.jpg" 
                  alt="Team Building Parachute Activity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By HR Teams Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Headers */}
            <div className="text-center mb-14">
              <h2 className="text-[#333] text-[22px] md:text-[26px] font-bold tracking-[0.1em] uppercase mb-2">
                TRUSTED BY HR TEAMS
              </h2>
              <h3 className="text-[#847565] text-[18px] md:text-[20px] font-semibold tracking-wide mb-6">
                Across Delhi, Gurugram, and NCR
              </h3>
              <div className="w-[60px] h-[2px] bg-[#a88f78] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Image Column - Left */}
              <div className="relative w-full md:w-3/4 aspect-[3/4] rounded-[8px] overflow-hidden shadow-md mx-auto order-2 md:order-1">
                <Image 
                  src="/images/photo8.jpg" 
                  alt="Corporate Event Speaker"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Text Column - Right */}
              <div className="text-[#444] text-[13.5px] leading-[1.8] flex flex-col gap-6 order-1 md:order-2 pt-4 md:pt-0">
                <p>
                  With 300+ successful internal activations to our credit, we specialise in delivering high-impact <strong className="text-[#333]">employee engagement programs</strong>, comprehensive <strong className="text-[#333]">corporate family days</strong>, corporate <strong className="text-[#333]">town halls</strong>, and seamless corporate <strong className="text-[#333]">induction programs</strong>.
                </p>
                
                <p>
                  We manage a diverse spectrum of seasonal festive and workspace campaigns—from interactive <Link href="#" className="text-[#008484] hover:underline font-semibold">family day outings</Link> and annual gala celebrations to custom <Link href="#" className="text-[#008484] hover:underline font-semibold">team-building activities</Link>—outfitted with immersive thematic layouts, live food counters, and custom gaming activation zones.
                </p>
                
                <p>
                  Every initiative is engineered specifically around corporate administration metrics. From precision venue selection and strict safety compliance audits to flawless delivery, your team is supported every step of the journey by a dedicated Showmakerz execution partner.
                </p>
                
                <p>
                  From initial concept architecture to final teardown production, we deliver full turnkey corporate event solutions tailored explicitly to your commercial goals and company culture. Whether managing an internal team-building activity, a major annual celebration, or an executive leadership offsite—we oversee every variable with deep professionalism and creative strategy.
                </p>
              </div>
            </div>

            {/* Request a Quote Button */}
            <div className="mt-16 flex justify-center">
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 bg-[#00a8a8] hover:bg-[#008f8f] text-white px-8 py-3.5 text-[13px] font-bold tracking-wider transition-colors uppercase shadow-md rounded-[2px]"
              >
                REQUEST A QUOTE
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* Let's Create Unforgettable Section */}
        <section className="w-full bg-[#120a17] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Headers */}
            <div className="text-center mb-14">
              <h2 className="text-white text-[22px] md:text-[26px] font-bold mb-2">
                Let's Create Unforgettable
              </h2>
              <h3 className="text-[#e2e2e2] text-[16px] md:text-[18px] font-semibold tracking-wide mb-6">
                Employee Engagement Events Together
              </h3>
              <div className="w-[60px] h-[2px] bg-[#a88f78] mx-auto"></div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14">
              <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden border-[2px] border-white">
                <Image 
                  src="/images/photo3.jpg" 
                  alt="Neon sign We're so glad You're here"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden border-[2px] border-white">
                <Image 
                  src="/images/photo4.jpg" 
                  alt="Corporate Event Dancing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom Paragraphs & CTA */}
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <p className="text-[#e2e2e2] text-[13px] md:text-[14px] leading-[1.8] font-medium mb-6">
                We help you celebrate every corporate milestone, annual festival, and internal cultural moment. Relying on our custom venue sourcing analytics and trusted enterprise vendor networks, we recommend ideal event coordinates across Delhi, Gurugram, Noida, and the NCR—perfectly structured to your workforce capacity and allocated budget.
              </p>
              
              <p className="text-[#e2e2e2] text-[13px] md:text-[14px] leading-[1.8] font-medium mb-6">
                Are you looking to elevate your next internal employee engagement initiative? Partner with Showmakerz to bring your operational vision to life seamlessly, stress-free, and spectacularly.
              </p>
              
              <p className="text-[#e2e2e2] text-[13px] md:text-[14px] leading-[1.8] font-medium mb-12">
                Still in the conceptual planning phase? Whether you are mapping out raw creative ideas or ready to launch live campaigns—reach out to our execution consultants today for expert industry insights, strategic planning blueprints, or a comprehensive budget estimate.
              </p>

              <Link 
                href="#" 
                className="inline-flex items-center gap-2 bg-[#00a8a8] hover:bg-[#008f8f] text-white px-8 py-3.5 text-[13px] font-bold tracking-wider transition-colors uppercase shadow-md rounded-[2px]"
              >
                PLAN YOUR NEXT PROGRAM
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-[#eae4f1] py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Headers */}
            <div className="text-center mb-14">
              <h2 className="text-[#333] text-[22px] md:text-[26px] font-bold tracking-[0.1em] uppercase mb-2">
                FREQUENTLY ASKED
              </h2>
              <h3 className="text-[#847565] text-[18px] md:text-[20px] font-semibold tracking-wide mb-6">
                Questions
              </h3>
              <div className="w-[60px] h-[2px] bg-[#a88f78] mx-auto"></div>
            </div>

            <FaqAccordion faqs={employeeEngagementFaqs} />
          </div>
        </section>

        {/* Contact Strip Section */}
        <PartnerBanner />
      </main>

      <Footer />
    </>
  );
}
