"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronDown, Menu, X, MessageCircle } from "lucide-react";

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

interface MenuItem {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const whatsappNumber = "919811121153";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20ColorKnit%20Events%2C%20I%20would%20like%20to%20enquire%20about%20event%20planning.`;

  const menuItems: MenuItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
      subItems: [
        { title: "Our Story", href: "/about#story" },
        { title: "Why Choose Us", href: "/about#why-us" },
        { title: "Our Clients", href: "/about#clients" },
      ],
    },
    {
      title: "Services",
      href: "/corporate-events",
      subItems: [
        { title: "Corporate Events", href: "/corporate-events" },
        { title: "Exhibitions", href: "/services#exhibitions" },
        { title: "Weddings", href: "/services#weddings" },
        { title: "Corporate Gifting", href: "/services#corporate-gifting" },
        { title: "Sports", href: "/services#sports" },
        { title: "MICE", href: "/services#mice" },
      ],
    },
    {
      title: "Our Work",
      href: "/gallery",
      subItems: [
        { title: "Portfolio", href: "/portfolio" },
        { title: "Event Gallery", href: "/gallery" },
        { title: "Event Videos", href: "/videos" },
      ],
    },
    {
      title: "Blog",
      href: "/blog",
      subItems: [
        { title: "Event Planning", href: "/blog#event-planning" },
        { title: "Corporate Events", href: "/blog#corporate-events" },
        { title: "Exhibitions", href: "/blog#exhibitions" },
        { title: "Weddings", href: "/blog#weddings" },
        { title: "Sports", href: "/blog#sports" },
        { title: "MICE", href: "/blog#mice" },
      ],
    },
    {
      title: "Contact Us",
      href: "/contact",
      subItems: [
        { title: "Contact Details", href: "/contact#details" },
        { title: "Enquiry Form", href: "/contact#enquiry" },
      ],
    },
  ];

  const toggleMobileSubmenu = (title: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === title ? null : title);
  };

  return (
    <>
      {/* Top Bar */}
      <header className="w-full">
        <div className="bg-[#170a1c] text-white text-[12px] font-medium py-2 px-4 border-b border-white/10">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            {/* Left Tagline (Desktop) */}
            <div className="hidden sm:flex items-center gap-2 text-gray-300 text-[11px] tracking-wider uppercase">
              <span>ColorKnit Events</span>
              <span className="text-gray-500">•</span>
              <span className="text-[#ff79cb]">Corporate &amp; MICE Planners</span>
            </div>

            {/* Right Quick Links & WhatsApp Button */}
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 md:gap-4 ml-auto">
              <Link
                href="tel:+919811121153"
                className="flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors text-[11px] font-semibold tracking-wide"
              >
                <Phone size={13} className="text-[#00a8a8]" />
                <span className="hidden xs:inline">+91 98111 21153</span>
                <span className="xs:hidden">Call</span>
              </Link>

              <span className="text-gray-600">|</span>

              {/* Top Bar WhatsApp Button (Visible on both Desktop and Mobile Top) */}
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
              {menuItems.map((item) => {
                const hasSubmenu = item.subItems && item.subItems.length > 0;

                if (!hasSubmenu) {
                  return (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="hover:text-[#d60b8e] transition-colors py-2 uppercase tracking-wider"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.title} className="relative group">
                    <Link
                      href={item.href}
                      className="hover:text-[#d60b8e] transition-colors flex items-center gap-1 py-4 uppercase tracking-wider group-hover:text-[#d60b8e]"
                    >
                      {item.title}
                      <ChevronDown
                        size={14}
                        className="group-hover:rotate-180 transition-transform duration-200 text-gray-400 group-hover:text-[#d60b8e]"
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full -mt-1 w-56 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                      {item.subItems!.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          className="block px-4 py-2.5 text-[13px] text-gray-700 hover:text-[#d60b8e] hover:bg-[#fbf4f9] font-medium transition-colors border-b border-gray-50 last:border-b-0"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Action WhatsApp Button on Navbar */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-md text-[12.5px] font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </Link>
            </div>

            {/* Mobile Header Controls: Quick WhatsApp & Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-[12px] font-bold shadow-sm"
                aria-label="Direct WhatsApp on Mobile"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-[#d60b8e] focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
              <ul className="flex flex-col gap-1 pb-4">
                {menuItems.map((item) => {
                  const hasSubmenu = item.subItems && item.subItems.length > 0;
                  const isSubOpen = openMobileSubmenu === item.title;

                  if (!hasSubmenu) {
                    return (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2.5 text-[14px] font-bold text-gray-800 hover:text-[#d60b8e] hover:bg-gray-50 rounded uppercase tracking-wider"
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={item.title} className="flex flex-col">
                      <div className="flex items-center justify-between px-3 py-2.5 rounded hover:bg-gray-50">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[14px] font-bold text-gray-800 hover:text-[#d60b8e] uppercase tracking-wider flex-grow"
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleMobileSubmenu(item.title)}
                          className="p-2 text-gray-500 hover:text-[#d60b8e]"
                          aria-label={`Toggle ${item.title} subcategories`}
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              isSubOpen ? "rotate-180 text-[#d60b8e]" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Mobile Submenu Accordion */}
                      {isSubOpen && (
                        <div className="pl-6 pr-3 py-1 flex flex-col gap-1 bg-[#faf8fa] rounded-md my-1 border-l-2 border-[#d60b8e]">
                          {item.subItems!.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="py-2 text-[13px] font-medium text-gray-600 hover:text-[#d60b8e] transition-colors"
                            >
                              • {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Menu WhatsApp CTA Button */}
              <div className="pt-3 border-t border-gray-100 px-2 pb-2">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-md text-[13px] font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp Directly</span>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Floating On-Screen WhatsApp Action Button (Mobile & Desktop View) */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex items-center group">
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle Pulse Animation Ring */}
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
