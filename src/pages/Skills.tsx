import { useTranslation } from 'react-i18next';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';
import { skillsData } from '../data/skills';

interface SkillCategoryProps {
  title: string;
  skills: Array<{ name: string; level: number }>;
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 hover-accent-text">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-lg transition-transform duration-200 hover:-translate-y-0.5"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation('common');

  return (
    <section id="skills" className="py-20 scroll-mt-16 bg-gray-50 dark:bg-gray-800/50">
      <Container>
        <SectionTitle titleKey="skills.title" subtitleKey="skills.subtitle" />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AnimatedCard delay={0} hover>
              <SkillCategory
                title={t('skills.categories.languages')}
                skills={skillsData.languages}
              />
            </AnimatedCard>
            <AnimatedCard delay={150} hover>
              <SkillCategory
                title={t('skills.categories.toolsFrameworks')}
                skills={skillsData.toolsFrameworks}
              />
            </AnimatedCard>
            <AnimatedCard delay={300} hover>
              <SkillCategory
                title={t('skills.categories.softSkills')}
                skills={skillsData.softSkills}
              />
            </AnimatedCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
