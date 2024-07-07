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
        const { title, description, objectID, url,urlToImage } = curPost;
        return (
          <>
            <div className="card">
              <div className="title"><h2>{curPost.title}</h2></div>
              <div className="imageBox">
              <img src= {curPost.urlToImage ? curPost.urlToImage : "https://www.nzherald.co.nz/resizer/v2/2GEVLYMTNVDIZKI2ZMFUNSKMJ4.JPG?auth=aa5c980c411738c195afa7da7a52e41cceaf450d0f73d2fdd111bc1d98739282&width=1200&height=675&quality=70&smart=true"} className="postImg"/>
              </div>
              <div className="desc">
              <p>
                {curPost.description}
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
