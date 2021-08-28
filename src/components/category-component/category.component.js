import React, { useEffect } from "react";
import { CategoryComponentWrapper } from './style';
import { assignColorToCategories } from "../../utils";
import { DEFAULT_CATEGORY, DEFAULT_PAGE_SIZE, DEFAULT_PAGE_NUMBER } from "../../constants";

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
      <option key={categoryItem.ID} value={categoryItem.slug} selected={props.selectedCategory === categoryItem.slug}>
        {categoryItem.name}
      </option>
    ));
  };

  const categoryFilterChangeHandler = event => {
    props.setSelectedCategoryAction(event.target.value);
    props.setPaginationConfigAction({
      pageNumber: DEFAULT_PAGE_NUMBER,
      pageSize: DEFAULT_PAGE_SIZE
    })
    props.postsGetAction();
  };

  return (
    props.categoriesList
      ? (
        <CategoryComponentWrapper>
          {console.log(props.selectedCategory)}
          <select
            className="category-filter-dropdown"
            onChange={e => categoryFilterChangeHandler(e)}
          // defaultValue={props.selectedCategory}
          >
            <option value={DEFAULT_CATEGORY} selected={props.selectedCategory === DEFAULT_CATEGORY}>All categories</option>
            {createOptions()}
          </select>
        </CategoryComponentWrapper>
      )
      : null
  );
};

export default CategoryComponent;
