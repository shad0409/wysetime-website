import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/Construction1.jpg'

const ProductsHero = () => {
  return (
    <div className="hero-container">
      <Image src={heroImage} alt="ProductImage" layout='fill' objectFit='cover' />
      <div className="hero-content">
        <h1>PRODUCTS</h1>
      </div>
    </div>
  );
};

export default ProductsHero;