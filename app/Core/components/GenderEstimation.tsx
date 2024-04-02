import React from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/GenderEstimation.jpeg'; 

const GenderEstimation: React.FC = () => {
  return (
    <div className="core-container">
      <h2 className='core-heading'>Gender <span className="text-red-600">Estimation</span></h2>
      <CoreTech 
        image={ProductsImage1}
        title="Gender Estimation"
        description="About Tech"
        reverse={true}
      />
    </div>
  );
};

export default GenderEstimation;