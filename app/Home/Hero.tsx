import React from 'react';
import Image from 'next/image';
import heroImage from '../../public/Home_BG.png';

const HeroWyseTime = () => {
  return (
    <div className="hero-container">
      <Image src={heroImage} alt="Empower Your Business" layout='cover' objectFit='cover' />
      <div className="hero-content">
        <h1>Empower Your Business Through Client Insights</h1>
        <p>Envision the future with data analytics technology</p>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default HeroWyseTime;