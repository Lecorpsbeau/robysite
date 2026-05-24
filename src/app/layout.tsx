import type { Metadata } from 'next';
import { Archivo_Black, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GrainOverlay from '@/components/GrainOverlay';

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Roby Dalier — The Raw Dreamer\'s Diary',
  description: 'Allow yourself to dream (too) big. Personal Branding, Self-Improvement, Esthétique, et Communauté Chiefs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${archivoBlack.variable} ${plusJakartaSans.variable} ${jetBrainsMono.variable}`}>
      <body>
        <GrainOverlay />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
