import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/RetailIntelligence.jpeg';

const RetailComponent = () => {
  return (
    <div>
        <div className="solution-comp-container">
            <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
            <div className="solution-comp-content">
                <h1>Retail Intelligence</h1>
            </div>
        </div>
        <div className='solution-about-content'>
          <h2>Retail intelligence, leveraging AI prowess in image and video processing, is transforming the retail sector into a more data-driven and customer-centric industry. 
            By analyzing in-store video feeds, this technology offers unparalleled insights into customer behavior, store traffic patterns, and product interactions. 
            This enables retailers to optimize store layouts, improve inventory management, and tailor marketing strategies to enhance customer engagement. 
            AI-driven retail intelligence systems also enhance security measures and loss prevention through real-time monitoring and anomaly detection. 
            As a result, retailers can offer personalized shopping experiences, streamline operations, and ultimately increase sales and customer satisfaction. 
            This technological evolution signifies a leap towards innovative retail solutions, making shopping seamless and more enjoyable for consumers.</h2>
            <div className='py-5'>
              <a href="/Solution/Retail" className="solution-learn-more">Learn More</a>
            </div>
        </div>
    </div>

  );
};

export default RetailComponent;