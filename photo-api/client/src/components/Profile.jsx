import React from "react";
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
              <p> Post: Followers: 7,000 Following: 90 </p>

              <p>Bio</p>
            </div>
          </div>

          <hr className="profile-divider" />

          <Link to="create-post">
            <button className="post-button">Post</button>
          </Link>
          <div className="image-container">
            {props.posts
              .filter((post) => post.user_id === props.currentUser.id)
              .map((post) => (
                <>
                  {post.photos.map((photo) => (
                    <div className="profile-img-border">
                      <img
                        className="user-photos"
                        key={photo.id}
                        src={photo.image_url}
                      />
                      <Link to="/photos/:id/edit">
                        <img
                          className="three-dot-edit"
                          src="https://i.imgur.com/n34o9L2.png"
                          alt="Edit"
                        />
                      </Link>
                      <img
                        className="trash-can"
                        onClick={props.handlePostDelete}
                        src="https://i.imgur.com/mKYX2Yz.png"
                        alt="Delete"
                      />

                      
                    </div>
                  ))}
                </>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
