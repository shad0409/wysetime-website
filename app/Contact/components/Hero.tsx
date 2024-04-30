import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import heroImage from '../../../public/Contact.jpeg';

const ContactHeader = () => {
  const [state, handleSubmit] = useForm("xrgnjppv");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(event);
    setShowSuccessPopup(true);
    setTimeout(() => {
      window.location.reload(); 
    }, 2000); 
  };

    return (
        <div className="contact-container">
          <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
          <div className="contact-content">
            <h1>Contact Us</h1>
            <p>To schedule a product demo with our product consultants, please fill in your contact details</p>
            <form onSubmit={handleFormSubmit} className="contact-form">
            <input type="text" id="full-name" name="full-name" placeholder="FULL NAME" />
            <input type="email" id="email" name="email" placeholder="EMAIL" />      
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}></ValidationError>
            <input type="tel" id="contact-number" name="contact-number" placeholder="CONTACT NUMBER" />
            <textarea id="message" name="message" placeholder="MESSAGE"></textarea>
              <button type="submit" disabled={state.submitting}>Send Message</button>
            </form>
          </div>
          {showSuccessPopup && (
            <div className="success-popup">
              <p>Successfully Submitted!</p>
            </div>
          )}
        </div>
      );
};

export default ContactHeader;