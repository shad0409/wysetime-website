import React from 'react';
import Story from '../../public/OurStory.png'
import Image from 'next/image';

const AboutWyseTime = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About WyseTime</h1>
      <div className="about-section">
      <Image src={Story} height={100} width={50} alt="Empower Your Business" objectFit='cover' />
        <div>
          <h2 className="about-title">Our Story</h2>
          <p className="about-description">
            WyseTime brings e-commerce style analytics to your physical locations. Improve your business
            efficiency by understanding your visitor activity and receiving automated recommendations.
          </p>
        </div>
      </div>
      <div className="about-section">
        <img src="path-to-your-logo.svg" alt="Vision Icon" className="about-icon" />
        <div>
          <h2 className="about-title">Our Vision</h2>
          <p className="about-description">
            WyseTime combines the transformative powers of Big Data and the Internet of Things (IoT). By using video analytic technology, we find a winning formula for retail analytics when people counting data is used for operational and strategic decisions.
          </p>
        </div>
      </div>
      <div className="about-section">
        <img src="path-to-your-logo.svg" alt="Technology Icon" className="about-icon" />
        <div>
          <h2 className="about-title">Technology</h2>
          <p className="about-description">
            WyseTime help brick-and-mortar businesses in creating superior customer experience. Through footfall analytics, customer profile generation, personalized CRM engagement and in-depth business insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutWyseTime;