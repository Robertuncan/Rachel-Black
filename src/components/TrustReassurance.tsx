import React from 'react';
import { REASSURANCE_POINTS } from '../data/hvacData';
import { ShieldCheck, CheckCircle2, MessageSquare, Wrench, Sparkles } from 'lucide-react';

export const TrustReassurance: React.FC = () => {
  const icons = [
    <MessageSquare key="msg" className="w-5 h-5 text-red-500" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-red-500" />,
    <Sparkles key="sparkle" className="w-5 h-5 text-red-500" />,
    <Wrench key="wrench" className="w-5 h-5 text-red-500" />
  ];

  return (
    <section id="standards" className="py-20 sm:py-26 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest font-bold text-red-500 mb-2">
            Professional Credibility & Standards
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Reliable Standards Grounded in Real Craftsmanship
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed font-normal">
            Every heating and cooling system installed, repaired, or serviced adheres to uncompromising quality benchmarks and transparent customer communication.
          </p>
        </div>

        {/* 4 Core Practical Reassurance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {REASSURANCE_POINTS.map((point, index) => (
            <div
              key={index}
              className="bg-neutral-900/90 border border-neutral-800 rounded-sm p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="w-11 h-11 rounded-sm bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-5">
                  {icons[index % icons.length]}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2.5">
                  {point.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-neutral-800 flex items-center gap-2 text-[11px] uppercase tracking-wider text-neutral-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Contractor Commitment</span>
              </div>
            </div>
          ))}
        </div>

        {/* Smart Climate Showcase Banner (Luxury Styling) */}
        <div className="rounded-sm border border-neutral-800 bg-neutral-900/60 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="p-8 sm:p-12 lg:col-span-7">
              <div className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">
                Precision Temperature Management
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Smart Thermostat Installation & Energy Optimisation
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                Modern high-precision thermostats allow zoned temperature micro-adjustments, ensuring total comfort while eliminating unnecessary energy expenditure across London properties.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Calibrated room-by-room thermal balancing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Concealed architectural wall wiring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Compatible with premium VRV and split systems</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Full operational walkthrough provided</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-neutral-950">
              <img
                src="/src/assets/images/thermostat_installation_1790839123200.jpg"
                alt="Architectural modern digital wall thermostat installation detail"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
