import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/Home_BG.png';

const ContactHeader = () => {
    return (
        <div className="contact-container">
          <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
          <div className="contact-content">
            <h1>Contact Us</h1>
            <p>To schedule a product demo with our product consultants, please fill in your contact details</p>
            <form className="contact-form">
              <input type="text" id="full-name" placeholder="FULL NAME" />
              <input type="email" id="email" placeholder="EMAIL" />
              <input type="tel" id="contact-number" placeholder="CONTACT NUMBER" />
              <textarea id="message" placeholder="MESSAGE"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      );
};

export default ContactHeader;