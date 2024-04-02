import React from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/OCRFeature.jpeg'; 

const OCRFeature: React.FC = () => {
  return (
    <div className="core-container">
      <h2 className='core-heading'>OCR <span className="text-red-600">Feature</span></h2>
      <CoreTech 
        image={ProductsImage1}
        title="OCR Feature"
        description="About Tech"
        reverse={false}
      />
    </div>
  );
};

export default OCRFeature;