import type { Metadata } from 'next';
import '@/styles/globals.css';
import { mono, sans } from '@/fonts';

export const metadata: Metadata = {
  title: 'Tailwind Playground',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en-GB"
      className={`${mono.variable} ${sans.variable}`}
    >
      <body className="antialiased max-w-3xl my-8 mx-4 md:mx-auto">
        {children}
      </body>
    </html>
  );
}