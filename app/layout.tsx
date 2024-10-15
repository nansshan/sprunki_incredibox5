import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sprunki Incredibox - Interactive Music Mixing Game | Create Unique Beats',
  description: 'Experience Sprunki Incredibox, an interactive music game inspired by Incredibox. Mix beats, create unique rhythms, and enjoy a fun musical journey. Play now!',
  keywords: 'Sprunki Incredibox, music game, beat mixing, rhythm creation, interactive music, Incredibox inspired',
  openGraph: {
    title: 'Sprunki Incredibox - Interactive Music Mixing Game',
    description: 'Create and mix unique beats with Sprunki Incredibox. An interactive music game inspired by Incredibox.',
    url: 'https://sprunki-incredibox.online',
    siteName: 'Sprunki Incredibox',
    images: [
      {
        url: 'https://sprunki-incredibox.online/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sprunki Incredibox - Interactive Music Game',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprunki Incredibox - Interactive Music Mixing Game',
    description: 'Create and mix unique beats with Sprunki Incredibox. An interactive music game inspired by Incredibox.',
    images: ['https://sprunki-incredibox.online/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://sprunki-incredibox.online" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow w-full px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}