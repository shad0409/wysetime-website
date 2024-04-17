import React, { useEffect, useState } from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/OCRFeature.jpeg'; 
import { CoreTechs } from '@/types/CoreTech';
import { getCoreTech } from '@/sanity/sanity-utils';

const OCRFeature: React.FC = () => {
  const [core, setCores] = useState<CoreTechs[]>([]);

  useEffect(() => {
    const fetchcore = async () => {
      const coreData = await getCoreTech();
      setCores(coreData);
    };

    fetchcore();
  }, []); 

  const OCR = core.find(core => core.name === 'OCR-Feature')?.content;

  return (
    <div className="core-container-OCR">
      <h2 className='core-heading'>OCR <span className="text-red-600">Feature</span></h2>
      <CoreTech 
        image={ProductsImage1}
        description={OCR}
        reverse={false}
      />
    </div>
  );
};

export default OCRFeature;