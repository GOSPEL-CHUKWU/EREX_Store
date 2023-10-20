import React from 'react';
import FeaturedProductsTab from './FeaturedProductsTab';
import fake_1 from '../../assets/offer_1.jpg';
import fake_2 from '../../assets/offer_2.jpg';
import fake_3 from '../../assets/offer_3.jpg';

function FeaturedProducts() {
  return (
    <div className="featured-products-container">
      <div className="featured-products-header">Featured Products</div>
      <div className="featured-products-content-container">
        <FeaturedProductsTab productImage={`${fake_1}`} />
        <FeaturedProductsTab productImage={`${fake_2}`} />
        <FeaturedProductsTab productImage={`${fake_3}`} />
        <FeaturedProductsTab productImage={`${fake_1}`} />
        <FeaturedProductsTab productImage={`${fake_2}`} />
        <FeaturedProductsTab productImage={`${fake_3}`} />
        <FeaturedProductsTab productImage={`${fake_1}`} />
        <FeaturedProductsTab productImage={`${fake_2}`} />
        <FeaturedProductsTab productImage={`${fake_3}`} />
        <FeaturedProductsTab productImage={`${fake_2}`} />
      </div>
    </div>
  );
}

export default FeaturedProducts;
