'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import "../globals.css";

// Individual Components
import CoreHero from './components/Hero';

import FacialMatching from './components/FacialMatching';
import AgeEstimation from './components/AgeEstimation';
import GenderEstimation from './components/GenderEstimation';
import CrossPlatform from './components/CrossPlatform';
import ObjectRecognition from './components/ObjectRecognition';
import OCRFeature from './components/OCRFeature';

import Footer from '../Footer';

export default function Core() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
        <CoreHero/>
      </header>
      <section>
        <div>
          <FacialMatching/>
        </div>
        <div>
          <AgeEstimation/>
        </div>
        <div>
          <GenderEstimation/>
        </div>
        <div>
          <CrossPlatform/>
        </div>
        <div>
          <ObjectRecognition/>
        </div>
        <div>
          <OCRFeature/>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
