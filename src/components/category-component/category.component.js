import React, { useEffect } from "react";
import { CategoryComponentWrapper } from "./style";
import { assignColorToCategories } from "../../utils";
import {
  DEFAULT_CATEGORY,
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_NUMBER
} from "../../constants";
import PropTypes from "prop-types";

const CategoryComponent = props => {
  useEffect(() => {
    props.categoriesGetAction();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (props.categoriesList) {
      let categoriesColor = assignColorToCategories(props.categoriesList);
      props.setCategoriesColorAction(categoriesColor);
    }
  }, [props.categoriesList]); // eslint-disable-line react-hooks/exhaustive-deps

  const createOptions = () => {
    return props.categoriesList.map(categoryItem => (
      <option key={categoryItem.ID} value={categoryItem.slug}>
        {categoryItem.name}
      </option>
    ));
  };

  const categoryFilterChangeHandler = event => {
    props.setSelectedCategoryAction(event.target.value);
    props.setPaginationConfigAction({
      pageNumber: DEFAULT_PAGE_NUMBER,
      pageSize: DEFAULT_PAGE_SIZE
    });
    props.postsGetAction();
  };

  return props.categoriesList ? (
    <CategoryComponentWrapper>
      <select
        onChange={e => categoryFilterChangeHandler(e)}
        defaultValue={props.selectedCategory || DEFAULT_CATEGORY}
      >
        <option value={DEFAULT_CATEGORY}>All categories</option>
        {createOptions()}
      </select>
    </CategoryComponentWrapper>
  ) : null;
};

CategoryComponent.propTypes = {
  categoriesList: PropTypes.array,
  selectedCategory: PropTypes.string
};

export default CategoryComponent;
