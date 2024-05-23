import React from 'react';
import { useInView } from 'react-intersection-observer';

const Productivity: React.FC = () => {
  const [animationRef, animationInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="section">
      <h2>Enhance Your Productivity through <span className="highlight">AI</span></h2>
      <div className="content">
        <div className="features">
          <div className={` feature ${animationInView ? 'slideInLeft' : ''}`} ref={animationRef}>Customize Solutions</div>
          <div className={` feature ${animationInView ? 'slideInLeft' : ''}`} ref={animationRef}>Various Use Case</div>
          <div className={` feature ${animationInView ? 'slideInLeft' : ''}`} ref={animationRef}>High Performing AI</div>
        </div>
        <p className={`${animationInView ? 'slideInRight' : ''}`} ref={animationRef}>
          Discover the power of AI to build and deploy Intelligent Apps in days. <span className="highlight">WyseTime</span> is a Computer vision platform that makes it easy to train, combine and deploy advanced models to your code.
        </p>
      </div>
    </div>
  );
};

export default Productivity;

