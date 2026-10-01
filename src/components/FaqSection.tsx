import React, { useState } from 'react';
import { FAQS, BUSINESS_INFO } from '../data/hvacData';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-18 sm:py-24 bg-white border-b border-neutral-200/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest font-bold text-red-700 mb-2">
            Inquiries & Clarifications
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-neutral-600 font-normal">
            Practical insights to assist in scheduling HVAC installations, maintenance, and diagnostics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-neutral-200 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-neutral-950 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-red-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/40 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help footer prompt */}
        <div className="mt-12 p-5 rounded-sm bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span className="text-xs text-neutral-600">
            Have a project-specific enquiry regarding acoustic limits, architectural integration, or refrigerant types?
          </span>
          <a
            href={BUSINESS_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-red-700 hover:text-red-800 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Message on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
