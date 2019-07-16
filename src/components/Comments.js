import React, { Component } from "react";
import DisplayComments from "./DisplayComments";
class Comment extends Component {
  state = {
    term: "",
    items: []
  };
  onChange = event => {
    this.setState({ term: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };
  render() {
    return (
      <div>
        <form className="commentForm" onSubmit={this.onSubmit}>
          <textarea value={this.state.term} onChange={this.onChange} />
          <button>Submit Comment</button>
        </form>
        <DisplayComments items={this.state.items} />
      </div>
    );
  }
}
export default Comment;
