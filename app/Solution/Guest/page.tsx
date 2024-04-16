'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import heroImage from '../../../public/Guest.jpeg'

import '../../globals.css';
import Footer from '@/app/Footer';
import { useInView } from 'react-intersection-observer';
import { PortableText } from 'next-sanity';
import { SolutionsMore } from '@/types/SolutionsMore';
import { getSolutionMoreData } from '@/sanity/sanity-utils';

const GuestPage = () => {
  const [solutionsMore, setSolutionsMore] = useState<SolutionsMore[]>([]);

  useEffect(() => {
    const fetchSolutionsMore = async () => {
      const projectsData = await getSolutionMoreData();
      setSolutionsMore(projectsData);
    };

    fetchSolutionsMore();
  }, []); 

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      <div ref={heroRef} className={` hero-container py-10 ${heroInView ? 'fadeInUp' : ''}`}>
        <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
        <div className="hero-content">
          <h1>Guest Identification</h1>
        </div>
      </div>
      <div ref={aboutRef} className={` ${aboutInView ? 'fadeInUp' : ''}`}>
      {solutionsMore
        .filter((solution_more) => solution_more.slug === 'guest1')
        .map((solution_more) => (
          <div key={solution_more._id}>

            <div className="learn-more-container">
              <h1 className='text-black text-center py-5'>{solution_more.name}</h1>

              <div className="about-learn-more">
                <PortableText value={solution_more.content} />
              </div>
            </div>  
          </div>

    
        ))}
        
        {solutionsMore
        .filter((solution_more) => solution_more.slug === 'guest2')
        .map((solution_more) => (
          <div key={solution_more._id}>

            <div className="learn-more-container">
              <h1 className='text-black text-center py-5'>{solution_more.name}</h1>

              <div className="about-learn-more">
                <PortableText value={solution_more.content} />
              </div>
            </div>  
          </div>

    
        ))}

        {solutionsMore
        .filter((solution_more) => solution_more.slug === 'guest3')
        .map((solution_more) => (
          <div key={solution_more._id}>

            <div className="learn-more-container">
              <h1 className='text-black text-center py-5'>{solution_more.name}</h1>

              <div className="about-learn-more">
                <PortableText value={solution_more.content} />
              </div>
            </div>  
          </div>
        ))}
    </div>
    <Footer />
  </div>
);
}

export default GuestPage;