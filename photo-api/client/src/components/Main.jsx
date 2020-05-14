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
  //submits content
  handlePostSubmit = async (postData) => {
    // e.preventDefault();
    // const { content, photos } = this.state;
    const newPost = await postPost(postData);
    this.setState((prevState) => ({
      posts: [...prevState.posts, newPost],
    }));
  };

  //submits photo
  // handlePhotoSubmit = async (e) => {
  //   e.preventDefault();
  //   const { photos } = this.state;
  //   // console.log("content", content);
  //   // console.log("photos", photos);
  //   const newPhoto = await postPhoto({ photos });
  //   this.setState((prevState) => ({
  //     posts: [...prevState.photos, newPhoto],
  //   }));
  // };
  //updates content

  handlePostUpdate = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    this.setState((prevState) => ({
      foods: prevState.posts.map((post) => {
        return post.id === id ? updatedPost : post;
      }),
    }));
  };

  //working on it
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
            path="/"
            render={() => (
              <Header
                currentUser={this.props.currentUser}
                posts={this.state.posts}
                handleLogout={this.props.handleLogout}
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
          render={() => (
            <ShowPosts
              currentUser={this.props.currentUser}
              posts={this.state.posts}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              currentUser={this.props.currentUser}
              posts={this.state.posts}
              handlePostDelete={this.handlePostDelete}
            />
          )}
        />
        <Route
          path="/create-post"
          render={(props) => (
            <CreatePost
              currentUser={this.props.currentUser}
              posts={this.state.posts}
              {...props}
              handlePostSubmit={this.handlePostSubmit}
            />
          )}
        />

        <Route
          path="/photos/:id/edit"
          render={(props) => {
            const { id } = props.match.params;
            return (
              <EditProfile
                {...props}
                currentUser={this.props.currentUser}
                handlePostUpdate={this.handlePostUpdate}
                photoId={id}
                posts={this.state.posts}
              />
            );
          }}
        />
      </main>
    );
  }
}
