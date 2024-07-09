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
