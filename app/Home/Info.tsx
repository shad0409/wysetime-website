import React from 'react';
import cameraIcon from '../../public/cctv.png';
import aiIcon from '../../public/ai chip.png';
import dashboardIcon from '../../public/dashboard.jpg';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import './home.css'

const HowItWorks: React.FC = () => {
    const [animationRef, animationInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="how-it-works-container">
            <h2>How it works</h2>
            <div className="steps">
                <div className="step">
                    <Image src={cameraIcon} alt="Camera" width={200} height={200} />
                    <p>Start with your existing security camera infrastructure</p>
                </div>
                <div className="step">
                    <Image src={aiIcon} alt="AI" width={200} height={200} />
                    <p>Pick-n-Choose VisionAI Apps you want to run</p>
                </div>
                <div className="step">
                    <Image src={dashboardIcon} alt="Dashboard" width={200} height={200} />
                    <p>Dashboard Monitoring through our web-app</p>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
