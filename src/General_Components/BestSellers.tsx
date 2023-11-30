import React from 'react';
import { IconContext } from 'react-icons';
import { BiStar } from 'react-icons/bi';
import temporaryImage1 from '../assets/offer_1.jpg';
import temporaryImage2 from '../assets/offer_2.jpg';
import temporaryImage3 from '../assets/offer_3.jpg';
import temporaryImage4 from '../assets/background_2.jpg';
import temporaryImage5 from '../assets/background_3.jpg';

type bestSellerType = {
  title: string;
  price: number;
  imageUrl: any;
};

const BestSeller = ({ title, price, imageUrl }: bestSellerType) => {
  return (
    <div className="best-seller-container">
      <div className="best-seller-image-container">
        <img className="best-seller-image" src={imageUrl} alt="best seller" />
      </div>
      <div>
        <div className="best-seller-title">{title}</div>
        <IconContext.Provider value={{ size: '18px' }}>
          <div className="tab-stars best-seller-stars ">
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
          </div>
        </IconContext.Provider>
        <div className="best-seller-price">${price}.00</div>
        {/* <div>$100.00 – $140.00</div> */}
      </div>
    </div>
  );
};

const BestSellers = () => {
  return (
    <div className="best-sellers-container">
      <div className="best-sellers-header">Our Best Sellers</div>
      <BestSeller imageUrl={temporaryImage1} title="Black Hoodie" price={100} />
      <BestSeller
        imageUrl={temporaryImage2}
        title="Bright Red Bag"
        price={235}
      />
      <BestSeller
        imageUrl={temporaryImage3}
        title="Anchor Bracelet"
        price={145}
      />
      <BestSeller
        imageUrl={temporaryImage4}
        title="Enez Green Shoes"
        price={150}
      />
      <BestSeller
        imageUrl={temporaryImage5}
        title="Bright Gold Purse With Chain"
        price={121}
      />
    </div>
  );
};

export default BestSellers;
