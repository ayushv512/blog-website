import { combineReducers } from "redux";
import categories from "./categories";
import posts from "./posts";
import categoriesColor from "./categories-color";

const rootReducer = combineReducers({
  categoriesList: categories,
  postsList: posts,
  categoriesColorList: categoriesColor
});

export default rootReducer;
