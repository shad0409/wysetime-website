'use client'
import {getProjects} from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "../globals.css";
import Footer from '../Footer';
import Info from './components/Info';
import PPEDetection from './components/PPE';
import ZoneControl from './components/Zone';
import BehavioralDetection from './components/Behavioral';
import OccupancyMetric from './components/Occupancy';
import SmokeAndFire from './components/SmokeFire';
import Contact from '../HomeV2/Contact';

// Individual Components

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [quoteRef, quoteInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
      </header>
      <section>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <Info />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <PPEDetection />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <ZoneControl />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <BehavioralDetection />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <OccupancyMetric />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <SmokeAndFire />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <Contact />
        </div>
      </section>
      <footer className=''>
        <Footer />
      </footer>
    </>
  );
}