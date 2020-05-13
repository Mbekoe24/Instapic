import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  getAllPosts,
  getAllPhotos,
  postPost,
  putPost,
  destroyPost,
} from "../services/api-helper";
import ShowPosts from "./ShowPosts";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile"
import EditProfile from "./EditProfile"

export default class Main extends Component {
  state = {
    posts: [],
    photos: [],
  };

  componentDidMount() {
    this.readAllPosts();
    this.readAllPhotos();
  }

  readAllPosts = async () => {
    const posts = await getAllPosts();
    this.setState({ posts });
  };

  readAllPhotos = async () => {
    const photos = await getAllPhotos();
    this.setState({ photos });
  };

  handleFoodSubmit = async (postData) => {
    const newPost = await postPost(postData);
    this.setState((prevState) => ({
      foods: [...prevState.posts, newPost],
    }));
  };

  handlePostUpdate = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    this.setState((prevState) => ({
      foods: prevState.posts.map((post) => {
        return post.id === id ? updatedPost : post;
      }),
    }));
  };

  handlePostDelete = async (id) => {
    await destroyPost(id);
    this.setState((prevState) => ({
      posts: prevState.posts.filter((post) => {
        return post.id !== id;
      }),
    }));
  };

  render() {
    return (
      <main>
        <Route
          exact
          path="/"
          render={(props) => (
            <Login {...props} handleLogin={this.props.handleLogin} />
          )}
        />
        <Route
          path="/signup"
          render={(props) => (
            <SignUp {...props} handleRegister={this.props.handleRegister} />
          )}
        />
        <Route
          path="/home"
          render={() => <ShowPosts posts={this.state.posts} />}
        />

        <Route
          path="/profile" render={() => <Profile posts={this.state.posts} />}
        />
        
      </main>
    );
  }
}
