export interface ServiceItem {
  id: string;
  name: string;
  category: 'ac' | 'heating' | 'air-ventilation' | 'commercial-emergency';
  shortDescription: string;
  details: string[];
}

export const BUSINESS_INFO = {
  name: "Rachel Black",
  trade: "HVAC Contractor",
  tagline: "Reliable HVAC Solutions for Total Comfort",
  address: "17 Leeland Mansions Leeland Road, London, England, W13 9HE",
  displayAddress: "17 Leeland Mansions, Leeland Road, London, W13 9HE",
  postcode: "W13 9HE",
  area: "London (West London & Greater London)",
  phoneDisplay: "+44 7575 362673",
  phoneRaw: "447575362673",
  phoneHref: "tel:+447575362673",
  whatsappHref: "https://wa.me/447575362673?text=Hello%20Rachel%2C%20I%20would%20like%20to%20enquire%20about%20HVAC%20services",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=17+Leeland+Mansions+Leeland+Road+London+W13+9HE",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ac-installation",
    name: "AC Installation",
    category: "ac",
    shortDescription: "Architectural and discreet split, multi-split, and ducted climate installations engineered for quiet performance in premium London residences and offices.",
    details: [
      "Bespoke thermal heat-load assessment",
      "Concealed architectural pipework and silent mounts",
      "High-efficiency inverter systems commissioning"
    ]
  },
  {
    id: "ac-repair-maintenance",
    name: "AC Repair & Maintenance",
    category: "ac",
    shortDescription: "Comprehensive diagnostic servicing, precision refrigerant management, and scheduled preventative care to ensure peak efficiency.",
    details: [
      "Precision leak testing and pressure calibration",
      "Anti-bacterial coil treatment and deep sanitisation",
      "Electronic component and sensor verification"
    ]
  },
  {
    id: "heating-system-installation",
    name: "Heating System Installation",
    category: "heating",
    shortDescription: "Tailored heating unit installations, heat pump integration, and high-performance climate units designed for dependable winter warmth.",
    details: [
      "Properly sized heating capacity calculations",
      "Energy-efficient heat pump & boiler pairing",
      "Flawless integration with existing pipework"
    ]
  },
  {
    id: "heating-system-repair",
    name: "Heating System Repair",
    category: "heating",
    shortDescription: "Targeted troubleshooting and rapid mechanical repairs to restore dependable warmth and heating circulation during cold snaps.",
    details: [
      "Direct diagnostic assessment of heating loops",
      "Circulation valve, actuator, and pump repair",
      "Electronic ignition and heat exchange safety checks"
    ]
  },
  {
    id: "hvac-system-replacement",
    name: "HVAC System Replacement",
    category: "heating",
    shortDescription: "Full lifecycle modernisations replacing obsolete, noisy, or inefficient HVAC equipment with silent, low-emission modern systems.",
    details: [
      "Careful decommissioning and safe reclamation",
      "Modern high-SEER efficiency system installation",
      "Complete acoustic and structural isolation"
    ]
  },
  {
    id: "ductwork-installation-repair",
    name: "Ductwork Installation & Repair",
    category: "air-ventilation",
    shortDescription: "Engineered duct routing, acoustic lining, and airtight duct sealing to distribute conditioned air silently without pressure drop.",
    details: [
      "Custom airflow balancing and damper configuration",
      "Thermal insulation to eliminate condensation loss",
      "Leakage rectification and joint re-sealing"
    ]
  },
  {
    id: "air-conditioning-maintenance",
    name: "Air Conditioning Maintenance",
    category: "ac",
    shortDescription: "Dedicated seasonal preventative maintenance ensuring filters, heat exchangers, and drainage lines operate without failure.",
    details: [
      "Deep ultrasonic filter and coil washing",
      "Condensate drain line clearing & pump testing",
      "Refrigerant delta-T performance measurement"
    ]
  },
  {
    id: "indoor-air-quality-solutions",
    name: "Indoor Air Quality Solutions",
    category: "air-ventilation",
    shortDescription: "Hospital-grade HEPA filtration, advanced UV-C purification, and continuous fresh air circulation for healthy, dust-free indoor spaces.",
    details: [
      "Particulate and VOC air testing",
      "High-efficiency media filtration upgrades",
      "Humidity balancing and allergen suppression"
    ]
  },
  {
    id: "thermostat-installation",
    name: "Thermostat Installation",
    category: "air-ventilation",
    shortDescription: "Precision digital, multi-zone, and smart climate controls installed cleanly on wall surfaces for effortless temperature management.",
    details: [
      "Multi-zone sensor placement and integration",
      "Clean architectural flush wiring",
      "Personalized scheduling and intuitive setup"
    ]
  },
  {
    id: "ventilation-services",
    name: "Ventilation Services",
    category: "air-ventilation",
    shortDescription: "Mechanical ventilation with heat recovery (MVHR) and positive input ventilation designed to eradicate damp, condensation, and stale air.",
    details: [
      "Continuous fresh air exchange engineering",
      "Heat recovery ventilation optimization",
      "Acoustic attenuator fitting for whisper-quiet airflow"
    ]
  },
  {
    id: "commercial-hvac-services",
    name: "Commercial HVAC Services",
    category: "commercial-emergency",
    shortDescription: "Tailored HVAC services for retail boutiques, corporate offices, executive suites, hospitality venues, and private clinics.",
    details: [
      "Tailored servicing out of business hours",
      "Multi-tenant VRV / VRF system maintenance",
      "Strict compliance documentation & logbook upkeep"
    ]
  },
  {
    id: "emergency-hvac-repair",
    name: "Emergency HVAC Repair",
    category: "commercial-emergency",
    shortDescription: "Priority rapid-response troubleshooting for sudden climate failures, severe leaks, or critical temperature drops in London properties.",
    details: [
      "Direct line to Rachel Black for rapid triage",
      "On-site diagnostic tooling ready for dispatch",
      "Expedited parts sourcing and immediate stabilization"
    ]
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'ac', label: 'Air Conditioning' },
  { id: 'heating', label: 'Heating & Replacement' },
  { id: 'air-ventilation', label: 'Ventilation & Air Quality' },
  { id: 'commercial-emergency', label: 'Commercial & Emergency' },
] as const;

