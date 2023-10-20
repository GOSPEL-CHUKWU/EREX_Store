import React from 'react';
import { IconContext } from 'react-icons';
import { BiStar } from 'react-icons/bi';

type FeaturedProducts = {
  productImage: string;
};

function FeaturedProductTab({ productImage }: FeaturedProducts) {
  return (
    <div className="featured-products-tab-container">
      <div className="featured-products-tab-top">
        <img
          src={productImage}
          alt="featured-products"
          className="featured-products-tab-image"
        />
        <IconContext.Provider value={{ size: '16px' }}>
          <div className=''></div>
        </IconContext.Provider>
      </div>
      <div className="featured-products-tab-bottom">
        <div className="featured-products-tab-name">DNK Blue Shoes</div>
        <div className="featured-products-tab-category">Men</div>
        <div className="featured-products-tab-price">$200.94</div>
        <IconContext.Provider value={{ size: '16px' }}>
          <div className="featured-products-tab-stars">
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default FeaturedProductTab;
