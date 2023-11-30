import React from 'react'
import { Link } from 'react-router-dom';

function FooterTop() {
  return (
    <div className="footer-top-container">
      <Link to={'/about'} className="footer-top">
        SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
      </Link>
    </div>
  );
}

export default FooterTop