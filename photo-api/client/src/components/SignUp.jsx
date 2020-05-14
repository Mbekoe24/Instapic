import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="main-container">
        <img className="iPhone" src="https://i.imgur.com/aGENvJd.png" />
        <div className="login">
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.handleRegister(this.state);
              this.props.history.push("/");
            }}
          >
            <p className="login-title">InstaPic</p>

            <input
              className="email-input"
              id="email"
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={this.handleChange}
            />
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
            <button className="log-in-button">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
