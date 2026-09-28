import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "@/components/CookieBanner/CookieBanner";
import PageTransition from "@/components/PageTransition/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://zekiubor.com'),
  title: {
    default: "Zeki Ubor | Human Architecture & Leadership Strategist",
    template: "%s | Zeki Ubor",
  },
  description: "Zeki Ubor is a Human Architecture Strategist and founder of The Becoming Institute. He helps founders, executives, and visionaries eliminate decision friction, rebuild identity architecture, and scale authentic leadership impact across Africa and globally.",
  keywords: [
    "Zeki Ubor",
    "Human Architecture",
    "Leadership Strategist",
    "The Becoming Institute",
    "Human Architecture Framework",
    "Executive Coach Nigeria",
    "Leadership Architecture",
    "Organizational Architecture",
    "Personal Development",
    "Mindset Coach Africa",
    "Identity Architecture",
    "Executive Coaching Lagos",
    "Founder Coaching",
    "Leadership Development Nigeria",
    "Human Potential",
    "Architecture Audit",
    "mindvestglobalresources",
    "Mindvest Global Resources",
    "Pan-African Leadership",
    "Becoming Institute Nigeria",
  ],
  authors: [{ name: "Zeki Ubor", url: "https://zekiubor.com" }],
  creator: "Zeki Ubor",
  publisher: "Zeki Ubor | The Becoming Institute",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '180x180' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/icon.png',
  },
  openGraph: {
    title: "Zeki Ubor | Human Architecture & Leadership Strategist",
    description: "Discover the architecture of your potential. Zeki Ubor helps founders and executives eliminate decision friction, rebuild identity, and scale authentic leadership impact — across Africa and globally.",
    type: "website",
    locale: "en_US",
    url: "https://zekiubor.com",
    siteName: "Zeki Ubor",
    images: [
      {
        url: '/ZekiUbor.webp',
        width: 1080,
        height: 1080,
        alt: 'Zeki Ubor — Human Architecture Strategist',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zeki Ubor | Human Architecture & Leadership",
    description: "Architectural strategy for founders, executives and visionaries. Rebuild identity. Scale under pressure. Engineer sustainable impact.",
    creator: '@zekiubor',
    images: ['/ZekiUbor.webp'],
  },
  alternates: {
    canonical: 'https://zekiubor.com',
  },
  category: 'Business & Leadership',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://zekiubor.com/#person",
        name: "Zeki Ubor",
        url: "https://zekiubor.com",
        image: "https://zekiubor.com/ZekiUbor.webp",
        jobTitle: "Human Architecture Strategist",
        description: "Zeki Ubor is a Human Architecture Strategist who helps founders, executives, and visionaries rebuild identity architecture, eliminate decision friction, and scale sustainable leadership impact.",
        sameAs: [
          "https://linkedin.com/in/zekiubor",
          "https://x.com/zekiubor",
          "https://instagram.com/zekiubor",
          "https://youtube.com/@zekiubor",
          "https://www.mindvestglobalresources.com.ng",
        ],
        affiliation: {
          "@type": "Organization",
          name: "The Becoming Institute",
          url: "https://zekiubor.com",
        },
        worksFor: {
          "@type": "Organization",
          name: "Mindvest Global Resources",
          url: "https://www.mindvestglobalresources.com.ng",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://zekiubor.com/#organization",
        name: "The Becoming Institute",
        url: "https://zekiubor.com",
        logo: "https://zekiubor.com/ZekiUbor.webp",
        founder: { "@id": "https://zekiubor.com/#person" },
        description: "A sanctuary for individual transformation and Human Architecture. Helping visionaries deconstruct limiting identities and build a self that commands lasting authority.",
        sameAs: [
          "https://www.mindvestglobalresources.com.ng",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+234-911-905-9859",
          contactType: "customer service",
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://zekiubor.com/#website",
        url: "https://zekiubor.com",
        name: "Zeki Ubor",
        publisher: { "@id": "https://zekiubor.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://zekiubor.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicon — headshot PNG (PNG is universally supported across all browsers) */}
        <link rel="icon" href="/icon.png" type="image/png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="512x512" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
      </head>
      <body className={`${inter.variable} ${cormorantGaramond.variable} antialiased overflow-x-hidden`} suppressHydrationWarning>
        <ThemeProvider>
          <PageTransition>
            {children}
          </PageTransition>
          <CookieBanner />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
