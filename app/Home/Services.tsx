import React from 'react';
import Service from './Service';
import serviceImage1 from '../../public/WyseLogo.png'; // Replace with your image path
import serviceImage2 from '../../public/WyseLogo.png'; // Replace with your image path

const ServicesWyseTime: React.FC = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <Service 
        image={serviceImage1}
        title="Comprehensive In-store Insights"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es"
      />
      <Service 
        image={serviceImage2}
        title="Video Analytic Technology"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es"
      />
    </div>
  );
};

export default ServicesWyseTime;
