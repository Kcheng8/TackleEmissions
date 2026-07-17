import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Technology from '@/components/sections/Technology';
import Market from '@/components/sections/Market';
import Research from '@/components/sections/Research';
import Team from '@/components/sections/Team';
import Impact from '@/components/sections/Impact';
import Contact from '@/components/sections/Contact';
import SponsorRibbon from '@/components/ui/SponsorRibbon';
import { sponsors } from '@/lib/data';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <span id="top" />
        <Hero />
        <SponsorRibbon sponsors={sponsors} label="Supported by" />
        <Problem />
        <Solution />
        <Technology />
        <Market />
        <Research />
        <Team />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
