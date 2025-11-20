import dataScience from '../assets/projects/data-science.jpeg';
import shopifakeDashboard from '../assets/projects/shopifake-dashboard.png';
import mcpLogo from '../assets/projects/mcp-logo.png';

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
    technologies: ['TensorFlow', 'Keras', 'Python', 'Pandas', 'Matplotlib'],
    link: '',
    image: dataScience,
  },
  {
    id: '2',
    title_fr: 'Shopifake',
    title_en: 'Shopifake',
    description_fr: 'Création et déploiement d\'une application web type Shopify.',
    description_en: 'Creation and deployment of a Shopify-like web application.',
    technologies: ['Spring Boot', 'Kubernetes', 'Docker', 'SonarQube'],
    link: 'http://shopifake.com',
    image: shopifakeDashboard,
  },
  {
    id: '3',
    title_fr: 'MCP',
    title_en: 'MCP',
    description_fr: 'Un service MCP en Scala capable d’analyser des fichiers localement pour détecter des signatures malveillantes et des comportements suspects grâce à un moteur heuristique léger.',
    description_en: 'An MCP service in Scala capable of analyzing files locally to detect malicious signatures and suspicious behaviors thanks to a lightweight heuristic engine.',
    technologies: ['Scala', 'MCP', 'Heuristic Engine'],
    link: '',
    image: mcpLogo,
  },
];

