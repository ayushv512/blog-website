import { SET_CATEGORIES_COLOR } from "../actions/ActionTypes";

const initialState = {
  categoriesColor: {}
};

const categoriesColor = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES_COLOR:
      return {
        ...state,
        categoriesColor: action.payload
      };
    default:
      return state;
  }
};

export default categoriesColor;
