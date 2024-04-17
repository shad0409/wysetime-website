import React from 'react';
import Image from 'next/image';
import { PortableText } from 'next-sanity';

interface CoreProps {
  image: any;
  description: any;
  reverse?: boolean; 
}

const CoreTech: React.FC<CoreProps> = ({ image, description, reverse }) => (
  <div className={`core ${reverse ? 'reverse' : ''}`}>
    {reverse ? (
      <>
        <div className="core-image">
          <Image src={image} alt="image" width={500} height={500} objectFit='contain' />
        </div>
        <div className="core-content text-black">
          <PortableText value={description} />
        </div>
      </>
    ) : (
      <>
        <div className="core-content text-black">
          <PortableText value={description} />
        </div>
        <div className="core-image">
          <Image src={image} alt="image" width={500} height={500} objectFit='contain' />
        </div>
      </>
    )}
  </div>
);

export default CoreTech;