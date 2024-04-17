import React, { useEffect, useState } from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/AgeEstimation.jpeg'; 
import { CoreTechs } from '@/types/CoreTech';
import { getCoreTech } from '@/sanity/sanity-utils';

const AgeEstimation: React.FC = () => {
  const [core, setCores] = useState<CoreTechs[]>([]);

  useEffect(() => {
    const fetchcore = async () => {
      const coreData = await getCoreTech();
      setCores(coreData);
    };

    fetchcore();
  }, []); 

  const age = core.find(core => core.name === 'Age-Estimation')?.content;

  return (
    <div className="core-container-age">
      <h2 className='core-heading'>Age <span className="text-red-600">Estimation</span></h2>
      <CoreTech 
        image={ProductsImage1}
        description={age}
        reverse={false}
      />
    </div>
  );
};

export default AgeEstimation;