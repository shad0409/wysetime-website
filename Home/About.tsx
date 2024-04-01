// Adjusted JSX component structure
import React from 'react';
import Image from 'next/image';

import StoryIcon from '../../public/OurStory.png';
import VisionIcon from '../../public/Vision.png';
import TechIcon from '../../public/Technology.png';

const AboutWyseTime = () => {
  return (
    <>
      <div className="about-description-container">
      <h1 className='text-black text-center py-5'>About <span className="text-red-600">WyseTime</span></h1>
      <div className="about-description">
        <p>
        WyseTime Technologies is an innovative tech enterprise nestled in the vibrant city of Penang, 
        Malaysia, established by a cohort of visionary technology aficionados. Our inception was driven by the urgent demand for advanced AI Vision solutions, 
        critical for the transformation and enhancement of various sectors through insightful video analytics. 
        Specializing in the development of AI-driven applications, we at WyseTime Technologies excel in crafting tailor-made solutions 
        that span across diverse domains such as traffic management, retail analytics, and beyond.
        </p>
        <p className='py-10'>
        Leveraging our deep-rooted expertise in AI and machine learning technologies, 
        we engineer cutting-edge digital systems that provide real-time video analysis, 
        offering invaluable insights for traffic control, customer behavior tracking in retail environments, 
        and a plethora of other applications. Our commitment to deeply understanding our client challenges and distinct requirements, 
        combined with our prowess in AI software development and integration with sophisticated hardware platforms, 
        positions WyseTime Technologies at the forefront of delivering unparalleled solutions and services.
        </p>
        <p>
        Our guiding principle revolves around augmenting our clients operational efficiency, 
        decision-making processes, and strategic planning through the power of AI Vision. 
        By enabling enhanced monitoring, analytics, and predictive capabilities, we empower our clients to achieve optimal outcomes, 
        ensuring their success in the modern digital landscape.
        </p>
        </div>
      </div>

      <div className="about-items-container">
        <div className='about-item-container'>
            <Image src={StoryIcon} height={100} width={100} alt="Our Story" objectFit='contain' />
            <h2>Our Story</h2>
            <p>WyseTime brings e-commerce style analytics to your physical locations.
            Improve your business efficiency by understanding your visitoractivity and receiving automated recommendations</p>
        </div>

        <div className="about-item-container">
          <Image src={VisionIcon} height={100} width={100} alt="Our Vision" objectFit='contain' />
          <h2>Our Vision</h2>
          <p>WyseTime help brick-and-mortar businesses in creating 
              superior customer experience. Through footfall analytics,
              customer profile generation, personalized CRM 
              engagement and in-depth business insights</p>
        </div>

        <div className="about-item-container">
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

export default AboutWyseTime;
