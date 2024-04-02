import React from 'react';
import Products from './ProductsConfig';

import ProductsImage1 from '../../../public/Traffic.jpg'; // Ensure the correct path

const AboutProducts2: React.FC = () => {
  return (
    <div className="products-container">
      <h2 className='product-heading'>Product <span className="text-red-600">2</span></h2>
      <Products 
        image={ProductsImage1}
        title="Product 2"
        description="About Product"
        reverse={false}
      />
    </div>
  );
};

export default AboutProducts2;