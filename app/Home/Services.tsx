// Services.tsx

import React from 'react';
import Service from './Service';

import serviceImage1 from '../../public/Services_1.jpeg'; // Ensure the correct path
import serviceImage2 from '../../public/Services_2.jpeg'; // Ensure the correct path

const ServicesWyseTime: React.FC = () => {
  return (
    <div className="services-container">
      <h2 className='service-heading'>Our Services</h2>
      <Service 
        image={serviceImage1}
        title="Comprehensive In-store Insights"
        description="Excerpt of text that explains service 1 in detail."
        reverse={true} // text on the left, image on the right
      />
      <Service 
        image={serviceImage2}
        title="Video Analytic Technology"
        description="Excerpt of text that explains service 2 in detail."
        reverse={false} // image on the left, text on the right
      />
    </div>
  );
};

export default ServicesWyseTime;