import React, { useEffect, useState } from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/FacialMatching.jpeg'; 
import { CoreTechs } from '@/types/CoreTech';
import { getCoreTech } from '@/sanity/sanity-utils';


const FacialMatching: React.FC = () => {
  const [core, setCores] = useState<CoreTechs[]>([]);

  useEffect(() => {
    const fetchcore = async () => {
      const coreData = await getCoreTech();
      setCores(coreData);
    };

    fetchcore();
  }, []); 

  const facial = core.find(core => core.name === 'Facial-Matching')?.content;

  return (
    <div className="core-container-facial">
      <h2 className='core-heading'>Facial <span className="text-red-600">Matching</span></h2>
      <CoreTech 
        image={ProductsImage1}
        description={facial}
        reverse={true}
      />
    </div>
  );
};

export default FacialMatching;