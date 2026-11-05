import Link from "next/link";
import { ChevronsRight, ChevronRight, MapPin, Phone, Mail, ChevronUp } from "lucide-react";

interface FooterProps {
  companyDescription?: React.ReactNode;
}

export default function Footer({ companyDescription }: FooterProps) {
  return (
    <>
      {/* Footer */}
      <footer className="bg-[#e5e5e5] pt-16 pb-8 px-4 md:px-8 text-[13.5px] text-gray-700 w-full max-w-full overflow-x-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1 */}
          <div>
            <h4 className="text-[15px] font-bold text-gray-800 mb-6 tracking-wide">COLORKNIT EVENTS PVT. LTD.</h4>
            {companyDescription || (
              <>
                <p className="leading-relaxed mb-4 font-medium">
                  Transform your workplace with our dynamic employee engagement programs and corporate event planning. We tailor innovative solutions to boost morale, foster collaboration, and drive performance across your organization.
                </p>
                <p className="leading-relaxed mb-6 font-medium">
                  Discover how we can help you create a thriving work environment today. Headquartered in Pune and recognized among the premier corporate event management companies across Pune, Mumbai & Pan India.
                </p>
              </>
            )}
            <Link href="/contact" className="inline-flex items-center gap-1 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-5 py-3 font-bold text-[12px] uppercase transition-colors shadow-sm mt-2">
              REQUEST A CALL BACK
              <ChevronsRight size={16} />
            </Link>
          </div>
          
          {/* Column 2 */}
          <div>
            <h4 className="text-[15px] font-bold text-gray-800 mb-6 tracking-wide">QUICK LINKS</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Corporate Events", href: "/corporate-events" },
                { name: "Annual Day Celebrations", href: "/annual-day-gala-events" },
                { name: "Employee Engagement", href: "/employee-engagement" },
                { name: "Family Day Outings", href: "/family-day-outing" },
                { name: "Town Hall & R&R", href: "/town-hall-rr" },
                { name: "View Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="flex items-center gap-2 text-[#007b7b] hover:text-[#005a5a] transition-colors font-medium">
                    <ChevronRight size={14} className="text-gray-500 shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h4 className="text-[15px] font-bold text-gray-800 mb-6 tracking-wide">POPULAR SERVICES</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Corporate Event Management", href: "/corporate-events" },
                { name: "MICE & Conferences", href: "/services/mice" },
                { name: "Exhibition Stall Design", href: "/services/exhibitions" },
                { name: "Corporate Gifting Pune", href: "/services/corporate-gifting" },
                { name: "Sports Tournaments", href: "/services/sports" },
                { name: "Luxury Weddings", href: "/services/weddings" },
                { name: "All Event Services", href: "/services" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="flex items-center gap-2 text-[#007b7b] hover:text-[#005a5a] transition-colors font-medium">
                    <ChevronRight size={14} className="text-gray-500 shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h4 className="text-[15px] font-bold text-gray-800 mb-6 tracking-wide">CONTACT US</h4>
            <ul className="flex flex-col gap-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-800 shrink-0 mt-0.5" fill="currentColor" strokeWidth={1} />
                <span className="font-semibold text-gray-800 leading-tight">
                  Pune Office: Flat No. 303, 3rd Floor,<br/>Fortune House, Baner - Pashan Link Rd,<br/>Baner, Pune, Maharashtra 411045
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#007b7b] shrink-0" fill="currentColor" strokeWidth={1} />
                <a href="tel:+919271114024" className="font-semibold text-[#007b7b] hover:underline">+91 9271114024</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#007b7b] shrink-0" fill="currentColor" strokeWidth={1} />
                <a href="mailto:info@colorknitevents.com" className="font-semibold text-[#007b7b] hover:underline">info@colorknitevents.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[12.5px] font-medium text-gray-600">Working Hours: Mon-Sat: 10AM – 7PM</span>
              </li>
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00a8a8] hover:bg-[#008f8f] text-white px-5 py-2.5 font-bold text-[12px] uppercase transition-colors shadow-sm">
              <Mail size={14} fill="currentColor" />
              ENQUIRY FORM
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar Social Links */}
        <div className="max-w-[1200px] mx-auto border-t border-gray-300 pt-6 flex flex-wrap justify-center gap-6 md:gap-10 font-semibold text-[13px] text-gray-700">
          {[
            { name: "Facebook", href: "https://www.facebook.com/ColorKnitEvents/" },
            { name: "YouTube", href: "https://www.youtube.com/@ColorKnitEvents" },
            { name: "LinkedIn", href: "https://www.linkedin.com/company/colorknit-events-n-production/" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#007b7b] transition-colors flex items-center gap-1.5"
            >
              {social.name}
            </a>
          ))}
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="bg-[#222222] py-4 px-4 text-center text-[12.5px] text-gray-300 font-medium w-full max-w-full overflow-x-hidden">
        <div className="max-w-[1200px] mx-auto flex justify-center">
          <p className="break-words">© 2008-2026 COLORKNIT EVENTS PVT. LTD. ® | All Rights Reserved | Sitemap | Disclaimer & Privacy Policy</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a 
        href="#"
        className="fixed bottom-6 left-6 w-[50px] h-[50px] bg-[#f27b13] hover:bg-[#d4680b] text-white rounded-md flex items-center justify-center shadow-lg z-50 transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp size={28} />
      </a>
    </>
  );
}
