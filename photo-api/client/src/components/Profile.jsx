import React from "react";
import Header from "./Header";
import "./Profile.css";
import { Link } from "react-router-dom";

export default function Profile(props) {
  return (
    <>
      {props.currentUser && (
        <div>
          <div className="bio-container">
            <img
              className="profile-picture"
              src={props.currentUser.image}
              alt="profile-picture"
            />
            <div className="user-info">
              <h2>
                {props.currentUser.username}
                <button className="edit-profile-button">Edit Profile</button>
              </h2>
              <p> Post: Followers: Following: </p>

              <p>Bio</p>
            </div>
          </div>
          {/* ////////////////// */}

          {/* ///////////// */}
          {/* renders alll post  */}
          <hr className="profile-divider" />

          <Link to="create-post">
            <button className="post-button">Post</button>
          </Link>
          {props.posts
            .filter((post) => post.user_id === props.currentUser.id)
            .map((post) => (
              <div>
                {post.photos.map((photo) => (
                  <div className="image-container">
                    <img
                      className="user-photos"
                      key={photo.id}
                      src={photo.image_url}
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
    </>
  );
}
