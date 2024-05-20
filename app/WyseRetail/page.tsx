'use client'
import {getProjects} from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "../globals.css";
import Footer from '../Footer';
import Info from './components/Info';

import Contact from '../HomeV2/Contact';
import People from './components/PeopleCounting';
import HeatMapAnalytics from './components/HeatMap';
import StoreAnalytic from './components/Store';
import QueueManagement from './components/Queue';
import AgeGenderAnalytics from './components/AgeGender';

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
         <People />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <HeatMapAnalytics />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <StoreAnalytic />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <QueueManagement />
        </div>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
         <AgeGenderAnalytics />
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