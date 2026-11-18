"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

const services = [
  { title: "Corporate Event Management", href: "/corporate-events" },
  { title: "Annual Day & Gala Events",   href: "/annual-day-gala-events" },
  { title: "Town Hall & R&R Events",     href: "/town-hall-rr" },
  { title: "Employee Engagement",        href: "/employee-engagement" },
  { title: "Family Day Outing",          href: "/family-day-outing" },
  { title: "Wedding Event Management",   href: "/services/weddings" },
  { title: "MICE & Conferences",         href: "/services/mice" },
  { title: "Exhibitions & Expos",        href: "/services/exhibitions" },
  { title: "Sports Events",              href: "/services/sports" },
  { title: "Corporate Gifting",          href: "/services/corporate-gifting" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const whatsappUrl = `https://wa.me/919271114024?text=Hi%20ColorKnit%20Events%2C%20I%20would%20like%20to%20enquire%20about%20event%20planning.`;

  return (
    <>
      <header className="w-full max-w-full overflow-x-hidden">
        {/* Top Bar */}
        <div className="bg-[#170a1c] text-white text-[12px] font-medium py-2 px-4 border-b border-white/10">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <div className="hidden sm:flex items-center gap-2 text-gray-300 text-[11px] tracking-wider uppercase">
              <span>ColorKnit</span>
            </div>
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 md:gap-4 ml-auto">
              <Link href="tel:+919271114024" className="flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors text-[11px] font-semibold tracking-wide">
                <Phone size={13} className="text-[#00a8a8]" />
                <span>+91 9271114024</span>
              </Link>
              <span className="text-gray-600">|</span>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide transition-all" aria-label="Chat on WhatsApp">
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="bg-white py-3.5 px-4 md:px-8 shadow-sm sticky top-0 z-50 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/images/logo.webp" alt="ColorKnit Events" width={200} height={55} className="h-11 sm:h-12 w-auto object-contain" priority />
              </Link>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-7 text-[13.5px] font-bold tracking-wide text-gray-800">
              <li>
                <Link href="/" className="hover:text-[#dc2626] transition-colors py-2 uppercase tracking-wider">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#dc2626] transition-colors py-2 uppercase tracking-wider">About Us</Link>
              </li>

              {/* Services with hover dropdown */}
              <li className="relative group">
                <Link
                  href="/services"
                  className="flex items-center gap-1 hover:text-[#dc2626] transition-colors py-2 uppercase tracking-wider"
                >
                  Services
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                {/* Dropdown — visible on group hover */}
                <div className="absolute top-full left-0 mt-0 w-[260px] bg-[#f5f5f5] shadow-xl rounded-b-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                  {/* Top accent line */}
                  <div className="h-[3px] bg-[#dc2626] w-full rounded-t-sm"></div>
                  <div className="py-2">
                    {services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-6 py-3 text-[13.5px] font-medium text-gray-700 hover:text-[#dc2626] hover:bg-white transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                    <div className="border-t border-gray-200 mx-4 my-1"></div>
                    <Link href="/services" className="block px-6 py-3 text-[12px] font-bold uppercase tracking-widest text-[#dc2626] hover:bg-white transition-colors">
                      View All Services →
                    </Link>
                  </div>
                </div>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-[#dc2626] transition-colors py-2 uppercase tracking-wider">Our Work</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#dc2626] transition-colors py-2 uppercase tracking-wider">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#dc2626] transition-colors py-2 uppercase tracking-wider">Contact Us</Link>
              </li>
            </ul>

            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 hover:text-[#dc2626] focus:outline-none" aria-label="Toggle Navigation Menu">
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-gray-100">
              <ul className="flex flex-col gap-1 pb-2">
                <li>
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-[14px] font-bold text-gray-800 hover:text-[#dc2626] hover:bg-gray-50 rounded uppercase tracking-wider">Home</Link>
                </li>
                <li>
                  <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-[14px] font-bold text-gray-800 hover:text-[#dc2626] hover:bg-gray-50 rounded uppercase tracking-wider">About Us</Link>
                </li>

                {/* Mobile Services Accordion */}
                <li>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-[14px] font-bold text-gray-800 hover:text-[#dc2626] hover:bg-gray-50 rounded uppercase tracking-wider"
                  >
                    Services
                    <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-3 pl-3 border-l-2 border-[#dc2626] mt-1 mb-1 flex flex-col">
                      {services.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                          className="block py-2.5 text-[13px] font-semibold text-gray-700 hover:text-[#dc2626] transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                        className="block py-2.5 text-[12px] font-bold text-[#dc2626] uppercase tracking-wider"
                      >
                        View All Services →
                      </Link>
                    </div>
                  )}
                </li>

                <li>
                  <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-[14px] font-bold text-gray-800 hover:text-[#dc2626] hover:bg-gray-50 rounded uppercase tracking-wider">Our Work</Link>
                </li>
                <li>
                  <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-[14px] font-bold text-gray-800 hover:text-[#dc2626] hover:bg-gray-50 rounded uppercase tracking-wider">Blog</Link>
                </li>
                <li>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-[14px] font-bold text-gray-800 hover:text-[#dc2626] hover:bg-gray-50 rounded uppercase tracking-wider">Contact Us</Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Floating WhatsApp Button */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex items-center group">
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110" aria-label="Chat on WhatsApp">
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
          <WhatsAppIcon className="w-7 h-7 fill-white relative z-10" />
        </Link>
        <div className="hidden sm:block absolute right-16 bg-[#170a1c] text-white text-[12px] font-semibold px-3 py-1.5 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with ColorKnit
        </div>
      </aside>
    </>
  );
}
