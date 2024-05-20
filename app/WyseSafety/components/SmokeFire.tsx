import React from 'react';
import SmokeFire from '../../../public/car-counting-30s.gif';
import Image from 'next/image';

const SmokeAndFire: React.FC = () => {
    return (
      <section className="product-left-section">
        <div className="product-left-content">
          <h2 className="product-left-title">Smoke and Fire</h2>
          <p className="product-left-description">
          Mitigate risks of fire hazards with WyseTime Smoke and Fire Detection system. Equipped with advanced detection capabilities, this solution quickly identifies the early signs of smoke and fire, enabling prompt response to prevent damage, business disruption, and ensure safety.          </p>
        </div>
        <div className="product-left-image">
          <Image src={SmokeFire} alt="Smoke and Fire" layout="responsive" width={500} height={300} />
        </div>
      </section>
    );
  }
  
  export default SmokeAndFire;