import React from "react";
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import WyseLogo from '../public/WyseLogo.png';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-social">
          <Image src={WyseLogo} alt="WyseTime Logo" width={250} height={100} className="footer-logo" />
          <div className="social-icons">
            <a href="https://www.instagram.com/wysetime/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/wysetime/?locale=eo_EO" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/wysetime/about/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
          <p className="address">
            12 (First Floor), Jalan Lembah Permai 1, Taman Lembah Permai, 14000 Bukit Mertajam, Pulau Pinang
          </p>
          <p className="copyright">
            © 2024 WyseTime Technologies All rights reserved
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-heading">Products</h3>
            <ul className="footer-list">
              <li><a href="/WyseTraffic">Wyse-Traffic</a></li>
              <li><a href="/WyseRetail">Wyse-Retail</a></li>
              <li><a href="/WyseSafety">Wyse-Safety</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-list">
              <li><a href="/">Home</a></li>
              <li><a href="/Industries">Industries</a></li>
              <li><a href="/Customization">Customization</a></li>
              <li><a href="/Contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

