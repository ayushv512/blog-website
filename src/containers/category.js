import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CategoriesGetAction } from "../actions";
import CategoryComponent from "../components/category-component/category.component";

const CategoryContainer = props => {
  useEffect(() => {
    props.categoriesGetAction();
  }, []);

  return (
    props.categoriesList && (
      <CategoryComponent categoriesList={props.categoriesList} />
    )
  );
};

const mapStateToProps = state => ({
  categoriesList: state.categoriesList.categories
});

const mapDispatchToProps = dispatch => ({
  categoriesGetAction: bindActionCreators(CategoriesGetAction, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
