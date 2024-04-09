import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/FactoryIntelligence.jpeg';

const FactoryComponent = () => {
  return (
    <div>
        <div className="solution-comp-container">
            <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
            <div className="solution-comp-content">
                <h1>Factory Intelligence</h1>
            </div>
        </div>
        <div className='solution-about-content'>
          <h2>About</h2>
          <a href="/Solution/Factory" className="solution-learn-more">Learn More</a>
        </div>
    </div>

  );
};

export default FactoryComponent;