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
          <h2>Factory intelligence, empowered by AI image and video processing capabilities, is revolutionizing industrial operations by enhancing efficiency, safety, and productivity in manufacturing environments. 
            This advanced technology meticulously analyzes footage from factory floors to monitor machinery health, detect defects in products, and ensure safety compliance among workers. 
            By continuously learning from the data, AI algorithms optimize production processes, predict equipment failures before they occur, and minimize downtime. Factory intelligence facilitates a proactive approach to maintenance, 
            quality control, and worker safety, leading to significant cost savings and improved product quality. It supports the shift towards Industry 4.0, where smart factories leverage data and automation to drive decision-making, 
            fostering a more resilient and flexible manufacturing landscape.</h2>
            <div className='py-5'>
              <a href="/Solution/Factory" className="solution-learn-more">Learn More</a>
            </div>
        </div>
    </div>

  );
};

export default FactoryComponent;