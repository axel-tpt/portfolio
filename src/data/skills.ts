export interface Skill {
  name: string;
}

export interface SkillsData {
  languages: Skill[];
  toolsFrameworks: Skill[];
  softSkills: Skill[];
}

export const skillsData: SkillsData = {
  languages: [
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'Python' },
    { name: 'Java' },
    { name: 'C#' },
  ],
  toolsFrameworks: [
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'TailwindCSS' },
    { name: 'PostgreSQL' },
    { name: 'Git' },
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'Spring Boot' },
  ],
  softSkills: [
    { name: 'Communication' },
    { name: 'Teamwork' },
    { name: 'Problem Solving' },
    { name: 'Adaptability' },
    { name: 'Creativity' },
  ],
};

