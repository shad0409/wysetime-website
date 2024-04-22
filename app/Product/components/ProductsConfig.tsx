import React from 'react';
import Image from 'next/image';
import { PortableText } from 'next-sanity';

interface ProductProps {
  image: any;
  description: any;
  reverse?: boolean; 
}

const Products: React.FC<ProductProps> = ({ image, description, reverse }) => (
  <div className={`product ${reverse ? 'reverse' : ''}`}>
    {reverse ? (
      <>
        <div className="product-image">
          <Image src={image} alt="product-image" width={500} height={500} objectFit='contain' />
        </div>
        <div className="product-content text-black">
          <PortableText value={description} />
        </div>
      </>
    ) : (
      <>
        <div className="product-content text-black">
          <PortableText value={description} />
        </div>
        <div className="product-image">
          <Image src={image} alt="product-image" width={500} height={500} objectFit='contain' />
        </div>
      </>
    )}
  </div>
);

export default Products;