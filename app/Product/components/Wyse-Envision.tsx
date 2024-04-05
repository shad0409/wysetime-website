import React from 'react';
import Products from './ProductsConfig';

import ProductsImage1 from '../../../public/Traffic.jpg'; // Ensure the correct path

const AboutProducts2: React.FC = () => {
  return (
    <div className="products-container">
      <h2 className='product-heading'>Wyse <span className="text-red-600">Envision</span></h2>
      <Products 
        image={ProductsImage1}
        title="Wyse-Envision"
        description="About Wyse-Envision"
        reverse={false}
      />
    </div>
  );
};

export default AboutProducts2;