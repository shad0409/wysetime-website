import React from 'react';
import CaseStudies from './CaseConfigs';

import ProductsImage1 from '../../../public/Park.png'; 

const ThemePark: React.FC = () => {
  return (
    <div className="case-container">
      <CaseStudies 
        image={ProductsImage1}
        title="Theme Park"
        description="Theme parks embarked on a significant overhaul of its attractions and operations to improve guest experiences and operational efficiency. 
        By integrating interactive technologies and app-based services, the park was able to offer personalized itineraries, real-time updates, and fast-track access to attractions, 
        significantly enhancing guest satisfaction. Additionally, these technologies facilitated better crowd management and resource allocation, ensuring a smoother and more enjoyable visit for guests. 
        This case underscores the critical role of innovation in creating memorable and efficient theme park experiences."
        reverse={true}
      />
    </div>
  );
};

export default ThemePark;