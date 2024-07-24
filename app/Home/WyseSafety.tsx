import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import './home.css'

import PPEDetection from '../../public/ppe-ezgif.gif';
import ZoneControl from '../../public/zone-control-ezgif.com-video-to-gif-converter.gif';
import BehavioralDetection from '../../public/pb-ppl-bodypose-ezgif.com-video-to-gif-converter.gif';
import OccupancyMetrics from '../../public/occupancy-ezgif.gif';
import SmokeFire from '../../public/fire-ezgif.com-video-to-gif-converter.gif';
import { useInView } from 'react-intersection-observer';

const images = [
  { id: 0, src: PPEDetection, alt: 'PPE Detection' },
  { id: 1, src: ZoneControl, alt: 'Zone Control' },
  { id: 2, src: BehavioralDetection, alt: 'Behavioral Detection' },
  { id: 3, src: OccupancyMetrics, alt: 'Occupancy Metrics' },
  { id: 4, src: SmokeFire, alt: 'Smoke and Fire' }
];

const WyseSafety = () => {
  const [animationRef, animationInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTab(prevTab => (prevTab + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wyse-safety">
      <div className="header">
      </div>
      <div className="wyse-product-content">
        <div className="left-content">
          <h2>WyseSafety</h2>
          <div className="divider"></div>
          <p>
            WyseSafety is a cutting-edge safety platform designed to enhance workplace security by monitoring PPE compliance, controlling access areas, and enforcing vehicle pathways.
          </p>
          <div className="divider"></div>
          <p>
            This solution detects safety protocol breaches, unauthorized access, and improper vehicle use, ensuring a secure and well-regulated environment. Elevate your safety standards with WyseSafety.
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
              layout='contain'
              objectFit='contain'   
            />
            <a href="/WyseSafety" className="view-more">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WyseSafety;
