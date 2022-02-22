import { Actions as actions } from "../actions/Actions";

export const Reducers = (state, action) => {
  switch (action.type) {
    case actions.IN_PROGRESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.LOAD_CATEGORIES_SUCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        categoryList: action.data,
      };
    }
    case actions.LOAD_TOPICS_SUCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        topicList: action.data,
      };
    }
    case actions.LOAD_POSTS_SUCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        postData: { topic: action.data.topic, postList: action.data.postList },
      };
    }
    case actions.ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
