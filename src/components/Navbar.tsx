import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/90 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element wordmark with luxury craftsmanship */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-red-700 flex items-center justify-center text-white font-serif font-bold text-lg tracking-wider transition-transform group-hover:scale-105 shadow-xs">
              RB
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 group-hover:text-red-700 transition-colors">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold -mt-0.5">
                {BUSINESS_INFO.trade} · London
              </span>
            </div>
          </a>

          {/* Zone 2: Clean luxury text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-neutral-600">
            <a href="#services" className="hover:text-red-700 transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-red-700 transition-colors">
              About
            </a>
            <a href="#standards" className="hover:text-red-700 transition-colors">
              Standards
            </a>
            <a href="#location" className="hover:text-red-700 transition-colors">
              Location
            </a>
            <a href="#faq" className="hover:text-red-700 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Zone 3: Primary Action buttons */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide text-neutral-800 bg-neutral-100/90 hover:bg-neutral-200/80 rounded-sm transition-colors whitespace-nowrap border border-neutral-200/60"
            >
              <Phone className="w-3.5 h-3.5 text-red-700" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-red-700 hover:bg-red-800 rounded-sm shadow-xs transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Message on WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Rachel Black"
              className="p-2.5 text-white bg-red-700 rounded-sm"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-neutral-700 hover:text-neutral-950 rounded-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-neutral-200 bg-white px-5 pt-3 pb-6 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-wider font-semibold text-neutral-800 pt-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-red-700 transition-colors"
            >
              Services (12 Core Services)
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-red-700 transition-colors"
            >
              About Rachel Black
            </a>
            <a
              href="#standards"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-red-700 transition-colors"
            >
              Standards & Reassurance
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-red-700 transition-colors"
            >
              Location & Coverage
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-red-700 transition-colors"
            >
              Inquiries & FAQ
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2.5">
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs uppercase tracking-wider font-bold text-white bg-red-700 hover:bg-red-800 rounded-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-red-700" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 text-center"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
