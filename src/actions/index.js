import axios from "axios";
import * as Types from "../constants/ActionTypes";
import { URL } from "../constants/index";

export function CategoriesGetAction() {
  return async (dispatch, getState) => {
    const res = await axios.get(
      "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories"
    );
    dispatch({ type: Types.GET_CATEGORIES, payload: res.data });
  };
}

export function PostGetAction(category = "") {
  return async (dispatch, getState) => {
    const res = await axios.get(URL.getPostsLink(category));
    dispatch({ type: Types.GET_POSTS, payload: res.data });
  };
}

export function PostDetailGetAction(slug = "") {
  return async dispatch => {
    const res = await axios.get(URL.getPostDetailLink(slug));
    dispatch({ type: Types.GET_POST_DETAIL, payload: res.data });
  };
}
