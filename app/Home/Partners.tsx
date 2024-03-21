import React from 'react';

interface Partner {
  id: number;
  name: string;
  logo: string; // path to the logo image
}

const partners: Partner[] = [
  // Example partner objects
  { id: 1, name: 'Partner One', logo: 'path-to-logo-1.png' },
  { id: 2, name: 'Partner Two', logo: 'path-to-logo-2.png' },
  // ...more partners
];

const OurPartners: React.FC = () => {
  return (
    <div className="partners-container">
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
