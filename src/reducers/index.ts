import { LOAD_POSTS, LOAD_COMMENTS, CREATE_COMMENT } from "../actions";

export interface initialStateType {
  posts: [];
  comments: [];
  isLoading: boolean;
}

interface actionType {
  type: string;
  payload: [];
}

const initialState = { isLoading: false, posts: [], comments: [] };

const rootReducer = (state = initialState, action: actionType) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_POSTS: {
      return {
        ...state,
        posts: payload,
        isLoading: false,
      };
    }
    case LOAD_COMMENTS: {
      return {
        ...state,
        comments: payload,
        isLoading: false,
      };
    }

    case CREATE_COMMENT: {
      return {
        ...state,
        comments: state.comments.concat(payload),
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
