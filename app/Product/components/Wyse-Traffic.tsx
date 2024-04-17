import {getProjects} from '@/sanity/sanity-utils'
import { Project } from '@/types/Product';
import React, { useEffect, useState } from 'react';

import { Image } from 'next-sanity/image';
import { PortableText } from 'next-sanity';

const AboutProducts1: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []); 

  return (
    <div className="products-container1">
      <h2 className='product-heading'>Wyse <span className="text-red-600">Traffic</span></h2>
      {projects
        .filter((project) => project.name === 'Wyse-Traffic')
        .map((project) => (
          <div key={project._id} className='border border-grey-500 rounded-lg flex'>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={500}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className='product-content'>
            <PortableText value={project.content} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default AboutProducts1;