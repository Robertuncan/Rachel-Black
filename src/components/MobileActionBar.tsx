import React from 'react';
import { BUSINESS_INFO } from '../data/hvacData';
import { Phone, MessageCircle } from 'lucide-react';

export const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200/90 px-3.5 py-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={BUSINESS_INFO.phoneHref}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-neutral-100 active:bg-neutral-200 text-neutral-900 text-xs uppercase tracking-wider font-bold transition-colors border border-neutral-200"
        >
          <Phone className="w-4 h-4 text-red-700" />
          <span>Call Now</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-red-700 active:bg-red-800 text-white text-xs uppercase tracking-wider font-bold shadow-xs transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
