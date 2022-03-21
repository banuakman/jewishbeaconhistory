import React from "react";
import "./style.css";
import { Menu } from "../Menu";
function Header({text}) {
  return (
    <div className="header-container">
      <h1 className="header-text">{text}</h1><Menu/>
    </div>
  );
}

export { Header };
