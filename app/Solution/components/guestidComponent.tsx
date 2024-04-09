import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/Guest.jpeg';

const GuestComponent = () => {
  return (
    <div>
        <div className="solution-comp-container">
            <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
            <div className="solution-comp-content">
                <h1>Guest Identification</h1>
            </div>
        </div>
        <div className='solution-about-content'>
          <h2>Guest identification, powered by AI sophisticated image and video processing technologies, is setting new standards in hospitality and security sectors. 
            This innovative solution enhances customer experience and safety by quickly and accurately identifying guests as they enter hotels, events, or secured facilities. 
            Utilizing facial recognition algorithms, it streamlines check-in processes, personalizes guest services based on historical preferences, and ensures that only authorized individuals gain access to restricted areas. 
            By integrating with existing security systems, it also enhances surveillance capabilities, aiding in the prevention of unauthorized access and ensuring a safer environment for all guests. 
            This technology not only elevates operational efficiency but also significantly boosts guest satisfaction, marking a pivotal advancement in customer service and security management.</h2>
            <div className='py-5'>
              <a href="/Solution/Guest" className="solution-learn-more">Learn More</a>
            </div>
        </div>
    </div>

  );
};

export default GuestComponent;