import React, { useState } from 'react';
import { BsDashLg } from 'react-icons/bs';

const Filter = () => {
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(300);
  const minPercentage = ((minPrice - 10) / 300) * 100;
  const maxPercentage = ((maxPrice - 10) / 300) * 100;

  const filterMinPrice = (e: any) => {
    const minValue = e.target.value;
    if (minPrice === maxPrice || +minValue > maxPrice)
      if (+minValue >= maxPrice) return;
    setMinPrice(+minValue);
  };
  const filterMaxPrice = (e: any) => {
    const maxValue = e.target.value;
    if (minPrice === maxPrice || minPrice > +maxValue)
      if (+maxValue <= maxPrice) return;
    setMaxPrice(+maxValue);
  };
  const filterBtn = () => {
    console.log(minPrice, maxPrice);
  };

  return (
    <div className="filter-container">
      <div className="filter-header">Filter by Price</div>
      <div className="filter-range">
        <div
          className="range-fill"
          style={{
            left: `${minPercentage}%`,
            width: `${maxPercentage - minPercentage}%`,
          }}
        ></div>
        <input
          type="range"
          value={minPrice}
          min="10"
          max="300"
          step="10"
          onChange={filterMinPrice}
        />
        <input
          type="range"
          value={maxPrice}
          min="10"
          max="300"
          step="10"
          onChange={filterMaxPrice}
        />
      </div>
      <div className="filter-button-and-price">
        <div className="filter-button" onClick={filterBtn}>
          Filter
        </div>
        <div className="filter-price">
          <span className="filter-price-label">Price:</span>
          <span className="filter-price-amount">
            ${minPrice}
            <BsDashLg style={{ paddingTop: 2 }} size={18} />${maxPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
