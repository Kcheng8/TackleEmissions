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
import Investors from '@/components/sections/Investors';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Technology />
        <Market />
        <Research />
        <Team />
        <Impact />
        <Investors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
