import Link from "next/link";
import { ChevronsRight, ChevronRight, MapPin, Phone, Smartphone, Mail, ChevronUp } from "lucide-react";

interface FooterProps {
  companyDescription?: React.ReactNode;
}

export default function Footer({ companyDescription }: FooterProps) {
  return (
    <>
      {/* Footer */}
      <footer className="bg-[#e5e5e5] pt-16 pb-8 px-4 md:px-8 text-[13.5px] text-gray-700">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1 */}
          <div>
            <h4 className="text-[15px] font-bold text-gray-800 mb-6">EMG SHOWMAKERZ PVT. LTD.</h4>
            {companyDescription || (
              <>
                <p className="leading-relaxed mb-4 font-medium">
                  Transform your workplace with our dynamic employee engagement programs. We tailor innovative solutions to boost morale, foster collaboration, and drive performance, ensuring a motivated and productive team.
                </p>
                <p className="leading-relaxed mb-6 font-medium">
                  Discover how we can help you create a thriving work environment today. We are proud to be consistently recognized among the <Link href="#" className="text-[#008484] hover:underline font-semibold">top 10 event management companies in Delhi, Gurgaon & NCR</Link>.
                </p>
              </>
            )}
            <Link href="#" className="inline-flex items-center gap-1 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-5 py-3 font-bold text-[12px] uppercase transition-colors shadow-sm mt-2">
              REQUEST A CALL BACK
              <ChevronsRight size={16} />
            </Link>
          </div>
          
          {/* Column 2 */}
          <div>
            <h4 className="text-[15px] font-bold text-gray-800 mb-6">QUICK LINKS</h4>
            <ul className="flex flex-col gap-3">
              {["About Us", "Our Profile", "Our Clientèle", "View Gallery", "Why Us", "Work With Us", "Reach Us"].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="flex items-center gap-2 text-[#007b7b] hover:text-[#005a5a] transition-colors font-medium">
                    <ChevronRight size={14} className="text-gray-500 shrink-0" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h4 className="text-[15px] font-bold text-gray-800 mb-6">POPULAR SERVICES</h4>
            <ul className="flex flex-col gap-3">
              {["Event Management Services", "Event Management Company", "Corporate Event Planners", "Event Organisers in Delhi NCR", "Event Organisers in Gurgaon", "Event Organisers in Noida", "Event Planners in Delhi NCR"].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="flex items-center gap-2 text-[#007b7b] hover:text-[#005a5a] transition-colors font-medium">
                    <ChevronRight size={14} className="text-gray-500 shrink-0" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h4 className="text-[15px] font-bold text-gray-800 mb-6">CONTACT US</h4>
            <ul className="flex flex-col gap-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-800 shrink-0 mt-0.5" fill="currentColor" strokeWidth={1} />
                <span className="font-semibold text-gray-800 leading-tight">Main Office: 31, 4th Floor,<br/>Sant Nagar, East of Kailash,<br/>New Delhi - 110065</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-800 shrink-0 mt-0.5" fill="currentColor" strokeWidth={1} />
                <span className="font-semibold text-gray-800 leading-tight">Production Base: 1563,<br/>Shalimar Garden Ext,<br/>Sahibabad, Delhi NCR -<br/>201005</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#007b7b] shrink-0" fill="currentColor" strokeWidth={1} />
                <span className="font-semibold text-[#007b7b]">+91-98111-21153</span>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone size={16} className="text-[#007b7b] shrink-0" />
                <span className="font-semibold text-[#007b7b]">+91-98111-73792</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#007b7b] shrink-0" fill="currentColor" strokeWidth={1} />
                <span className="font-semibold text-[#007b7b]">pankaj@showmakerz.com</span>
              </li>
            </ul>
            <Link href="#" className="inline-flex items-center gap-2 bg-[#00a8a8] hover:bg-[#008f8f] text-white px-5 py-2.5 font-bold text-[12px] uppercase transition-colors shadow-sm">
              <Mail size={14} fill="currentColor" />
              ENQUIRY FORM
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="max-w-[1200px] mx-auto border-t border-gray-300 pt-6 flex flex-wrap justify-center gap-6 md:gap-12 font-semibold text-[13px] text-gray-700">
          {["Facebook", "X (Twitter)", "YouTube", "LinkedIn", "Instagram"].map((social, idx) => (
            <Link key={idx} href="#" className="hover:text-[#007b7b] transition-colors">
              {social}
            </Link>
          ))}
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="bg-[#222222] py-4 px-4 text-center text-[12.5px] text-gray-300 font-medium">
        <div className="max-w-[1200px] mx-auto flex justify-center">
          <p>© 2008-2026 SHOWMAKERZ ® | All Rights Reserved | Sitemap | Disclaimer & Privacy Policy</p>
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
