import React from 'react';
import FooterTop from '../components/Home/FooterTop';
import FooterBottom from '../components/Home/FooterBottom';
import FooterMiddle from '../components/Home/FooterMiddle';

function Footer() {
  return (
    <div className="footer-container">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  );
}

export default Footer;
