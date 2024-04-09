import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/TrafficSolutions.jpg';

const TrafficComponent = () => {
  return (
    <div>
        <div className="solution-comp-container">
            <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
            <div className="solution-comp-content">
                <h1>Traffic Intelligence</h1>
            </div>
        </div>
        <div className='solution-about-content'>
          <h2>Traffic intelligence, powered by AI with advanced image and video processing capabilities, is revolutionizing the way we manage and navigate urban environments. 
            This innovative technology interprets vast streams of data from traffic cameras and sensors, offering real-time insights into traffic conditions, congestion patterns, 
            and accident detection. By harnessing the power of machine learning algorithms, it predicts traffic flows, optimizes signal timings, and improves overall road safety. 
            For city planners and commuters alike, traffic intelligence promises a more efficient, safe, and sustainable urban mobility experience. Its application extends beyond mere traffic management, 
            facilitating smart city initiatives and paving the way for the future of autonomous vehicles.</h2>
            <div className='py-5'> 
              <a href="/Solution/Traffic" className="solution-learn-more">Learn More</a>
            </div>
        </div>
    </div>

  );
};

export default TrafficComponent;