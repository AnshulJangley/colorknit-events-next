import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MessageCircle, Mail, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import PartnerBanner from "@/components/PartnerBanner";

const townHallFaqs = [
  {
    question: "What is a corporate town hall event?",
    answer: "A corporate town hall is a company-wide meeting where leadership communicates key updates, strategic goals, and organizational milestones to all employees. It fosters transparency, alignment, and open dialogue within the organization."
  },
  {
    question: "Do you organize town hall events in Delhi, Gurgaon and Noida?",
    answer: "Yes, we organize professional town hall events across Delhi, Gurgaon, Noida, and the entire NCR region, handling everything from venue setup and AV production to content design and live streaming."
  },
  {
    question: "What is a Rewards & Recognition (R&R) event?",
    answer: "An R&R event is a formal occasion where an organization celebrates and rewards top-performing employees. It boosts morale, drives motivation, and reinforces a culture of excellence within the workplace."
  },
  {
    question: "Can you manage both town hall and R&R events together?",
    answer: "Absolutely! We frequently combine town hall meetings with R&R ceremonies into a single seamless event, allowing companies to communicate key updates and celebrate their stars on the same occasion."
  },
  {
    question: "How early should we plan a town hall or R&R event?",
    answer: "We recommend starting the planning process at least 4 to 6 weeks in advance to ensure the best venue, AV setup, award design, and entertainment lineup are all in place."
  },
  {
    question: "What services do you provide for R&R events?",
    answer: "Our R&R event services include award trophy design and manufacturing, stage and backdrop design, professional photography and videography, emcee management, entertainment acts, and complete logistics."
  },
  {
    question: "How can we book your services for a town hall or R&R event?",
    answer: "You can reach us via phone, email, or through the enquiry form on our website. Our dedicated event planners will connect with you to understand your requirements and create a tailored proposal."
  }
];

export const metadata = {
  title: "Town Hall Event Organizer in Delhi NCR | EMG Showmakerz",
  description: "Professional Town Hall & R&R Event Management Company in Delhi, Gurgaon & Noida",
};

