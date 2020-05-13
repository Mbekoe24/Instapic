import React from "react";
import Header from "./Header";
import "./Profile.css";
export default function Profile(props) {
  return (
    <div>
      <Header />
      <div className="bio-container">
        <img
          className="profile-picture"
          src="https://i.imgur.com/tsnpCYx.jpg"
          alt="profile-picture"
        />
        <div className="user-info">
          <h2>
            Username <button>Edit Profile</button>
          </h2>

          <p>Bio</p>
        </div>
      </div>
      {/* ////////////////// */}
      {/* doesnt render anything it should render user photos */}

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

      {/* ///////////// */}
      {/* renders alll post  */}
      {/* {props.posts.map((post) => (
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
      ))} */}
    </div>
  );
}
