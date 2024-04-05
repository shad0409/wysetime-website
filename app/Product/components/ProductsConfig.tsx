import React from 'react';
import Image from 'next/image';

interface ProductProps {
  image: any;
  title: string;
  description: string;
  reverse?: boolean; 
}

const Products: React.FC<ProductProps> = ({ image, title, description, reverse }) => (
  <div className={`product ${reverse ? 'reverse' : ''}`}>
    {reverse ? (
      <>
        <div className="product-image">
          <Image src={image} alt={title} width={500} height={500} objectFit='contain' />
        </div>
        <div className="product-content text-black">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </>
    ) : (
      <>
        <div className="product-content text-black">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="product-image">
          <Image src={image} alt={title} width={500} height={500} objectFit='contain' />
        </div>
      </>
    )}
  </div>
);

export default Products;