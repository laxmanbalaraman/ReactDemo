import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// handle unexpected error globally
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
    alert("Sorry, an unexpected error occurred while deleting a post!");
  }
  console.log("INTERCEPTOR CALLED");
  return Promise.reject(error);
});

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    // returns a promise which is an object represents the eventual completion
    // (or failure) of an asynchronous operation and its resulting value.
    // if u use await then decoratie the function with async.
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "New post", body: "This is a new post" };
    const { data: post } = await axios.post(apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "UPDATED";
    await axios.put(apiEndpoint + "/" + post.id, post);
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    /* optimistic vs pessimistic update
    ---------------------------------------
    upate the state object afte the await operation assuming error can happen anytime. -> slow down the ui updating process.
    update the state object before the await of operation assuming no error happens with the server. ->  fastens up the ui updating process.
    if there is any error then prev state is upated with the current state. */

    // implementing optimistic update

    const orginalPost = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });
    try {
      await axios.delete(apiEndpoint + "/" + post.id);
      // this part will be executed after the response time only if the prev line doesn't give an error
    } catch (ex) {
      // Expected (404: not found, 400: bad request) - CLIENT errors
      // - display a specific error message

      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted");
      // Unexpected (newtwork down, server down, DB down, bug)
      // - Log them
      // Display  a generic and friendly message.
      // else {
      // instead of handling unexpected errors in multiple places, handle it globally.
      //   console.log("Logging the error", ex);
      //   alert("Sorry, an unexpected error occurred while deleting a post!");
      // }
      this.setState({ posts: orginalPost });
    }
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
