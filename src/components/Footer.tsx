import React from 'react';
import { BUSINESS_INFO } from '../data/hvacData';
import { Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-26 sm:pb-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-red-700 flex items-center justify-center text-white font-serif font-bold text-lg">
                RB
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                {BUSINESS_INFO.name}
              </span>
            </div>
            
            <p className="font-serif italic text-sm text-neutral-300">
              "{BUSINESS_INFO.tagline}"
            </p>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-normal">
              Specialist HVAC contracting for London properties. Dedicated air conditioning installations, heating system replacements, diagnostic repairs, and ventilation engineering.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-red-700 hover:bg-red-800 text-white text-xs uppercase tracking-wider font-bold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Rachel</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-300">
              Contractor Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  12 Main HVAC Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Rachel Black
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-white transition-colors">
                  Standards & Reassurance
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  London Location (W13 9HE)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Address info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-300">
              Registered London Address
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
                <a href={BUSINESS_INFO.phoneHref} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-neutral-500">
                Operating throughout West London and surrounding Greater London boroughs.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Rachel Black · HVAC Contractor. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-xs uppercase tracking-wider font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
