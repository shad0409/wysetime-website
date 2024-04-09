import React from 'react';
import CaseStudies from './CaseConfigs';

import ProductsImage1 from '../../../public/Mall.png'; 

const ShoppingMall: React.FC = () => {
  return (
    <div className="case-container">
      <CaseStudies 
        image={ProductsImage1}
        title="Shopping Mall"
        description="Facing the challenge of declining foot traffic, shopping malls embarked on a transformative journey to reinvent itself as a multi-use destination. 
        Through the introduction of experiential spaces, community events, and a diversified mix of retailers and dining options, the mall successfully rejuvenated interest among consumers. 
        This shift not only increased visitation rates but also enhanced the overall community value of the mall as a central hub for social, cultural, and shopping activities. 
        This case illustrates the potential of adaptive re-use and creative programming in revitalizing retail environments for the modern consumer."
        reverse={false}
      />
    </div>
  );
};

export default ShoppingMall;