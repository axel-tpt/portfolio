import type { ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Card from './Card';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function AnimatedCard({ children, className = '', hover = false, delay = 0 }: AnimatedCardProps) {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card hover={hover} className={className}>
        {children}
      </Card>
    </div>
  );
}

