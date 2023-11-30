import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { BiStar } from 'react-icons/bi';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type FeaturedProducts = {
  productImage: string;
  title: string;
  category: string;
  price: number;
};

function FeaturedProductsTab({
  productImage,
  title,
  category,
  price,
}: FeaturedProducts) {
  const [onAddToCart, setAddToCart] = useState(false);
  const [onProductImage, setProductImage] = useState(false);

  return (
    <div className="featured-products-tab-container">
      <div
        className="featured-products-tab-top"
        onMouseEnter={() => {
          setProductImage(true);
        }}
        onMouseLeave={() => {
          setProductImage(false);
        }}
      >
        <img
          src={productImage}
          alt="featured-products"
          className="featured-products-tab-image"
        />
        <div className="add-to-cart-container">
          {onAddToCart ? (
            <div className="add-to-cart-wrap">
              <p className="add-to-cart">Add to cart</p>
              <p className="add-to-cart-pointing-arrow"></p>
            </div>
          ) : (
            ''
          )}
          {onProductImage ? (
            <IconContext.Provider value={{ size: '17px' }}>
              <div
                className="featured-products-tab-shop"
                onMouseEnter={() => {
                  setAddToCart(true);
                }}
                onMouseLeave={() => {
                  setAddToCart(false);
                }}
              >
                <FaShoppingBag />
              </div>
            </IconContext.Provider>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="featured-products-tab-bottom">
        <Link to={'/about'} className="featured-products-tab-name">
          {title}
        </Link>
        <div className="featured-products-tab-category">{category}</div>
        <div className="featured-products-tab-price">
          ${`${price}`.includes('.') ? price : `${price}.00`}
        </div>
        <IconContext.Provider value={{ size: '16px' }}>
          <div>
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

export default FeaturedProductsTab;
