import { useTranslation } from 'react-i18next';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

export default function AboutMe() {
  const { t } = useTranslation('common');

  return (
    <section id="about" className="py-20 scroll-mt-16">
      <Container>
        <SectionTitle titleKey="about.title" subtitleKey="about.subtitle" />
      <div className="max-w-3xl mx-auto">
        <Card>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('about.description')}
          </p>
        </Card>
      </div>
      </Container>
    </section>
  );
}