export const REASSURANCE_POINTS = [
  {
    title: "Direct Contractor Accountability",
    description: "You liaise directly with Rachel Black. No anonymous call handlers, third-party subcontracts, or administrative delays."
  },
  {
    title: "Transparent & Detailed Pricing",
    description: "Every assessment includes clear itemised specifications before work begins, with zero unannounced fees."
  },
  {
    title: "Meticulous On-Site Standards",
    description: "Floor protection, dust extraction, clean tooling, and architectural respect for fine London interiors and heritage properties."
  },
  {
    title: "All-Season Climate Mastery",
    description: "Complete mastery spanning heating, cooling, acoustic ducting, and air purification tailored specifically for London buildings."
  }
];

export const FAQS = [
  {
    question: "How do I schedule an HVAC consultation or emergency repair?",
    answer: "The most direct route is messaging via WhatsApp or calling +44 7575 362673. Share your London location, unit details, and requirements to arrange an assessment."
  },
  {
    question: "Do you service both residential properties and commercial premises?",
    answer: "Yes. Services range from private luxury apartments, townhouses, and extensions to boutique commercial venues, offices, and clinics across London."
  },
  {
    question: "What geographic areas do you cover?",
    answer: "Based at 17 Leeland Mansions, Leeland Road, London W13 9HE in West London, providing coverage across West London boroughs and wider Greater London."
  },
  {
    question: "How should I prepare for an emergency repair enquiry?",
    answer: "Sharing a brief photo or video of the indoor or outdoor unit and model plate on WhatsApp (+44 7575 362673) allows an immediate preliminary diagnostic before arrival."
  }
];
