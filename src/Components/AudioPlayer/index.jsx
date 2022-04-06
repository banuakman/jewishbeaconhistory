import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./style.css";
import { useLocation } from "react-router-dom";

function AudioPlayer({ audiofile }) {

  const [player, setPlayer] = useState(null)

  const [playing,setPlaying] = useState(true)

  let location = useLocation();

  useEffect(() => {
      if(player)
        player.seekTo(0)
  }, [location]);


  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <ReactPlayer
        url={audiofile}
        width="400px"
        height="50px"
        playing={playing}
        controls={true}
        onPlay={()=>setPlaying(true)}
        onPause={()=>setPlaying(false)}
        ref={(player) => {
          setPlayer(player)
        }}
      />
    </div>
  );
}

export { AudioPlayer };
