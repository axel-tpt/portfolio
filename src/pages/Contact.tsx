import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';
import { contactInfo } from '../data/contact';

export default function Contact() {

  const contactLinks = [
    {
      name: 'LinkedIn',
      url: contactInfo.linkedin,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      name: 'GitHub',
      url: contactInfo.github,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.532 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      color: 'text-gray-900 dark:text-gray-100',
      bgColor: 'bg-gray-100 dark:bg-gray-700',
    },
    {
      name: 'Email',
      url: `mailto:${contactInfo.email}`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
    },
  ];

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <Container>
        <SectionTitle titleKey="contact.title" subtitleKey="contact.subtitle" />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name === 'Email' ? undefined : '_blank'}
                rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                className="block"
              >
                <AnimatedCard hover delay={index * 100} className="text-center h-full flex flex-col items-center justify-center p-8">
                  <div className={`${link.bgColor} ${link.color} p-4 rounded-full mb-4`}>
                    {link.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                    {link.url.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}
                  </p>
                </AnimatedCard>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
