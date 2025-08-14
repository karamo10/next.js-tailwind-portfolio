import Hero from './ui/hero/hero';
import Clients from './ui/client/clients';
import Skills from './ui/skill/skills';
import Projects from './ui/project/preview-projects';
import Resume from './ui/resume/resume';
import Feedbacks from './ui/feedback/feedbacks';
import TrustedClients from './ui/client/trusted-clients';
import Contact from './ui/contact/contact';
import { Suspense } from 'react';
import { ClientSkeleton, SkillSkeleton, ProjectsSkeleton } from './ui/skeleton/skeletons';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<ClientSkeleton />}>
        <Clients />
      </Suspense>
      <Suspense fallback={<SkillSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <Resume />
      <Feedbacks />
      <Suspense fallback={<ClientSkeleton/>}>
        <TrustedClients />
      </Suspense>
      <Contact />
    </main>
  );
}
