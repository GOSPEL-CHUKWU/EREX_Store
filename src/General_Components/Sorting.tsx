import React from 'react';

const Sorting = ({ updateSort, sortValue }: any) => {
  return (
    <div className="right-content-amount-of-results-and-sorting">
      <div className="right-content-amount-of-results">
        Showing 1–12 of 31 results
      </div>
      <div>
        <div>
          <select
            name="sort"
            value={sortValue}
            className="sort-container"
            onChange={updateSort}
          >
            <option>Default Sorting</option>
            <option>Sort by popularity</option>
            <option>Sort by average rating</option>
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
