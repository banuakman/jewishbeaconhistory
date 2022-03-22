import React,{useState} from "react";
import "./style.css";
import { useNavigate  } from "react-router-dom";

function Link({ text, to }) {

  let navigate = useNavigate();

  const [hover,setHover] = useState(false)

  
  return (
    <div className="link-container">
      <button onClick={()=>{return navigate(to);}}  onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}><img src={hover?("location_pin_empty_black.svg"):("location_pin_empty_orange.svg")}/>{text}</button>
    </div>
  );
}

export { Link };
