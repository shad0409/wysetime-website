import React from 'react';
import Image from 'next/image';

interface ServiceProps {
  image: any;
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ image, title, description }) => (
  <div className="service">
    <div className="service-image">
      <Image src={image} alt={title} width={500} height={300} objectFit='contain' />
    </div>
    <div className="service-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Service;
