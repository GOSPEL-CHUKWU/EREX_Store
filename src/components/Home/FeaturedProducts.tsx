import React from 'react';
import FeaturedProductsTab from '../../General_Components/FeaturedProductsTab';
import fake_1 from '../../assets/offer_1.jpg';
import fake_2 from '../../assets/offer_2.jpg';
import fake_3 from '../../assets/offer_3.jpg';

function FeaturedProducts() {
  return (
    <div className="featured-products-container">
      <div className="featured-products-header">Featured Products</div>
      <div className="featured-products-content-container">
        <FeaturedProductsTab
          productImage={`${fake_1}`}
          title="Anchor Bracelet"
          category="Men"
          price={200.94}
        />
        <FeaturedProductsTab
          productImage={`${fake_2}`}
          title="ENEX Blue Shoes"
          category="Accessories"
          price={194}
        />
        <FeaturedProductsTab
          productImage={`${fake_3}`}
          title="Basic Gray Jeans"
          category="Men"
          price={320}
        />
        <FeaturedProductsTab
          productImage={`${fake_1}`}
          title="Black Over-the-shoulder Handbag"
          category="Women"
          price={152.63}
        />
        <FeaturedProductsTab
          productImage={`${fake_2}`}
          title="Black Hoodie"
          category="Women"
          price={245.52}
        />
        <FeaturedProductsTab
          productImage={`${fake_3}`}
          title="Blue Denim Shorts"
          category="Accessories"
          price={424.18}
        />
        <FeaturedProductsTab
          productImage={`${fake_1}`}
          title="DNK Blue Shoes"
          category="Men"
          price={115.76}
        />
        <FeaturedProductsTab
          productImage={`${fake_2}`}
          title="Blue Denim Jeans"
          category="Accessories"
          price={342.16}
        />
        <FeaturedProductsTab
          productImage={`${fake_3}`}
          title="Blue Denim Jeans"
          category="Women"
          price={80.12}
        />
        <FeaturedProductsTab
          productImage={`${fake_2}`}
          title="Boho Bangle Bracelet"
          category="Men"
          price={212.06}
        />
      </div>
    </div>
  );
}

export default FeaturedProducts;
