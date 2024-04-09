import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/CaseStudies.jpeg';

const HeroCase = () => {
  return (
    <div className="hero-container">
      <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
      <div className="hero-content">
        <h1>Case Studies</h1>
      </div>
    </div>
  );
};

export default HeroCase;