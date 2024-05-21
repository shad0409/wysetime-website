'use client'
import { getProjects } from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "../globals.css";
import Footer from '../Footer';
import Info from './components/Info';
import IndustriesSection from './components/Industry';
import Contact from './components/Contact';

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [industriesSectionRef, industriesSectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
      </header>
      <section>
        <div className={` ${infoInView ? 'fadeInUp' : ''}`} ref={infoRef}>
          <Info />
        </div>
        <div className={` ${industriesSectionInView ? 'fadeInUp' : ''}`} ref={industriesSectionRef}>
          <IndustriesSection />
        </div>
        <div className={` ${contactInView ? 'fadeInUp' : ''}`} ref={contactRef}>
          <Contact />
        </div>
      </section>
      <footer className=''>
        <Footer />
      </footer>
    </>
  );
}
