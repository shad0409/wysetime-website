import React from 'react';
import Store from '../../../public/store_video-ezgif.gif'
import Image from 'next/image';

const StoreAnalytic: React.FC = () => {
    return (
      <section className="product-left-section">
        <div className="product-left-content">
          <h2 className="product-left-title">Store Analytics</h2>
          <p className="product-left-description">
          Store Analytics delves deep into consumer behavior, providing retailers with a detailed overview of how customers interact with their environment. From tracking sales conversion rates to analyzing shopping patterns, this solution equips you with the data needed to tailor experiences and maximize retail performance.          </p>
        </div>
        <div className="product-left-image">
          <Image src={Store} alt="Store Analytics" layout="responsive" width={500} height={300} />
        </div>
      </section>
    );
  }
  
  export default StoreAnalytic;