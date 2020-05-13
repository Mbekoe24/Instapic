import React, { Component } from "react";

export default class CreatePost extends Component {
  state = {
    post: "",
  };

  componentDidMount() {
    this.setPost();
  }

  setPost = async () => {
    const post = await getOnePost(this.props.postId);
    this.setState({ post });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      post: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const post = await addFlavor(this.state.post, this.state.post.id);
    this.setState({ post });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handlePostSubmit(this.state);
            this.props.history.push("/profile");
          }}
        >
          <h3>Create Food</h3>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
