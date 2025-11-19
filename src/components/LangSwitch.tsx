import { useLanguage } from '../hooks/useLanguage';

export default function LangSwitch() {
  const { currentLanguage, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'fr' ? 'en' : 'fr';
    changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 font-medium text-sm"
      aria-label="Switch language"
    >
      {currentLanguage === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}

