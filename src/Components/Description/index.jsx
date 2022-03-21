import React,{useRef} from "react";
import "./style.css";

function Description({ header, text, hasBusiness }) {

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  
  return (
    <div className="description-container">
      {
        header !== undefined &&
        <h1>{header}</h1>
      }
      {
        hasBusiness &&
        <button onClick={executeScroll}>View Jewish businesses in this location</button>
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