export default function TownHallRRPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-[#170a1c] via-[#1a0f22] to-[#120815] py-24 flex flex-col items-center justify-center min-h-[300px]">
          <div className="text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-white text-[22px] md:text-[30px] lg:text-[36px] font-bold uppercase tracking-wide mb-6">
              TOWN HALL EVENT ORGANIZER IN DELHI NCR
            </h1>

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[11px] md:text-[12px] text-gray-400 font-medium uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="text-gray-600">&rsaquo;</span>
              <Link href="/employee-engagement" className="hover:text-white transition-colors">EMPLOYEE ENGAGEMENT</Link>
              <span className="text-gray-600">&rsaquo;</span>
              <span className="text-gray-300">TOWN HALL EVENTS</span>
            </nav>
          </div>
        </section>

        {/* Main Content + Sidebar */}
        <section className="w-full bg-[#f8f9f8] py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">

            {/* Left: Main Content */}
            <div className="flex flex-col">
              {/* Section Header */}
              <div className="text-center mb-10">
                <h2 className="text-[#1a1a1a] text-[20px] md:text-[24px] font-bold uppercase tracking-wide mb-1">
                  TOWN HALL & R&R
                </h2>
                <h3 className="text-[#967455] text-[15px] md:text-[16px] font-medium mb-3">
                  Meetings Planner
                </h3>
                <div className="w-8 h-[2px] bg-[#967455] mx-auto"></div>
              </div>

              {/* Intro paragraph */}
              <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium mb-8">
                <p>
                  A <strong>corporate town hall event</strong> is a vital business meeting format designed to open direct channels between company leadership and employees. These organizational assemblies allow executives to share internal policies, financial results, and quarterly milestones. To maximize engagement, these sessions typically conclude with an open Q&A panel, rewards ceremonies, and curated corporate entertainment.
                </p>
              </div>

              {/* Hero Image */}
              <div className="relative w-full max-w-[580px] aspect-[16/7] rounded-md overflow-hidden mb-10 shadow-sm">
                <Image src="/images/photo20.jpg" alt="Town Hall - It's An Opportunity To Surprise & Delight" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <p className="text-white text-[18px] md:text-[22px] font-bold text-center leading-snug px-4">
                    It&apos;s An Opportunity<br />To<br />Surprise & Delight
                  </p>
                </div>
              </div>

              {/* Strategic Purpose */}
              <div className="mb-8">
                <h4 className="text-[#008484] text-[15px] md:text-[16px] font-bold mb-4">The Strategic Purpose Of Town Hall Meetings</h4>
                <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium mb-4">
                  A professionally engineered town hall meeting serves to facilitate:
                </p>
                <ul className="text-[#555] text-[13.5px] leading-[1.8] font-medium space-y-2 list-disc ml-5 mb-6">
                  <li>Executive management keeping the global workforce up to date on critical milestones.</li>
                  <li>Direct employee feedback, live polling, and raw Q&A sessions with leadership panels.</li>
                  <li>Absolute alignment across departments regarding organizational targets, values, and vision.</li>
                </ul>
                <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium mb-4">
                  Showmakerz is a premier <Link href="#" className="text-[#008484] font-semibold hover:underline">event management company</Link> in Delhi, Gurgaon, and Noida. We provide the end-to-end production infrastructure needed to deliver a seamless corporate town hall.
                </p>
                <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium">
                  Planning your next internal brief or <strong>R&R ceremony</strong>? Connect with us for customized staging concepts and competitive cost estimates.
                </p>
              </div>

              {/* Key Operational Advantages */}
              <div className="mb-8">
                <h4 className="text-[#008484] text-[15px] md:text-[16px] font-bold mb-4">Key Operational Advantages</h4>
                <ul className="text-[#555] text-[13.5px] leading-[1.8] font-medium space-y-2 list-disc ml-5">
                  <li>Streamlined dissemination of company-wide updates.</li>
                  <li>Enhanced leadership visibility and stakeholder trust.</li>
                  <li>Active promotion of horizontal teamwork and inter-departmental collaboration.</li>
                  <li>Higher workforce motivation and sustained employee engagement metrics.</li>
                  <li>Direct capture of unfiltered workplace feedback.</li>
                </ul>
              </div>

              {/* B2B Production & Planning Tips */}
              <div className="mb-10">
                <h4 className="text-[#008484] text-[15px] md:text-[16px] font-bold mb-4">B2B Production & Planning Tips</h4>
                <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium mb-4">
                  Corporate town hall events are critical for maintaining internal alignment, offering a unique opportunity to leverage two hours of undivided employee attention. Here are a few essential milestones to guide your committee toward a successful corporate production:
                </p>
                <ul className="text-[#555] text-[13.5px] leading-[1.8] font-medium space-y-2 list-disc ml-5 mb-6">
                  <li>Initiate technical planning at least 2 to 4 weeks in advance.</li>
                  <li>Establish a dedicated, cross-functional planning committee.</li>
                  <li>Send out digital &quot;Save the Date&quot; calendar invites early.</li>
                  <li>Partner with a certified technical event management agency.</li>
                  <li>Source a premium corporate hotel ballroom or hybrid studio venue.</li>
                  <li>Leverage hybrid broadcasting technology for remote multi-hub streaming.</li>
                  <li>Incorporate an engaging, high-impact Rewards & Recognition (R&R) ceremony.</li>
                </ul>
                <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium">
                  Depending on your event objectives, your team can also seamlessly integrate a keynote corporate speaker, tailored team-building icebreakers, custom stage backdrops, or ambient gala entertainment to deliver a balanced internal experience.
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 font-bold text-[12px] uppercase transition-colors shadow-sm rounded-sm tracking-wider"
                >
                  START PLANNING YOUR TOWN HALL MEETING
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="flex flex-col gap-6 mt-4 lg:mt-16">
              {/* Employee Engagement Programs */}
              <div className="bg-white border border-gray-100 rounded-md shadow-sm p-5">
                <h3 className="text-[#333] text-[13.5px] font-bold mb-4 pb-2 border-b border-gray-100">
                  Employee Engagement Programs
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Family Day Outing", href: "/family-day-outing" },
                    { label: "Annual Day & Gala Events", href: "/annual-day-gala-events" },
                    { label: "Town Hall and R&R", href: "/town-hall-rr" },
                    { label: "Corporate Offsite Programs", href: "#" },
                    { label: "Team Building Programs", href: "#" },
                    { label: "Keynote Speakers", href: "#" },
                    { label: "Inauguration Ceremonies", href: "#" },
                    { label: "Corporate Gifting", href: "#" },
                    { label: "Festive Decorations", href: "#" },
                    { label: "Diwali Parties", href: "#" },
                    { label: "Independence Day Decoration", href: "#" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 text-[12.5px] text-[#555] hover:text-[#008484] font-medium transition-colors py-1 border-b border-gray-50"
                      >
                        <span className="text-[#dc2626] font-bold text-[10px]">&#9654;</span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Corporate Events */}
              <div className="bg-white border border-gray-100 rounded-md shadow-sm p-5">
                <h3 className="text-[#333] text-[13.5px] font-bold mb-4 pb-2 border-b border-gray-100">
                  Our Corporate Events
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Corporate Programs", href: "#" },
                    { label: "Conferences Management", href: "#" },
                    { label: "Dealer Meets & Summits", href: "#" },
                    { label: "Product Launch Events", href: "#" },
                    { label: "Gala Night Events", href: "#" },
                    { label: "Award Nights", href: "#" },
                    { label: "Virtual Events", href: "#" },
                    { label: "Corporate Entertainment", href: "#" },
                    { label: "BTL Activation", href: "#" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 text-[12.5px] text-[#555] hover:text-[#008484] font-medium transition-colors py-1 border-b border-gray-50"
                      >
                        <span className="text-[#dc2626] font-bold text-[10px]">&#9654;</span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Tagline Strip */}
        <div className="w-full bg-gradient-to-r from-[#170a1c] via-[#1f1030] to-[#120815] py-5 px-4 flex items-center justify-center border-t border-white/5">
          <p className="text-white text-[13px] md:text-[15px] font-semibold tracking-wide text-center">
            Bringing Leadership & Teams Together
          </p>
        </div>

        {/* More Than Meetings & How We Can Help You Section */}
        <section className="w-full bg-[#f9f9f9] py-20 px-4">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-[#222] text-[20px] md:text-[22px] font-bold uppercase tracking-wide mb-1">
                MORE THAN MEETINGS,
              </h2>
              <h3 className="text-[#967455] text-[15px] md:text-[16px] font-medium mb-4">
                We Create Moments
              </h3>
              <div className="w-8 h-[2px] bg-[#967455] mx-auto"></div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 w-full max-w-4xl mx-auto">
              <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden shadow-sm">
                <Image src="/images/photo3.jpg" alt="Townhall Stage" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden shadow-sm">
                <Image src="/images/photo4.jpg" alt="Speaker" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden shadow-sm">
                <Image src="/images/photo5.jpg" alt="Panel Discussion" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden shadow-sm">
                <Image src="/images/photo6.jpg" alt="Screen Display" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden shadow-sm">
                <Image src="/images/photo7.jpg" alt="Leadership Address" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden shadow-sm">
                <Image src="/images/photo8.jpg" alt="Audience Engagement" fill className="object-cover" />
              </div>
            </div>

            {/* How We Can Help You */}
            <div className="text-center mb-4 w-full max-w-3xl">
              <h4 className="text-[#008484] text-[16px] md:text-[18px] font-bold mb-6">
                How We Can Help You
              </h4>
              <p className="text-[#555] text-[13px] md:text-[14px] leading-[1.8] font-medium mb-8 px-4 md:px-12">
                Showmakerz is a dominant <strong>townhall event organizer in Delhi Gurgaon NCR</strong>. As a full-service <Link href="#" className="text-[#008484] hover:underline font-semibold">corporate event management company</Link>, we provide comprehensive logistical support for employee assemblies.
              </p>

              {/* Checklist */}
              <ul className="text-[#555] text-[13px] md:text-[14px] leading-[1.8] font-medium space-y-4 mb-10 mx-auto max-w-2xl text-left">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-[#008484] shrink-0 mt-[2px]" />
                  <span><Link href="#" className="text-[#008484] hover:underline font-semibold">Suggest and source the ideal venue</Link> with optimized commercial contract rates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-[#008484] shrink-0 mt-[2px]" />
                  <span>Design and fabricate custom, high-impact <Link href="#" className="text-[#008484] hover:underline font-semibold">event stage setups</Link>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-[#008484] shrink-0 mt-[2px]" />
                  <span>Deliver premium, end-to-end <Link href="#" className="text-[#008484] hover:underline font-semibold">audio-visual technical production support</Link>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-[#008484] shrink-0 mt-[2px]" />
                  <span>Manage bulk logistics for <Link href="#" className="text-[#008484] hover:underline font-semibold">procuring high-end shields and corporate trophies</Link>.</span>
                </li>
              </ul>

              {/* CTA Button */}
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 font-bold text-[12px] uppercase transition-colors shadow-sm rounded-sm tracking-wider"
                >
                  PLAN YOUR TOWN HALL EVENT
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            </div>

          </div>
        </section>
        {/* Contact Strip */}
        <PartnerBanner />
      </main>

      <Footer companyDescription={
        <p className="leading-relaxed mb-4 font-medium text-[#555]">
          As trusted corporate event planners, Showmakerz delivers professional Town Hall event solutions across Delhi NCR. We ensure every element&mdash;from content flow to AV setup&mdash;supports your goals of connection, communication, and company culture.
        </p>
      } />
    </>
  );
}
