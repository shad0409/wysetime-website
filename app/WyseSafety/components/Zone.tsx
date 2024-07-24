import React from 'react';
import Zone from '../../../public/zone-control-ezgif.com-video-to-gif-converter.gif';
import Image from 'next/image';

const ZoneControl: React.FC = () => {
    return (
      <section className="product-right-section">
        <div className="product-right-image">
          <Image src={Zone} alt="Zone Control" layout="responsive" width={500} height={300} />
        </div>
        <div className="product-right-content">
          <h2 className="product-right-title">Zone Control</h2>
          <p className="product-right-description">
          Zone Control by WyseTime utilizes advanced Vision AI to maintain strict safety and operational protocols within designated areas. Achieve precise exclusion zone enforcement with seamless integration and real-time alerts. Monitor unauthorized entries and manage risk dynamically, creating a safer, more controlled work environment.          </p>
        </div>
      </section>
    );
  }
  
  export default ZoneControl;