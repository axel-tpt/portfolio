import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TailwindCSS', level: 85 },
  { name: 'Python', level: 75 },
  { name: 'PostgreSQL', level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-16 bg-gray-50 dark:bg-gray-800/50">
      <Container>
        <SectionTitle titleKey="skills.title" subtitleKey="skills.subtitle" />
      <div className="max-w-3xl mx-auto">
        <Card>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      </Container>
    </section>
  );
}

