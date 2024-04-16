import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import heroImage from '../../../public/FactoryIntelligence.jpeg';

import { getSolutionData } from '@/sanity/sanity-utils'
import { Solutions } from '@/types/Solutions';
import { PortableText } from 'next-sanity';

const FactoryComponent = () => {
  const [solutions, setSolutions] = useState<Solutions[]>([]);

  useEffect(() => {
    const fetchSolutions = async () => {
      const projectsData = await getSolutionData();
      setSolutions(projectsData);
    };

    fetchSolutions();
  }, []); 

  return (
    <div>
        <div className="solution-comp-container">
            <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
            <div className="solution-comp-content">
                <h1>Factory Intelligence</h1>
            </div>
        </div>
        <div className='solution-about-content'>
        {solutions
        .filter((solution) => solution.name === 'Factory-Intelligence')
        .map((solution) => (
          <div key={solution._id} className='border border-grey-500 rounded-lg flex'>
            <div className='solution-content'>
            <PortableText value={solution.content} />
            </div>
          </div>
        ))}
            <div className='py-5'> 
              <a href="/Solution/Factory" className="solution-learn-more">Learn More</a>
            </div>
        </div>
    </div>

  );
};
export default FactoryComponent;