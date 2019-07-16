import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import Comment from "./Comments";
import Rating from "./Rating";
import SignUpForm from "./SignUpForm";
class Main extends Component {
  render() {
    return (
      <div>
        Main
        <ProfilePic />
        <Rating />
        <Comment />
        <SignUpForm />
      </div>
    );
  }
}
export default Main;
