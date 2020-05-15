import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="login-container">
        <div className="main-container">
          <img className="iPhone" src="https://i.imgur.com/aGENvJd.png" />
          <div className="login">
            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                this.props.handleLogin(this.state);
                this.props.history.push("/home");
              }}
            >
              <p className="login-title">InstaPic</p>
              <input
                className="username-input"
                placeholder="username"
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <br />

              <br />

              <input
                className="password-input"
                placeholder="password"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <br />
              <button className="log-in-button">Log In</button>

              <hr className="sign-up-divider" />

              <div className="sign-up-container">
                <p>
                  Don’t have an account?
                  <Link to="/signup">
                    <span className="sign-up-title"> Sign Up</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
