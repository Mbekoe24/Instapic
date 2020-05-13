import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  getAllPosts,
  getAllPhotos,
  postPost,
  putPost,
  destroyPost,
  postPhoto,
} from "../services/api-helper";
import ShowPosts from "./ShowPosts";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import Header from "./Header";
import CreatePost from "./CreatePost";

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

  handlePostSubmit = async (e) => {
    e.preventDefault();
    const { content, photos } = this.state;
    const newPost = await postPhoto({ content, photos });
    this.setState((prevState) => ({
      posts: [...prevState.posts, newPost],
    }));
  };

  // handlePostUpdate = async (id, postData) => {
  //   const updatedPost = await putPost(id, postData);
  //   this.setState((prevState) => ({
  //     foods: prevState.posts.map((post) => {
  //       return post.id === id ? updatedPost : post;
  //     }),
  //   }));
  // };

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
        {this.props.currentUser && (
          <Route
            path="/home"
            render={() => (
              <Header
                currentUser={this.props.currentUser}
                posts={this.state.posts}
              />
            )}
          />
        )}
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
          path="/profile"
          render={() => (
            <Profile
              currentUser={this.props.currentUser}
              posts={this.state.posts}
            />
          )}
        />
        <Route
          path="/create-post"
          render={() => (
            <CreatePost handlePostSubmit={this.state.handlePostSubmit} />
          )}
        />
      </main>
    );
  }
}
