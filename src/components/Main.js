import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import Comment from "./Comments";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="components">
          <ProfilePic />
        </div>
        <div className="components">
          <Comment />
        </div>
      </div>
    );
  }
}
export default Main;
