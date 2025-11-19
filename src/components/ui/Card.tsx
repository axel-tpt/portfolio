import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles =
    'relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover-card' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

