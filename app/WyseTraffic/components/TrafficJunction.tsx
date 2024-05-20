import React from 'react';
import TrafficJunction from '../../../public/traffic_junction1-ezgif.gif';
import Image from 'next/image';

const TrafficJunctionAnalytic: React.FC = () => {
    return (
      <section className="product-left-section">
        <div className="product-left-content">
          <h2 className="product-left-title">Traffic Junction Analytics</h2>
          <p className="product-left-description">
          Traffic Junction Analytic is a specialized platform designed to analyze and improve the functionality of traffic intersections. Monitor TrafficJunctionAnalytic and pedestrian movements, detect traffic signal compliance, and improve junction design for smoother, safer traffic operations.
          </p>
        </div>
        <div className="product-left-image">
          <Image src={TrafficJunction} alt="Traffic Junction Analytics" layout="responsive" width={500} height={300} />
        </div>
      </section>
    );
  }
  
  export default TrafficJunctionAnalytic;