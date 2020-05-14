import React from "react";
import "./ShowPost.css";

export default function ShowPosts(props) {
  return (
    //add carousel if post.length is greater than 1
    <div>
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
{/* change to specific users username that posted not current user */}
                  {props.currentUser && props.currentUser.username}
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
