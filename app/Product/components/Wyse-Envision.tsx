import React from 'react';
import Products from './ProductsConfig';

import ProductsImage1 from '../../../public/Construction2.jpg'; // Ensure the correct path

const AboutProducts2: React.FC = () => {
  return (
    <div className="products-container">
      <h2 className='product-heading'>Wyse <span className="text-red-600">Envision</span></h2>
      <Products 
        image={ProductsImage1}
        title="Wyse-Envision"
        description="Wyse-Envision is revolutionizing construction site management through its AI-powered video and image processing capabilities, which provide critical insights into daily operations. 
        This smart system meticulously scans visual data from construction environments, identifying and cataloging a multitude of safety and operational elements. 
        Utilizing state-of-the-art object recognition, it can pinpoint the presence of personnel, differentiate between various safety gear such as hard hats and high-visibility vests, 
        and detect crucial equipment from excavators to ladders. By continuously analyzing the feed, it ensures adherence to safety regulations, alerting supervisors to any breaches in protocol, 
        such as missing personal protective equipment (PPE) or unauthorized entry into hazardous zones. Beyond safety, this solution offers comprehensive analytics, 
        contributing to resource optimization and project timeline adherence by monitoring machinery usage and workforce distribution. Wyse-Envision’s deep learning algorithms adapt and improve over time, 
        offering increasingly refined data that enhances decision-making processes. This AI tool not only promises to mitigate risk and improve safety outcomes but also streamlines efficiency, 
        paving the way for a new era in construction site management where informed decisions lead to safer, more productive, and cost-effective project outcomes."
        reverse={false}
      />
    </div>
  );
};

export default AboutProducts2;