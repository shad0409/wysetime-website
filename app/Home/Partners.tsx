import React from 'react';
import { partners } from './types/partner';

export interface Partner {
  id: number;
  name: string;
  logo: string; // path to the logo image
}

interface PartnerComponentProps {
  partners: Partner[];
}

const OurPartners: React.FC<PartnerComponentProps> = () => {
  return (
    <div className="partners-container py-20">
      <h2>Our Partners</h2>
      <div className="slider">
        {partners.concat(partners).map((partner) => ( // duplicate the partners for a seamless transition
          <div className="partner" key={partner.id}>
            {/* Assuming you're using static images */}
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
