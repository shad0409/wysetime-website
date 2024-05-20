import React from 'react';
import PPE from '../../../public/ppe-ezgif.gif';
import Image from 'next/image';

const PPEDetection: React.FC = () => {
    return (
      <section className="product-left-section">
        <div className="product-left-content">
          <h2 className="product-left-title">PPE Detection</h2>
          <p className="product-left-description">
          Ensure total adherence to safety regulations with WyseTime’s PPE Detection. This AI-driven solution offers real-time monitoring and immediate notifications to enforce complete PPE compliance. Continuously scan each frame to detect any instance of PPE non-compliance, effectively reducing workplace hazards and ensuring employee safety.          </p>
        </div>
        <div className="product-left-image">
          <Image src={PPE} alt="PPE Detection" layout="responsive" width={500} height={300} />
        </div>
      </section>
    );
  }
  
  export default PPEDetection;