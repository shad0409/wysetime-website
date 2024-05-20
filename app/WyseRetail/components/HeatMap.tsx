import React from 'react';
import HeatMap from '../../../public/retail_analytics_solutions_by_datafromsky_-_counts_heatmaps_distancing1080p-ezgif.gif';
import Image from 'next/image';

const HeatMapAnalytics: React.FC = () => {
    return (
      <section className="product-right-section">
        <div className="product-right-image">
          <Image src={HeatMap} alt="Heat Map & Zone Analytics" layout="responsive" width={500} height={300} />
        </div>
        <div className="product-right-content">
          <h2 className="product-right-title">Heat Map & Zone Analytics</h2>
          <p className="product-right-description">
          Heatmap & Zone Analytics visualize customer movement and dwell times within different store areas, highlighting hotspots and low-traffic zones. Use these insights to enhance product placement, optimize store layout, and create marketing strategies that resonate with shopper behavior.          </p>
        </div>
      </section>
    );
  }
  
  export default HeatMapAnalytics;