import React,{useState} from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Menu() {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="menu-container">
      <button className="menu-button" onClick={()=>setIsOpen(true)}><img src="menu-icon.png"/></button>
      {
        isOpen &&
        <div className="menu-box">
          <div className="menu-box-links">
            <div className="menu-box-links-header"><button onClick={()=>setIsOpen(false)}><img src="close-icon.png"/></button><h1>Jewish Beacon History Walk</h1></div>
            <div className="menu-box-search"><input></input><span><img src="search-icon.png"/></span></div>
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

export { Menu };
