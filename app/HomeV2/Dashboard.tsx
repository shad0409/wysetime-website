import React from 'react';
import Image from 'next/image';
import dashboardImage from '../../public/3.png';

const DashboardSection: React.FC = () => {
    return (
      <section className="dashboard-section">
        <h2 className="dashboard-title">Revolutionize Your Industry with <span>WyseTime</span> Vision AI</h2>
        <div className="dashboard-content-container">
          <div className="dashboard-content">
            <h3>Data & Analytic Dashboard</h3>
            <h1>Unlocking Actionable Insights with Vision AI</h1>
            <p>Transform data into decisions with WyseTime video analytics dashboard—your all-in-one solution for real-time insights and actionable intelligence.</p>
            <a href="/Contact" className="dashboard-button-link">View Demo</a>
          </div>
          <div className="dashboard-image-container">
            <Image src={dashboardImage} alt="Dashboard" className="dashboard-image" layout="fill" objectFit="cover" objectPosition="left" />
          </div>
        </div>
      </section>
    );
  }

export default DashboardSection;
