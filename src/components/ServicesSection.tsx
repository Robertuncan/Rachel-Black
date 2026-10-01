import React, { useState } from 'react';
import { 
  SERVICES, 
  SERVICE_CATEGORIES, 
  ServiceItem,
  BUSINESS_INFO 
} from '../data/hvacData';
import { 
  Wind, 
  Flame, 
  Wrench, 
  SlidersHorizontal, 
  ArrowUpRight, 
  Check, 
  MessageCircle,
  AlertTriangle,
  Building2
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const getCategoryIcon = (category: ServiceItem['category'], id: string) => {
    if (id === 'emergency-hvac-repair') {
      return <AlertTriangle className="w-4 h-4 text-red-700" />;
    }
    if (id === 'commercial-hvac-services') {
      return <Building2 className="w-4 h-4 text-red-700" />;
    }
    switch (category) {
      case 'ac':
        return <Wind className="w-4 h-4 text-red-700" />;
      case 'heating':
        return <Flame className="w-4 h-4 text-red-700" />;
      case 'air-ventilation':
        return <SlidersHorizontal className="w-4 h-4 text-neutral-700" />;
      case 'commercial-emergency':
        return <Wrench className="w-4 h-4 text-red-700" />;
      default:
        return <Wrench className="w-4 h-4 text-neutral-700" />;
    }
  };

  return (
    <section id="services" className="py-18 sm:py-24 bg-neutral-50/70 border-b border-neutral-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-bold text-red-700 mb-2">
            Scope of Disciplines
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            Complete Heating, Cooling & Air Quality Solutions
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed font-normal">
            Covering all essential HVAC requirements with precision engineering, clean craftsmanship, and prompt diagnostic responsiveness across London.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Bar) */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-neutral-200/90 rounded-sm mb-10 overflow-x-auto scrollbar-none shadow-xs">
          {SERVICE_CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                  isActive 
                    ? 'bg-red-700 text-white shadow-xs' 
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 12 Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isEmergency = service.id === 'emergency-hvac-repair';
            return (
              <div
                key={service.id}
                className={`bg-white border rounded-sm p-7 flex flex-col justify-between transition-all group ${
                  isEmergency 
                    ? 'border-red-600/60 shadow-md ring-1 ring-red-600/20' 
                    : 'border-neutral-200/90 hover:border-neutral-400 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top card bar: index + category */}
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-4 pb-3 border-b border-neutral-100">
                    <span className="font-mono text-neutral-400 text-xs font-semibold">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-neutral-700 text-xs tracking-wide">
                      {getCategoryIcon(service.category, service.id)}
                      <span className="capitalize">{service.category.replace('-', ' ')}</span>
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif text-xl font-bold text-neutral-950 group-hover:text-red-700 transition-colors mb-2.5">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5 font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Detail Bullet Points */}
                  <ul className="space-y-2 mb-6 pt-3 border-t border-neutral-100">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-600">
                        <Check className="w-3.5 h-3.5 text-red-700 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Controls */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.name)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-neutral-900 hover:text-red-700 transition-colors cursor-pointer"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(`Hello Rachel, I would like to enquire about your ${service.name} service.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-red-700 hover:text-red-800 hover:bg-red-50/80 px-3 py-1.5 rounded-sm transition-colors"
                    title={`Message on WhatsApp regarding ${service.name}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Priority Emergency Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-neutral-950 text-white rounded-sm border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-red-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Immediate London Callouts Available
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Experiencing an Unexpected Heating or AC Failure?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              Direct telephone contact and WhatsApp diagnostics allow immediate triage and priority dispatch across London.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-bold text-white bg-red-700 hover:bg-red-800 rounded-sm transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Rachel</span>
            </a>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-sm transition-colors whitespace-nowrap"
            >
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
