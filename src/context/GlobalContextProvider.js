import React from "react";
import axios from "axios";

import { Reducers } from "./reducer/Reducers";
import { Actions } from "./actions/Actions";

const initialState = {
  categoryList: [],
  topicList: [],
  postData: { topic: { title: "" }, postList: [] },
  loading: false,
  error: null,
};

export const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducers, initialState);

  const loadCategories = () => {
    dispatch({ type: Actions.IN_PROGRESS });
    let response = axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/category/${process.env.REACT_APP_PARENT_CATEGORY_ID}`
      )
      .then((resp) => {
        console.log(resp.data.children);
        dispatch({
          type: Actions.LOAD_CATEGORIES_SUCESS,
          data: resp.data.children,
        });
      })
      .catch((e) =>
        dispatch({
          type: Actions.ERROR,
          error: response.error,
        })
      );
  };

  const loadTopics = (id) => {
    dispatch({ type: Actions.IN_PROGRESS });
    let response = axios
      .get(`${process.env.REACT_APP_API_URL}/api/category/${id}`)
      .then((resp) => {
        dispatch({
          type: Actions.LOAD_TOPICS_SUCESS,
          data: resp.data.topics,
        });
      })
      .catch((e) =>
        dispatch({
          type: Actions.ERROR,
          error: response.error,
        })
      );
  };
  const loadPosts = (id) => {
    dispatch({ type: Actions.IN_PROGRESS });
    let response = axios
      .get(`${process.env.REACT_APP_API_URL}/api/topic/${id}`)
      .then((resp) => {
        dispatch({
          type: Actions.LOAD_POSTS_SUCESS,
          data: {
            topic: { title: resp.data.title },
            postList: resp.data.posts,
          },
        });
      })
      .catch((e) =>
        dispatch({
          type: Actions.ERROR,
          error: response.error,
        })
      );
  };

  const value = {
    state,
    loadCategories,
    loadTopics,
    loadPosts,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
