import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isDesktop } from 'react-device-detect';
import "./style.css";

function Menu() {

  const [isOpen, setIsOpen] = useState(false)
  const [isDrop,setIsDrop] = useState(false)

  if (isDesktop) {
    return (
      <div className="menu-container-desktop">
        <Link to="/home">Home</Link>
        <Link to="/credits">Credits</Link>
        <button onClick={()=>{setIsDrop(!isDrop)}}>Tour Stops <img src="drop-icon.png"/></button>
        {
          isDrop &&
          <div className="menu-dropdown" onMouseLeave={()=>setIsDrop(false)}>hello</div>
        }
      </div>
    );
  }
  else {
    return (
      <div className="menu-container">
        <button className="menu-button" onClick={() => setIsOpen(true)}><img src="hamburger-icon.png" /></button>
        {
          isOpen &&
          <div className="menu-box">
            <div className="menu-box-links">
              <div className="menu-box-links-header"><button onClick={() => setIsOpen(false)}><img src="close-icon.png" /></button><h1>Jewish Beacon History Walk</h1></div>
              <Link to="/">About</Link>
              <Link to="/credits">Credits</Link>
              <span>Tour Stops</span>
              <div className="menu-box-deep-links">
                <Link to="/">#1 - Historic Bank Square</Link>
              </div>

            </div>
          </div>
        }
      </div>
    );
  }

}

export { Menu };
