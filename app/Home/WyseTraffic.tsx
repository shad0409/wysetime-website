import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import './home.css'

import VehicleCounting from '../../public/car-counting-30s.gif';
import TrafficData from '../../public/trafficmonitoring-ezgif.gif';
import TrafficJunction from '../../public/traffic_junction1-ezgif.gif';
import Pedestrian from '../../public/pedestrianmonitoring-ezgif.gif';
import TrafficFlow from '../../public/trafficflowimprovement-ezgif.gif';
import { useInView } from 'react-intersection-observer';

const images = [
  { id: 0, src: VehicleCounting, alt: 'Vehicle Counting' },
  { id: 1, src: TrafficData, alt: 'Traffic Data Analytic' },
  { id: 2, src: TrafficJunction, alt: 'Traffic Junction' },
  { id: 3, src: Pedestrian, alt: 'Pedestrian Monitoring' },
  { id: 4, src: TrafficFlow, alt: 'Traffic Flow' }
];

const WyseTraffic = () => {
  const [animationRef, animationInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTab(prevTab => (prevTab + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wyse-traffic">
      <div className="header">
        <h1>Our <span>Vision AI</span> Application</h1>
      </div>
      <div className="wyse-product-content">
        <div className="left-content">
          <h2>WyseTraffic</h2>
          <div className="divider"></div>
          <p>
            WyseTraffic is a leading traffic analytic platform to explore behaviour of vehicle, pedestrians and bikers and gain valuable data for traffic safety and design improvements.
          </p>
          <div className="divider"></div>
          <p>
            Detect vehicle classes, vehicle moving direction, people’s movement patterns, spot undesirable events and discover how your local active transportation evolves over time.
          </p>
        </div>
        <div className="right-content">
          <div className="tabs">
            <div className="tab-titles">
              {images.map((image, index) => (
                <div 
                  key={image.id} 
                  className={`tab-title ${selectedTab === index ? 'active' : ''}`}
                  onClick={() => setSelectedTab(index)}
                >
                  {image.alt}
                </div>
              ))}
            </div>
          </div>
          <div className="tab-content">
            <Image 
              src={images[selectedTab].src} 
              alt={images[selectedTab].alt}
              layout="contain"
              objectFit="contain"   
            />
            <a href="/WyseTraffic" className="view-more">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WyseTraffic;
