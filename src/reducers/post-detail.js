import { GET_POST_DETAIL } from '../actions/ActionTypes';

const initialState = {
    loading: false,
    post: null
}

const postDetail = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_DETAIL:
            return {
                ...state,
                loading: action.payload.loading,
                post: action.payload.data
            };
        default:
            return state;
    }
}

export default postDetail;