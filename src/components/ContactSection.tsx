import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/hvacData';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

interface ContactSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
  onServiceChange
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const messageParts = [
      `Hello Rachel, I would like to enquire about HVAC services.`,
      selectedService ? `Service: ${selectedService}` : null,
      name ? `Name: ${name}` : null,
      phone ? `Contact Phone: ${phone}` : null,
      postcode ? `Property Location/Postcode: ${postcode}` : null,
      notes ? `Requirements: ${notes}` : null,
    ].filter(Boolean);

    const fullMessage = messageParts.join('\n');
    const waUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(fullMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-18 sm:py-24 bg-neutral-50/70 border-b border-neutral-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest font-bold text-red-700 mb-2">
            Direct Communication & Inquiries
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            Immediate Response for London Climate Systems
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed font-normal">
            Liaise directly with Rachel Black on WhatsApp for rapid diagnostics and scheduling, or request a detailed written HVAC consultation below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card (Primary) */}
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-7 bg-white border-2 border-red-700/80 hover:border-red-700 rounded-sm shadow-xs hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-red-700/10 border border-red-700/20 flex items-center justify-center text-red-700 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-red-700">
                      Recommended
                    </span>
                    <span className="text-xs font-semibold text-neutral-500">Instant Triage</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-neutral-950 mt-1">
                    Message on WhatsApp
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                    Fastest way to share fault photos, unit model tags, or confirm priority site appointments.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-red-700 group-hover:underline">
                    <span>Launch WhatsApp ({BUSINESS_INFO.phoneDisplay})</span>
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </a>

            {/* Direct Phone Call Card */}
            <a
              href={BUSINESS_INFO.phoneHref}
              className="block p-7 bg-white border border-neutral-200 hover:border-neutral-300 rounded-sm shadow-xs hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-red-700" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                    Direct Line
                  </span>
                  <h3 className="font-serif text-xl font-bold text-neutral-950 mt-1">
                    Call: {BUSINESS_INFO.phoneDisplay}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                    Direct voice communication with Rachel Black for urgent heating breakdowns or major project inquiries.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-neutral-900 group-hover:text-red-700 transition-colors">
                    <span>Direct Call Available</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Postal Location Summary */}
            <div className="p-7 bg-white border border-neutral-200 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800">
                  <MapPin className="w-6 h-6 text-neutral-600" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                    London Base
                  </span>
                  <h4 className="font-serif text-base font-bold text-neutral-950 mt-1">
                    17 Leeland Mansions
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Leeland Road, London, England, W13 9HE
                  </p>
                  <div className="mt-3.5 flex items-center gap-2 text-[11px] text-neutral-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Serving West London & Greater London postcodes</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Quote Form */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-sm p-7 sm:p-10 shadow-xs">
            
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-bold text-neutral-950">
                Request an HVAC Assessment
              </h3>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                Provide your details below to prepare an initial consultation. You can send it directly to WhatsApp with prefilled text or submit your inquiry online.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-red-50/40 border border-red-200 rounded-sm">
                <div className="w-12 h-12 bg-red-100 text-red-700 rounded-full flex items-center justify-center mx-auto mb-3.5">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-neutral-950">
                  Inquiry Received
                </h4>
                <p className="text-xs text-neutral-600 max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, {name || 'valued client'}. Your HVAC request has been recorded. For priority assistance, you can also ping Rachel directly on WhatsApp.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={BUSINESS_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-bold text-white bg-red-700 hover:bg-red-800 rounded-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setPostcode('');
                      setNotes('');
                    }}
                    className="px-5 py-3 text-xs uppercase tracking-wider font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDirectSubmit} className="space-y-4">
                
                {/* Service Selection */}
                <div>
                  <label htmlFor="service-select" className="block text-xs uppercase tracking-wider font-bold text-neutral-800 mb-1.5">
                    Select Required Service
                  </label>
                  <select
                    id="service-select"
                    value={selectedService}
                    onChange={(e) => onServiceChange(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                  >
                    <option value="">General Consultation / System Assessment</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Phone Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider font-bold text-neutral-800 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Julian Ward"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider font-bold text-neutral-800 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="e.g. 07575 362673"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                    />
                  </div>
                </div>

                {/* Postcode Input */}
                <div>
                  <label htmlFor="contact-postcode" className="block text-xs uppercase tracking-wider font-bold text-neutral-800 mb-1.5">
                    London Property Postcode or Area
                  </label>
                  <input
                    id="contact-postcode"
                    type="text"
                    placeholder="e.g. W13 9HE, Ealing, Kensington..."
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                  />
                </div>

                {/* Issue Notes */}
                <div>
                  <label htmlFor="contact-notes" className="block text-xs uppercase tracking-wider font-bold text-neutral-800 mb-1.5">
                    System Details or Requirements
                  </label>
                  <textarea
                    id="contact-notes"
                    rows={3}
                    placeholder="e.g. Split AC system in master bedroom not cooling; or requirement for commercial VRV preventative maintenance..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 resize-none"
                  />
                </div>

                {/* Dual Submit Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-red-700 hover:bg-red-800 active:bg-red-900 rounded-sm shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 border border-neutral-300 rounded-sm transition-colors cursor-pointer"
                  >
                    <span>Submit Online</span>
                  </button>
                </div>

                <p className="text-[11px] text-neutral-500 text-center pt-2">
                  Rachel Black · 17 Leeland Mansions Leeland Road, London W13 9HE · Phone & WhatsApp: +44 7575 362673
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
