import { combineReducers } from "redux";
import categories from "./categories";
import posts from "./posts";
import postDetail from './postdetail';
import categoriesColor from "./categories-color";

const rootReducer = combineReducers({
  categoriesList: categories,
  postsList: posts,
  postDetail: postDetail,
  categoriesColorList: categoriesColor
});

export default rootReducer;
