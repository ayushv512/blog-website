import { GET_POSTS } from "../actions/ActionTypes";

const initialState = {
  loading: false,
  totalCount: 0,
  posts: null
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: action.payload.loading,
        totalCount: action.payload.data.found,
        posts: action.payload.data.posts
      };
    default:
      return state;
  }
};

export default posts;
