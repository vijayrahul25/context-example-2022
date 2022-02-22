import { CategoryListActions as actions } from "../actions/CategoryListActions";

export const CategoryListReducer = (state, action) => {
  switch (action.type) {
    case actions.LOAD_CATEGORIES_IN_PROGRESS: {
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
    case actions.LOAD_CATEGORIES_ERROR: {
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
