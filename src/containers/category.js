import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CategoriesGetAction, PostGetAction } from "../actions";
import CategoryComponent from "../components/category-component/category.component";

const mapStateToProps = state => ({
  categoriesList: state.categoriesList.categories
});

const mapDispatchToProps = dispatch => ({
  categoriesGetAction: bindActionCreators(CategoriesGetAction, dispatch),
  postsGetAction: bindActionCreators(PostGetAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);
