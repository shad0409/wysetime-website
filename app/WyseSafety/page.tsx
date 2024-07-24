'use client'
import { getProjects } from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "../globals.css";
import "./products.css";
import Footer from '../Footer';
import Info from './components/Info';
import PPEDetection from './components/PPE';
import ZoneControl from './components/Zone';
import BehavioralDetection from './components/Behavioral';
import OccupancyMetric from './components/Occupancy';
import SmokeAndFire from './components/SmokeFire';
import Contact from './components/Contact';

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ppeRef, ppeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [zoneRef, zoneInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [behavioralRef, behavioralInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [occupancyRef, occupancyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [smokeFireRef, smokeFireInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
      </header>
      <section>
        <div>
          <Info />
        </div>
        <div className={` ${ppeInView ? 'fadeInUp' : ''}`} ref={ppeRef}>
          <PPEDetection />
        </div>
        <div className={` ${zoneInView ? 'fadeInUp' : ''}`} ref={zoneRef}>
          <ZoneControl />
        </div>
        <div className={` ${behavioralInView ? 'fadeInUp' : ''}`} ref={behavioralRef}>
          <BehavioralDetection />
        </div>
        <div className={` ${occupancyInView ? 'fadeInUp' : ''}`} ref={occupancyRef}>
          <OccupancyMetric />
        </div>
        <div className={` ${smokeFireInView ? 'fadeInUp' : ''}`} ref={smokeFireRef}>
          <SmokeAndFire />
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
