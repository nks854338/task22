import React from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  //   let isLoading = true;

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <>
    <div class="stories-div">
      {hits.map((curPost) => {
        const { title, author, num_comments, objectID, url } = curPost;
        return (
          <>
            <div className="card">
              <div className="title"><h2>{curPost.title}</h2></div>
              <div className="desc">
              <p>
                By <span>{curPost.author}</span> | <span> {curPost.num_comments} </span> comments
              </p>
              </div>
              <div className="card-button">
                <a href= {curPost.url} target="_blank">
                  Read more
                </a>
                <a href="#" onClick={()=>removePost(objectID)}> Remove </a>
              </div>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
};

export default Stories;
