import React, { Component } from "react";
import { withRouter } from "react-router";
import "./App.css";
import Main from "./components/Main";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/api-helper";

class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    this.confirmUser();
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  };

  confirmUser = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      currentUser: null,
    });
    removeToken();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="App">
        <Main
          currentUser={this.state.currentUser}
          handleRegister={this.handleRegister}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
        />
      </div>
    );
  }
}

export default withRouter(App);
