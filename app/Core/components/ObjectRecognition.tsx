import React from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/ObjectRecognition.jpeg'; 

const ObjectRecognition: React.FC = () => {
  return (
    <div className="core-container">
      <h2 className='core-heading'>Object <span className="text-red-600">Recognition</span></h2>
      <CoreTech 
        image={ProductsImage1}
        title="Object Recognition"
        description="About Tech"
        reverse={true}
      />
    </div>
  );
};

export default ObjectRecognition;