import React from "react";
import "./ShowPost.css";
import Header from "./Header";
export default function ShowPosts(props) {
  return (
    <div>
      <Header />
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
                  Hello
                </p>
                <img
                  className="home-photos"
                  key={photo.id}
                  src={photo.image_url}
                />
              </div>
            ))}
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
