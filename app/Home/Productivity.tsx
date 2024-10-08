import React from 'react';
import { useInView } from 'react-intersection-observer';
import './home.css'

const Productivity: React.FC = () => {
  const [animationRef, animationInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="section">
      <h2>Enhance Your Productivity through <span className="highlight">AI</span></h2>
      <div className="content">
        <div className="features">
          <div>Customize Solutions</div>
          <div>Various Use Case</div>
          <div>High Performing AI</div>
        </div>
        <p>
          Discover the power of AI to build and deploy Intelligent Apps in days. <span className="highlight">WyseTime</span> is a Computer vision platform that makes it easy to train, combine and deploy advanced models to your code.
        </p>
      </div>
    </div>
  );
};

export default Productivity;

