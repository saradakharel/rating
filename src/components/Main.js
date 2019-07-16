import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import Comment from "./Comments";
import Rating from "./Rating";

class Main extends Component {
  render() {
    return (
      <div>
        Main
        <ProfilePic />
        <Rating />
        <Comment />
      </div>
    );
  }
}
export default Main;
