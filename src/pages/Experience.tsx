import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-16">
      <Container>
        <SectionTitle titleKey="experience.title" subtitleKey="experience.subtitle" />
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Experience Item 1
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Company Name - Position</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">Date Range</p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Description of your experience here...
          </p>
        </Card>
      </div>
      </Container>
    </section>
  );
}

