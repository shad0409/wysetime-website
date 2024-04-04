import React from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/AgeEstimation.jpeg'; 

const AgeEstimation: React.FC = () => {
  return (
    <div className="core-container">
      <h2 className='core-heading'>Age <span className="text-red-600">Estimation</span></h2>
      <CoreTech 
        image={ProductsImage1}
        title="Age Estimation"
        description="Age Estimation technology utilizes advanced algorithms and machine learning to analyze visual or auditory data for the purpose of determining an individual's age range. 
        This technology examines various biometric indicators, such as facial features in images or voice patterns in audio recordings, to make educated guesses about a person's age. 
        It finds application across diverse fields, including security, where it can restrict access to age-sensitive materials; marketing, to tailor content and advertisements to appropriate age demographics; 
        and social media, enhancing user engagement through personalized experiences. The accuracy of age estimation technology continues to improve with advancements in AI and the expansion of training datasets, 
        though it also faces challenges, such as ethical considerations regarding privacy and the potential for age discrimination. Despite these challenges, 
        age estimation technology represents a significant step forward in creating more personalized and secure digital environments, demonstrating the growing capability of AI to interpret and understand human characteristics."
        reverse={false}
      />
    </div>
  );
};

export default AgeEstimation;