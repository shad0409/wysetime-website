import React from 'react';
import Image from 'next/image';

interface ServiceProps {
  image: any;
  title: string;
  description: string;
  reverse?: boolean; 
}

const Service: React.FC<ServiceProps> = ({ image, title, description, reverse }) => (
  <div className={`service ${reverse ? 'reverse' : ''}`}>
    {reverse ? (
      <>
        <div className="service-image">
          <Image src={image} alt={title} width={350} height={250} objectFit='contain' />
        </div>
        <div className="service-content text-black">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </>
    ) : (
      <>
        <div className="service-content text-black">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="service-image">
          <Image src={image} alt={title} width={350} height={250} objectFit='contain' />
        </div>
      </>
    )}
  </div>
);

export default Service;