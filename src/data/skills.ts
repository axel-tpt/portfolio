export interface Skill {
  name: string;
  level: number;
}

export interface SkillsData {
  languages: Skill[];
  toolsFrameworks: Skill[];
  softSkills: Skill[];
}

export const skillsData: SkillsData = {
  languages: [
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Java', level: 75 },
  ],
  toolsFrameworks: [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'TailwindCSS', level: 85 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Git', level: 90 },
  ],
  softSkills: [
    { name: 'Communication', level: 90 },
    { name: 'Teamwork', level: 85 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Adaptability', level: 85 },
  ],
};

