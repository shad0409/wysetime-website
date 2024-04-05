'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import "../globals.css";

// Individual Components
import ProductsHero from './components/Hero'; 

import ProductsBox from './components/ProductBox';

import AboutProducts1 from './components/Wyse-Traffic';
import AboutProducts3 from './components/Wyse-Retail';
import AboutProducts2 from './components/Wyse-Envision';

import Footer from '../Footer';


export default function Products() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [boxRef, boxInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutoneRef, aboutoneInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [abouttwoRef, abouttwoInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutthreeRef, aboutthreeInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
        <ProductsHero />
      </header>
      <section>
        <div className={` py-20 ${boxInView ? 'fadeInUp' : ''}`} ref={boxRef}>
          <ProductsBox/>
        </div>
        <div className={` py-1 ${aboutoneInView ? 'fadeInUp' : ''}`} ref={aboutoneRef}>
          <AboutProducts1/>
        </div>
        <div className={` py-1 ${abouttwoInView ? 'fadeInUp' : ''}`} ref={abouttwoRef}>
          <AboutProducts2/>
        </div>
        <div className={` py-1 ${aboutthreeInView ? 'fadeInUp' : ''}`} ref={aboutthreeRef}>
          <AboutProducts3/>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
