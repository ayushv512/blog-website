import { GET_POSTS } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    posts:  null
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                loading: true,
                posts: action.payload.posts
            };
        default:
            return state;
    }
}

export default posts;