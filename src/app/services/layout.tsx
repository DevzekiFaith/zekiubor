import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Pillars | Human Architecture Programs',
  description: 'Explore Zeki Ubor\'s three architectural pillars: The Becoming Institute (personal evolution), Leadership Architecture (executive authority), and Organisational Architecture (institutional design). Built for founders, executives, and organisations ready to scale with vision.',
  keywords: [
    'Human Architecture programs',
    'The Becoming Institute masterclass',
    'Leadership Architecture Nigeria',
    'Executive immersion program',
    'Organisational design Africa',
    'Founder coaching Nigeria',
    'Executive coaching Lagos',
    'Identity recalibration',
    'Leadership development programs',
    'Mindvest Global Resources',
    'Human Architecture Framework',
  ],
  openGraph: {
    title: 'Services & Pillars | Zeki Ubor Human Architecture',
    description: 'Three architectural pillars engineered for transformation: personal evolution, executive authority, and institutional design.',
    url: 'https://zekiubor.com/services',
    images: [{ url: '/ZekiUbor.webp', width: 1080, height: 1080, alt: 'Zeki Ubor' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Pillars | Zeki Ubor',
    description: 'Architectural programs for founders, executives, and organisations — engineered for lasting transformation.',
    images: ['/ZekiUbor.webp'],
  },
  alternates: { canonical: 'https://zekiubor.com/services' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
