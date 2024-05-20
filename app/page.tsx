'use client'
import {getProjects} from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "./globals.css";

// Individual Components
import Footer from './Footer';
import HeroWyseTime2 from './HomeV2/Hero';
import Partners from './HomeV2/Partners';
import HowItWorks from './HomeV2/Info';
import Productivity from './HomeV2/Productivity';
import WyseTraffic from './HomeV2/WyseTraffic';
import WyseRetail from './HomeV2/WyseRetail';
import WyseSafety from './HomeV2/WyseSafety';
import DashboardSection from './HomeV2/Dashboard';
import IndustriesSection from './HomeV2/Industry';
import WhyChooseWyseTime from './HomeV2/WhyWyseTime';
import SecuritySection from './HomeV2/Security';
import Contact from './HomeV2/Contact';

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [quoteRef, quoteInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
        <HeroWyseTime2 />
      </header>
      <section>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
          <Partners />
        </div>
        <div className={` ${servicesInView ? 'fadeInUp' : ''}`} ref={servicesRef}>
          <HowItWorks />
        </div>
        <div className={` ${quoteInView ? 'fadeInUp' : ''}`} ref={quoteRef}>
          <Productivity/>
        </div>
        <div className={` ${partnersInView ? 'fadeInUp' : ''}`} ref={partnersRef}>
          <WyseTraffic />
        </div>
        <div className={` ${partnersInView ? 'fadeInUp' : ''}`} ref={partnersRef}>
          <WyseRetail />
        </div>
        <div className={` ${partnersInView ? 'fadeInUp' : ''}`} ref={partnersRef}>
          <WyseSafety />
        </div>
        <div className={` ${partnersInView ? 'fadeInUp' : ''}`} ref={partnersRef}>
          <DashboardSection />
        </div>
        <div className={` ${partnersInView ? 'fadeInUp' : ''}`} ref={partnersRef}>
          <IndustriesSection />
        </div>
        <div className={` ${partnersInView ? 'fadeInUp' : ''}`} ref={partnersRef}>
          <WhyChooseWyseTime />
        </div>
        <div className={` ${partnersInView ? 'fadeInUp' : ''}`} ref={partnersRef}>
          <SecuritySection />
        </div>
        <div className={` ${partnersInView ? 'fadeInUp' : ''}`} ref={partnersRef}>
          <Contact />
        </div>
      </section>
      <footer className=''>
        <Footer />
      </footer>
    </>
  );
}