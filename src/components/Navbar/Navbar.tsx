import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../ThemeToggle';
import LangSwitch from '../LangSwitch';

export default function Navbar() {
  const { t } = useTranslation('common');
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { id: 'about', key: 'nav.about' },
    { id: 'projects', key: 'nav.projects' },
    { id: 'experience', key: 'nav.experience' },
    { id: 'skills', key: 'nav.skills' },
    { id: 'contact', key: 'nav.contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Portfolio
            </button>
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {t(link.key)}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LangSwitch />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

