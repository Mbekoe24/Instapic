import React from "react";
import "./ShowPost.css";
import Header from "./Header";
export default function ShowPosts(props) {
  return (
    //add carousel if post.length is greater than 1
    <div>

      {/* <h3>Timeline</h3> */}
      <div className="post-container">
        {props.posts.map((post) => (
          <div>
            {post.photos.map((photo) => (
              <div className="img-border">
                <p className="username-title">
                  <img
                    className="username-photo"
                    key={photo.id}
                    src={photo.image_url}
                  />
                  {props.posts.content}
                </p>
                <img
                  className="home-photos"
                  key={photo.id}
                  src={photo.image_url}
                />
                <p className="username-content"> {post.content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
