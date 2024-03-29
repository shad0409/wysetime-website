'use client'
import {getProjects} from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import "./globals.css";

// Individual Components
import HeroWyseTime from './Home/Hero'; 

import AboutWyseTime from './Home/About';

import ServicesWyseTime from './Home/Services';

import QuoteComponent from './Home/Quote';
import quotes from './Home/types/quotes';

import OurPartners from './Home/Partners';
import Footer from './Footer';
import { partners } from './Home/types/partner';

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [quoteRef, quoteInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
        <HeroWyseTime />
      </header>
      <section>
        <div className={` ${aboutInView ? 'fadeInUp' : ''}`} ref={aboutRef}>
          <AboutWyseTime />
        </div>
        <div className={` py-1 ${servicesInView ? 'fadeInUp' : ''}`} ref={servicesRef}>
          <ServicesWyseTime />
        </div>
        <div className={` ${quoteInView ? 'fadeInUp' : ''}`} ref={quoteRef}>
          <QuoteComponent quotes={quotes} />
        </div>
        <div className={` py-1 ${partnersInView ? 'fadeInUp' : ''}`} ref={partnersRef}>
          <OurPartners partners={partners} />
        </div>
      </section>
      <footer className=''>
        <Footer />
      </footer>
    </>
  );
}