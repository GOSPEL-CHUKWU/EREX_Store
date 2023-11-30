import React from 'react';
import SearchProducts from '../../General_Components/SearchProducts';
import Filter from '../../General_Components/Filter';
import Categories from '../../General_Components/Categories';
import BestSellers from './../../General_Components/BestSellers';

const ContentLeft = () => {
  return (
    // <div className='left-content-container'>
    <div>
      <SearchProducts />
      <Filter />
      <Categories />
      <BestSellers />
    </div>
  );
};

export default ContentLeft;
