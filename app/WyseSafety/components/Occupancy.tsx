import React from 'react';
import Occupancy from '../../../public/trafficmonitoring-ezgif.gif';
import Image from 'next/image';

const OccupancyMetric: React.FC = () => {
    return (
      <section className="product-right-section">
        <div className="product-right-image">
          <Image src={Occupancy} alt="Occupancy Metrics" layout="responsive" width={500} height={300} />
        </div>
        <div className="product-right-content">
          <h2 className="product-right-title">Occupancy Metrics</h2>
          <p className="product-right-description">
          Track and analyze essential occupancy metrics with WyseTime’s Vision AI technology. Monitor real-time data on occupancy levels, dwell times, and traffic patterns within your premises. Use these insights to optimize space utilization, enhance safety, and improve operational efficiency.          </p>
        </div>
      </section>
    );
  }
  
  export default OccupancyMetric;