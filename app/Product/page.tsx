'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import "../globals.css";

// Individual Components
import ProductsHero from './components/Hero'; 

import ProductsBox from './components/ProductBox';

import AboutProducts1 from './components/AboutProducts1';
import AboutProducts3 from './components/AboutProducts3';
import AboutProducts2 from './components/AboutProducts2';

import Footer from '../Footer';


export default function Products() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [boxRef, boxInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
        <ProductsHero />
      </header>
      <section>
        <div className={` ${boxInView ? 'fadeInUp' : ''}`} ref={boxRef}>
          <ProductsBox/>
        </div>
        <div>
          <AboutProducts1/>
        </div>
        <div>
          <AboutProducts2/>
        </div>
        <div>
          <AboutProducts3/>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
