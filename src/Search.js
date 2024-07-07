import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <h1>News website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="search"
            placeholder="search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;