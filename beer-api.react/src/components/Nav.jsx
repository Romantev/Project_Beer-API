import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link className="logo-div" to="/">
        <img className="logo-img" src="./img/toast.png" alt="" />
        <h1>Beer</h1>
      </Link>
    </nav>
  );
};
