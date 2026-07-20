import Link from "next/link";
import { ArrowRightCircle, ArrowRight, Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "HR & Admin Events Gallery | EMG Showmakerz",
  description: "Browse our extensive gallery of HR and Admin initiative events, team-building activities, town halls, and more.",
};

const galleryItemsPage2 = [
  { title: "Team Building Activities", image: "/images/photo1.jpg" },
  { title: "Corporate Team Building Event", image: "/images/photo2.jpg" },
  { title: "Town Hall Event", image: "/images/photo3.jpg" },
  { title: "Masquerade Theme Annual Day", image: "/images/photo4.jpg" },
  { title: "Harsha Bhogle – Keynote Speaker", image: "/images/photo5.jpg" },
  { title: "Awards Night Event", image: "/images/photo6.jpg" },
  { title: "Corporate Offsite Event", image: "/images/photo7.jpg" },
  { title: "Town Hall Event", image: "/images/photo8.jpg" },
  { title: "Family Day Activities", image: "/images/photo9.jpg" },
  { title: "Winter Wonderland Theme", image: "/images/photo1.jpg" },
  { title: "Outdoor Team Building Event", image: "/images/photo2.jpg" },
  { title: "Family Day Celebration", image: "/images/photo3.jpg" },
  { title: "New Office Inauguration", image: "/images/photo4.jpg" },
  { title: "Gourav Gupta – Stand-Up Comedy Show", image: "/images/photo5.jpg" },
  { title: "Corporate Party Event", image: "/images/photo6.jpg" },
  { title: "Gala Dinner Event", image: "/images/photo7.jpg" },
  { title: "Large-Scale Town Hall Event", image: "/images/photo8.jpg" },
  { title: "Office Inauguration Ceremony", image: "/images/photo9.jpg" },
  { title: "Corporate Annual Day Event", image: "/images/photo1.jpg" },
  { title: "Employee Engagement Event", image: "/images/photo2.jpg" },
  { title: "Corporate Town Hall Planning", image: "/images/photo3.jpg" },
];

