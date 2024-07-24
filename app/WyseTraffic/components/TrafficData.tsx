import React from 'react';
import TrafficData from '../../../public/trafficmonitoring-ezgif.gif';
import Image from 'next/image';

const TrafficDataAnalytic: React.FC = () => {
    return (
      <section className="product-right-section">
        <div className="product-right-image">
          <Image src={TrafficData} alt="Traffic Data Analytics" layout="responsive" width={500} height={300} />
        </div>
        <div className="product-right-content">
          <h2 className="product-right-title">Traffic Data Analytics</h2>
          <p className="product-right-description">
          Traffic Data Analytic harnesses the power of advanced data analytics to dissect and understand traffic patterns, TrafficData types, and driver behaviors. Utilize this platform to enhance traffic management and safety, identify bottlenecks, and optimize traffic flow across your network.
          </p>
        </div>
      </section>
    );
  }
  
  export default TrafficDataAnalytic;