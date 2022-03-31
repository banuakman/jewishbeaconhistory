import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isDesktop } from "react-device-detect";
import "./style.css";
import { useLocation } from 'react-router-dom'

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrop, setIsDrop] = useState(false);

  let location = useLocation()


  useEffect(()=>{
    setIsOpen(false)
  },[location])

  if (isDesktop) {
    return (
      <div className="menu-container-desktop">
        <Link to="/home">Home</Link>
        <Link to="/credits">Credits</Link>
        <button
          onClick={() => {
            setIsDrop(!isDrop);
          }}
        >
          Tour Stops <img src="drop-icon.png" />
        </button>
        {isDrop && (
          <div className="menu-dropdown" onMouseLeave={() => setIsDrop(false)}>
            <div>
              <Link to="/stop1">1 - Historic Bank Square</Link>
            </div>
            <div>
              <Link to="/stop2">2 - West End of Main</Link>
            </div>
            <div>
              <Link to="/stop3">3 - Main between Willow and Walnut</Link>
            </div>
            <div>
              <Link to="/stop4">4 - S. Cedar and Main</Link>
            </div>
            <div>
              <Link to="/stop5">5 - S. Chestnut and Main</Link>
            </div>
            <div>
              <Link to="/stop6">6 - Fishkill/Teller and Main</Link>
            </div>
            <div>
              <Link to="/stop7">7 - The Beacon Theatre</Link>
            </div>
            <div>
              <Link to="/stop8">8 - Tioronda and Main</Link>
            </div>
            <div>
              <Link to="/stop9">9 - North and Main</Link>
            </div>
            <div>
              <Link to="/stop10">10 - East Main and Water</Link>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="menu-container">
        <button className="menu-button" onClick={() => setIsOpen(true)}>
          <img src="hamburger-icon.png" />
        </button>
        {isOpen && (
          <div className="menu-box">
            <div className="menu-box-links">
              <div className="menu-box-links-header">
                <button onClick={() => setIsOpen(false)}>
                  <img src="close-icon.png" />
                </button>
                <h1>Jewish Beacon History Walk</h1>
              </div>
              <Link to="/">About</Link>
              <Link to="/credits">Credits</Link>
              <span>Tour Stops</span>
              <div className="menu-box-deep-links">
                <Link to="/stop1">1 - Historic Bank Square</Link>
                <Link to="/stop2">2 - West End of Main</Link>
                <Link to="/stop3">3 - Main between Willow and Walnut</Link>
                <Link to="/stop4">4 - S. Cedar and Main</Link>
                <Link to="/stop5">5 - S. Chestnut and Main</Link>
                <Link to="/stop6">6 - Fishkill/Teller and Main</Link>
                <Link to="/stop7">7 - The Beacon Theatre</Link>
                <Link to="/stop8">8 - Tioronda and Main</Link>
                <Link to="/stop9">9 - North and Main</Link>
                <Link to="/stop10">10 - East Main and Water</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export { Menu };
