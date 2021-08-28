import axios from "axios";
import * as Types from "../constants/ActionTypes";

export function CategoriesGetAction() {
  return async (dispatch, getState) => {
    const res = await axios.get("https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories");
    dispatch({ type: Types.GET_CATEGORIES, payload: res.data });
  };
}

export function PostGetAction() {
  return async (dispatch, getState) => {
    const res = await axios.get("https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/?fields=slug,categories,post_thumbnail,title,date&number=20&page=1");
    dispatch({ type: Types.GET_POSTS, payload: res.data });
  };
}