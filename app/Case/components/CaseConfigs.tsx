import React from 'react';
import Image from 'next/image';

interface CaseProps {
  image: any;
  title: string;
  description: string;
  reverse?: boolean; 
}

const CaseStudies: React.FC<CaseProps> = ({ image, title, description, reverse }) => (
  <div className={`case ${reverse ? 'reverse' : ''}`}>
    {reverse ? (
      <>
        <div className="case-image">
          <Image src={image} alt={title} width={500} height={500} objectFit='contain' />
        </div>
        <div className="case-content text-black">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </>
    ) : (
      <>
        <div className="case-content text-black">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="case-image">
          <Image src={image} alt={title} width={500} height={500} objectFit='contain' />
        </div>
      </>
    )}
  </div>
);

export default CaseStudies;