import React, { useEffect, useState } from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/CrossPlatform.jpeg'; 
import { CoreTechs } from '@/types/CoreTech';
import { getCoreTech } from '@/sanity/sanity-utils';

const CrossPlatform: React.FC = () => {
  const [core, setCores] = useState<CoreTechs[]>([]);

  useEffect(() => {
    const fetchcore = async () => {
      const coreData = await getCoreTech();
      setCores(coreData);
    };

    fetchcore();
  }, []); 

  const cross = core.find(core => core.name === 'Cross-Platform')?.content;

  return (
    <div className="core-container-cross">
      <h2 className='core-heading'>Cross <span className="text-red-600">Platform</span></h2>
      <CoreTech 
        image={ProductsImage1}
        description={cross}
        reverse={false}
      />
    </div>
  );
};

export default CrossPlatform;