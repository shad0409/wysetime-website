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
