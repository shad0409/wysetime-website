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
  const [productivityRef, productivityInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [wyseTrafficRef, wyseTrafficInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [wyseRetailRef, wyseRetailInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [wyseSafetyRef, wyseSafetyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [dashboardSectionRef, dashboardSectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [industriesSectionRef, industriesSectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyChooseWyseTimeRef, whyChooseWyseTimeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [securitySectionRef, securitySectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
        <div className={` ${productivityInView ? 'fadeInUp' : ''}`} ref={productivityRef}>
          <Productivity />
        </div>
        <div className={` ${wyseTrafficInView ? 'fadeInUp' : ''}`} ref={wyseTrafficRef}>
          <WyseTraffic />
        </div>
        <div className={` ${wyseRetailInView ? 'fadeInUp' : ''}`} ref={wyseRetailRef}>
          <WyseRetail />
        </div>
        <div className={` ${wyseSafetyInView ? 'fadeInUp' : ''}`} ref={wyseSafetyRef}>
          <WyseSafety />
        </div>
        <div className={` ${dashboardSectionInView ? 'fadeInUp' : ''}`} ref={dashboardSectionRef}>
          <DashboardSection />
        </div>
        <div className={` ${industriesSectionInView ? 'fadeInUp' : ''}`} ref={industriesSectionRef}>
          <IndustriesSection />
        </div>
        <div className={` ${whyChooseWyseTimeInView ? 'fadeInUp' : ''}`} ref={whyChooseWyseTimeRef}>
          <WhyChooseWyseTime />
        </div>
        <div className={` ${securitySectionInView ? 'fadeInUp' : ''}`} ref={securitySectionRef}>
          <SecuritySection />
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
