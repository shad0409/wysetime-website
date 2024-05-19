import Image from 'next/image';
import React, { useState } from 'react';

import PeopleCounting from '../../public/people-counting-ezgif.gif';
import Heatmap from '../../public/retail_analytics_solutions_by_datafromsky_-_counts_heatmaps_distancing1080p-ezgif.gif';
import StoreAnalytics from '../../public/store_video-ezgif.gif';
import QueueManagement from '../../public/queue_management.jpeg';
import AgeGender from '../../public/Age_Gender.jpg';

const images = [
  { id: 0, src: PeopleCounting, alt: 'People Counting' },
  { id: 1, src: Heatmap, alt: 'Heatmap and Zone Analytics' },
  { id: 2, src: StoreAnalytics, alt: 'Store Analytics' },
  { id: 3, src: QueueManagement, alt: 'Queue Management' },
  { id: 4, src: AgeGender, alt: 'Age & Gender Analytic' }
];

const WyseRetail = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="wyse-retail">
      <div className="header">
      </div>
      <div className="content">
        <div className="left-content">
          <h2>WyseRetail</h2>
          <div className="divider"></div>
          <p>
            WyseRetail stands as a premier people counting solution, crafted to monitor, follow, and evaluate your customer flow, delivering analytical insights crucial for your marketing and operations teams.
          </p>
          <div className="divider"></div>
          <p>
            Detect essential customer behaviors like visit frequency, engagement duration, and queuing patterns. By gaining a deeper insight into your customers experiences, you can consistently prioritize their needs.
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
              layout='fill'
              objectFit='cover'   
            />
            <a href="/new-page" className="view-more">View More</a> {/* Update this to the correct URL */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WyseRetail;
