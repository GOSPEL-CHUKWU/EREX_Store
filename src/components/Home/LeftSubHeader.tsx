import React from 'react';
import { Link } from 'react-router-dom';

function LeftSubHeader() {
  return (
    <div className="left-subheader-container">
      <div className="left-subheader">
        <div className="left-subheader-header">
          Streaming <span className="left-subheader-stroke">offers</span> for{' '}
          <span className="left-subheader-stroke">Rocky </span> summer!
        </div>
        <div className="left-subheader-discount">40% off on all products</div>
      </div>
      <div className="left-subheader-buttons">
        <Link
          to={'/about'}
          className="left-subheader-shop-now left-subheader-button"
        >
          Shop Now
        </Link>
        <Link
          to={'/about'}
          className="left-subheader-find-more left-subheader-button"
        >
          Find More
        </Link>
      </div>
    </div>
  );
}

export default LeftSubHeader;
