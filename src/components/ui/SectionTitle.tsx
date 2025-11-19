import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SectionTitleProps {
  titleKey: string;
  subtitleKey: string;
  className?: string;
}

export default function SectionTitle({ titleKey, subtitleKey, className = '' }: SectionTitleProps) {
  const { t } = useTranslation('common');
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={elementRef}
      className={`text-center mb-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {t(titleKey)}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        {t(subtitleKey)}
      </p>
    </div>
  );
}

