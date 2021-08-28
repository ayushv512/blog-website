import { combineReducers } from "redux";
import categories from "./categories";
import posts from "./posts";
import selectedCategory from "./selected-category";
import categoriesColor from "./categories-color";
import paginationConfig from "./pagination-config";

const rootReducer = combineReducers({
  categoriesList: categories,
  postsList: posts,
  selectedCategory,
  categoriesColorList: categoriesColor,
  paginationConfig
});

export default rootReducer;
