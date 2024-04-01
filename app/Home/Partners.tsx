import React from 'react';
import { partners } from './types/partner';

import Image, { StaticImageData } from 'next/image';

export interface Partner {
  id: number;
  name: string;
  logo: StaticImageData; // path to the logo image
}

interface PartnerComponentProps {
  partners: Partner[];
}

const OurPartners: React.FC<PartnerComponentProps> = () => {
  return (
    <div className="partners-container text-black">
      <h2>Our <span className="text-red-600">Partners</span></h2>
      <div className="slider">
        {partners.concat(partners).map((partner) => ( // duplicate the partners for a seamless transition
          <div className="partner" key={partner.id}>
            {/* Assuming you're using static images */}
            <Image src={partner.logo} height={400} width={300} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
