export interface Experience {
  title: {
    fr: string;
    en: string;
  };
  company: string;
  position: {
    fr: string;
    en: string;
  };
  period: {
    fr: string;
    en: string;
  };
  description: {
    fr: string[];
    en: string[];
  };
  link?: string;
  linkLabel?: {
    fr: string;
    en: string;
  };
}

export const experiences: Experience[] = [
  {
    title: {
      fr: 'Stage en recherche à Ulster University : Développement d\'application & IA générative',
      en: 'Research Internship at Ulster University: Application Development & Generative AI',
    },
    company: 'Ulster University',
    position: {
      fr: 'Stagiaire en recherche',
      en: 'Research Intern',
    },
    period: {
      fr: 'Avril à Août 2025',
      en: 'April to August 2025',
    },
    description: {
      fr: [
        'Développement de jeux éducatifs en C# avec Unity avec intégration de l\'IA dans le processus de conception et de développement',
        'Mise en production sur les plateformes d\'application : Play Store, App Store et Amazon Store',
        'Travail en équipe dans un contexte international',
      ],
      en: [
        'Development of educational games in C# with Unity with AI integration in the design and development process',
        'Deployment on application platforms: Play Store, App Store and Amazon Store',
        'Teamwork in an international context',
      ],
    },
    link: 'https://play.google.com/store/apps/details?id=...', // Remplacez par votre lien Google Play
    linkLabel: {
      fr: 'Voir sur Google Play',
      en: 'View on Google Play',
    },
  },
  {
    title: {
      fr: 'Stage en recherche à Ulster University : Développement d\'application & IA générative',
      en: 'Research Internship at Ulster University: Application Development & Generative AI',
    },
    company: 'Ulster University',
    position: {
      fr: 'Stagiaire en recherche',
      en: 'Research Intern',
    },
    period: {
      fr: 'Avril à Août 2025',
      en: 'April to August 2025',
    },
    description: {
      fr: [
        'Développement de jeux éducatifs en C# avec Unity avec intégration de l\'IA dans le processus de conception et de développement',
        'Mise en production sur les plateformes d\'application : Play Store, App Store et Amazon Store',
        'Travail en équipe dans un contexte international',
      ],
      en: [
        'Development of educational games in C# with Unity with AI integration in the design and development process',
        'Deployment on application platforms: Play Store, App Store and Amazon Store',
        'Teamwork in an international context',
      ],
    },
    link: 'https://play.google.com/store/apps/details?id=...', // Remplacez par votre lien Google Play
    linkLabel: {
      fr: 'Voir sur Google Play',
      en: 'View on Google Play',
    },
  },
];

