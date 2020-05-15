import React, { Component } from "react";
import Header from "./Header";
export default class CreatePost extends Component {
  state = {
    content: "",
    photos: [],
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

  render() {
    return (
      <div>
    
        {this.state.photos.map((photo) => (
          <img src={photo.image_url} />
        ))}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const { content, photos } = this.state;
            this.props.handlePostSubmit({ content, photos });
            this.props.history.push("/profile");
          }}
        >
          <h3>Create Post</h3>

          <input
            type="text"
            name="image_url"
            placeholder="image url"
            value={this.state.image_url}
            onChange={this.handleChange}
          />
          <button onClick={this.addPhoto}>Add photo</button>
          <input
            type="text"
            name="content"
            placeholder="Caption"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}
