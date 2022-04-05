import React from "react";
import "./style.css";
import { Menu } from "../Menu";
import { Helmet } from "react-helmet";

function Header({ text }) {
  return (
    <div>
      <Helmet>
        <title>{text}</title>
      </Helmet>
      <div className="header-container">
        <h1 className="header-text">{text}</h1>
        <Menu />
      </div>
    </div>
  );
}

export { Header };
