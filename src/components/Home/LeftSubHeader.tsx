import React from 'react';

function LeftSubHeader() {
  return (
    <div className="left-subheader-container">
      <div className="left-subheader">
        <div className="left-subheader-header">
          Streaming offers for{' '}
          <span className="left-subheader-stroke">Rocky</span> summer!
        </div>
        <div className="left-subheader-discount">40% off on all products</div>
      </div>
      <div className="left-subheader-buttons">
        <div className="left-subheader-shop-now left-subheader-button">
          Shop Now
        </div>
        <div className="left-subheader-find-more left-subheader-button">
          Find More
        </div>
      </div>
    </div>
  );
}

export default LeftSubHeader;
