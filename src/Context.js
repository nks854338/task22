import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const API_BASE_URL = "https://newsapi.org/v2/everything";

const initialState = {
  isLoading: true,
  query: "tesla", 
  nbPages: 0,
  page: 1, 
  hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to fetch data from API
  const fetchData = async () => {
    const { query, page } = state;
    const url = `${API_BASE_URL}?q=${query}&from=2024-06-07&sortBy=publishedAt&page=${page}&apiKey=883fb533d786456ba553b3117c1d5b5c`;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.articles, 
          nbPages: data.totalResults, 
        },
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // Function to remove a post by ID
  const removePost = (postID) => {
    dispatch({ type: "REMOVE_POST", payload: postID });
  };

  // Function to search posts
  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchQuery,
    });
  };

  useEffect(() => {
    fetchData();
  }, [state.query, state.page]); 

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
