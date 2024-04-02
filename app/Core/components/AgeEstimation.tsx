import React from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/AgeEstimation.jpeg'; 

const AgeEstimation: React.FC = () => {
  return (
    <div className="core-container">
      <h2 className='core-heading'>Age <span className="text-red-600">Estimation</span></h2>
      <CoreTech 
        image={ProductsImage1}
        title="Age Estimation"
        description="About Tech"
        reverse={false}
      />
    </div>
  );
};

export default AgeEstimation;