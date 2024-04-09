'use client'
import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/FactoryIntelligence.jpeg'

import '../../globals.css';
import Footer from '@/app/Footer';
import { useInView } from 'react-intersection-observer';

const FactoryPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [trafficRef, trafficInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [retailRef, retailInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [factoryRef, factoryInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      <div ref={heroRef} className={` hero-container py-10 ${heroInView ? 'fadeInUp' : ''}`}>
        <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
        <div className="hero-content">
          <h1>Factory Intelligence</h1>
        </div>
      </div>
      <div>
        <div className="learn-more-container">
          <h1 className='text-black text-center py-5'>Background</h1>
          <div className="about-learn-more">

          </div>
        </div>

        <div className="learn-more-container">
          <h1 className='text-black text-center py-5'></h1>
          <div className="about-learn-more">

          </div>
        </div>

        <div className="learn-more-container">
          <h1 className='text-black text-center py-5'></h1>
          <div className="about-learn-more">

          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default FactoryPage;