import React from "react";
import ReactPlayer from "react-player";
import "./style.css";

function AudioPlayer({ audiofile }) {
  return (
    <div style={{display:"flex",justifyContent:"center",margin:"20px"}}>
      <ReactPlayer
        url={audiofile}
        width="400px"
        height="50px"
        playing={false}
        controls={true}
      />
    </div>
  );
}

export { AudioPlayer };
