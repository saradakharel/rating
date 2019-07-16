import React from "react";
import Avatar from "react-avatar";
const ProfilePic = () => {
  const avatarName = "aditya745";
  return (
    <div className="profileAvatar">
      <Avatar githubHandle={avatarName} size={150} round="20px" />
      <figcaption>{avatarName}</figcaption>
    </div>
  );
};
export default ProfilePic;
