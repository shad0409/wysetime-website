import React from 'react';
import Products from './ProductsConfig';

import ProductsImage1 from '../../../public/traffic_gif.gif'; // Ensure the correct path

const AboutProducts1: React.FC = () => {
  return (
    <div className="products-container">
      <h2 className='product-heading'>Wyse <span className="text-red-600">Traffic</span></h2>
      <Products 
        image={ProductsImage1}
        title="Wyse-Traffic"
        description="In today's rapidly evolving urban landscape, an innovative AI solution is making significant strides in enhancing traffic management and safety. 
        This cutting-edge system leverages advanced video and image processing technologies to meticulously monitor and analyze traffic flow, vehicle types, and pedestrian movements in real-time. 
        By deploying deep learning algorithms, it intelligently identifies patterns and anomalies within vast streams of visual data captured from strategically placed cameras across urban areas. 
        This AI-driven approach enables the detection of various traffic-related information, including congestion levels, speed detection, accident recognition, and illegal parking incidents. 
        Furthermore, it assists in optimizing traffic signals and reducing response times to emergencies by providing precise, real-time insights to traffic authorities. 
        The system's robust analytics capabilities also support long-term urban planning and infrastructure development by offering detailed traffic trend analyses. 
        This AI solution not only enhances road safety but also contributes to the creation of smarter, more efficient cities. By seamlessly integrating with existing traffic management systems, 
        it represents a significant leap forward in the pursuit of sustainable urban mobility, demonstrating the transformative potential of artificial intelligence in addressing complex challenges in traffic management and safety."
        reverse={true}
      />
    </div>
  );
};

export default AboutProducts1;