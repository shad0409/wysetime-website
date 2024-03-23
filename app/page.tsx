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
import quotes from './Home/types/quotes';

import OurPartners from './Home/Partners';
import Footer from './Footer';
import { partners } from './Home/types/partner';

export default function Home() {

  return (
    <div>
      <HeroWyseTime/>
      <div>
        <div className='py-10'>
        <AboutWyseTime/>
        </div>
          <div className='py-10'>
          <ServicesWyseTime/> 
          </div>
            <div className='py-10'>
            <QuoteComponent quotes={quotes}/> 
            </div>
              <div className='py-10'>
              <OurPartners partners={partners}/>
              </div>
      </div> 
    </div>
  
  );
}