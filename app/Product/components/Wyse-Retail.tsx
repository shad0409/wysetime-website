import {getProjects} from '@/sanity/sanity-utils'
import { Project } from '@/types/Product';
import React, { useEffect, useState } from 'react';
import Products from './ProductsConfig';

import ProductsImage2 from '../../../public/retail_gif.gif';
import { Image } from 'next-sanity/image';
import { PortableText } from 'next-sanity';

const AboutProducts3: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []); 

  const Product2 = projects.find(projects => projects.name === 'Wyse-Retail')?.content;

  return (
    <div className="products-container3">
      <h2 className='product-heading'>Wyse <span className="text-red-600">Retail</span></h2>
      <Products 
        image={ProductsImage2}
        description={Product2}
        reverse={true}
      />
    </div>
  );
};

export default AboutProducts3;