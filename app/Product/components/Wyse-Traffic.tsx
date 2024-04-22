import {getProjects} from '@/sanity/sanity-utils'
import { Project } from '@/types/Product';
import React, { useEffect, useState } from 'react';

import ProductsImage1 from '../../../public/traffic_gif.gif';
import { Image } from 'next-sanity/image';
import { PortableText } from 'next-sanity';
import Products from './ProductsConfig';

const AboutProducts1: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []); 

  const Product1 = projects.find(projects => projects.name === 'Wyse-Traffic')?.content;

  return (
    <div className="products-container1">
      <h2 className='product-heading'>Wyse <span className="text-red-600">Traffic</span></h2>
      <Products 
        image={ProductsImage1}
        description={Product1}
        reverse={true}
      />
    </div>
  );
};

export default AboutProducts1;