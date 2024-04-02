import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/Core.jpeg'

const CoreHero = () => {
  return (
    <div className="hero-container">
      <Image src={heroImage} alt="ProductImage" layout='fill' objectFit='cover' />
      <div className="hero-content">
        <h1>CORE TECHNOLOGIES</h1>
      </div>
    </div>
  );
};

export default CoreHero;