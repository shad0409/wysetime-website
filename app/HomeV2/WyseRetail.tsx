import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import PeopleCounting from '../../public/people-counting-ezgif.gif';
import Heatmap from '../../public/retail_analytics_solutions_by_datafromsky_-_counts_heatmaps_distancing1080p-ezgif.gif';
import StoreAnalytics from '../../public/store_video-ezgif.gif';
import QueueManagement from '../../public/queue_management.jpeg';
import AgeGender from '../../public/Age_Gender.jpg';
import { useInView } from 'react-intersection-observer';

const images = [
  { id: 0, src: PeopleCounting, alt: 'People Counting' },
  { id: 1, src: Heatmap, alt: 'Heatmap and Zone Analytics' },
  { id: 2, src: StoreAnalytics, alt: 'Store Analytics' },
  { id: 3, src: QueueManagement, alt: 'Queue Management' },
  { id: 4, src: AgeGender, alt: 'Age & Gender Analytic' }
];

const WyseRetail = () => {
  const [animationRef, animationInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTab(prevTab => (prevTab + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wyse-retail">
      <div className="header">
      </div>
      <div className="retail-content">
        <div className="retail-right-content">
          <div className="retail-tab-content">
            <Image 
              src={images[selectedTab].src} 
              alt={images[selectedTab].alt}
              layout='contain'
              objectFit='contain'   
            />
            <a href="/WyseRetail" className="retail-view-more">View More</a>
          </div>
          <div className="retail-tabs">
            <div className="retail-tab-titles">
              {images.map((image, index) => (
                <div 
                  key={image.id} 
                  className={`retail-tab-title ${selectedTab === index ? 'active' : ''}`}
                  onClick={() => setSelectedTab(index)}
                >
                  {image.alt}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="retail-left-content">
          <h2>WyseRetail</h2>
          <div className="retail-divider"></div>
          <p>
            WyseRetail stands as a premier people counting solution, crafted to monitor, follow, and evaluate your customer flow, delivering analytical insights crucial for your marketing and operations teams.
          </p>
          <div className="retail-divider"></div>
          <p>
            Detect essential customer behaviors like visit frequency, engagement duration, and queuing patterns. By gaining a deeper insight into your customers experiences, you can consistently prioritize their needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WyseRetail;
