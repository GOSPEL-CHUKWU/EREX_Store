import React from 'react';
import { Link } from 'react-router-dom';

type CategoryType = {
  category: string;
  amountInStock: number;
  path: string;
};

const Category = ({ category, amountInStock, path }: CategoryType) => {
  return (
    <div className="category-content">
      <Link to={path} className="category">
        {category}
      </Link>
      <div className="category-amount">({amountInStock})</div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories-header">Categories</div>
      <div className="categories-content">
        <Category
          category="Accessories"
          amountInStock={7}
          path={'/fullcloset/store'}
        />
        <Category
          category="Men"
          amountInStock={14}
          path={'/fullcloset/store'}
        />
        <Category
          category="Women"
          amountInStock={17}
          path={'/fullcloset/store'}
        />
      </div>
    </div>
  );
};

export default Categories;
