import { useTranslation } from 'react-i18next';
import AnimatedBackground from '../components/AnimatedBackground';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { contactInfo } from '../data/contact';

export default function UnderConstruction() {
  const { t } = useTranslation('common');

  return (
    <div className="relative min-h-screen flex flex-col">
      <AnimatedBackground />
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      <Container className="flex flex-1 items-center justify-center py-24">
        <div className="relative z-10 max-w-2xl text-center space-y-8 bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg px-10 py-12 rounded-3xl shadow-2xl border border-white/60 dark:border-gray-800">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            {t('construction.badge')}
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50">
              {t('construction.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              {t('construction.description')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="a"
              href={`mailto:${contactInfo.email}`}
              variant="primary"
              className="flex items-center justify-center gap-2"
            >
              <span className="inline-flex w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              {t('construction.contact')}
            </Button>
            <Button
              as="a"
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              {t('construction.linkedin')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}


