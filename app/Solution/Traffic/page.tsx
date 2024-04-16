'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import heroImage from '../../../public/TrafficSolutions.jpg'

import '../../globals.css';
import Footer from '@/app/Footer';
import { useInView } from 'react-intersection-observer';
import { SolutionsMore } from '@/types/SolutionsMore';
import { getSolutionMoreData } from '@/sanity/sanity-utils';
import { PortableText } from 'next-sanity';

const TrafficPage = () => {
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
          <h1>Traffic Intelligence</h1>
        </div>
      </div>
      <div ref={aboutRef} className={` ${aboutInView ? 'fadeInUp' : ''}`}>
      {solutionsMore
        .filter((solution_more) => solution_more.slug === 'traffic1')
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
        .filter((solution_more) => solution_more.slug === 'traffic2')
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
        .filter((solution_more) => solution_more.slug === 'traffic3')
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

export default TrafficPage;