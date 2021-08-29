import axios from "axios";
import * as Types from "./ActionTypes";
import { URL } from "../constants/index";

export function CategoriesGetAction() {
  return async dispatch => {
    const res = await axios.get(URL.getCategories());
    dispatch({ type: Types.GET_CATEGORIES, payload: res.data });
  };
}

export function PostGetAction() {
  return async (dispatch, getState) => {
    dispatch({
      type: Types.GET_POSTS,
      payload: {
        loading: true,
        data: []
      }
    });
    const currentState = getState();
    const res = await axios.get(
      URL.getPostsLink(
        currentState.selectedCategory.selectedCategory,
        currentState.paginationConfig
      )
    );
    dispatch({
      type: Types.GET_POSTS, payload: {
        loading: false,
        data: res.data
      }
    });
  };
}

export function SetSelectedCategoryAction(category) {
  return {
    type: Types.SET_SELECTED_CATEGORY,
    payload: category
  };
}

export function SetCategoriesColorAction(data) {
  return {
    type: Types.SET_CATEGORIES_COLOR,
    payload: data
  };
}

export function SetPaginationConfigAction(data) {
  return {
    type: Types.SET_PAGINATION_CONFIG,
    payload: data
  };
}

export function PostDetailGetAction(slug = "") {
  return async dispatch => {
    dispatch({
      type: Types.GET_POST_DETAIL,
      payload: {
        loading: true,
        data: null
      }
    });
    try {
      const res = await axios.get(URL.getPostDetailLink(slug))
      dispatch({
        type: Types.GET_POST_DETAIL, payload: {
          loading: false,
          data: res.data
        }
      });
    } catch (error) {
      dispatch({
        type: Types.GET_POST_DETAIL, payload: {
          loading: false,
          data: error
        }
      });
    }
  };
}
