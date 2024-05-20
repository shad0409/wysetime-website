'use client'
import {getProjects} from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "../globals.css";
import Footer from '../Footer';
import Info from './components/Info';
import Vehicle from './components/Vehicle';
import TrafficDataAnalytic from './components/TrafficData';
import TrafficJunctionAnalytic from './components/TrafficJunction';
import PedestrianMonitoring from './components/Pedestrian';
import TrafficFlowImprovement from './components/TrafficFlow';
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
         <Vehicle />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <TrafficDataAnalytic />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <TrafficJunctionAnalytic />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <PedestrianMonitoring />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <TrafficFlowImprovement />
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