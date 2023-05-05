import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => (
  <header className="header">
    <Link to={"/"}>
      <h1>Shows Finder</h1>
    </Link>
  </header>
);

export default Header;
