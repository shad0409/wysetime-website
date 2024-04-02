import React from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/ObjectRecognition.jpeg'; 

const ObjectRecognition: React.FC = () => {
  return (
    <div className="core-container">
      <h2 className='core-heading'>Facial <span className="text-red-600">Matching</span></h2>
      <CoreTech 
        image={ProductsImage1}
        title="Facial Matching"
        description="About Tech"
        reverse={true}
      />
    </div>
  );
};

export default ObjectRecognition;