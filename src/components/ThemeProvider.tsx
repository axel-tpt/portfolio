import { useEffect } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme immediately on mount to prevent flash
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem('theme');
    let initialTheme: 'light' | 'dark';

    if (stored === 'light' || stored === 'dark') {
      initialTheme = stored;
    } else {
      initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    if (initialTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  return <>{children}</>;
}
