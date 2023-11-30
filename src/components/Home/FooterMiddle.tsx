import React from 'react';

type genderItemComponent = {
  header: string;
  linkOne: string;
  linkTwo: string;
  linkThree: string;
  linkFour: string;
  linkFive: string;
};

const GenderItem = ({
  header,
  linkOne,
  linkTwo,
  linkThree,
  linkFour,
  linkFive,
}: genderItemComponent) => {
  return (
    <div className="footer-middle-second-and-third-content">
      <div className="footer-middle-second-and-third-header">{header}</div>
      <div className="footer-middle-second-and-third-links">
        <div className='footer-middle-second-and-third-link'>{linkOne}</div>
        <div className='footer-middle-second-and-third-link'>{linkTwo}</div>
        <div className='footer-middle-second-and-third-link'>{linkThree}</div>
        <div className='footer-middle-second-and-third-link'>{linkFour}</div>
        <div className='footer-middle-second-and-third-link'>{linkFive}</div>
      </div>
    </div>
  );
};

function FooterMiddle() {
  return (
    <div className="footer-middle-container">
      <div className="footer-middle-first-content">
        <div className="logo footer-middle-logo">EREX</div>
        <div className="footer-middle-motto">
          The best look anytime, anywhere.
        </div>
      </div>
      <GenderItem
        header="For Her"
        linkOne="Women Jeans"
        linkTwo="Tops and Shirts"
        linkThree="Women Jackets"
        linkFour="Heels and Flats"
        linkFive="Women Accessories"
      />
      <GenderItem
        header="For Him"
        linkOne="Men Jeans"
        linkTwo="Men Shirts"
        linkThree="Men Shoes"
        linkFour="Men Accessories"
        linkFive="Men Jackets"
      />
      <div className="footer-middle-last-content">
        <div className="footer-middle-second-and-third-header">Subscribe</div>
        <div>
          <input
            type="text"
            placeholder="Your email address..."
            className="footer-email"
          />
        </div>
        <div className="footer-subscribe-btn">Subscribe</div>
      </div>
    </div>
  );
}

export default FooterMiddle;
