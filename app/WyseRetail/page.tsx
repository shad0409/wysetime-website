'use client'
import { getProjects } from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "../globals.css";
import "./products.css";
import Footer from '../Footer';
import Info from './components/Info';
import People from './components/PeopleCounting';
import HeatMapAnalytics from './components/HeatMap';
import StoreAnalytic from './components/Store';
import QueueManagement from './components/Queue';
import AgeGenderAnalytics from './components/AgeGender';
import Contact from './components/Contact';

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [peopleRef, peopleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [heatMapRef, heatMapInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storeRef, storeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [queueRef, queueInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ageGenderRef, ageGenderInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
      </header>
      <section>
        <div>
          <Info />
        </div>
        <div className={` ${peopleInView ? 'fadeInUp' : ''}`} ref={peopleRef}>
          <People />
        </div>
        <div className={` ${heatMapInView ? 'fadeInUp' : ''}`} ref={heatMapRef}>
          <HeatMapAnalytics />
        </div>
        <div className={` ${storeInView ? 'fadeInUp' : ''}`} ref={storeRef}>
          <StoreAnalytic />
        </div>
        <div className={` ${queueInView ? 'fadeInUp' : ''}`} ref={queueRef}>
          <QueueManagement />
        </div>
        <div className={` ${ageGenderInView ? 'fadeInUp' : ''}`} ref={ageGenderRef}>
          <AgeGenderAnalytics />
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
