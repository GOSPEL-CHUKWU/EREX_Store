import React from 'react';
import {
  BiLogoAmazon,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoShopify,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi';

function FooterBottom() {
  return (
    <div className="footer-bottom-container">
      <div className="footer-bottom-left-content">
        Copyright &copy; {new Date().getFullYear()} Fullcloset. Powered by
        Fullcloset.
      </div>
      <div className="social-icons">
        <a
          className="social-icon"
          href={'http://www.facebook.com'}
          rel="noopener noreferrer"
          target="_blank"
        >
          <BiLogoFacebook />
        </a>
        <a
          className="social-icon"
          href={'https://www.youtube.com'}
          rel="noopener noreferrer"
          target="_blank"
        >
          <BiLogoYoutube />
        </a>
        <a
          className="social-icon"
          href={'https://www.twitter.com'}
          rel="noopener noreferrer"
          target="_blank"
        >
          <BiLogoTwitter />
        </a>
        <a
          className="social-icon"
          href={'https://www.instagram.com'}
          rel="noopener noreferrer"
          target="_blank"
        >
          <BiLogoInstagram />
        </a>
        <a
          className="social-icon"
          href={'https://www.shopify.com'}
          rel="noopener noreferrer"
          target="_blank"
        >
          <BiLogoShopify />
        </a>
        <a
          className="social-icon"
          href={'https://www.amazon.com'}
          rel="noopener noreferrer"
          target="_blank"
        >
          <BiLogoAmazon />
        </a>
      </div>
    </div>
  );
}

export default FooterBottom;
