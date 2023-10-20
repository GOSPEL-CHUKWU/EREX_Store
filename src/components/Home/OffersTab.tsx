import React from 'react';
import { Link } from 'react-router-dom';

type Offers = {
  buttonText: string;
  headerText: string;
  offersTabImage: string;
};

function OffersTab({ buttonText, headerText, offersTabImage }: Offers) {
  return (
    <div
      className="offers-tab-container"
      style={{ backgroundImage: offersTabImage }}
    >
      {/* <img src="" className='offers-tab-image' alt="offer_image" /> */}
      <div className="offers-tab-content-container">
        <div className="offers-tab-header-text">{headerText}</div>
        <div className="offers-tab-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati
          exerc
        </div>
        <Link to={'/about'} className="offers-tab-button">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default OffersTab;
