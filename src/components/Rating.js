import React, { Component } from "react";
import Rater from "react-rater";
import SignUpForm from "./SignUpForm";
import "react-rater/lib/react-rater.css";

class Rating extends Component {
  state = {
    showForm: false
  };

  handleShowForm = e => {
    e.preventDefault();
    this.setState({
      showForm: true
    });
  };

  render() {
    if (!this.state.showForm) {
      return (
        <div>
          <Rater total={5} rating={2.5} onClick={this.handleShowForm} />
        </div>
      );
    } else {
      return (
        <div>
          <SignUpForm />
        </div>
      );
    }
  }
}
export default Rating;
