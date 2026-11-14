import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://supersand.in'),
  title: 'Super Sand – Sai Super Sand Minerals Pvt. Ltd. | Premium Construction Aggregates & M-Sand',
  description: 'Super Sand (Sai Super Sand Minerals Pvt. Ltd.) was established in 2006. Nearly 20 years of business history delivering high-quality coarse aggregates (6mm, 10mm, 20mm, 40mm, 60mm), manufactured sand (M-Sand, P-Sand), and road bases in Telangana.',
  keywords: [
    'Super Sand',
    'Sai Super Sand Minerals Pvt Ltd',
    'Coarse Aggregates Hyderabad',
    'M-Sand Secunderabad',
    'Plastering Sand Telangana',
    'WMM GSB Road Base',
    '20mm aggregates',
    'IS 383:2016 aggregates'
  ],
  authors: [{ name: 'Sai Super Sand Minerals Pvt. Ltd.' }],
  openGraph: {
    title: 'Super Sand – Building a Stronger Tomorrow',
    description: 'High-Quality Construction Materials for a Sustainable Future. Trusted by Builders Since 2006.',
    url: 'https://supersand.in',
    siteName: 'Super Sand',
    images: [
      {
        url: '/images/hero/hero-desktop-1.png',
        width: 1200,
        height: 630,
        alt: 'Super Sand Crushing Plant'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/images/logos/favicon.png',
    apple: '/images/logos/logo-emblem.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#17231D] antialiased selection:bg-[#087A35] selection:text-white flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
