import React from "react";
import Avatar from "react-avatar";
import Rating from "../components/Rating";
const ProfilePic = () => {
  const avatarName = "aditya745";
  return (
    <div>
      <div className="profileAvatar">
        <Avatar githubHandle={avatarName} size={150} round="20px" />
        <figcaption>
          <h3>{avatarName}</h3>
        </figcaption>
      </div>
      <div className="rating">
        <Rating />
      </div>
    </div>
  );
};
export default ProfilePic;
