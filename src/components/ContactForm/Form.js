import React, { Component } from "react";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleCommentsChange = this.handleCommentsChange.bind(this);
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange(event) {
    alert("A Note Was Submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleCommentsChange}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
      </form>
    );
  }
}

export default FormComponent;
