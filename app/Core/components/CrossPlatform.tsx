import React from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/CrossPlatform.jpeg'; 

const CrossPlatform: React.FC = () => {
  return (
    <div className="core-container">
      <h2 className='core-heading'>Cross <span className="text-red-600">Platform</span></h2>
      <CoreTech 
        image={ProductsImage1}
        title="Cross Platform"
        description="About Tech"
        reverse={false}
      />
    </div>
  );
};

export default CrossPlatform;