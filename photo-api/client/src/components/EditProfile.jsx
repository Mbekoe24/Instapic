import React, { Component } from "react";
import { getOnePost } from "../services/api-helper";

export default class EditProfile extends Component {
  state = {
    post: "",
    contentData: { content: "" },
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      contentData: { [name]: value },
    });
  };

  componentDidMount() {
    this.setContentData();
  }

  setContentData = async () => {
    const onePost = await getOnePost(this.props.postId);
    this.setState({
      post: onePost,
      contentData: { content: onePost.content },
    });
  };

  render() {
    return (
      <>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.props.handlePostUpdate(
                this.props.postId,
                this.state.contentData
              );
              this.props.history.push("/home");
            }}
          >
            {/* <p> {this.props.posts.map((post) => post.content)}</p> */}

            <h3>Update Post</h3>
            <input
              type="text"
              value={this.state.contentData.content}
              name="content"
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>

          {this.state.post.photos &&
            this.state.post.photos.map((photo) => (
              <div className="img-border">
                <img
                  className="home-photos"
                  key={photo.id}
                  src={photo.image_url}
                />

                <p> {this.state.contentData.content}</p>
              </div>
            ))}
        </div>
      </>
    );
  }
}
