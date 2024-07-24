import React from 'react';
import Pedestrian from '../../../public/pedestrianmonitoring-ezgif.gif';
import Image from 'next/image';

const PedestrianMonitoring: React.FC = () => {
    return (
      <section className="product-right-section">
        <div className="product-right-image">
          <Image src={Pedestrian} alt="Pedestrian Monitoring" layout="responsive" width={500} height={300} />
        </div>
        <div className="product-right-content">
          <h2 className="product-right-title">Pedestrian Monitoring</h2>
          <p className="product-right-description">
          Pedestrian Monitoring focuses on the safety and efficiency of pedestrian traffic. Track movement trends, analyze footfall and dwell times, and identify potential safety hazards to enhance pedestrian pathways and crosswalks for improved urban mobility.
          </p>
        </div>
      </section>
    );
  }
  
  export default PedestrianMonitoring;