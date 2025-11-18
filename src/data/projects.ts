export interface Project {
  id: string;
  title: string;
  description_fr: string;
  description_en: string;
  technologies: string[];
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project 1',
    description_fr: 'Une description détaillée du projet en français.',
    description_en: 'A detailed project description in English.',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    link: 'https://example.com',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: '2',
    title: 'Project 2',
    description_fr: 'Une autre description de projet en français.',
    description_en: 'Another project description in English.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    link: 'https://example.com',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: '3',
    title: 'Project 3',
    description_fr: 'Encore une description de projet en français.',
    description_en: 'Yet another project description in English.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: 'https://example.com',
    image: 'https://via.placeholder.com/400x300',
  },
];

