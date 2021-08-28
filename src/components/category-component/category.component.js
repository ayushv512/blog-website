import React, { useState, useEffect } from "react";
import { CategoryComponentWrapper } from './style';

const CategoryComponent = props => {
  const createOptions = () => {
    return props.categoriesList.map((categoryItem, index) => (
      <option key={index} value={categoryItem.name}>
        {categoryItem.name}
      </option>
    ));
  };

  const categoryFilterChangeHandler = event => {
    console.log(event.target.value);
  };

  return (
    <CategoryComponentWrapper>
      <select
        className="category-filter-dropdown"
        onChange={e => categoryFilterChangeHandler(e)}
      >
        <option value="All categories" selected>All categories</option>
        {createOptions()}
      </select>
    </CategoryComponentWrapper>
  );
};

export default CategoryComponent;
