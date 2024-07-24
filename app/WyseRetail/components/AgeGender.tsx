import React from 'react';
import AgeGender from '../../../public/Age_Gender.jpg';
import Image from 'next/image';

const AgeGenderAnalytics: React.FC = () => {
    return (
      <section className="product-left-section">
        <div className="product-left-content">
          <h2 className="product-left-title">Age & Gender Analytics</h2>
          <p className="product-left-description">
          Age & Gender Analytics leverages advanced video analytics to identify demographic patterns within your customer base. This intelligence allows for more targeted marketing strategies, product placements, and personalized shopping experiences, ultimately driving sales and customer loyalty.          </p>
        </div>
        <div className="product-left-image">
          <Image src={AgeGender} alt="Age & Gender Analytics" layout="contain" width={300} height={400} />
        </div>
      </section>
    );
  }
  
  export default AgeGenderAnalytics;