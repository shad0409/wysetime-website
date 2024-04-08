import React from 'react';
import Image from 'next/image';

import StoryIcon from '../../../public/OurStory.png';
import VisionIcon from '../../../public/Vision.png';
import TechIcon from '../../../public/Technology.png';

const ContactInfo = () => {
  return (
    <>
      <div className="contact-items-container">
        <div className='contact-item-container'>
            <Image src={StoryIcon} height={100} width={100} alt="Our Story" objectFit='contain' />
            <h2>Our Story</h2>
            <p>WyseTime brings e-commerce style analytics to your physical locations.
            Improve your business efficiency by understanding your visitoractivity and receiving automated recommendations</p>
        </div>

        <div className="contact-item-container">
          <Image src={VisionIcon} height={100} width={100} alt="Our Vision" objectFit='contain' />
          <h2>Our Vision</h2>
          <p>WyseTime help brick-and-mortar businesses in creating 
              superior customer experience. Through footfall analytics,
              customer profile generation, personalized CRM 
              engagement and in-depth business insights</p>
        </div>

        <div className="contact-item-container">
          <Image src={TechIcon} height={100} width={100} alt="Technology" objectFit='contain' />
          <h2>Technology</h2>
          <p>WyseTime combines the transformative powers of 
              Big Data and the Internet of Things (IoT). 
              By using video analytic technology, 
              we find a winning formula for retail analytics when people 
              counting data is used for operational and strategic decisions.</p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
