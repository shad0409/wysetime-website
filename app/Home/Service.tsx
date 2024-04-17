import React from 'react';
import Image from 'next/image';
import { PortableText } from 'next-sanity';

interface ServiceProps {
  image: any;
  title: string;
  description: any;
  reverse?: boolean; 
}

const Service: React.FC<ServiceProps> = ({ image, title, description, reverse }) => (
  <div className={`service ${reverse ? 'reverse' : ''}`}>
    {reverse ? (
      <>
        <div className="service-image">
          <Image src={image} alt={title} width={350} height={350} objectFit='contain' />
        </div>
        <div className="service-content text-black">
          <h3>{title}</h3>
          <PortableText value={description} />
        </div>
      </>
    ) : (
      <>
        <div className="service-content text-black">
          <h3>{title}</h3>
          <PortableText value={description} />
        </div>
        <div className="service-image">
          <Image src={image} alt={title} width={350} height={350} objectFit='contain' />
        </div>
      </>
    )}
  </div>
);

export default Service;