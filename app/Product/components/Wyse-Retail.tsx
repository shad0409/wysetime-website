import React from 'react';
import Products from './ProductsConfig';

import ProductsImage1 from '../../../public/retail_gif.gif'; // Ensure the correct path

const AboutProducts3: React.FC = () => {
  return (
    <div className="products-container">
      <h2 className='product-heading'>Wyse <span className="text-red-600">Retail</span></h2>
      <Products 
        image={ProductsImage1}
        title="Wyse-Retail"
        description="Wyse-Retail is transforming the landscape of retail management by harnessing the power of AI in image and video processing to extract valuable in-store analytics. 
        This avant-garde system scrutinizes visual data to track customer footfall, shopping patterns, and merchandise interaction within the retail space. 
        Its sophisticated recognition algorithms can discern customer demographics and behaviors, enabling retailers to tailor the shopping experience to individual preferences and enhance customer engagement. 
        By monitoring product placement and shelf inventory in real time, Wyse-Retail assists in maintaining optimal stock levels, thereby preventing overstocking or stockouts. 
        It also identifies popular products and ensures they are always accessible to customers. In addition, the system evaluates the effectiveness of in-store displays and promotional setups, 
        providing feedback that can be used to drive sales and improve marketing strategies. With its ability to quickly process and analyze vast amounts of visual data, Wyse-Retail empowers store managers with actionable insights, 
        leading to improved operational efficiency, increased sales, and a heightened customer shopping experience. This AI solution signifies a pivotal step towards the future of retail, 
        where data-driven strategies foster a dynamic and responsive consumer environment."
        reverse={true}
      />
    </div>
  );
};

export default AboutProducts3;