'use client'
import {getProjects} from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "../globals.css";

import Footer from '../Footer';
import Contact from './components/Contact';

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header>
        <Contact />
      </header>
      <footer className=''>
        <Footer />
      </footer>
    </>
  );
}