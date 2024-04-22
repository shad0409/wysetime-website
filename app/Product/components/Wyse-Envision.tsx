import {getProjects} from '@/sanity/sanity-utils'
import { Project } from '@/types/Product';
import React, { useEffect, useState } from 'react';
import Products from './ProductsConfig';

import ProductsImage3 from '../../../public/Construction2.jpg';
import { Image } from 'next-sanity/image';
import { PortableText } from 'next-sanity';

const AboutProducts2: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []); 

  const Product3 = projects.find(projects => projects.name === 'Wyse-Envision')?.content;

  return (
    <div className="products-container2">
      <h2 className='product-heading'>Wyse <span className="text-red-600">Envision</span></h2>
      <Products 
        image={ProductsImage3}
        description={Product3}
        reverse={false}
      />
    </div>
  );
};

export default AboutProducts2;