export default function GalleryPage2() {
  return (
    <>
      <Header />
      
      <main className="w-full flex-grow">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-20 md:py-28 px-4 bg-[#1a0f1c]">
          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-6">
            <h1 className="text-white text-[22px] md:text-[28px] font-bold tracking-[0.02em] uppercase mb-5">
              HR & ADMIN EVENTS GALLERY
            </h1>
            
            <div className="w-10 h-[2px] bg-[#d94a28] mb-8"></div>
            
            <div className="text-[10px] md:text-[11px] tracking-wider text-[#9f96a3] uppercase flex items-center justify-center">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="mx-2">-</span>
              <Link href="/gallery" className="hover:text-white transition-colors">EVENT GALLERY</Link>
              <span className="mx-2">-</span>
              <span className="font-bold text-[#d8d2db]">EMPLOYEE ENGAGEMENT EVENTS</span>
            </div>
          </div>
        </section>

        <GalleryGrid 
          title="EVENT PICTURES FROM"
          subtitle="HR & Admin Initiative Events"
          currentPage={2}
          items={galleryItemsPage2}
          headerContent={
            <>
              <p>
                Our HR & Admin initiative events are designed to engage employees through fun, interactive, and team-focused experiences that encourage participation and collaboration.
              </p>
              <p>
                From team-building activities and town halls to family days, offsites, and annual celebrations, we create customized corporate experiences for teams of all sizes and age groups to engage and inspire.
              </p>
              <p>
                With experience in managing both small and large-scale corporate events, we ensure smooth execution, engagement, and memorable outcomes for every program.
              </p>
            </>
          }
        />

        {/* FAQ Section */}
        <section className="w-full bg-[#f8f9f8] pb-24 px-4">
          <div className="max-w-[1100px] mx-auto">
            {/* Dark Purple Header Box */}
            <div className="w-full bg-[#4b2847] py-6 px-4 text-center mb-12">
              <h2 className="text-white text-[20px] md:text-[22px] font-bold">
                Employee Engagement <span className="text-[#e2b7a9]">Event FAQs</span>
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Column - FAQs */}
              <div className="flex-1">
                <div className="mb-10">
                  <h3 className="text-[#008484] text-[18px] md:text-[20px] font-bold mb-4">
                    What Is Employee Engagement?
                  </h3>
                  <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium space-y-5">
                    <p>
                      <strong>Employee engagement</strong> is a strategic workplace approach that fosters a positive, productive, and meaningful relationship between employees and their organization.
                    </p>
                    <p>
                      It helps create an environment where employees feel motivated, aligned with company values, emotionally connected to business goals, and committed to contributing to organizational success.
                    </p>
                    <p>
                      Modern organizations increasingly use experiential activities, team interactions, and corporate events to strengthen employee morale, improve workplace culture, and encourage collaboration.
                    </p>
                    <p>
                      As a trusted <Link href="#" className="text-[#008484] font-semibold hover:underline">corporate event management company</Link>, Showmakerz designs engaging employee experiences that enhance participation, communication, and overall employee satisfaction.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[#008484] text-[18px] md:text-[20px] font-bold mb-4">
                    What Are the Benefits of Employee Engagement Events?
                  </h3>
                  <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium space-y-5">
                    <p>
                      Employee engagement events help strengthen team bonding, improve communication, boost morale, and build stronger connections between employees and the organization.
                    </p>
                    <p>
                      These initiatives contribute to higher productivity, improved employee retention, reduced absenteeism, and a more positive workplace culture.
                    </p>
                    <p>
                      Engaged employees are more enthusiastic about their roles, resulting in greater job satisfaction and long-term business success.
                    </p>
                    <p>
                      Organizations today are increasingly investing in professionally managed engagement programs, experiential activities, and themed corporate events to create memorable workplace experiences.
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-[#008484] text-[18px] md:text-[20px] font-bold mb-4">
                    What Employee Engagement Activities Can We Organize?
                  </h3>
                  <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium space-y-5">
                    <p>
                      Organizations can incorporate a wide range of employee engagement activities into their annual calendar, including team-building programs, corporate offsites, annual day celebrations, town hall meetings, reward and recognition events, family day celebrations, leadership meets, incentive tours, fun Fridays, experiential learning sessions, and interactive workplace engagement initiatives.
                    </p>
                    <p>
                      Companies are increasingly moving beyond traditional engagement formats and embracing creative event concepts.
                    </p>
                    <p>
                      From immersive entertainment zones and networking activities to branded engagement areas, <Link href="#" className="text-[#008484] font-semibold hover:underline">selfie point ideas</Link>, interactive photo booths, fun games, and themed experiences, businesses are creating engaging environments that strengthen employee relationships and workplace culture.
                    </p>
                    <p>
                      Whether it is a company open house, employee celebration, annual party, family carnival, or leadership retreat, thoughtful event planning can significantly enhance employee participation, engagement, and emotional connection within the organization.
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-[#008484] text-[18px] md:text-[20px] font-bold mb-4">
                    Plan Your Employee Engagement Event with Showmakerz
                  </h3>
                  <div className="text-[#555] text-[13.5px] leading-[1.8] font-medium space-y-5">
                    <p>
                      Create experiences that not only entertain employees and their families but also strengthen team spirit, improve workplace culture, and build a more connected organization.
                    </p>
                    <p>
                      As one of the experienced <Link href="#" className="text-[#008484] font-semibold hover:underline">event management companies in Delhi</Link>, Showmakerz specializes in planning engaging, professionally managed, and result-oriented corporate events tailored to your company culture, objectives, and budget.
                    </p>
                  </div>
                </div>

                <div className="mt-14 flex justify-center">
                  <Link href="#" className="inline-flex items-center gap-2 bg-[#d60b8e] hover:bg-[#b80879] text-white px-8 py-3.5 font-bold text-[13px] uppercase transition-colors shadow-sm rounded-sm tracking-wider">
                    SHARE YOUR BRIEFS
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Sidebar List */}
              <div className="w-full lg:w-[350px] shrink-0 flex flex-col gap-6">
                {/* Box 1 */}
                <div className="bg-white p-8 shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100">
                  <h3 className="text-[#008484] text-[16px] font-bold mb-6 leading-snug">
                    Employee Engagement<br />Programs
                  </h3>
                  <ul className="flex flex-col">
                    {[
                      { label: "Family Day Outing", href: "/family-day-outing" },
                      { label: "Annual Day & Gala Events", href: "/annual-day-gala-events" },
                      { label: "Town Hall and R&R", href: "/town-hall-rr" },
                      { label: "Corporate Offsite Programs", href: "/corporate-offsite-programs" },
                      { label: "Team Building Programs", href: "/team-building-programs" },
                      { label: "Keynote Speakers", href: "/keynote-speakers" },
                      { label: "Inauguration Ceremonies", href: "/inauguration-ceremonies" },
                      { label: "Corporate Gifting", href: "/corporate-gifting" },
                      { label: "Festival Decorations", href: "/festival-decorations" },
                      { label: "Diwali Parties", href: "/diwali-parties" },
                      { label: "Independence Day Decoration", href: "/independence-day-decoration" }
                    ].map((item, idx) => (
                      <li key={idx} className="border-b border-gray-100 last:border-0 py-3.5">
                        <Link href={item.href} className="flex items-center gap-3 text-[#555] hover:text-[#008484] transition-colors text-[13.5px] font-medium group">
                          <ArrowRightCircle size={16} className="text-gray-500 group-hover:text-[#008484] shrink-0" fill="currentColor" stroke="white" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Box 2 */}
                <div className="bg-white p-8 shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100">
                  <h3 className="text-[#008484] text-[16px] font-bold mb-6 leading-snug">
                    Our Corporate Events
                  </h3>
                  <ul className="flex flex-col">
                    {[
                      { label: "Corporate Programs", href: "/corporate-programs" },
                      { label: "Conferences Management", href: "/conferences-management" },
                      { label: "Dealer Meets & Summits", href: "/dealer-meets-summits" },
                      { label: "Product Launch Events", href: "/product-launch-events" },
                      { label: "Gala Night Events", href: "/gala-night-events" },
                      { label: "Award Nights", href: "/award-nights" },
                      { label: "Virtual Events", href: "/virtual-events" },
                      { label: "Corporate Entertainment", href: "/corporate-entertainment" },
                      { label: "BTL Activation", href: "/btl-activation" }
                    ].map((item, idx) => (
                      <li key={idx} className="border-b border-gray-100 last:border-0 py-3.5">
                        <Link href={item.href} className="flex items-center gap-3 text-[#555] hover:text-[#008484] transition-colors text-[13.5px] font-medium group">
                          <ArrowRightCircle size={16} className="text-gray-500 group-hover:text-[#008484] shrink-0" fill="currentColor" stroke="white" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Strip Section */}
        <section className="w-full bg-gradient-to-r from-[#241333] to-[#0f0717] py-14 px-4 border-t border-white/10">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            <h3 className="text-white text-[16px] md:text-[18px] font-semibold tracking-wide mb-8">
              Looking For Employee Engagement Events?
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="inline-flex items-center gap-2 border border-white hover:bg-white/10 text-white px-6 py-2.5 text-[12px] font-bold tracking-wider transition-colors uppercase rounded-[2px]">
                <Phone size={14} fill="currentColor" />
                CALL US NOW
              </Link>
              <Link href="#" className="inline-flex items-center gap-2 border border-white hover:bg-white/10 text-white px-6 py-2.5 text-[12px] font-bold tracking-wider transition-colors uppercase rounded-[2px]">
                <MessageCircle size={14} />
                CHAT ON WHATSAPP
              </Link>
              <Link href="#" className="inline-flex items-center gap-2 border border-white hover:bg-white/10 text-white px-6 py-2.5 text-[12px] font-bold tracking-wider transition-colors uppercase rounded-[2px]">
                <Mail size={14} />
                ENQUIRY FORM
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer 
        companyDescription={
          <>
            <p className="leading-relaxed mb-4 font-medium">
              Looking for efficient, engaging & inspiring event solutions for your HR and administrative needs? Showmakerz specializes in organizing impactful HR and admin events that foster team collaboration, enhance employee engagement, and streamline administrative functions.
            </p>
            <p className="leading-relaxed mb-6 font-medium">
              Let us handle the logistics while you focus on your team's growth and success.
            </p>
          </>
        }
      />
    </>
  );
}
