import ThemeProvider from './components/ThemeProvider';
import Layout from './components/Layout';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './i18n';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <AboutMe />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
