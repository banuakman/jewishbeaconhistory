import React from "react";
import "./style.css";
import { useNavigate  } from "react-router-dom";

function Link({ text, to }) {

  let navigate = useNavigate();
  
  return (
    <div className="link-container">
      <button onClick={()=>{return navigate(to);}}>{text}</button>
    </div>
  );
}

export { Link };
