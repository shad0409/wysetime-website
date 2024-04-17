import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import StoryIcon from '../../public/OurStory.png';
import VisionIcon from '../../public/Vision.png';
import TechIcon from '../../public/Technology.png';
import { getHomeData } from '@/sanity/sanity-utils';
import { Home } from '@/types/Home';
import { PortableText } from 'next-sanity';

const AboutWyseTime = () => {
  const [home, setHomes] = useState<Home[]>([]);

  useEffect(() => {
    const fetchhome = async () => {
      const homeData = await getHomeData();
      setHomes(homeData);
    };

    fetchhome();
  }, []); 

  return (
    <>
      <div className="about-description-container">
      <h1 className='text-black text-center py-5'>About <span className="text-red-600">WyseTime</span></h1>
      <div className="about-description">
      {home
        .filter((home) => home.name === 'About-WyseTime')
        .map((home) => (
          <div key={home._id} className='border border-grey-500 rounded-lg flex'>
            <div className='product-content'>
            <PortableText value={home.content} />
            </div>
          </div>
        ))}
        </div>
        <div className="about-items-container">
        <div className='about-item-container'>
            <Image src={StoryIcon} height={100} width={100} alt="Our Story" objectFit='contain' />
            <h2>Our Story</h2>
            {home
            .filter((home) => home.name === 'Our-Story')
            .map((home) => (
              <div key={home._id} className='border border-grey-500 rounded-lg flex'>
                <p>
                <PortableText value={home.content} />
                </p>
              </div>
            ))}
        </div>

        <div className="about-item-container">
          <Image src={VisionIcon} height={100} width={100} alt="Our Vision" objectFit='contain' />
          <h2>Our Vision</h2>
          {home
            .filter((home) => home.name === 'Our-Vision')
            .map((home) => (
              <div key={home._id} className='border border-grey-500 rounded-lg flex'>
                <p>
                <PortableText value={home.content} />
                </p>
              </div>
            ))}
        </div>

        <div className="about-item-container">
          <Image src={TechIcon} height={100} width={100} alt="Technology" objectFit='contain' />
          <h2>Technology</h2>
          {home
            .filter((home) => home.name === 'Technology')
            .map((home) => (
              <div key={home._id} className='border border-grey-500 rounded-lg flex'>
                <p>
                <PortableText value={home.content} />
                </p>
              </div>
            ))}
        </div>
      </div>
      </div>


    </>
  );
};

export default AboutWyseTime;
