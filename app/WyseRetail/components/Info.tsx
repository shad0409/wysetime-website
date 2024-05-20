import React from 'react';
import '../../globals.css';

const Info: React.FC = () => {
    return (
      <section className="info-section">
        <div className="info-content">
          <h1 className="info-title">WyseRetail</h1>
          <p className="info-description">
            WyseRetail stands as a premier people counting solution, crafted to monitor, follow, and evaluate your customer flow, delivering analytical insights crucial for your marketing and operations teams. Detect essential customer behaviors like visit frequency, engagement duration, and queuing patterns. By gaining a deeper insight into your customer experiences, you can consistently prioritize their needs.
          </p>
          <a href="/Contact" className="info-button-link">Contact Us</a>
        </div>
      </section>
    );
  }
  
  export default Info;
