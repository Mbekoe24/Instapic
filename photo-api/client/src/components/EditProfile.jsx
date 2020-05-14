import React, { Component } from "react";
import { getOnePhoto } from "../services/api-helper";
import Header from "./Header";

export default class UpdateFood extends Component {
  state = {
    photos: [],
    content: "",
    image_url: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addPhoto = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      photos: [
        ...prevState.photos,
        {
          image_url: prevState.image_url,
        },
      ],
      image_url: "",
    }));
  };

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const photoItem = await getOnePhoto(this.props.photoId);
    this.setState({
      name: photoItem.name,
    });
  };

  render() {
    return (
      <>
        <Header
          handleLogout={this.props.handleLogout}
          currentUser={this.props.currentUser}
          posts={this.props.posts}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handlePostUpdate(this.props.photoId, this.state);
            this.props.history.push("/photos");
          }}
        >
          <h3>Update Photo</h3>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}
