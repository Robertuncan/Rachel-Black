/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TrustReassurance } from './components/TrustReassurance';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { BUSINESS_INFO } from './data/hvacData';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToContact();
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-red-700 selection:text-white">
      {/* Editorial top strip */}
      <div className="bg-neutral-950 text-neutral-300 text-xs py-2 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="font-medium tracking-wide">
              {BUSINESS_INFO.tagline} · London W13
            </span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-[11px] text-neutral-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-red-500" />
              17 Leeland Mansions, W13 9HE
            </span>
            <span aria-hidden="true" className="text-neutral-700">|</span>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3 h-3 text-red-500" />
              WhatsApp Priority
            </a>
          </div>
        </div>
      </div>

      {/* Primary Top Bar (Navbar) */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. HERO */}
        <Hero
          onContactClick={scrollToContact}
          onExploreServices={scrollToServices}
        />

        {/* 2. SERVICES (All 12 Core Main Services) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3. ABOUT */}
        <AboutSection />

        {/* 4 & 5. TRUST, STANDARDS & REASSURANCE */}
        <TrustReassurance />

        {/* 6. LOCATION & SERVICE AREA */}
        <LocationSection />

        {/* 7. CONTACT & DIRECT ACTION */}
        <ContactSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />

        {/* 8. FAQ */}
        <FaqSection />
      </main>

      {/* 9. FOOTER */}
      <Footer />

      {/* Mobile Sticky Bar (<15% viewport height cap) */}
      <MobileActionBar />
    </div>
  );
}
