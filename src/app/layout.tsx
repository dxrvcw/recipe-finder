import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { ReactNode } from 'react';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Recipe Finder',
  description: 'Created with <3',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
