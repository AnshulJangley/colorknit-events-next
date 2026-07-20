"use client";

import { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div 
            key={idx} 
            className="bg-white rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#f0f0f0] overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full flex items-center justify-between px-6 py-[18px] cursor-pointer hover:bg-gray-50 transition-colors text-left"
            >
              <span className="text-[#333] font-semibold text-[14.5px]">{faq.question}</span>
              <span className={`text-[#847565] transition-transform duration-500 ease-in-out ${isOpen ? "rotate-45" : "rotate-0"}`}>
                <Plus size={18} />
              </span>
            </button>
            <div 
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-[20px] pt-1 text-[#555] text-[14px] leading-[1.8]">
                  <div className="h-[1px] w-full bg-gray-100 mb-4"></div>
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
