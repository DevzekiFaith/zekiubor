import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Zeki Ubor | Human Architecture Strategist & Founder',
  description: 'Learn about Zeki Ubor — Human Architecture Strategist, founder of The Becoming Institute and Mindvest Global Resources. His work helps founders, executives and visionaries redesign their identity, mindset, and impact architecture from the inside out.',
  keywords: [
    'About Zeki Ubor',
    'Human Architecture Strategist',
    'The Becoming Institute founder',
    'Mindvest Global Resources',
    'Leadership coach Lagos Nigeria',
    'Identity architecture',
    'Executive development Africa',
    'Human potential',
    'BUILD framework',
    'Personal architecture',
  ],
  openGraph: {
    title: 'About Zeki Ubor | Human Architecture Strategist',
    description: 'Zeki Ubor — not a coach, but an architect of the human condition. Discover the philosophy, frameworks, and mission behind The Becoming Institute.',
    url: 'https://zekiubor.com/about',
    images: [{ url: '/ZekiUbor.webp', width: 1080, height: 1080, alt: 'Zeki Ubor' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Zeki Ubor | Human Architecture Strategist',
    description: 'Discover the philosophy and frameworks behind The Becoming Institute and Zeki Ubor\'s Human Architecture work.',
    images: ['/ZekiUbor.webp'],
  },
  alternates: { canonical: 'https://zekiubor.com/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
