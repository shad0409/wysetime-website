import React from 'react';
import Image from 'next/image';
import heroImage from '../../public/Home_BG.png';

const HeroWyseTime = () => {
  return (
    <div className="hero-container">
      <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
      <div className="hero-content">
        <h1>Empower Your Business Through Client Insights</h1>
        <p>Envision the future with data analytics technology</p>
        <a href="/Contact" className="hero-button-link">Contact Us</a>
      </div>
    </div>
  );
};

export default HeroWyseTime;