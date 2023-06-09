import { Link } from "react-router-dom";
import "./BackBtn.css";
import React from "react";

export const BackBtn = () => {
  return (
    <Link className="link-back" to="/all-beer">
      <h2 className="back-btn">&#10094;</h2>
    </Link>
  );
};
