import React, { useEffect } from "react";
import { CategoryComponentWrapper } from './style';
import { assignColorToCategories } from "../../utils";

const CategoryComponent = props => {

  useEffect(() => {
    props.categoriesGetAction();
  }, []);

  useEffect(() => {
    if (props.categoriesList) {
      let categoriesColor = assignColorToCategories(props.categoriesList);
      props.setCategoriesColorAction(categoriesColor);
    }
  }, [props.categoriesList]);

  const createOptions = () => {
    return props.categoriesList.map(categoryItem => (
      <option key={categoryItem.ID} value={categoryItem.slug}>
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
            defaultValue="all-categories"
          >
            <option value="all-categories">All categories</option>
            {createOptions()}
          </select>
        </CategoryComponentWrapper>
      )
      : null
  );
};

export default CategoryComponent;
