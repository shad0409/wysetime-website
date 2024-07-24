import React from 'react';
import VehicleCounting from '../../../public/car-counting-30s.gif';
import Image from 'next/image';

const Vehicle: React.FC = () => {
    return (
      <section className="product-left-section">
        <div className="product-left-content">
          <h2 className="product-left-title">Vehicle Counting</h2>
          <p className="product-left-description">
            Count Vehicles, monitor driver behaviour and detect all potential problems in time. Utilize PTZ cameras or your current CCTV network. Embrace the future of traffic surveys.
          </p>
        </div>
        <div className="product-left-image">
          <Image src={VehicleCounting} alt="Vehicle Counting" layout="responsive" width={500} height={300} />
        </div>
      </section>
    );
  }
  
  export default Vehicle;