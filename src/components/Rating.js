import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const Rating = () => {
  return <Rater total={5} rating={2.5} />;
};

export default Rating;
