import React from 'react';
import CaseStudies from './CaseConfigs';

import ProductsImage1 from '../../../public/TrafficStudies.png'; 

const TrafficStudies: React.FC = () => {
  return (
    <div className="case-container">
      <CaseStudies 
        image={ProductsImage1}
        title="Traffic"
        description="To address the pervasive challenge of traffic congestion, a new approach to traffic management was adopted, focusing on optimizing vehicle flow and boosting public transportation effectiveness. 
        This initiative employed innovative traffic signal algorithms, leveraged real-time data analytics, and introduced strategic rerouting to alleviate the stress of daily commutes. 
        A key aspect of this strategy was the prioritization of dedicated lanes for buses and emergency vehicles, which significantly improved the reliability of public transit and the efficiency of emergency responses. 
        This case highlights the vital role of technological integration in urban planning, illustrating how smart traffic management systems can lead to smoother travel experiences and contribute to the sustainable development of urban environments. 
        By directly tackling congestion issues, it provides a scalable solution for cities worldwide, enhancing the quality of urban life without necessitating specific data points for its validation."
        reverse={false}
      />
    </div>
  );
};

export default TrafficStudies;