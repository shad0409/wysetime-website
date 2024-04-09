import React from 'react';
import Image from 'next/image';

import Phone from '../../../public/Phone.png';
import Location from '../../../public/Location.png';

const ContactInfo = () => {
  return (
    <>
      <div className="contact-items-container">
        <div className='contact-item-container'>
            <Image src={Phone} height={100} width={100} alt="Our Story" objectFit='contain' />
            <h2>info@wysetime.com</h2>
            <h2>Tel: +6011-16426314</h2>
        </div>
        <div className='contact-item-container'>
          <Image src={Location} height={100} width={100} alt="Our Vision" objectFit='contain' />
          <h2>12 (First Floor), Jalan Lembah Permai 1,   Taman Lembah Permai, 14000, Bukit Mertajam, Penang</h2>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
