import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import "./style.css";

function AudioPlayer({ audiofile }) {
  const [player, setPlayer] = useState(null);

  const [setPlaying] = useState(true);

  let location = useLocation();

  useEffect(() => {
    if (player) player.seekTo(0);
  }, [location, player]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "25px 20px 0px 20px",
      }}
    >
      <ReactPlayer
        url={audiofile}
        width="400px"
        height="50px"
        playing={false}
        controls={true}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        ref={(player) => {
          setPlayer(player);
        }}
      />
    </div>
  );
}

export { AudioPlayer };
