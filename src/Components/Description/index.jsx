import React,{useRef,useState} from "react";
import "./style.css";

function Description({ header, text, hasBusiness }) {

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  const [hover,setHover] = useState(false)
  
  return (
    <div className="description-container">
      {
        header !== undefined &&
        <h1>{header}</h1>
      }
      {
        hasBusiness &&
        <button onClick={executeScroll}  onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}><img src={hover?("location_pin_empty_black.svg"):("location_pin_empty_orange.svg")} style={{color:"#E86C4F"}}/>View Jewish businesses in this location</button>
      }
      <p>{text}</p>
      {
        hasBusiness &&
        <span ref={myRef}>Jewish Businesses:</span>
      }
    </div>
  );
}

export { Description };
