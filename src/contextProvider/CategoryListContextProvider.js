import React from "react";
import { CategoryListReducer as reducer } from "../reducer/CategoryListReducer";
import { CategoryListActions } from "../actions/CategoryListActions";
import axios from "axios";

const initialState = {
  categoryList: [],
  loading: false,
  error: null,
};

export const CategoryListContext = React.createContext();

export const CategoryListContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const loadCategories = () => {
    dispatch({ type: CategoryListActions.LOAD_CATEGORIES_IN_PROGRESS });
    let response = axios
      .get("https://feature-ufr2-4307-discussions.ubisoft.com/api/categories")
      .then((resp) =>
        dispatch({
          type: CategoryListActions.LOAD_CATEGORIES_SUCESS,
          data: response.data,
        })
      )
      .catch((e) =>
        dispatch({
          type: CategoryListActions.LOAD_CATEGORIES_ERROR,
          error: response.error,
        })
      );
  };

  const value = {
    state: state,
    loadCategories,
  };

  return (
    <CategoryListContext.Provider value={value}>
      {children}
    </CategoryListContext.Provider>
  );
};
