import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Wallet, Sparkles, Presentation, MonitorPlay, Speaker, Projector, Headphones, ArrowRight, List, Plus, Star, User, MessageCircle, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

export default function Home() {
  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
    "/images/photo7.jpg",
    "/images/photo8.jpg",
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      {/* Photo Grid */}
      <main className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-[300px] overflow-hidden group">
              <Image 
                src={src} 
                alt={`Event Photo ${index + 1}`} 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={index < 4}
              />
            </div>
          ))}
        </div>

        {/* Hero / CTA Section */}
        <section 
          className="relative text-white text-center py-28 px-4 flex flex-col items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 flex flex-col items-center w-full">
            <h1 className="font-cinzel text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest mb-6">
              TOP CORPORATE EVENT MANAGEMENT COMPANY IN PUNE & PAN INDIA
            </h1>
            <div className="w-16 h-1 bg-orange-600 mb-10"></div>
            
            <div className="bg-[#ffffff1a] backdrop-blur-sm border border-[#ffffff33] px-8 py-4 rounded-md text-[14px] text-white font-medium mb-10 max-w-4xl">
              India's Leading Corporate Event Organisers — Headquartered in Pune, Delivering World-Class Events Across Mumbai, Delhi, Bengaluru, Hyderabad, Chennai & All of India
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              href="#" 
              className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333333] border-[1.5px] border-transparent px-8 py-3 rounded-sm text-white text-[12px] font-bold tracking-wide transition-colors uppercase shadow-lg"
            >
              <MessageCircle size={16} fill="currentColor" />
              TALK TO YOUR EVENT PLANNER
            </Link>
          </div>
          </div>
        </section>

        {/* Trusted & Reliable Section */}
        <section 
          className="relative py-24 px-4 text-center flex flex-col items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/trusted-bg.jpg')" }}
        >
          {/* Semi-transparent Overlay for readability */}
          <div className="absolute inset-0 bg-white/50"></div>
          
          <div className="relative z-10 flex flex-col items-center w-full">
            <h2 className="font-cinzel text-3xl font-bold tracking-[0.2em] text-[#2b032d] uppercase mb-2">TRUSTED & RELIABLE</h2>
            <h3 className="text-gray-500 font-medium mb-6 text-lg">Event Management Company</h3>
            <div className="w-12 h-1 bg-orange-700 mb-10"></div>
            
            <p className="max-w-4xl text-xl text-gray-700 mb-8">
              With <strong>18+ years of experience</strong>, Colorknit delivers <span className="text-[#058e9b] font-semibold">excellence in Corporate Event Management across Pune, Mumbai, Delhi, Bengaluru, Hyderabad, Chennai & Pan India</span>
            </p>
            
            <p className="max-w-4xl text-base text-gray-500 mb-6 leading-relaxed px-4">
              From large-scale corporate conferences and annual day celebrations to themed galas, product launches, and dealer meets, Colorknit transforms every event into an unforgettable experience. We are your complete event management partner — from concept to curtain call.
            </p>
            
            <p className="max-w-4xl text-base text-gray-500 mb-20 leading-relaxed px-4">
              Recognized as one of India's premier corporate event management companies, our experienced team based in Pune has successfully delivered 3,600+ events for Fortune 500 companies, growing startups, and global brands across every major city in India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto w-full px-4">
            {[
              { src: "/images/card1.jpg", label: "CORPORATE PROGRAMS" },
              { src: "/images/card2.jpg", label: "MICE & CONFERENCES" },
              { src: "/images/card3.jpg", label: "ENGAGEMENT EVENTS" },
              { src: "/images/card4.jpg", label: "ARTIST MANAGEMENT" },
              { src: "/images/card5.jpg", label: "CORPORATE THEME EVENTS" },
              { src: "/images/card6.jpg", label: "ANNUAL DAY PARTIES" },
            ].map((card, index) => (
              <div key={index} className="relative w-full h-[300px] rounded overflow-hidden group shadow-md bg-white">
                <Image 
                  src={card.src} 
                  alt={card.label} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-sm shadow-sm flex items-center justify-center gap-3 w-[85%] border-t-[4px] border-transparent mb-5">
                  <div className="w-[3px] h-4 bg-red-600"></div>
                  <span className="text-[#058e9b] text-[13px] font-bold tracking-wider">{card.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Track Record Section */}
        <section 
          className="relative py-16 px-4 text-center text-white bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/track-record-bg.jpg')" }}
        >
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-[#151312]/60"></div>
          
          <div className="relative z-10 w-full">
            <h2 className="font-cinzel text-2xl font-bold mb-4 tracking-wide">Our Track Record of Corporate Excellence</h2>
          <p className="text-[#a8a19f] max-w-[900px] mx-auto mb-10 text-[14px] font-medium leading-relaxed">
            Trusted corporate event management company headquartered in Pune, delivering large-scale conferences, annual days, product launches, and brand experiences across India — from Mumbai to Delhi, Bengaluru to Hyderabad and beyond.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[1300px] mx-auto px-4">
            {[
              { number: "3,600+", label: "Events Executed" },
              { number: "18+", label: "Years Experience" },
              { number: "500+", label: "Corporate Clients" },
              { number: "36+", label: "Industry Awards" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-black/40 backdrop-blur-sm rounded-[10px] py-6 px-4 flex flex-col items-center justify-center border border-white/10 shadow-lg">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-[12px] font-semibold tracking-wide text-white">{stat.label}</div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Event Planning & Production Partner Section */}
        <section className="bg-[#e9e6df] py-20 px-4 text-center">
          <h2 className="font-cinzel text-[26px] font-bold text-gray-800 mb-4 tracking-wide">Your Complete Event Planning & Production Partner</h2>
          <p className="max-w-[1000px] mx-auto text-gray-600 text-[14px] mb-16 leading-relaxed">
            From creative concepts and venue transformation to branding, entertainment, technical production, and on-site execution, we manage every aspect of your event with attention to detail and professional expertise.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 max-w-[1100px] mx-auto">
            <div className="flex flex-col items-center group">
              <div className="w-[120px] h-[120px] bg-[#a47b31] rounded-xl border-[4px] border-white shadow-sm flex items-center justify-center text-white mb-5 transition-transform group-hover:-translate-y-2 cursor-pointer">
                <CalendarCheck size={50} strokeWidth={1.5} />
              </div>
              <span className="text-gray-600 text-[13px] font-semibold">Event Planning</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-[120px] h-[120px] bg-[#a47b31] rounded-xl border-[4px] border-white shadow-sm flex items-center justify-center text-white mb-5 transition-transform group-hover:-translate-y-2 cursor-pointer">
                <Wallet size={50} strokeWidth={1.5} />
              </div>
              <span className="text-gray-600 text-[13px] font-semibold">Event Budgeting</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-[120px] h-[120px] bg-[#a47b31] rounded-xl border-[4px] border-white shadow-sm flex items-center justify-center text-white mb-5 transition-transform group-hover:-translate-y-2 cursor-pointer">
                <Sparkles size={50} strokeWidth={1.5} />
              </div>
              <span className="text-gray-600 text-[13px] font-semibold">Event Decoration</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-[120px] h-[120px] bg-[#a47b31] rounded-xl border-[4px] border-white shadow-sm flex items-center justify-center text-white mb-5 transition-transform group-hover:-translate-y-2 cursor-pointer">
                <Presentation size={50} strokeWidth={1.5} />
              </div>
              <span className="text-gray-600 text-[13px] font-semibold">Event Branding</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-[120px] h-[120px] bg-[#a47b31] rounded-xl border-[4px] border-white shadow-sm flex items-center justify-center text-white mb-5 transition-transform group-hover:-translate-y-2 cursor-pointer">
                <MonitorPlay size={50} strokeWidth={1.5} />
              </div>
              <span className="text-gray-600 text-[13px] font-semibold">Event Stage</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-[120px] h-[120px] bg-[#a47b31] rounded-xl border-[4px] border-white shadow-sm flex items-center justify-center text-white mb-5 transition-transform group-hover:-translate-y-2 cursor-pointer">
                <Speaker size={50} strokeWidth={1.5} />
              </div>
              <span className="text-gray-600 text-[13px] font-semibold">Light & Sound</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-[120px] h-[120px] bg-[#a47b31] rounded-xl border-[4px] border-white shadow-sm flex items-center justify-center text-white mb-5 transition-transform group-hover:-translate-y-2 cursor-pointer">
                <Projector size={50} strokeWidth={1.5} />
              </div>
              <span className="text-gray-600 text-[13px] font-semibold">Audio-Visuals</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-[120px] h-[120px] bg-[#a47b31] rounded-xl border-[4px] border-white shadow-sm flex items-center justify-center text-white mb-5 transition-transform group-hover:-translate-y-2 cursor-pointer">
                <Headphones size={50} strokeWidth={1.5} />
              </div>
              <span className="text-gray-600 text-[13px] font-semibold">Professional Team</span>
            </div>
          </div>
        </section>

        {/* Delivering Creative Section */}
        <section className="bg-white py-24 px-4 text-center">
          <h2 className="text-[32px] font-bold text-[#1a1a1a] tracking-wide mb-2 uppercase">Delivering Creative</h2>
          <h3 className="text-[20px] font-medium text-[#877568] mb-5">Event Solutions for Leading Companies</h3>
          <div className="w-[55px] h-[3px] bg-[#d39678] mx-auto mb-16"></div>
          
          <div className="max-w-[1050px] mx-auto text-left">
            <h4 className="text-[20px] font-bold text-[#007b7b] mb-4">Pan India Corporate Event Planning & Management Experts</h4>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
              As a premier <strong>corporate event management company in Pune</strong> and trusted <strong>event organisers across India</strong>, Colorknit brings creativity, professionalism, and precision to every project — from Pune and Mumbai to Delhi, Bengaluru, Hyderabad, Chennai, Kolkata and beyond.
            </p>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-12">
              From annual day celebrations and conferences to employee engagement activities and product launches, we deliver high-impact business experiences across India. Our Pune HQ ensures seamless coordination, and our nationwide network guarantees flawless execution in any city.
            </p>
            
            <h4 className="text-[20px] font-bold text-[#007b7b] mb-4">Complete Event Planning & Production Solutions Across India</h4>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
              Recognized among India's leading <strong>corporate event management companies</strong>, we create engaging, results-driven event experiences tailored to your objectives, audience, and brand vision — whether you're in Pune, Mumbai, Delhi, or anywhere across the country.
            </p>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
              Colorknit delivers end-to-end event planning and production services for corporate events, MICE, employee engagement programs, social celebrations, and live brand experiences — pan India.
            </p>
            <p className="text-[16px] text-gray-700 leading-relaxed">
              Whether you are planning a national conference, annual day celebration, pan-India roadshow, product launch, family day, or employee engagement program, our team delivers innovative concepts, seamless pan-India coordination, and flawless execution from start to finish.
            </p>
          </div>
        </section>

        {/* Latest Event Highlights Section */}
        <section 
          className="relative py-24 px-4 text-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/latest-events-bg.jpg')" }}
        >
          {/* Subtle dark gradient just for text readability, preserves photo colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30"></div>
          
          <div className="relative z-10 w-full">
            <h2 className="text-2xl font-bold text-white tracking-widest mb-16 uppercase drop-shadow-lg">Latest Event Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto mb-16 px-4">
            {[
              { src: "/images/highlight1.jpg", label: "Corporate Annual Day Celebration" },
              { src: "/images/highlight2.jpg", label: "Leadership Conference Event" },
              { src: "/images/highlight3.jpg", label: "Corporate Anniversary Event" },
              { src: "/images/highlight4.jpg", label: "Gala Dinner Event" },
              { src: "/images/highlight5.jpg", label: "Celebrity Live Performance" },
              { src: "/images/highlight6.jpg", label: "New Office Inauguration" },
            ].map((highlight, index) => (
              <div key={index} className="relative w-full h-[250px] rounded-lg overflow-hidden group shadow-lg">
                <Image 
                  src={highlight.src} 
                  alt={highlight.label} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-semibold tracking-wide drop-shadow-md">{highlight.label}</span>
                </div>
              </div>
            ))}
          </div>

          <Link 
            href="#" 
            className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333333] text-white px-8 py-3.5 rounded-sm text-[13px] font-bold tracking-wider transition-colors uppercase shadow-md"
          >
            GET A CUSTOM QUOTE NOW
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
          </div>
        </section>

        {/* Trusted By Leading Brands Section */}
        <section className="bg-white py-16 px-4 text-center">
          <h2 className="font-cinzel text-[26px] font-bold text-[#1a1a1a] tracking-wide mb-1 uppercase">TRUSTED BY LEADING BRANDS</h2>
          <h3 className="text-[17px] font-medium text-[#877568] mb-4">and Corporate Clients</h3>
          <div className="w-[40px] h-[2px] bg-[#a87f32] mx-auto mb-8"></div>
          
          <p className="max-w-[800px] mx-auto text-[15.5px] text-gray-600 mb-12 leading-relaxed">
            Over the past 18+ years, Colorknit has had the privilege of working with top-tier organizations along with a diverse range of startups and global brands.
          </p>

          <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto mb-12 px-4">
            {[
              "oie_4f0yDxTfOU9V.webp",
              "oie_OV94nmdAgb7m.webp",
              "oie_fOMtanGo2lIp.webp",
              "oie_gtt8Bg6H4kcl.webp",
              "oie_MiRxT9q2fAff.webp",
              "oie_nBJ8X9qgakjW.webp"
            ].map((filename, index) => (
              <div key={index} className="w-[160px] h-[160px] flex items-center justify-center border border-gray-100 p-2 shadow-sm">
                <div className="w-full h-full border border-gray-300 flex items-center justify-center p-4 bg-white">
                  <div className="relative w-full h-full">
                    <Image 
                      src={`/images/clients/${filename}`} 
                      alt={`Client logo ${index + 1}`}
                      fill
                      className="object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link 
            href="#" 
            className="inline-flex items-center gap-2 bg-[#00a8a8] hover:bg-[#008f8f] text-white px-6 py-2.5 rounded-sm text-[12px] font-bold tracking-wider transition-colors uppercase shadow-sm"
          >
            VIEW OUR CLIENTS LIST
            <List size={16} strokeWidth={2.5} />
          </Link>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#0c0f12] py-24 px-4 text-center">
          <h2 className="text-[#3b4c68] text-[32px] font-bold mb-3 tracking-wide">What Our Clients Say</h2>
          <p className="max-w-[700px] mx-auto text-[#6b7280] text-[15px] mb-16">
            Hear what our clients have to say about their experience working with Colorknit for corporate events, conferences, and employee engagement programs.
          </p>
          
          {/* Marquee Container */}
          <div className="overflow-hidden w-full max-w-[100vw] relative py-4 group">
            <div className="flex w-max gap-6 px-4 text-left">

              {/* Track 1 */}
              <div className="flex w-max gap-6 animate-marquee-lr group-hover:[animation-play-state:paused]">
                {[
                  {
                    quote: "Working with Colorknit Pvt Ltd was seamless and rewarding. Their team managed every detail beautifully.",
                    name: "Priya Desai",
                    role: "HR Manager @ Leading IT Company",
                    initials: "PD"
                  },
                  {
                    quote: "We've partnered with many agencies, but Colorknit stands out with their creativity and commitment.",
                    name: "Vikram Mehta",
                    role: "Marketing Director @ Telecom Co.",
                    initials: "VM"
                  },
                  {
                    quote: "Our employee offsite was not just fun, it was meaningful. The team understood our goals and delivered perfectly.",
                    name: "Anjali Gupta",
                    role: "Operations Director @ FinServe",
                    initials: "AG"
                  },
                  {
                    quote: "Their event production quality is unmatched. The staging, lighting, and coordination were absolutely perfect.",
                    name: "Rohan Kapoor",
                    role: "VP Marketing @ Global Brand",
                    initials: "RK"
                  },
                  {
                    quote: "Highly professional team with brilliant ideas. They transformed our vision into an incredible experience.",
                    name: "Sneha Reddy",
                    role: "Event Head @ Tech Innovations",
                    initials: "SR"
                  }
                ].map((testimonial, idx) => (
                  <div key={`t1-${idx}`} className="bg-white rounded-xl p-8 shadow-lg flex flex-col justify-between w-[380px] shrink-0">
                    <div>
                      <div className="text-[#3b82f6] text-7xl font-serif leading-[0.5] mt-4 mb-4">"</div>
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} fill="currentColor" className="text-[#ef4444]" />
                        ))}
                      </div>
                      <p className="text-[#6b7280] text-[15px] leading-relaxed mb-8">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-bold text-[16px]">{testimonial.name}</h4>
                        <p className="text-gray-500 text-[13px]">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Track 2 — identical, for seamless loop */}
              <div className="flex w-max gap-6 animate-marquee-lr group-hover:[animation-play-state:paused]" aria-hidden="true">
                {[
                  {
                    quote: "Working with Colorknit Pvt Ltd was seamless and rewarding. Their team managed every detail beautifully.",
                    name: "Priya Desai",
                    role: "HR Manager @ Leading IT Company",
                    initials: "PD"
                  },
                  {
                    quote: "We've partnered with many agencies, but Colorknit stands out with their creativity and commitment.",
                    name: "Vikram Mehta",
                    role: "Marketing Director @ Telecom Co.",
                    initials: "VM"
                  },
                  {
                    quote: "Our employee offsite was not just fun, it was meaningful. The team understood our goals and delivered perfectly.",
                    name: "Anjali Gupta",
                    role: "Operations Director @ FinServe",
                    initials: "AG"
                  },
                  {
                    quote: "Their event production quality is unmatched. The staging, lighting, and coordination were absolutely perfect.",
                    name: "Rohan Kapoor",
                    role: "VP Marketing @ Global Brand",
                    initials: "RK"
                  },
                  {
                    quote: "Highly professional team with brilliant ideas. They transformed our vision into an incredible experience.",
                    name: "Sneha Reddy",
                    role: "Event Head @ Tech Innovations",
                    initials: "SR"
                  }
                ].map((testimonial, idx) => (
                  <div key={`t2-${idx}`} className="bg-white rounded-xl p-8 shadow-lg flex flex-col justify-between w-[380px] shrink-0">
                    <div>
                      <div className="text-[#3b82f6] text-7xl font-serif leading-[0.5] mt-4 mb-4">"</div>
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} fill="currentColor" className="text-[#ef4444]" />
                        ))}
                      </div>
                      <p className="text-[#6b7280] text-[15px] leading-relaxed mb-8">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-bold text-[16px]">{testimonial.name}</h4>
                        <p className="text-gray-500 text-[13px]">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
                </div>

            </div>
          </div>
        </section>

        {/* Experienced Event Management Section */}
        <section 
          className="relative py-24 px-4 text-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/experienced-bg.jpg')" }}
        >
          {/* No color overlay to preserve original photo colors exactly */}
          <div className="relative z-10 w-full">
            <h2 className="text-[30px] font-bold text-white drop-shadow-lg tracking-wide mb-2">Experienced Corporate Event Management</h2>
            <h3 className="text-[20px] font-medium text-gray-200 drop-shadow-lg mb-4">Company in Pune — Serving Pan India</h3>
            <div className="w-[60px] h-[3px] bg-[#d39678] mx-auto mb-16 shadow-sm"></div>
            
            <div className="flex flex-col lg:flex-row max-w-[1100px] mx-auto gap-12 text-left items-center">
              {/* Left Content */}
              <div className="flex-1 bg-white/85 backdrop-blur-md p-8 rounded-2xl shadow-xl">
              <p className="text-[14px] text-gray-700 leading-relaxed mb-6">
                Colorknit is a leading corporate event management company headquartered in Pune, delivering creative, professionally managed, and result-driven events across every major city in India — including Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, Goa, Jaipur, Ahmedabad, and Nashik.
              </p>
              
              <div className="bg-[#f9fafa] p-6 border-l-[4px] border-[#00a8a8] mb-6 shadow-sm">
                <p className="text-[14px] text-[#1a1a1a] leading-relaxed font-semibold">
                  With 18+ years of experience and 3,600+ successfully executed pan-India events, we specialize in corporate events, annual day celebrations, dealer meets, product launches, destination offsites, and large-scale national conferences.
                </p>
              </div>
              
              <p className="text-[14px] text-gray-700 leading-relaxed">
                Our experienced Pune-based team combines creativity, technical expertise, and a deep pan-India vendor network to deliver impactful event experiences — on time, on budget, and beyond expectations.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="flex-1 w-full">
              <div className="relative w-full h-[350px] rounded-md overflow-hidden shadow-xl border border-gray-100">
                <Image 
                  src="/images/experienced_event.jpg" 
                  alt="Experienced Event Management" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-gray-50 py-24 px-4 text-center">
          <h2 className="font-cinzel text-[26px] font-bold text-[#1a1a1a] tracking-wide mb-3 uppercase">EVENT MANAGEMENT FAQS</h2>
          <p className="text-[16px] text-gray-600 mb-12">
            Everything You Need To Know About Our <span className="text-[#007b7b] font-semibold">Event Management Services</span>
          </p>
          
          <div className="max-w-[1000px] mx-auto text-left">
            <FaqAccordion 
              faqs={[
                {
                  question: "What types of events do you organize?",
                  answer: "Colorknit specialises in a comprehensive range of corporate and social events across India. Our expertise includes corporate conferences, annual day celebrations, product launches, dealer meets, gala dinners, team-building offsites, MICE events, destination offsites, employee engagement activities, award nights, and large-scale brand activations — executed seamlessly across Pune, Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, and pan India."
                },
                {
                  question: "Why choose Colorknit as your event management company?",
                  answer: "With 18+ years of industry experience and a track record of 3,600+ successfully executed events, Colorknit is the trusted event management partner for Fortune 500 companies, leading Indian corporations, and global brands. Headquartered in Pune, we operate across India — providing end-to-end event solutions from creative conceptualisation and pan-India venue selection to flawless technical production and on-site coordination in any city."
                },
                {
                  question: "Do you provide event services outside PUNE?",
                  answer: "Absolutely. While we are a leading event management company in Pune, Mumbai, Navi Mumbai, Goa, Thane, and Nashik, our operations span across pan India. We regularly execute seamless corporate events, destination offsites, and brand experiences in major cities and resort destinations throughout the country."
                },
                {
                  question: "Can you manage complete event production and entertainment?",
                  answer: "Yes, we are a full-service event agency. Our complete production solutions encompass stage fabrication, state-of-the-art audio-visual setups, intelligent lighting, and immersive branding. Furthermore, we handle all aspects of entertainment, including celebrity management, live bands, interactive performers, and keynote speakers to elevate your guest experience."
                },
                {
                  question: "How early should we book an event management company?",
                  answer: "For optimal planning and securing the best venues and vendors, we recommend engaging us at least 2-3 months prior to a large-scale corporate event or conference. However, for smaller employee engagement activities or urgent requirements, our agile team can successfully organize and execute high-quality events within a tighter timeframe."
                }
              ]}
            />
          </div>
        </section>

        {/* CTA Banner Section */}
        <section 
          className="relative py-16 px-4 text-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/pexels-steve-29708309.jpg')" }}
        >
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-[#0c0f12]/70"></div>
          
          <div className="relative z-10">
            <h2 className="font-cinzel text-xl md:text-[22px] font-medium text-white tracking-wide mb-10">
              India's Trusted Event Management Company — Headquartered in Pune
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
              <Link href="#" className="flex items-center justify-center gap-2 border border-white text-white px-7 py-3 rounded-[3px] text-[13px] font-semibold tracking-wider hover:bg-white/10 transition-colors uppercase w-full sm:w-auto backdrop-blur-sm">
                <Phone size={18} fill="currentColor" />
                CALL US NOW
              </Link>
              
              <Link href="#" className="flex items-center justify-center gap-2 border border-white text-white px-7 py-3 rounded-[3px] text-[13px] font-semibold tracking-wider hover:bg-white/10 transition-colors uppercase w-full sm:w-auto backdrop-blur-sm">
                <MessageCircle size={18} />
                CHAT ON WHATSAPP
              </Link>
              
              <Link href="#" className="flex items-center justify-center gap-2 border border-white text-white px-7 py-3 rounded-[3px] text-[13px] font-semibold tracking-wider hover:bg-white/10 transition-colors uppercase w-full sm:w-auto backdrop-blur-sm">
                <Mail size={18} fill="currentColor" />
                LEAVE A QUERY
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {/* WhatsApp Floating Button */}
      <Link 
        href="#" 
        className="fixed bottom-4 left-4 w-[55px] h-[55px] bg-[#25d366] hover:bg-[#20b858] text-white rounded-full flex items-center justify-center shadow-lg z-50 transition-colors border-2 border-white"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </Link>
    </div>
  );
}



