import React, { useState, useEffect } from "react";
import { CategoryComponentWrapper } from './style';

const CategoryComponent = props => {

  useEffect(() => {
    props.categoriesGetAction();
  }, []);

  const createOptions = () => {
    return props.categoriesList.map((categoryItem, index) => (
      <option key={index} value={categoryItem.slug}>
        {categoryItem.name}
      </option>
    ));
  };

  const categoryFilterChangeHandler = event => {
    props.postsGetAction(event.target.value);
  };

  return (
    props.categoriesList
      ? (
        <CategoryComponentWrapper>
          <select
            className="category-filter-dropdown"
            onChange={e => categoryFilterChangeHandler(e)}
          >
            <option value="all-categories" selected>All categories</option>
            {createOptions()}
          </select>
        </CategoryComponentWrapper>
      )
      : null
  );
};

export default CategoryComponent;
