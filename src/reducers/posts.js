import { GET_POSTS } from '../actions/ActionTypes';

const initialState = {
    loading: false,
    totalCount: 0,
    posts: null
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                loading: true,
                totalCount: action.payload.found,
                posts: action.payload.posts
            };
        default:
            return state;
    }
}

export default posts;