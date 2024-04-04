import React from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/ObjectRecognition.jpeg'; 

const ObjectRecognition: React.FC = () => {
  return (
    <div className="core-container">
      <h2 className='core-heading'>Object <span className="text-red-600">Recognition</span></h2>
      <CoreTech 
        image={ProductsImage1}
        title="Object Recognition"
        description="Object Recognition technology, a cornerstone of modern artificial intelligence (AI) systems, involves the identification and classification of various objects within digital images or video streams. 
        This capability is foundational to a myriad of applications, ranging from autonomous vehicles navigating through traffic, to security systems identifying potential threats, 
        and even to retail environments where it powers inventory management through visual product identification. At its core, object recognition utilizes complex algorithms 
        and deep learning models to process visual data, discern patterns, and categorize objects based on trained datasets. These models are capable of recognizing a wide array of objects, including faces, 
        animals, and inanimate items, with remarkable accuracy and speed. The technology not only enhances user interactions with digital devices through features like photo tagging but also plays a pivotal role in the development of smart cities, 
        where it contributes to efficient public space management and safety monitoring. As it continues to evolve, object recognition is set to unlock even more innovative applications, further integrating AI into the fabric of daily life."
        reverse={true}
      />
    </div>
  );
};

export default ObjectRecognition;