'use client'
import {getProjects} from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "../globals.css";

// Individual Components
import SolutionHeader from './components/header';

import Footer from '../Footer';
import TrafficComponent from './components/trafficComponent';
import RetailComponent from './components/retailComponent';
import GuestComponent from './components/guestidComponent';
import FactoryComponent from './components/factoryComponent';
import AttendanceComponent from './components/attendanceComponent';


export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [quoteRef, quoteInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
        <SolutionHeader />
      </header>
      <section>
        <div>
          <TrafficComponent />
        </div>
        <div>
          <RetailComponent />
        </div>
        <div>
          <FactoryComponent />
        </div>
        <div>
          <GuestComponent />
        </div>
        <div>
          <AttendanceComponent />
        </div>
      </section>
      <footer className=''>
        <Footer />
      </footer>
    </>
  );
}