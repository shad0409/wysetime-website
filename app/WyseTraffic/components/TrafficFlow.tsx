import React from 'react';
import TrafficFlow from '../../../public/trafficflowimprovement-ezgif.gif';
import Image from 'next/image';

const TrafficFlowImprovement: React.FC = () => {
    return (
      <section className="product-left-section">
        <div className="product-left-content">
          <h2 className="product-left-title">Traffic Flow Improvement</h2>
          <p className="product-left-description">
          Traffic Flow Improvement leverages real-time data collection and analysis to streamline vehicular movement and reduce congestion. Optimize traffic patterns, adjust signals in real-time, and implement strategic changes to facilitate smoother flows and decrease travel times.
          </p>
        </div>
        <div className="product-left-image">
          <Image src={TrafficFlow} alt="Traffic Flow Improvement" layout="responsive" width={500} height={300} />
        </div>
      </section>
    );
  }
  
  export default TrafficFlowImprovement;