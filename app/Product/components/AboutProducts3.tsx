import React from 'react';
import Products from './ProductsConfig';

import ProductsImage1 from '../../../public/Traffic.jpg'; // Ensure the correct path

const AboutProducts3: React.FC = () => {
  return (
    <div className="products-container">
      <h2 className='product-heading'>Product <span className="text-red-600">3</span></h2>
      <Products 
        image={ProductsImage1}
        title="Product 3"
        description="About Product"
        reverse={true}
      />
    </div>
  );
};

export default AboutProducts3;