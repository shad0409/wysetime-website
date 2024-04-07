import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/Home_BG.png';

const FactoryComponent = () => {
  return (
    <div>
        <div className="solution-comp-container">
            <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
            <div className="solution-comp-content">
                <h1>Factory Intelligence</h1>
            </div>
        </div>
        <h1>About</h1>
        <a href="/Solution/Factory" className="solution-learn-more">Learn More</a>
    </div>

  );
};

export default FactoryComponent;