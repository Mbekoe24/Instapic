import React from "react";
import "./ShowPost.css";

export default function ShowPosts(props) {
 
  return (
    //add carousel if post.length is greater than 1
    <div>
      <div className="post-container">
        {props.posts.map((post) => (
          <div>
            {post.photos.map((photo) => {
       
              return (
                <div className="img-border">
                  <p className="username-title">
                    <img
                      className="username-photo"
                      key={photo.id}
                      src={photo.image_url}
                    />

                    {/* error out ask for help tmm */}
                    {/* change to specific users username that posted not current user */}
                    {post.user.username}
                    {props.posts.content}
                  </p>
                  <img
                    className="home-photos"
                    key={photo.id}
                    src={photo.image_url}
                  />
                  <p className="username-content">
                    <span className="content-text">
                      {/* <img
                      className="heart-img"
                      src="https://i.imgur.com/1b1didx.png"
                      alt="heart-img"
                    />
                    <img
                      className="comment-img"
                      src="https://i.imgur.com/ML8aK1A.png"
                    /> */}
                      <span className="username-border-text">
                        {" "}
                        {post.user.username}
                      </span>
                      {post.content}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
