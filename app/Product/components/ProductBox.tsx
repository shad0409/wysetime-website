import React from 'react';
import Image from 'next/image';


const ProductsBox = () => {
    return (
        <div className="products-box-container">
        <div className='products-box-individual-container'>
            <h2>Wyse-Traffic</h2>
        </div>

        <div className="products-box-individual-container">
          <h2>Wyse-Envision</h2>
        </div>

        <div className="products-box-individual-container">
          <h2>Wyse-Retail</h2>
        </div>
      </div>
      );
};

export default ProductsBox;