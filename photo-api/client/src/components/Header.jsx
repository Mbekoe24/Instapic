import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-container">
      <p className="header-title">InstaPic</p>

      <>
        <div className="nav-toolbar">
          <Link to="/home">
            <img
              className="home-image bar"
              src="https://cdn.clipart.email/84812a44a67c0823651fbdf3f206fd04_home-instagram-sets-timeline-icon_512-512.png"
            />
          </Link>
          <Link to="/profile">
            {props.currentUser && (
              <img className="profile-icon bar" src={props.currentUser.image} />
            )}
          </Link>

          <img
            className="edit-icon bar"
            src="https://i.imgur.com/xHzjCaG.png"
            onClick={props.handleLogout}
          />
        </div>
      </>
    </div>
  );
}
