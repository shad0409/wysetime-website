import React from 'react';
import Products from './ProductsConfig';

import ProductsImage1 from '../../../public/Traffic.jpg'; // Ensure the correct path

const AboutProducts1: React.FC = () => {
  return (
    <div className="products-container">
      <h2 className='product-heading'>Wyse <span className="text-red-600">Traffic</span></h2>
      <Products 
        image={ProductsImage1}
        title="Wyse-Traffic"
        description="About Wyse-Traffic"
        reverse={true}
      />
    </div>
  );
};

export default AboutProducts1;