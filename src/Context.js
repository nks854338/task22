import React, { useReducer, useContext, useEffect} from "react";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";


const initialState = {
    isLoading: true,
    query: "",
    nbPages: 0,
    page: 0,
    hits: [],
  };

const AppContext = React.createContext();

const AppProvider = ({ children }) => {


  const [state, dispatch] = useReducer(reducer, initialState);

  const fecthApiData = async(url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        dispatch({
            type: "GET_STORIES",
            payload: {
                hits: data.hits,
                nbPages: data.nbPages,
            }
        });
    } catch (error) {
        console.log(error);
    }
    }


    //remove post function
    const removePost=(post_ID)=>{
      dispatch({type:"REMOVE_POST", payload: post_ID});
    };

      //search post function
      const searchPost=(searchQuery)=>{
        dispatch({
          type:"SEARCH_QUERY",
          payload:searchQuery,
        });
      };
    
    
    useEffect(()=>{
    fecthApiData(`${API}query=${state.query}&page=${state.page}`);
    },[state.query]);

  return (
  <AppContext.Provider value={{...state, removePost, searchPost}}>
    {children}
    </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext};