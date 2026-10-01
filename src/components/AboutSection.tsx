import React from 'react';
import { BUSINESS_INFO } from '../data/hvacData';
import { CheckCircle2, Home, Building2, PhoneCall, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-18 sm:py-24 bg-white border-b border-neutral-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Service Equipment Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100 aspect-4/3">
              <img
                src="/src/assets/images/hvac_service_tools_1790839110631.jpg"
                alt="Precision HVAC diagnostic equipment and calibrated service tools"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                  Calibrated Diagnostics & Service Gear
                </div>
                <div className="font-serif text-base text-neutral-100 mt-1">
                  Digital electronic gauges, vacuum pumps, and specialized refrigerant recovery systems.
                </div>
              </div>
            </div>

            {/* Direct Line Box */}
            <div className="mt-4 p-5 rounded-sm border border-neutral-200 bg-neutral-50/80 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-neutral-900">Direct Contractor Contact</div>
                <div className="text-xs text-neutral-500 mt-0.5">Direct consultation with Rachel Black</div>
              </div>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-red-700 hover:text-red-800"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="text-xs uppercase tracking-widest font-bold text-red-700 mb-2">
              The Contractor Behind The Work
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight mb-6 text-balance">
              Tailored Climate Craftsmanship for Discerning London Clients
            </h2>
            
            <p className="text-base text-neutral-600 leading-relaxed mb-5 font-normal">
              Based at 17 Leeland Mansions, Leeland Road, London W13 9HE, Rachel Black provides full-service HVAC contracting focused on total climate comfort. From bespoke air conditioning installations in period London residences to heavy-duty heating replacements and critical ventilation systems, every project is executed to exacting standards.
            </p>

            <p className="text-base text-neutral-600 leading-relaxed mb-8 font-normal">
              Unlike large multi-tiered maintenance agencies with anonymous personnel, clients working with Rachel Black receive direct personal accountability, meticulous architectural care for their property, and clear diagnostic explanations before work commences.
            </p>

            {/* Scope highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
              <div className="p-5 rounded-sm border border-neutral-200 bg-neutral-50/60">
                <div className="flex items-center gap-2 mb-2">
                  <Home className="w-4 h-4 text-red-700" />
                  <span className="text-sm font-bold text-neutral-900 uppercase tracking-wide">Fine Residential</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Apartments, heritage townhouses, and extensions requiring whisper-quiet operation and invisible aesthetic integration.
                </p>
              </div>

              <div className="p-5 rounded-sm border border-neutral-200 bg-neutral-50/60">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-red-700" />
                  <span className="text-sm font-bold text-neutral-900 uppercase tracking-wide">Commercial & Medical</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Corporate office floors, medical suites, and commercial facilities demanding strict compliance and dependable airflow.
                </p>
              </div>
            </div>

            {/* Reassurance points */}
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-700" />
                Fully Qualified & Insured
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-700" />
                All 12 HVAC Disciplines
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-700" />
                Direct WhatsApp Availability
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
