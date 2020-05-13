import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-container">
      <header>
        <p className="header-title">InstaPic</p>

        {props.currentUser ? (
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/home">
            <img className="home-image" src="https://i.imgur.com/yH0cOfY.png" />
          </Link>
        )}

        {props.currentUser && (
          <>
            <Link to="/posts">posts</Link>
            <Link to="/photos">Photos</Link>
            {/* <hr /> */}
          </>
        )}
      </header>
    </div>
  );
}
