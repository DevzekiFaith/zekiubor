import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

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
};

export const metadata: Metadata = {
  title: "Zeki Ubor | Human Architecture & Leadership",
  description: "Discover the architecture of your potential. Zeki Ubor provides insights on identity, mindset, and leadership through The Becoming Institute and specialized architecture programs.",
  keywords: "Zeki Ubor, Human Architecture, Leadership Architecture, Organizational Architecture, The Becoming Institute, Personal Development, Mindset coach",
  authors: [{ name: "Zeki Ubor" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/icon.webp', type: 'image/webp' },
    ],
    apple: [
      { url: '/icon.webp', type: 'image/webp' },
    ],
    shortcut: '/icon.webp',
  },
  openGraph: {
    title: "Zeki Ubor | Human Architecture & Leadership",
    description: "Discover the architecture of your potential. Access the Architecture Audit and join a global community of leaders.",
    type: "website",
    locale: "en_US",
    url: "https://zekiubor.com",
    siteName: "Zeki Ubor",
    images: [{ url: '/ZekiUbor.webp', width: 1080, height: 1080, alt: 'Zeki Ubor' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Person", "Organization"],
    name: "Zeki Ubor",
    url: "https://zekiubor.com",
    jobTitle: "Human Architecture Strategist",
    brand: "The Becoming Institute"
  };

  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${cormorantGaramond.variable} antialiased overflow-x-hidden`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
