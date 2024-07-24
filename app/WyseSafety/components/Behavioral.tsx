import React from 'react';
import Behavioral from '../../../public/pb-ppl-bodypose-ezgif.com-video-to-gif-converter.gif';
import Image from 'next/image';

const BehavioralDetection: React.FC = () => {
    return (
      <section className="product-left-section">
        <div className="product-left-content">
          <h2 className="product-left-title">Behavioral Detection</h2>
          <p className="product-left-description">
          Behavioral Detection focuses on identifying and analyzing unusual or risky behaviors in real-time using advanced AI algorithms. This proactive monitoring helps prevent potential accidents and ensures compliance with safety standards, contributing to a safer and more secure workplace.          </p>
        </div>
        <div className="product-left-image">
          <Image src={Behavioral} alt="Behavioral Detection" layout="responsive" width={500} height={300} />
        </div>
      </section>
    );
  }
  
  export default BehavioralDetection;