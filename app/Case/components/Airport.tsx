import React from 'react';
import CaseStudies from './CaseConfigs';

import ProductsImage1 from '../../../public/Airport.png'; 

const Airport: React.FC = () => {
  return (
    <div className="case-container">
      <CaseStudies 
        image={ProductsImage1}
        title="Airport"
        description="Airports sought to enhance passenger satisfaction and streamline operations amidst growing traveler numbers. By adopting a passenger-first approach, incorporating advanced technology for smoother check-ins and security processes, 
        and improving amenities, the airport created a more efficient and pleasant travel experience. These efforts led to improved passenger flow, reduced stress levels, and higher satisfaction ratings. 
        This case highlights the importance of customer-centric strategies and technology in improving the functionality and appeal of travel hubs."
        reverse={true}
      />
    </div>
  );
};

export default Airport;