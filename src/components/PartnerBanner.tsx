import Link from "next/link";
import { Phone, MessageCircle, Mail } from "lucide-react";

interface PartnerBannerProps {
  title?: string;
}

export default function PartnerBanner({
  title = "Partner With Pune's Trusted Event Management Experts",
}: PartnerBannerProps) {
  return (
    <section
      className="relative py-16 px-4 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/pexels-steve-29708309.jpg')" }}
    >
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-[#0c0f12]/70"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center">
        <h2 className="font-cinzel text-xl md:text-[22px] font-medium text-white tracking-wide mb-8">
          {title}
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-4xl mx-auto w-full">
          <Link
            href="tel:+919811121153"
            className="flex items-center justify-center gap-2 border border-white text-white px-7 py-3 rounded-[3px] text-[13px] font-semibold tracking-wider hover:bg-white/10 transition-colors uppercase w-full sm:w-auto backdrop-blur-sm"
          >
            <Phone size={17} fill="currentColor" />
            CALL US NOW
          </Link>

          <Link
            href="https://wa.me/919811121153"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white text-white px-7 py-3 rounded-[3px] text-[13px] font-semibold tracking-wider hover:bg-white/10 transition-colors uppercase w-full sm:w-auto backdrop-blur-sm"
          >
            <MessageCircle size={17} />
            CHAT ON WHATSAPP
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 border border-white text-white px-7 py-3 rounded-[3px] text-[13px] font-semibold tracking-wider hover:bg-white/10 transition-colors uppercase w-full sm:w-auto backdrop-blur-sm"
          >
            <Mail size={17} fill="currentColor" />
            ENQUIRY FORM
          </Link>
        </div>
      </div>
    </section>
  );
}

