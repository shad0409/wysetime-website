import React from 'react';
import '../../globals.css';

const Info: React.FC = () => {
    return (
      <section className="info-section">
        <div className="info-content">
          <h1 className="info-title">WyseTraffic</h1>
          <p className="info-description">
            WyseTraffic is a leading traffic analytic platform to explore behaviour of vehicle, pedestrians and bikers and gain valuable data for traffic safety and design improvements. Detect vehicle classes, vehicle moving direction, people’s movement patterns, spot undesirable events and discover how your local active transportation evolves over time.
          </p>
          <a href="/Contact" className="info-button-link">Contact Us</a>
        </div>
      </section>
    );
  }
  
  export default Info;
