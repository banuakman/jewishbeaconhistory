import React from "react";
import "./style.css";

function PhotoCredits({ credits }) {
  return (
    <div>
      <div className="photocredits">{credits}</div>
    </div>
  );
}

export { PhotoCredits };
