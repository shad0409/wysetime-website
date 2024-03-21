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
        <Parallax pages={5}>
          <ParallaxLayer speed={0.5}>
          <HeroWyseTime/> 
          </ParallaxLayer>

          <ParallaxLayer offset={1}>
          <AboutWyseTime/> 
          </ParallaxLayer>
          
          <ParallaxLayer offset={2}>
          <ServicesWyseTime/> 
          </ParallaxLayer>

          <ParallaxLayer offset={3}>
          <QuoteComponent quotes={quotes}/> 
          </ParallaxLayer>

          <ParallaxLayer offset={4}>
          <OurPartners/> 
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}