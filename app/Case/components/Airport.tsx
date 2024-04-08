import React from 'react';
import CaseStudies from './CaseConfigs';

import ProductsImage1 from '../../../public/FacialMatching.jpeg'; 

const Airport: React.FC = () => {
  return (
    <div className="case-container">
      <CaseStudies 
        image={ProductsImage1}
        title="Facial Matching"
        description="Facial Matching technology is a sophisticated facet of biometric authentication that compares a captured facial image with images from a database to find an exact match, 
        thereby verifying an individual's identity. This technology employs complex algorithms and deep learning techniques to analyze specific facial features — such as the distance between the eyes, 
        the shape of the cheekbones, and the contour of the lips — across different images, even adjusting for variations in lighting, facial expressions, and angles. 
        Its applications are vast and varied, encompassing security systems for identity verification, smartphone unlocking mechanisms, and automated border control checks, 
        enhancing both convenience and safety. Facial Matching is also instrumental in forensic investigations, helping to identify individuals in surveillance footage. 
        Despite its utility, the technology faces challenges regarding privacy concerns, the potential for misuse, and the need for regulatory oversight to prevent discrimination and protect individual rights.
        Nonetheless, as the technology advances and these concerns are addressed, Facial Matching continues to revolutionize security and personal identification processes."
        reverse={true}
      />
    </div>
  );
};

export default Airport;