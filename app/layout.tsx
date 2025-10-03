import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import FloatingChatbot from './components/FloatingChatbot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wize Wealth',
  description: 'AI-powered financial advisor chatbot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FloatingChatbot />
      </body>
    </html>
  );
}