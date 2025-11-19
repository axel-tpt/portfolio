// Types de statuts disponibles
export type StatusType = 'available-for-internship' | 'open-to-work' | 'currently-working';

// Définitions des statuts avec traductions
export const statusOptions = {
  'available-for-internship': {
    fr: 'Disponible pour un stage',
    en: 'Available for Internship',
  },
  'open-to-work': {
    fr: 'Ouvert au travail',
    en: 'Open to Work',
  },
  'currently-working': {
    fr: 'Actuellement en poste',
    en: 'Currently Working',
  },
} as const;

// Mettez à jour cette valeur pour changer votre statut
// Options: 'available-for-internship' | 'open-to-work' | 'currently-working'
export const currentStatus: StatusType = 'available-for-internship';

// Mettez à jour ces informations avec vos propres données
export const aboutData = {
  status: statusOptions[currentStatus],
  name: 'Axel TREPOUT',
  title: {
    fr: 'Étudiant en 5ème année d\'ingénierie spécialisé en Génie Logiciel & Management',
    en: '5th Year Engineering Student specializing in Software Engineering & Management',
  },
  description: {
    fr: 'Passionné par l\'intégration IA, le développement full-stack et la cybersécurité.',
    en: 'Passionate about AI integration, full-stack development and cybersecurity.',
  },
};
