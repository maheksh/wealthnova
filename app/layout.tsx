// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'WealthNova',
  description: 'AI Financial Advisors',
  // Next.js auto-adds viewport, but you can explicitly set it:
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable} style={{ fontFamily: 'var(--font-poppins)' }}>
        <nav className="navbar">
          <h1>WealthNova</h1>
        </nav>
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}