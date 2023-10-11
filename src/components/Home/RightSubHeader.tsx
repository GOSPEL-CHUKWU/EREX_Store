import React from 'react';
import shoeDisplay from '../../assets/puma_shoe.png';

function RightSubHeader() {
  return (
    <div className="right-subheader-container">
      <img className='right-subheader-image' src={shoeDisplay} alt="puma_shoe" />
    </div>
  );
}

export default RightSubHeader;
