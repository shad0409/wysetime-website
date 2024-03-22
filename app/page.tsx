'use client'
import {getProjects} from '@/sanity/sanity-utils'
import Image from 'next/image';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import "./globals.css";

// Individual Components
import HeroWyseTime from './Home/Hero'; 

import AboutWyseTime from './Home/About';

import ServicesWyseTime from './Home/Services';

import QuoteComponent from './Home/Quote';
import quotes from './Home/QuoteTypes/quotes';

import OurPartners from './Home/Partners';

export default function Home() {

  return (
    <div>
      <div>
        <Parallax pages={4}>
          <ParallaxLayer speed={0.5}>
          <HeroWyseTime/> 
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5}>
          <AboutWyseTime/> 
          </ParallaxLayer>
          
          <ParallaxLayer offset={2} speed={0.5}>
          <ServicesWyseTime/> 
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0.5}>
          <QuoteComponent quotes={quotes}/> 
          <OurPartners/>
          </ParallaxLayer>
{/* 
          <ParallaxLayer offset={3.5} speed={0.5}>
          <OurPartners/> 
          </ParallaxLayer> */}
        </Parallax>
        
      </div> 
    </div>
  
  );
}