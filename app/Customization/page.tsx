'use client'
import { getProjects } from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "../globals.css";
import "./customization.css";
import Footer from '../Footer';
import Custom from './components/Info';
import Section from './components/Sector';
import Contact from './components/Contact';

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [customRef, customInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header>
      </header>
      <section>
        <div>
          <Custom />
        </div>
        <div>
          <Section />
        </div>
        <div>
          <Contact />
        </div>
      </section>
      <footer className=''>
        <Footer />
      </footer>
    </>
  );
}
