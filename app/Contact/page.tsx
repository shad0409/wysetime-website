'use client'
import {getProjects} from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "../globals.css";

// Individual Components
import ContactHeader from './components/Hero';
import ContactInfo from './components/Info';

import Footer from '../Footer';
import Contact from '../HomeV2/Contact';

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
        <Contact />
      </header>
      <footer className=''>
        <Footer />
      </footer>
    </>
  );
}