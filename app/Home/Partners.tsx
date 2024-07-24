import React from 'react';
import awsLogo from '../../public/AmazonAWS.png';
import nvidiaLogo from '../../public/NVIDIA.png';
import microsoftLogo from '../../public/Microsoft.jpg';
import './home.css'

import '../globals.css';
import Image from 'next/image';

const Partners = () => {
    return (
      <div className="partners-section">
        <h2>In Partnership with</h2>
        <div className="partners-logos">
          <Image src={awsLogo} alt="AWS" className="partner-logo" width={200} height={150} />
          <Image src={nvidiaLogo} alt="NVIDIA" className="partner-logo" width={250} height={200} />
          <Image src={microsoftLogo} alt="Microsoft" className="partner-logo" width={300} height={200} />
        </div>
      </div>
    );
  }

export default Partners;