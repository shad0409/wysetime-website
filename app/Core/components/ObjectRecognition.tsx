import React, { useEffect, useState } from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/ObjectRecognition.jpeg'; 
import { CoreTechs } from '@/types/CoreTech';
import { getCoreTech } from '@/sanity/sanity-utils';

const ObjectRecognition: React.FC = () => {
  const [core, setCores] = useState<CoreTechs[]>([]);

  useEffect(() => {
    const fetchcore = async () => {
      const coreData = await getCoreTech();
      setCores(coreData);
    };

    fetchcore();
  }, []); 

  const object = core.find(core => core.name === 'Object-Recognition')?.content;

  return (
    <div className="core-container-object">
      <h2 className='core-heading'>Object <span className="text-red-600">Recognition</span></h2>
      <CoreTech 
        image={ProductsImage1}
        description={object}
        reverse={true}
      />
    </div>
  );
};

export default ObjectRecognition;