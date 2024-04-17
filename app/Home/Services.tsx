// Services.tsx

import React, { useEffect, useState } from 'react';
import Service from './Service';

import serviceImage1 from '../../public/Services_1.jpeg';
import serviceImage2 from '../../public/Services_2.jpeg'; 
import { PortableText } from 'next-sanity';
import { getHomeData } from '@/sanity/sanity-utils';
import { Home } from '@/types/Home';

const ServicesWyseTime: React.FC = () => {
  const [home, setHomes] = useState<Home[]>([]);

  useEffect(() => {
    const fetchhome = async () => {
      const homeData = await getHomeData();
      setHomes(homeData);
    };

    fetchhome();
  }, []); 

  const Service1 = home.find(h => h.name === 'Comprehensive-Store-Insights')?.content;
  const Service2 = home.find(h => h.name === 'Video-Analytic-Technology')?.content;

  return (
    <div className="services-container">
      <h2 className='service-heading'>Our <span className="text-red-600">Services</span></h2>
      <Service 
        image={serviceImage1}
        title="Comprehensive In-store Insights"
        description={Service1}
        reverse={true}
      />
      <Service 
        image={serviceImage2}
        title="Video Analytic Technology"
        description={Service2}
        reverse={false}
      />
    </div>
  );
};

export default ServicesWyseTime;