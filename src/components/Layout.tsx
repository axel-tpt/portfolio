import type { ReactNode } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AnimatedBackground from './AnimatedBackground';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Base gradient background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      
      <Navbar />
      <main className="flex-grow relative z-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}

