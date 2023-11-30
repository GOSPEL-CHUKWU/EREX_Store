import { useState } from 'react';
import Header from '../../General_Components/Header';
import Footer from '../../General_Components/Footer';
import SearchProducts from '../../General_Components/SearchProducts';
import Filter from '../../General_Components/Filter';
import Categories from '../../General_Components/Categories';
import BestSellers from '../../General_Components/BestSellers';
import FeaturedProductsTab from '../../General_Components/FeaturedProductsTab';
import Pagination from '../../General_Components/Pagination';
import Sorting from '../../General_Components/Sorting';
import fake_1 from '../../assets/offer_1.jpg';
import fake_2 from '../../assets/offer_2.jpg';
import fake_3 from '../../assets/offer_3.jpg';

type categoryType = {
  header: string;
};

const Category = ({  header }: categoryType) => {
  const [sortValue, setSortValue] = useState('');

  const updateSort = (e: any) => {
    const value = e.target.value;
    setSortValue(value);
    console.log(value);
  };

  return (
    <div>
      <Header backgroundColorIsWhite={true} />
      <div className="everything-container">
        <section>
          <SearchProducts />
          <Filter />
          <Categories />
          <BestSellers />
        </section>
        <section>
          <div className="right-content-container">
            <div className="right-content-path-header">Home / {header}</div>
            <div className="right-content-header-and-category-container">
              <div className="right-content-header">{header}</div>
              <div className="right-content-category-info">
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit
                sed ut.
              </div>
            </div>
            <Sorting updateSort={updateSort} sortValue={sortValue} />
            <div className="store-featured-products-content-container">
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
            </div>
            <Pagination />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
