import type { Metadata } from 'next';
import './globals.css';
import FloatingChatbot from './components/FloatingChatbot';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'Wize Wealth',
  description: 'A financial advice chatbot',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="app-container">
          <Navbar />
          {children}
          <FloatingChatbot />
        </div>
      </body>
    </html>
  );
}