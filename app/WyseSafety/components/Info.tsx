import React from 'react';
import '../../globals.css';

const Info: React.FC = () => {
    return (
      <section className="info-section">
        <div className="info-content">
          <h1 className="info-title">WyseSafety</h1>
          <p className="info-description">
            Wyse-Safety is a cutting-edge safety platform designed to enhance workplace security by monitoring PPE compliance, controlling access areas, and enforcing vehicle pathways.  This solution detects safety protocol breaches, unauthorized access, and improper vehicle use, ensuring a secure and well-regulated environment. Elevate your safety standards with WyseSafety.
          </p>
          <a href="/Contact" className="info-button-link">Contact Us</a>
        </div>
      </section>
    );
  }
  
  export default Info;
