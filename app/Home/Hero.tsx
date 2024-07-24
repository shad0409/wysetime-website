import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import heroImage from '../../public/pedestrianmonitoring-ezgif.gif';
import heroImage2 from '../../public/retail_analytics_solutions_by_datafromsky_-_counts_heatmaps_distancing1080p-ezgif.gif';
import heroImage3 from '../../public/ppe-image.jpg';
import './home.css'

const images = [heroImage, heroImage2, heroImage3];

const HeroWyseTime2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualChange, setIsManualChange] = useState(false);

  useEffect(() => {
    if (isManualChange) {
      setIsManualChange(false);
      return;
    }
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isManualChange]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsManualChange(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsManualChange(true);
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Empowering Actionable Insights with <span className="highlight">Vision AI</span></h1>
        <p><span className="highlight">WyseTime</span> transforms video and images into strategic intelligence & actionable insights to revolutionize your business.</p>
        <a href="/Contact" className="hero-button-link">Contact Us</a>
      </div>
      <div className="hero-image-container">
        <div className="hero-image">
          <Image src={images[currentIndex]} alt="Empower Your Business" layout="fill" objectFit="cover" />
        </div>
        {/* <button className="hero-arrow hero-arrow-left" onClick={handlePrev}>&lt;</button> */}
        <button className="hero-arrow hero-arrow-right" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default HeroWyseTime2;
