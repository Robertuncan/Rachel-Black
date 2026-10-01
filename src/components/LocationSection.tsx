import React from 'react';
import { BUSINESS_INFO } from '../data/hvacData';
import { MapPin, Navigation, Phone, MessageCircle, ExternalLink, Check } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-18 sm:py-24 bg-white border-b border-neutral-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest font-bold text-red-700 mb-2">
            London Operations & Service Reach
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            West London Base, Greater London Coverage
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed font-normal">
            Centrally based in Ealing (W13) to provide swift site visits, scheduled maintenance, and emergency response across prime London postcodes.
          </p>
        </div>

        {/* Location Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-neutral-50/80 border border-neutral-200/90 rounded-sm p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-sm bg-red-700/10 border border-red-700/20 flex items-center justify-center text-red-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-neutral-950">Contractor Location</h3>
                  <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">London, England</p>
                </div>
              </div>

              {/* Exact Address Box */}
              <div className="p-5 bg-white border border-neutral-200 rounded-sm mb-6 shadow-xs">
                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1.5">
                  Registered Address
                </div>
                <div className="font-serif text-base sm:text-lg font-bold text-neutral-950 leading-snug">
                  {BUSINESS_INFO.address}
                </div>
                <div className="mt-2 text-xs text-neutral-500 font-medium">
                  Postcode: <span className="font-bold text-neutral-900">{BUSINESS_INFO.postcode}</span>
                </div>
              </div>

              {/* Coverage list */}
              <div className="space-y-3 mb-8">
                <div className="text-xs uppercase tracking-wider font-bold text-neutral-900">
                  Primary Coverage Districts
                </div>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-red-700" />
                    <span>Ealing & W13</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-red-700" />
                    <span>Hanwell & Acton</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-red-700" />
                    <span>Chiswick & Hammersmith</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-red-700" />
                    <span>Central & Greater London</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Map / Call CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-neutral-200">
              <a
                href={BUSINESS_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider font-bold text-neutral-900 bg-white border border-neutral-300 hover:bg-neutral-100 rounded-sm transition-colors whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5 text-red-700" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>

              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider font-bold text-white bg-red-700 hover:bg-red-800 rounded-sm transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Send Postcode</span>
              </a>
            </div>
          </div>

          {/* Right Map View */}
          <div className="lg:col-span-7 rounded-sm overflow-hidden border border-neutral-200/90 bg-neutral-100 flex flex-col shadow-xs">
            <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[360px] bg-neutral-200">
              <iframe
                title="Rachel Black HVAC Contractor Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.565158223611!2d-0.32356262338166547!3d51.51201997181514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760df768409247%3A0x6d9f8c6eb57a3e7b!2sLeeland%20Mansions%2C%20Leeland%20Rd%2C%20London%20W13%209HE%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Luxury location badge overlay */}
              <div className="absolute top-4 left-4 bg-neutral-950/90 backdrop-blur-xs border border-neutral-800 text-white rounded-sm px-4 py-2.5 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-serif text-sm font-bold text-white">Rachel Black · HVAC Contractor</span>
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  17 Leeland Mansions, Leeland Road, London W13 9HE
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="p-4 bg-white border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-600">
              <span>Looking to schedule an on-site evaluation in London?</span>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="font-bold text-red-700 hover:underline flex items-center gap-1.5"
              >
                <Phone className="w-3 h-3" />
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
