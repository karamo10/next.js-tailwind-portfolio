import Hero from './ui/hero';
import Clients from './ui/clients';
import Skills from './ui/skills';
import Projects from './ui/preview-projects';
import Resume from './ui/resume';
import Feedbacks from './ui/feedbacks';
import TrustedClients from './ui/trusted-clients';
import Contact from './ui/contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Clients />
      <Skills />
      <Projects />
      <Resume />
      <Feedbacks />
      <TrustedClients />
      <Contact />
    </main>
  );
}
