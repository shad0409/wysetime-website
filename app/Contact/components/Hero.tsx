import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/Home_BG.png';

const ContactHeader = () => {
  return (
    <div className="hero-container">
      <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
      <div className="hero-content">
        <h1>Empower Your Business Through Client Insights</h1>
      </div>
    </div>
  );
};

export default ContactHeader;