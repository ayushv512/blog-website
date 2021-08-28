import { SET_SELECTED_CATEGORY } from '../actions/ActionTypes';
import { DEFAULT_CATEGORY } from "../constants";

const initialState = {
    selectedCategory: DEFAULT_CATEGORY
}

const selectedCategory = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload,
            };
        default:
            return state;
    }
}

export default selectedCategory;