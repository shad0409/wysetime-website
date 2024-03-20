'use client'
import {getProjects} from '@/sanity/sanity-utils'
import Image from 'next/image';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useInView } from 'react-intersection-observer';
import "./globals.css";

import Story from '../public/OurStory.png'
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div>
      <Parallax pages={5} className="animation">
        {/* Page 1 */}
        <ParallaxLayer offset={0} speed={2}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>

        {/* Page 2 */}
        <ParallaxLayer offset={0.5} speed={1}>
          <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in' }} >
            <h1 className='text-black text-7xl font-extrabold text-center py-5' style={{ marginTop: 'calc(60vh - 3.5rem)', border: '2px solid red' }}>About WyseTime</h1>
            <div className="flex justify-center py-10 leftAlignedImage space-y-5 space-x-40" >
              <Image src={Story} width={150} height={250} placeholder='blur' alt="Story"/>
              <h2 className='text-black text-7xl font-extrabold'>Our Story</h2>
              <h3 className='text-black text-7xl font-extrabold ml-4'>Description</h3>
            </div>

            <div className="flex items-center justify-center py-10 rightAlignedImage space-y-5 space-x-40">
              <h3 className='text-black text-7xl font-extrabold'>Description</h3>
              <h2 className='text-black text-7xl font-extrabold'>Our Vision</h2>
              <Image src={Story} width={150} height={250} placeholder='blur' alt="Story"/>
            </div>

            <div className="flex justify-center py-10 leftAlignedImage space-y-5 space-x-40" >
              <Image src={Story} width={150} height={250} placeholder='blur' alt="Story"/>
              <h2 className='text-black text-7xl font-extrabold'>Technology</h2>
              <h3 className='text-black text-7xl font-extrabold ml-4'>Description</h3>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 3 */}
        <ParallaxLayer offset={1} speed={1}>
          <h1 className='text-black text-7xl font-extrabold text-center' style={{ marginTop: 'calc(50vh - 3.5rem)' }}>Our Services</h1>
        </ParallaxLayer>

        {/* Page 4 */}
        <ParallaxLayer offset={1.5} speed={1}>
          <h1 className='text-black text-7xl font-extrabold text-center' style={{ marginTop: 'calc(50vh - 3.5rem)' }}>Quotes</h1>
        </ParallaxLayer>

        {/* Page 5 */}
        <ParallaxLayer offset={2} speed={1}>
          <h1 className='text-black text-center' style={{ marginTop: 'calc(50vh - 1.5rem)' }}>Our Partners</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}