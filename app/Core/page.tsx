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
  const [facialRef, facialInView] = useInView({ triggerOnce: true, threshold:0.1 });
  const [ageRef, ageInView] = useInView({ triggerOnce: true, threshold:0.1 });
  const [genderRef, genderInView] = useInView({ triggerOnce: true, threshold:0.1 });
  const [crossRef, crossInView] = useInView({ triggerOnce: true, threshold:0.1 });
  const [objectRef, objectInView] = useInView({ triggerOnce: true, threshold:0.1 });
  const [ocrRef, ocrInView] = useInView({ triggerOnce: true, threshold:0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
        <CoreHero/>
      </header>
      <section>
        <div className={` py-10 ${facialInView ? 'fadeInUp' : ''}`} ref={facialRef}>
          <FacialMatching/>
        </div>
        <div className={` py-10 ${ageInView ? 'fadeInUp' : ''}`} ref={ageRef}>
          <AgeEstimation/>
        </div>
        <div className={` py-10 ${genderInView ? 'fadeInUp' : ''}`} ref={genderRef}>
          <GenderEstimation/>
        </div>
        <div className={` py-10 ${crossInView ? 'fadeInUp' : ''}`} ref={crossRef}>
          <CrossPlatform/>
        </div>
        <div className={` py-10 ${objectInView ? 'fadeInUp' : ''}`} ref={objectRef}>
          <ObjectRecognition/>
        </div>
        <div className={` py-10 ${ocrInView ? 'fadeInUp' : ''}`} ref={ocrRef}>
          <OCRFeature/>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
