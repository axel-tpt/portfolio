import { useTranslation } from 'react-i18next';
import Container from '../components/ui/Container';
import AnimatedCard from '../components/ui/AnimatedCard';
import Button from '../components/ui/Button';
import { aboutData } from '../data/about';
import { contactInfo } from '../data/contact';

export default function AboutMe() {
  const { t, i18n } = useTranslation('common');
  const currentLang = i18n.language;

  return (
    <section id="about" className="py-20 scroll-mt-16">
      <Container>
        <div className="max-w-6xl mx-auto">
          <AnimatedCard>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Text content */}
              <div className="text-left">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold rounded-full">
                    {currentLang === 'fr' ? aboutData.status.fr : aboutData.status.en}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  {t('about.greeting')} {aboutData.name}
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
                  {currentLang === 'fr' ? aboutData.title.fr : aboutData.title.en}
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  {currentLang === 'fr' ? aboutData.description.fr : aboutData.description.en}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    as="a"
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    {t('about.connectLinkedIn')}
                  </Button>
                  
                  <Button
                    as="a"
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.532 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    {t('about.viewGitHub')}
                  </Button>
                </div>
              </div>

              {/* Right side - Image placeholder */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                  {/* Remplacez cette div par votre image : <img src="/votre-image.jpg" alt={aboutData.name} className="w-full h-full object-cover" /> */}
                  <div className="text-gray-400 dark:text-gray-500 text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Image à ajouter</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </Container>
    </section>
  );
}
