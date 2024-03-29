import axios from "axios";
import * as Types from "./ActionTypes";
import { URL } from "../constants/index";
import { ORDER_BY, ORDER } from "../config/index";

export function CategoriesGetAction() {
  return async dispatch => {
    try {
      const res = await axios.get(URL.getCategories());
      dispatch({ type: Types.GET_CATEGORIES, payload: res.data });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
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
    try {
      const currentState = getState();
      const res = await axios.get(
        URL.getPostsLink(
          currentState.selectedCategory.selectedCategory,
          currentState.paginationConfig,
          ORDER_BY,
          ORDER
        )
      );
      dispatch({
        type: Types.GET_POSTS,
        payload: {
          loading: false,
          data: res.data
        }
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
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
      const res = await axios.get(URL.getPostDetailLink(slug));
      dispatch({
        type: Types.GET_POST_DETAIL,
        payload: {
          loading: false,
          data: res.data
        }
      });
    } catch (error) {
      dispatch({
        type: Types.GET_POST_DETAIL,
        payload: {
          loading: false,
          data: error
        }
      });
    }
  };
}

export function InitPostDetailAction() {
  return {
    type: Types.GET_POST_DETAIL,
    payload: {
      loading: false,
      data: null
    }
  };
}
