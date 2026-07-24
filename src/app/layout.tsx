import type { Metadata } from 'next';
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Loader from '@/components/Loader';
import { ThemeProvider } from '@/components/ThemeProvider';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700', '900'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://odconstruction.in'),
  title: {
    default: 'OD Construction | Civil Contractor & Construction Company in Mumbai',
    template: '%s | OD Construction',
  },
  description:
    'OD Construction is a premium civil contractor and construction company in Mumbai, established in 2008. 15+ years experience, 80+ completed projects, 300+ skilled workforce. Specialists in residential, commercial, government and industrial construction, RCC structures, road works and sewer line projects across Mumbai.',
  keywords: [
    'Civil Contractor Mumbai',
    'Construction Company Mumbai',
    'Building Contractor Mumbai',
    'RCC Contractor Mumbai',
    'Commercial Construction Mumbai',
    'Government Civil Contractor Mumbai',
    'Residential Construction Mumbai',
    'Infrastructure Company Mumbai',
    'OD Construction',
    'Turnkey Construction Mumbai',
  ],
  authors: [{ name: 'OD Construction' }],
  openGraph: {
    title: 'OD Construction | Civil Contractor & Construction Company in Mumbai',
    description:
      'Premium civil construction since 2008 \u2014 Residential, Commercial, Government & Industrial Projects, RCC Structures, Road Works and Turnkey Solutions across Mumbai.',
    url: 'https://odconstruction.in',
    siteName: 'OD Construction',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} font-sans`}>
        <ThemeProvider>
          <Loader />
          <SmoothScrollProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
          <WhatsAppButton />
          <CallButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
