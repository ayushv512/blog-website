import { combineReducers } from "redux";
import categories from "./categories";
import posts from "./posts";

const rootReducer = combineReducers({
  categoriesList: categories,
  postsList: posts
});

export default rootReducer;
