import Image from 'next/image';
import Link from 'next/link';
import Hero from './ui/hero';
import Clients from './ui/clients';
import Skills from './ui/skills';
import Projects from './ui/projects';
import Resume from './ui/resume';
import Feedbacks from './ui/feedbacks';
import TrustedClients from './ui/trusted-clients';
import Contact from './ui/contact';
import Footer from './ui/footer';

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
      <Footer />
    </main>
  );
}
