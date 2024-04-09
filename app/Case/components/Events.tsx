import React from 'react';
import CaseStudies from './CaseConfigs';

import ProductsImage1 from '../../../public/Events.png'; 

const Events: React.FC = () => {
  return (
    <div className="case-container">
      <CaseStudies 
        image={ProductsImage1}
        title="Events & Exhibition"
        description="In response to the increasing demand for dynamic and engaging events, exhibition organizers leveraged cutting-edge technology and innovative event design to create immersive experiences. 
        Through the use of interactive displays, virtual reality, and personalized content, attendees were able to engage more deeply with the exhibits and presentations. 
        This approach not only elevated the attendee experience but also set new standards for engagement and interactivity at events and exhibitions, demonstrating the transformative impact of technology on the events industry."
        reverse={false}
      />
    </div>
  );
};

export default Events;