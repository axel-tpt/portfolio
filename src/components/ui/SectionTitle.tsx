import { useTranslation } from 'react-i18next';

interface SectionTitleProps {
  titleKey: string;
  subtitleKey: string;
  className?: string;
}

export default function SectionTitle({ titleKey, subtitleKey, className = '' }: SectionTitleProps) {
  const { t } = useTranslation('common');

  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {t(titleKey)}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        {t(subtitleKey)}
      </p>
    </div>
  );
}

