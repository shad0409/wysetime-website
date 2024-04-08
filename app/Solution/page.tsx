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
  const [trafficRef, trafficInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [retailRef, retailInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [factoryRef, factoryInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [guestRef, guestInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [attendanceRef, attendanceInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={` py-10 ${heroInView ? 'fadeInUp' : ''}`}>
        <SolutionHeader />
      </header>
      <section>
        <div className={` py-10 ${trafficInView ? 'fadeInUp' : ''}`} ref={trafficRef}>
          <TrafficComponent />
        </div>
        <div className={` ${retailInView ? 'fadeInUp' : ''}`} ref={retailRef}>
          <RetailComponent />
        </div>
        <div className={` py-10 ${factoryInView ? 'fadeInUp' : ''}`} ref={factoryRef}>
          <FactoryComponent />
        </div>
        <div className={` ${guestInView ? 'fadeInUp' : ''}`} ref={guestRef}>
          <GuestComponent />
        </div>
        <div className={` py-10 ${attendanceInView ? 'fadeInUp' : ''}`} ref={attendanceRef}>
          <AttendanceComponent />
        </div>
      </section>
      <footer className=''>
        <Footer />
      </footer>
    </>
  );
}