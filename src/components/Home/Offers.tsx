import React from 'react';
import OffersTab from './OffersTab';
import offer1 from '../../assets/offer_1.jpg';
import offer2 from '../../assets/offer_2.jpg';
import offer3 from '../../assets/offer_3.jpg';
import jumia from '../../assets/jumia.png';
import backflips from '../../assets/backflips.png';
import garage from '../../assets/garage.png';
import frozenFour from '../../assets/frozenFour.png';
import yarnInspiration from '../../assets/yarnspirations.png';

function Offers() {
  return (
    <div className="offers-container">
      <div className="offers-sponsors">
        <img className="offers-sponsor" src={jumia} alt="sponsor" />
        <img className="offers-sponsor" src={backflips} alt="sponsor" />
        <img className="offers-sponsor" src={garage} alt="sponsor" />
        <img className="offers-sponsor" src={frozenFour} alt="sponsor" />
        <img className="offers-sponsor" src={yarnInspiration} alt="sponsor" />
      </div>
      <div className="offers-tabs">
        <OffersTab
          buttonText="Shop Now"
          headerText="20% off on Tank Tops"
          offersTabImage={`url(${offer1})`}
        />
        <OffersTab
          buttonText="Shop Now"
          headerText="Latest Earwears for you"
          offersTabImage={`url(${offer2})`}
        />
        <OffersTab
          buttonText="Check Out"
          headerText="50% off on sneakers"
          offersTabImage={`url(${offer3})`}
        />
      </div>
    </div>
  );
}

export default Offers;
