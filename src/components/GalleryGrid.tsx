import Link from "next/link";
import Image from "next/image";

interface GalleryGridProps {
  title?: string;
  subtitle?: string;
  headerContent?: React.ReactNode;
  items: { title: string; image: string }[];
  currentPage: number;
}

const TOTAL_PAGES = 6;

export default function GalleryGrid({ title, subtitle, headerContent, items, currentPage }: GalleryGridProps) {
  return (
    <div id="gallery-grid" className="w-full bg-[#f8f9f8] py-20 px-4">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Headers */}
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className="text-[#222] text-[22px] md:text-[26px] font-bold tracking-[0.05em] uppercase mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <h3 className="text-[#847565] text-[16px] md:text-[18px] font-medium tracking-wide mb-4">
                {subtitle}
              </h3>
            )}
            <div className="w-[50px] h-[2px] bg-[#a88f78] mx-auto mb-10"></div>
            
            {headerContent && (
              <div className="max-w-4xl mx-auto flex flex-col gap-6 text-[#555] text-[13.5px] leading-[1.8] font-medium text-center">
                {headerContent}
              </div>
            )}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-20">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-full aspect-[4/3] rounded-[6px] overflow-hidden mb-4 border border-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-[#555] text-[12.5px] md:text-[13.5px] font-medium text-center px-2">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-[2px]">
          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={page === 1 ? "/gallery" : `/gallery/page/${page}`}
              className={`w-[38px] h-[38px] flex items-center justify-center text-[13.5px] font-bold transition-colors ${
                currentPage === page
                  ? "bg-[#00a8a8] text-white pointer-events-none"
                  : "bg-[#f47b20] text-white hover:bg-[#da6a16]"
              }`}
            >
              {page}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
