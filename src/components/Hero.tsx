import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, MapPin, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

interface HeroProps {
  onContactClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-neutral-200/90">
      {/* Refined subtle luxury architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-18 lg:pt-20 lg:pb-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Copy, Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Editorial Metadata Kicker (Zero-pill discipline, clean unboxed typography) */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">
              <span className="text-red-700 font-bold tracking-widest">Rachel Black</span>
              <span aria-hidden="true" className="text-neutral-300">/</span>
              <span>HVAC Contractor</span>
              <span aria-hidden="true" className="text-neutral-300">/</span>
              <span className="flex items-center gap-1.5 normal-case font-medium text-neutral-600">
                <MapPin className="w-3.5 h-3.5 text-red-700" />
                London W13 9HE
              </span>
            </div>

            {/* Tagline Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.08] mb-6 text-balance">
              Reliable HVAC Solutions <br className="hidden sm:inline" />
              <span className="italic font-normal text-neutral-700">for</span>{' '}
              <span className="text-red-700 underline decoration-red-700/30 underline-offset-8">
                Total Comfort.
              </span>
            </h1>

            {/* Grounded, concrete supporting copy */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed mb-8 font-normal">
              Precision air conditioning, central heating installations, urgent system repairs, and ductwork engineering for London private residences, luxury apartments, and commercial facilities.
            </p>

            {/* Call to Actions (Strict single-line button labels) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              {/* Main CTA: Message on WhatsApp */}
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-red-700 hover:bg-red-800 active:bg-red-900 rounded-sm shadow-sm transition-all group whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Message on WhatsApp</span>
              </a>

              {/* Secondary CTA: Contact Us */}
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 rounded-sm transition-colors whitespace-nowrap border border-neutral-200"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
              </button>

              {/* Direct Phone Option */}
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold text-neutral-700 hover:text-red-700 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-red-700" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Practical Trust Signals (Only facts from brief) */}
            <div className="pt-6 border-t border-neutral-200/90 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Independent Contractor</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Direct accountability with Rachel</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Wrench className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider">12 Core Disciplines</div>
                  <div className="text-xs text-neutral-500 mt-0.5">AC, heating, ventilation & controls</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider">London Registered</div>
                  <div className="text-xs text-neutral-500 mt-0.5">17 Leeland Mansions, W13 9HE</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-neutral-200 shadow-2xl bg-neutral-100 aspect-16/9 lg:aspect-4/3">
              <img
                src="/src/assets/images/hero_hvac_modern_1790839083908.jpg"
                alt="Contemporary London luxury interior featuring minimalist air conditioning and climate control"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Editorial scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />

              {/* Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-[11px] font-bold tracking-widest uppercase text-red-400">
                  Residential & Commercial Climate Engineering
                </div>
                <div className="font-serif text-lg font-normal text-white mt-1">
                  Discreet climate solutions designed for architectural quietness and reliable efficiency.
                </div>
              </div>
            </div>

            {/* Under-image quick WhatsApp inquiry badge */}
            <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 px-1">
              <span>Have an urgent heating or cooling fault?</span>
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-700 font-semibold hover:underline inline-flex items-center gap-1"
              >
                Send photo on WhatsApp <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
