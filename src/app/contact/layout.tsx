import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Inquiry | Work with Zeki Ubor',
  description: 'Ready to redesign your internal architecture? Reach out to Zeki Ubor and The Becoming Institute for private executive diagnostics, leadership immersions, and organisational transformation partnerships. Lagos, Nigeria — serving globally.',
  keywords: [
    'Contact Zeki Ubor',
    'Book executive coaching',
    'Inquiry Human Architecture',
    'The Becoming Institute contact',
    'Leadership coaching inquiry Nigeria',
    'Private executive diagnostic',
    'Work with Zeki Ubor',
    'Mindvest Global Resources contact',
    'Executive transformation Lagos',
  ],
  openGraph: {
    title: 'Contact Zeki Ubor | Private Inquiry',
    description: 'Begin your architectural transformation. Inquire for a private executive diagnostic, leadership immersion, or institutional design partnership.',
    url: 'https://zekiubor.com/contact',
    images: [{ url: '/ZekiUbor.webp', width: 1080, height: 1080, alt: 'Zeki Ubor' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Zeki Ubor',
    description: 'Begin your architectural transformation — private diagnostic, leadership immersion, or institutional partnership.',
    images: ['/ZekiUbor.webp'],
  },
  alternates: { canonical: 'https://zekiubor.com/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
