import { useTranslation } from 'react-i18next';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';
import { projects } from '../data/projects';

export default function Projects() {
  const { t, i18n } = useTranslation('common');
  const currentLang = i18n.language;

  return (
    <section id="projects" className="py-20 scroll-mt-16 bg-gray-50 dark:bg-gray-800/50">
      <Container>
        <SectionTitle titleKey="projects.title" subtitleKey="projects.subtitle" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <AnimatedCard key={project.id} hover delay={index * 100} className="flex flex-col">
            <img
              src={project.image}
              alt={currentLang === 'fr' ? project.title_fr : project.title_en}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-300">
              {currentLang === 'fr' ? project.title_fr : project.title_en}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
              {currentLang === 'fr' ? project.description_fr : project.description_en}
            </p>
            <div className="mb-4">
              <p className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                {t('projects.technologies')}:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              >
                {t('projects.viewProject')}
              </a>
            ) : (
              <button
                disabled
                className="inline-block text-center px-4 py-2 bg-gray-400 dark:bg-gray-600 text-white rounded-lg cursor-not-allowed opacity-60"
              >
                {t('projects.viewProject')}
              </button>
            )}
          </AnimatedCard>
        ))}
      </div>
      </Container>
    </section>
  );
}

