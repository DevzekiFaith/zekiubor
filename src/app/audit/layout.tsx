import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architecture Audit | Diagnose Your Human Architecture',
  description: 'Take the free Architecture Audit — a diagnostic tool developed by Zeki Ubor to reveal the invisible fractures in your identity, mindset, systems, relationships, and impact. Discover where your internal architecture needs reconstruction.',
  keywords: [
    'Architecture Audit',
    'Human Architecture diagnostic',
    'Free leadership audit',
    'Identity audit tool',
    'Mindset assessment Nigeria',
    'Personal architecture assessment',
    'Human potential diagnostic',
    'The Becoming Institute audit',
    'Zeki Ubor audit',
    'Leadership assessment Africa',
  ],
  openGraph: {
    title: 'Architecture Audit | Zeki Ubor',
    description: 'Discover the invisible fractures in your identity, mindset, systems, and impact. Take the free Architecture Audit now.',
    url: 'https://zekiubor.com/audit',
    images: [{ url: '/ZekiUbor.webp', width: 1080, height: 1080, alt: 'Zeki Ubor' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architecture Audit | Zeki Ubor',
    description: 'Diagnose the invisible fractures in your human architecture. Take the free audit now.',
    images: ['/ZekiUbor.webp'],
  },
  alternates: { canonical: 'https://zekiubor.com/audit' },
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
