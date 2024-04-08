'use client'
import {getProjects} from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "../globals.css";

// Individual Components
import Footer from '../Footer';

import HeroCase from './components/Hero';
import RetailStore from './components/RetailStore';
import ShoppingMall from './components/ShoppingMall';
import Airport from './components/Airport';
import Events from './components/Events';
import ThemePark from './components/Park';

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [retailRef, retailInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [mallRef, mallInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [airportRef, airportInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [eventsRef, eventsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [parkRef, parkInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
        <HeroCase />
      </header>
      <section>
        <div className='py-20'>
          <div className={` ${retailInView ? 'fadeInUp' : ''}`} ref={retailRef}>
            <RetailStore/>
          </div>
          <div className={` ${mallInView ? 'fadeInUp' : ''}`} ref={mallRef}>
            <ShoppingMall/>
          </div>
          <div className={` ${airportInView ? 'fadeInUp' : ''}`} ref={airportRef}>
            <Airport/>
          </div>
          <div className={` ${eventsInView ? 'fadeInUp' : ''}`} ref={eventsRef}>
            <Events/>
          </div>
          <div className={` ${parkInView ? 'fadeInUp' : ''}`} ref={parkRef}>
            <ThemePark/>
          </div>
        </div>
      </section>
      <footer className=''>
        <Footer />
      </footer>
    </>
  );
}