import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-container">
      <p className="header-title">InstaPic</p>
      <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
        <input
          className="search-input"
          value={props.username}
          onChange={(e) => props.onChange(e)}
          name="Search"
          placeholder="Search"
          type="text"
          autoFocus
        />
      </form>

{/*    
        <>
          <p>{props.currentUser.username}</p>
          <button onClick={props.handleLogout}>Logout</button>
        </> */}
 
        <>
          <div className="nav-toolbar">
            <Link to="/home">
              <img
                className="home-image bar"
                src="https://i.imgur.com/yH0cOfY.png"
              />
            </Link>
            <Link to="/profile">
              {props.currentUser && (
                <img
                  className="profile-icon bar"
                  src={props.currentUser.image}
                />
              )}
            </Link>

            <img
              className="edit-icon bar"
              src="https://i.imgur.com/xHzjCaG.png"
            />
          </div>
        </>
{/*      
      {props.currentUser && (
        <>
          <Link to="/posts">posts</Link>
          <Link to="/photos">Photos</Link>
        </>
      )} */}
    </div>
  );
}
