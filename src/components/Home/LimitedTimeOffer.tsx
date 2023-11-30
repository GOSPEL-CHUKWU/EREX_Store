import React from 'react';
import { Link } from 'react-router-dom';

function LimitedTimeOffer() {
  return (
    <div className="limited-time-offer-container">
      <div className="limited-time-offer-header">Limited Time Offer</div>
      <div className="limited-time-offer-sub-container">
        <div className="limited-time-offer-sub-header">
          Special <span className="subheader-stroke">Edition</span>
        </div>
        <div className="limited-time-offer-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          quia maxime libero voluptas, modi atque nam hic sit alias aspernatur.
        </div>
        <div className="limited-time-offer-discount">
          Buy This Crop-Top At 20% Discount, Use Code OFF20
        </div>
      </div>
      <Link to={'/about'} className="limited-time-offer-button">
        Shop Now
      </Link>
    </div>
  );
}

export default LimitedTimeOffer;
