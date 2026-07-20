import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#3f0928] text-white text-[11px] font-semibold py-2 px-4 flex justify-end">
        <div className="flex items-center gap-2 lg:mr-[15%]">
          <Link href="/" className="hover:text-gray-300 tracking-wide">HOME</Link>
          <span className="text-gray-400">|</span>
          <Link href="#" className="hover:text-gray-300 tracking-wide">LATEST EVENTS</Link>
          <span className="text-gray-400">|</span>
          <Link href="#" className="hover:text-gray-300 tracking-wide">CONTACT</Link>
          <span className="text-gray-400">|</span>
          <Link href="#" className="hover:text-gray-300 tracking-wide flex items-center gap-1 ml-2">
            <Phone size={12} />
            QUICK CALL
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-5 px-[5%] shadow-sm sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/images/logo.webp" 
                alt="Colorknit Logo" 
                width={220} 
                height={60} 
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-[13px] font-bold tracking-wide text-gray-700">
            <li><Link href="/corporate-events" className="hover:text-brand-pink transition-colors">CORPORATE EVENTS</Link></li>
            <li><Link href="/employee-engagement" className="hover:text-brand-pink transition-colors">EMPLOYEE ENGAGEMENT</Link></li>
            <li className="relative group">
              <Link href="#" className="hover:text-brand-pink transition-colors flex items-center gap-1">
                SPACE DESIGN
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col py-2 before:absolute before:-top-2 before:left-0 before:w-full before:h-2">
                <Link href="#" className="px-4 py-2 text-[13px] text-gray-700 hover:text-[#d60b8e] hover:bg-gray-50 transition-colors">Coming Soon 1</Link>
                <Link href="#" className="px-4 py-2 text-[13px] text-gray-700 hover:text-[#d60b8e] hover:bg-gray-50 transition-colors">Coming Soon 2</Link>
              </div>
            </li>
            <li><Link href="#" className="hover:text-brand-pink transition-colors">SERVICES</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-pink transition-colors">GALLERY</Link></li>
            <li><Link href="#" className="hover:text-brand-pink transition-colors">ASK FOR QUOTE</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
