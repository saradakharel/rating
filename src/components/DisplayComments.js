import React from "react";

const DisplayComments = props => (
  <ul className="displayedComments">
    {props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default DisplayComments;
