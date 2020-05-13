import React from "react";
import Header from "./Header";

export default function Profile(props) {
  return (
    <div>
      <Header />

      {/* {props.photos.map((photo) => (
        <div>
          {photo.map((photo) => (
            <img
              className="username-photo"
              key={photo.id}
              src={photo.image_url}
            />
          ))}
        </div>
      ))}
    </div> */}
      {props.posts.map((post) => (
        <div>
          {post.photos.map((photo) => (
            <div className="img-border">
              <img
                className="username-photo"
                key={photo.id}
                src={photo.image_url}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
