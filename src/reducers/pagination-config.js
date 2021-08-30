import { SET_PAGINATION_CONFIG } from "../actions/ActionTypes";
import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE_NUMBER } from "../constants";

const initialState = {
  pageNumber: DEFAULT_PAGE_NUMBER,
  pageSize: DEFAULT_PAGE_SIZE
};

const paginationConfig = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGINATION_CONFIG:
      return {
        ...state,
        pageNumber: action.payload.pageNumber,
        pageSize: action.payload.pageSize
      };
    default:
      return state;
  }
};

export default paginationConfig;
