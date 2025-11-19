import { useTranslation } from 'react-i18next';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';
import { experiences } from '../data/experience';

export default function Experience() {
  const { i18n } = useTranslation('common');
  const currentLang = i18n.language;

  return (
    <section id="experience" className="py-20 scroll-mt-16">
      <Container>
        <SectionTitle titleKey="experience.title" subtitleKey="experience.subtitle" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <AnimatedCard key={index} delay={index * 150} hover className="h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 hover-accent-text">
                    {currentLang === 'fr' ? exp.title.fr : exp.title.en}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-1">
                    {exp.company} - {currentLang === 'fr' ? exp.position.fr : exp.position.en}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {currentLang === 'fr' ? exp.period.fr : exp.period.en}
                  </p>
                </div>
                
                <ul className="mt-4 space-y-2 flex-grow">
                  {(currentLang === 'fr' ? exp.description.fr : exp.description.en).map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300 text-sm">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {exp.link && (
                  <div className="mt-6">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors text-sm"
                    >
                      {currentLang === 'fr' ? exp.linkLabel?.fr : exp.linkLabel?.en}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </AnimatedCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
