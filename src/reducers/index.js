import { combineReducers } from "redux";
import categories from "./categories";
import posts from "./posts";
import postDetail from './postdetail';

const rootReducer = combineReducers({
  categoriesList: categories,
  postsList: posts,
  postDetail: postDetail
});

export default rootReducer;
