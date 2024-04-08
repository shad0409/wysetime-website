'use client'
import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/Home_BG.png'

import '../../globals.css';
import Footer from '@/app/Footer';

const FactoryPage = () => {
  return (
    <div>
      <div className="hero-container">
        <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
        <div className="hero-content">
          <h1>Factory Intelligence</h1>
        </div>
      </div>
      <div>
        <div className="learn-more-container">
          <h1 className='text-black text-center py-5'>About <span className="text-red-600">WyseTime</span></h1>
          <div className="about-learn-more">
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
        <div className="learn-more-container">
          <h1 className='text-black text-center py-5'>About <span className="text-red-600">WyseTime</span></h1>
          <div className="about-learn-more">
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
        <div className="learn-more-container">
          <h1 className='text-black text-center py-5'>About <span className="text-red-600">WyseTime</span></h1>
          <div className="about-learn-more">
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
      </div>
      <Footer/>
    </div>

  );
};

export default FactoryPage;