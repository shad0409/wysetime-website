import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import wyseTimeLogo from '../../public/WyseLogo.png'; // Path to your WyseTime logo
import emailIcon from '../../public/whatsapp-black.jpg'; // Path to your email icon
import phoneIcon from '../../public/EmailIcon-removebg-preview.png'; // Path to your phone icon

const Contact = () => {
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
      <div className="contact-section">
        <div className="contact-info">
          <Image src={wyseTimeLogo} alt="WyseTime Logo" className="wysetime-logo" />
          <h2>Contact Us</h2>
          <p>To schedule a product demo with our product consultants, please fill in your contact details</p>
          <div className="contact-method">
            <Image src={emailIcon} alt="Email Icon" className="contact-icon" />
            <p>info@wysetime.com</p>
          </div>
          <div className="contact-method">
            <Image src={phoneIcon} alt="Phone Icon" className="contact-icon" />
            <p>+6011-16426314</p>
          </div>
        </div>
        <div className="contact-form-container">
          <form onSubmit={handleFormSubmit} className="contact-form">
            <input type="text" id="full-name" name="full-name" placeholder="Full Name" />
            <input type="email" id="email" name="email" placeholder="Email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <input type="tel" id="contact-number" name="contact-number" placeholder="Contact Number" />
            <textarea id="message" name="message" placeholder="Additional Information"></textarea>
            <button type="submit" disabled={state.submitting} className="submit-button">Submit</button>
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
  
  export default Contact;