import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/RetailIntelligence.jpeg';

const RetailComponent = () => {
  return (
    <div>
        <div className="solution-comp-container">
            <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
            <div className="solution-comp-content">
                <h1>Retail Intelligence</h1>
            </div>
        </div>
        <div className='solution-about-content'>
          <h2>About</h2>
          <a href="/Solution/Retail" className="solution-learn-more">Learn More</a>
        </div>
    </div>

  );
};

export default RetailComponent;