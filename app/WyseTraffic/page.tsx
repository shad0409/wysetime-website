'use client'
import { getProjects } from '@/sanity/sanity-utils'
import { useInView } from 'react-intersection-observer';

import "../globals.css";
import "./products.css";
import Footer from '../Footer';
import Info from './components/Info';
import Vehicle from './components/Vehicle';
import TrafficDataAnalytic from './components/TrafficData';
import TrafficJunctionAnalytic from './components/TrafficJunction';
import PedestrianMonitoring from './components/Pedestrian';
import TrafficFlowImprovement from './components/TrafficFlow';
import Contact from './components/Contact';

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [vehicleRef, vehicleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [trafficDataRef, trafficDataInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [trafficJunctionRef, trafficJunctionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pedestrianRef, pedestrianInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [trafficFlowRef, trafficFlowInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <header ref={heroRef} className={heroInView ? 'fadeInUp' : ''}>
      </header>
      <section>
        <div>
          <Info />
        </div>
        <div className={` ${vehicleInView ? 'fadeInUp' : ''}`} ref={vehicleRef}>
          <Vehicle />
        </div>
        <div className={` ${trafficDataInView ? 'fadeInUp' : ''}`} ref={trafficDataRef}>
          <TrafficDataAnalytic />
        </div>
        <div className={` ${trafficJunctionInView ? 'fadeInUp' : ''}`} ref={trafficJunctionRef}>
          <TrafficJunctionAnalytic />
        </div>
        <div className={` ${pedestrianInView ? 'fadeInUp' : ''}`} ref={pedestrianRef}>
          <PedestrianMonitoring />
        </div>
        <div className={` ${trafficFlowInView ? 'fadeInUp' : ''}`} ref={trafficFlowRef}>
          <TrafficFlowImprovement />
        </div>
        <div className={` ${contactInView ? 'fadeInUp' : ''}`} ref={contactRef}>
          <Contact />
        </div>
      </section>
      <footer className=''>
        <Footer />
      </footer>
    </>
  );
}
