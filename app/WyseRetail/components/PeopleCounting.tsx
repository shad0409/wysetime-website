import React from 'react';
import PeopleCounting from '../../../public/people-counting-ezgif.gif';
import Image from 'next/image';

const People: React.FC = () => {
    return (
      <section className="product-left-section">
        <div className="product-left-content">
          <h2 className="product-left-title">People Counting</h2>
          <p className="product-left-description">
          People Counting provides precise tracking and analysis of foot traffic within your retail spaces, offering valuable insights into customer counts and movement patterns. This data is essential for optimizing store layout and staffing, ensuring you meet your customer needs efficiently.          </p>
        </div>
        <div className="product-left-image">
          <Image src={PeopleCounting} alt="People Counting" layout="responsive" width={500} height={300} />
        </div>
      </section>
    );
  }
  
  export default People;