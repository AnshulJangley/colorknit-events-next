"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

// Official WhatsApp Vector Icon
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

const serviceDropdownItems = [
  { title: "Corporate Event Management", href: "/corporate-events" },
  { title: "Annual Day & Gala Events", href: "/annual-day-gala-events" },
  { title: "Town Hall & R&R Events", href: "/town-hall-rr" },
  { title: "Employee Engagement", href: "/employee-engagement" },
  { title: "Family Day Outing", href: "/family-day-outing" },
  { title: "Wedding Event Management", href: "/services/weddings" },
  { title: "MICE & Conferences", href: "/services/mice" },
  { title: "Exhibitions & Expos", href: "/services/exhibitions" },
  { title: "Sports Events", href: "/services/sports" },
  { title: "Corporate Gifting", href: "/services/corporate-gifting" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const whatsappNumber = "919271114024";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20ColorKnit%20Events%2C%20I%20would%20like%20to%20enquire%20about%20event%20planning.`;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Our Work", href: "/gallery" },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <header className="w-full max-w-full overflow-x-hidden">
        <div className="bg-[#170a1c] text-white text-[12px] font-medium py-2 px-4 border-b border-white/10 w-full max-w-full">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            {/* Left Tagline (Desktop) */}
            <div className="hidden sm:flex items-center gap-2 text-gray-300 text-[11px] tracking-wider uppercase">
              <span>ColorKnit</span>
            </div>

            {/* Right Quick Links & WhatsApp Button */}
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 md:gap-4 ml-auto">
              <Link
                href="tel:+919271114024"
                className="flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors text-[11px] font-semibold tracking-wide"
              >
                <Phone size={13} className="text-[#00a8a8]" />
                <span className="hidden xs:inline">+91 9271114024</span>
                <span className="xs:hidden">Call</span>
              </Link>

              <span className="text-gray-600">|</span>

              {/* Top Bar WhatsApp Button */}
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide transition-all shadow-sm hover:shadow"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-white py-3.5 px-4 md:px-8 shadow-sm sticky top-0 z-50 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Image
                  src="/images/logo.webp"
                  alt="ColorKnit Events"
                  width={200}
                  height={55}
                  className="h-11 sm:h-12 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-7 text-[13.5px] font-bold tracking-wide text-gray-800">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#dc2626] transition-colors py-2 uppercase tracking-wider"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#dc2626] transition-colors py-2 uppercase tracking-wider"
                >
                  About Us
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex items-center gap-1 hover:text-[#dc2626] transition-colors py-2 uppercase tracking-wider font-bold text-[13.5px] text-gray-800"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Panel */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-md shadow-xl border border-gray-100 z-50 overflow-hidden">
                    {/* View All Services link at top */}
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-[#dc2626] border-b border-gray-100 hover:bg-red-50 transition-colors"
                    >
                      View All Services →
                    </Link>
                    <ul>
                      {serviceDropdownItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setServicesOpen(false)}
                            className="block px-5 py-2.5 text-[13px] font-semibold text-gray-700 hover:text-[#dc2626] hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#dc2626] transition-colors py-2 uppercase tracking-wider"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#dc2626] transition-colors py-2 uppercase tracking-wider"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#dc2626] transition-colors py-2 uppercase tracking-wider"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile Header Controls: Hamburger Toggle */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-[#dc2626] focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-gray-100">
              <ul className="flex flex-col gap-1 pb-2">
                {navLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2.5 text-[14px] font-bold text-gray-800 hover:text-[#dc2626] hover:bg-gray-50 rounded uppercase tracking-wider"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}

                {/* Mobile Services Accordion */}
                <li>
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-[14px] font-bold text-gray-800 hover:text-[#dc2626] hover:bg-gray-50 rounded uppercase tracking-wider"
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <ul className="ml-4 mt-1 border-l-2 border-[#dc2626]/20 pl-3 flex flex-col gap-0.5">
                      <li>
                        <Link
                          href="/services"
                          onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                          className="block py-2 text-[13px] font-bold text-[#dc2626] uppercase tracking-wider"
                        >
                          View All Services
                        </Link>
                      </li>
                      {serviceDropdownItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                            className="block py-2 text-[13px] font-semibold text-gray-700 hover:text-[#dc2626] transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Floating On-Screen WhatsApp Action Button */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex items-center group">
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
          <WhatsAppIcon className="w-7 h-7 fill-white relative z-10" />
        </Link>

        {/* Hover Tooltip (Desktop) */}
        <div className="hidden sm:block absolute right-16 bg-[#170a1c] text-white text-[12px] font-semibold px-3 py-1.5 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with ColorKnit
        </div>
      </aside>
    </>
  );
}
