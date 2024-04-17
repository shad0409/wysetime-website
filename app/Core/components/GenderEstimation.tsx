import React, { useEffect, useState } from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/GenderEstimation.jpeg'; 
import { CoreTechs } from '@/types/CoreTech';
import { getCoreTech } from '@/sanity/sanity-utils';

const GenderEstimation: React.FC = () => {
  const [core, setCores] = useState<CoreTechs[]>([]);

  useEffect(() => {
    const fetchcore = async () => {
      const coreData = await getCoreTech();
      setCores(coreData);
    };

    fetchcore();
  }, []); 

  const gender = core.find(core => core.name === 'Gender-Estimation')?.content;

  return (
    <div className="core-container-gender">
      <h2 className='core-heading'>Gender <span className="text-red-600">Estimation</span></h2>
      <CoreTech 
        image={ProductsImage1}
        description={gender}
        reverse={true}
      />
    </div>
  );
};

export default GenderEstimation;