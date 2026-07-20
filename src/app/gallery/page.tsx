import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Event Gallery | EMG Showmakerz",
  description: "Browse our extensive gallery of corporate events, employee engagement activities, and more.",
};

const galleryItems = [
  { title: "Large-Scale Corporate Conference", image: "/images/photo1.jpg" },
  { title: "Corporate Speaker Session", image: "/images/photo2.jpg" },
  { title: "Global Induction Event", image: "/images/photo3.jpg" },
  { title: "Dealers Meet Event", image: "/images/photo4.jpg" },
  { title: "Gala Dinner Themes", image: "/images/photo5.jpg" },
  { title: "Red Carpet Welcome", image: "/images/photo6.jpg" },
  { title: "Live Band For Corporate Event", image: "/images/photo7.jpg" },
  { title: "Dealers Meet Lucky Draw", image: "/images/photo8.jpg" },
  { title: "Gala Dinner Event", image: "/images/photo9.jpg" },
  { title: "Corporate Entertainment", image: "/images/photo1.jpg" },
  { title: "Sales Meet", image: "/images/photo2.jpg" },
  { title: "Investors Summit", image: "/images/photo3.jpg" },
  { title: "MICE Event", image: "/images/photo4.jpg" },
  { title: "Product Launch Event", image: "/images/photo5.jpg" },
  { title: "Guest Welcome with Folk Troupe", image: "/images/photo6.jpg" },
  { title: "Corporate Anniversary Event", image: "/images/photo7.jpg" },
  { title: "Event Decoration", image: "/images/photo8.jpg" },
  { title: "Corporate Event Stage Set-up", image: "/images/photo9.jpg" },
  { title: "Dealers Meet Awards", image: "/images/photo1.jpg" },
  { title: "Facility Inauguration Event", image: "/images/photo2.jpg" },
  { title: "Hospitality Management", image: "/images/photo3.jpg" },
];

export default function Gallery() {
  return (
    <>
      <Header />
      
      <main className="w-full flex-grow">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-20 md:py-28 px-4 bg-[#1a0f1c]">
          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-6">
            <h1 className="text-white text-[22px] md:text-[28px] font-bold tracking-[0.02em] uppercase mb-5">
              IDEAS AND INSPIRATION FOR YOUR EVENTS
            </h1>
            
            <div className="w-10 h-[2px] bg-[#d94a28] mb-8"></div>
            
            <div className="text-[10px] md:text-[11px] tracking-wider text-[#9f96a3] uppercase flex items-center justify-center">
              <Link href="/" className="hover:text-white transition-colors">HOME PAGE</Link>
              <span className="mx-2">-</span>
              <span className="font-bold text-[#d8d2db]">EVENT GALLERY</span>
              <span className="mx-2">-</span>
              <Link href="/corporate-events" className="font-bold text-[#d8d2db] hover:text-white transition-colors">CORPORATE EVENTS</Link>
            </div>
          </div>
        </section>

        <GalleryGrid 
          title="CORPORATE EVENTS"
          subtitle="Gallery"
          currentPage={1}
          items={galleryItems}
        />

        {/* SEO Text Section */}
        <section className="w-full bg-[#f8f9f8] pb-24 px-4">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-8">
            
            {/* Dark Purple Banner */}
            <div className="bg-[#482046] text-white py-6 px-4 text-center rounded-[2px] shadow-sm">
              <h2 className="text-[18px] md:text-[22px] font-bold tracking-wide">
                Leading Corporate Event Management Company In Delhi, Gurgaon & NCR
              </h2>
            </div>

            {/* Intro Paragraph */}
            <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium">
              EMG Showmakerz Pvt. Ltd. is a premier, <strong className="text-[#333]">18-year experienced</strong> <Link href="#" className="text-[#008484] hover:underline font-semibold">event management company</Link> based in Delhi NCR, specializing in corporate events, conferences, annual celebrations, <Link href="#" className="text-[#008484] hover:underline font-semibold">employee engagement programs</Link>, and wedding event management services across India.
            </p>

            {/* Blockquote */}
            <div className="bg-[#f0f0f0] border-l-[4px] border-[#00a8a8] p-6 text-[#555] text-[14px] leading-[1.8] font-medium rounded-r-[2px]">
              "Welcome to Showmakerz — your trusted partner for creating impactful corporate events and memorable celebrations. With years of experience in event planning and production, we deliver innovative event experiences that strengthen brands and leave lasting impressions."
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[#008484] text-[16px] md:text-[18px] font-bold tracking-wide mt-2">
                18 Years of Experience in Corporate Events & Production
              </h3>
              
              <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium">
                Over the last 18 years, we have successfully delivered more than <strong className="text-[#333]">3,600+ event projects</strong> for multinational companies, FMCG brands, government organizations, educational institutions, and businesses of every scale. From conferences, <Link href="#" className="text-[#008484] hover:underline font-semibold">product launches</Link>, award ceremonies, and gala dinners to <Link href="#" className="text-[#008484] hover:underline font-semibold">annual day celebrations</Link>, team-building activities, and corporate entertainment events — we have managed events of every format, size, and complexity.
              </p>
              
              <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium">
                This event gallery showcases selected moments from our corporate events images, highlighting our expertise in event planning, <Link href="#" className="text-[#008484] hover:underline font-semibold">stage production</Link>, branding, décor, entertainment, and audience engagement. Browse through our <strong className="text-[#333]">event pictures</strong> for inspiration and discover how we transform ideas into successful event experiences.
              </p>
              
              <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium">
                Our experienced team of <Link href="#" className="text-[#008484] hover:underline font-semibold">event planners</Link>, designers, and production managers works closely with clients to deliver creative concepts, seamless execution, and memorable guest experiences. Whether it is a leadership summit, <Link href="#" className="text-[#008484] hover:underline font-semibold">corporate conference</Link>, themed celebration, or <Link href="#" className="text-[#008484] hover:underline font-semibold">large-scale business event</Link>, we ensure every detail is professionally managed from planning to on-site coordination.
              </p>
              
              <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium">
                At Showmakerz, we provide complete event management solutions including stage setup, event branding, lighting, AV production, sound systems, venue décor, <Link href="#" className="text-[#008484] hover:underline font-semibold">artist management</Link>, and entertainment services. Whether you need a simple professional setup or a large-scale themed production, our team ensures your event stands out with creativity, precision, and flawless execution.
              </p>
              
              <p className="text-[#555] text-[13.5px] leading-[1.8] font-medium">
                If you are looking for fresh ideas and inspiration for your next corporate event, conference, annual function, or celebration, explore our gallery and connect with our team to start planning your event with us.
              </p>
            </div>
            
            {/* Button */}
            <div className="flex justify-center mt-6">
              <Link href="#" className="bg-[#d60b8e] hover:bg-[#b80879] text-white px-8 py-3 text-[13px] font-bold tracking-wide uppercase transition-colors rounded-[2px] shadow-sm">
                CONTACT US FOR YOUR EVENT REQUIREMENT
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Strip Section */}
        <section className="w-full bg-gradient-to-r from-[#241333] to-[#0f0717] py-14 px-4 border-t border-white/10">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            <h3 className="text-white text-[16px] md:text-[18px] font-semibold tracking-wide mb-8">
              Looking For Event Management Company in Delhi, Gurgaon, Noida?
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
          <p className="leading-relaxed mb-6 font-medium">
            Explore the Showmakerz Event Gallery to see our creativity in action. From grand corporate events to vibrant theme parties, our curated portfolio showcases our expertise, attention to detail, and passion for creating memorable experiences. Let our past inspire your next event.
          </p>
        } 
      />
    </>
  );
}
