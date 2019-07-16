import React, { Component } from "react";
import DisplayComments from "./DisplayComments";
class Comment extends Component {
  state = {
    term: "",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Fusce elementum sem venenatis, congue risus at, aliquet velit.",
      "Cras semper turpis vel augue pharetra, in vehicula augue luctus.",
      "Aenean ut risus condimentum, accumsan felis id, lobortis eros.",
      "Maecenas et sem ut mauris hendrerit commodo maximus aliquet tortor."
    ]
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
          <button className="button">Submit Comment</button>
        </form>
        <DisplayComments items={this.state.items} />
      </div>
    );
  }
}
export default Comment;
