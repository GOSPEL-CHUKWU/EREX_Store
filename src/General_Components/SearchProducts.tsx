import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaAngleRight } from 'react-icons/fa6';

const SearchProducts = () => {
  const [searchValue, setSearchValue] = useState('');

  const searchProductsBtn = () => {
    console.log(searchValue.toLowerCase());
  };

  return (
    <div className="search-products-container">
      <input
        type="text"
        placeholder="Search Products..."
        className="search-products-input"
        value={searchValue}
        onChange={(e: any) => setSearchValue(e.target.value)}
      />
      <div className="search-products-button" onClick={searchProductsBtn}>
        <IconContext.Provider value={{ size: '18px' }}>
          <FaAngleRight />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default SearchProducts;
