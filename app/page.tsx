'use client'
import {getProjects} from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "./globals.css";

// Individual Components
import Footer from './Footer';
import HeroWyseTime2 from './Home/Hero';
import Partners from './Home/Partners';
import HowItWorks from './Home/Info';
import Productivity from './Home/Productivity';
import WyseTraffic from './Home/WyseTraffic';
import WyseRetail from './Home/WyseRetail';
import WyseSafety from './Home/WyseSafety';
import DashboardSection from './Home/Dashboard';
import IndustriesSection from './Home/Industry';
import WhyChooseWyseTime from './Home/WhyWyseTime';
import SecuritySection from './Home/Security';
import Contact from './Home/Contact';
import { Analytics } from '@vercel/analytics/react';

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
      <header>
        <HeroWyseTime2 />
        <Analytics/>
      </header>
      <section>
        <div>
          <Partners />
        </div>
        <div>
          <HowItWorks />
        </div>
        <div>
          <Productivity />
        </div>
        <div>
          <WyseTraffic />
        </div>
        <div>
          <WyseRetail />
        </div>
        <div>
          <WyseSafety />
        </div>
        <div>
          <DashboardSection />
        </div>
        <div>
          <IndustriesSection />
        </div>
        <div>
          <WhyChooseWyseTime />
        </div>
        <div>
          <SecuritySection />
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
