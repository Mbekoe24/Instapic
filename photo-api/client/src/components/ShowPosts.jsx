import React from "react";
import "./ShowPost.css";
import Header from "./Header";
export default function ShowPosts(props) {
  return (
    <div>
      <Header />
      <h3>Timeline</h3>
      <div className="post-border">
        {props.posts.map((post) => (
          <div>
            {post.photos.map((photo) => (
              <img
                className="home-photos"
                key={photo.id}
                src={photo.image_url}
              />
            ))}
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
