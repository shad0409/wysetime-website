import React from 'react';
import Image from 'next/image';

interface CoreProps {
  image: any;
  title: string;
  description: string;
  reverse?: boolean; 
}

const CoreTech: React.FC<CoreProps> = ({ image, title, description, reverse }) => (
  <div className={`core ${reverse ? 'reverse' : ''}`}>
    {reverse ? (
      <>
        <div className="core-image">
          <Image src={image} alt={title} width={500} height={500} objectFit='contain' />
        </div>
        <div className="core-content text-black">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </>
    ) : (
      <>
        <div className="core-content text-black">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="core-image">
          <Image src={image} alt={title} width={500} height={500} objectFit='contain' />
        </div>
      </>
    )}
  </div>
);

export default CoreTech;