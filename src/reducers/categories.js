import { GET_CATEGORIES } from '../actions/ActionTypes';

const initialState = {
    loading: false,
    categories:  null
}

const categories = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                loading: true,
                categories: action.payload.categories
            };
        default:
            return state;
    }
}

export default categories;