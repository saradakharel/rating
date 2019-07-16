import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import Comment from "./Comments";
import Rating from "./Rating";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div>
          <ProfilePic />
        </div>
        <div>
          <Rating />
        </div>
        <div>
          <Comment />
        </div>
      </div>
    );
  }
}
export default Main;
