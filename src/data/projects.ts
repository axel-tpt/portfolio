export interface Project {
  id: string;
  title_fr: string;
  title_en: string;
  description_fr: string;
  description_en: string;
  technologies: string[];
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title_fr: 'Prédiction des niveaux d\'eau souterraine',
    title_en: 'AI-based Groundwater Prediction',
    description_fr: 'Modèle de machine learning (LSTM) formé sur les données de pluie et de niveaux piézométriques pour prédire les niveaux d\'eau souterraine.',
    description_en: 'Machine learning model (LSTM) trained on rainfall & piezometric data to forecast groundwater levels.',
    technologies: ['TensorFlow', 'Keras', 'Python'],
    link: '',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: '2',
    title_fr: 'Projet DevOps',
    title_en: 'DevOps Project',
    description_fr: 'Création et déploiement d\'une application web type Shopify.',
    description_en: 'Creation and deployment of a Shopify-like web application.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    link: 'http://shopifake.com',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: '3',
    title_fr: 'Project 3',
    title_en: 'Project 3',
    description_fr: 'Encore une description de projet en français.',
    description_en: 'Yet another project description in English.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: 'https://example.com',
    image: 'https://via.placeholder.com/400x300',
  },
];

