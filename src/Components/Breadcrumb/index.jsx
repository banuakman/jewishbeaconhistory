import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Breadcrumb({ stopno }) {
  let navigate = useNavigate();

  return (
    <div className="breadcrumb">
      <button
        onClick={() => {
          return navigate(`/stop${stopno}`);
        }}
      >
        Stop #{stopno}
      </button>
    </div>
  );
}

export { Breadcrumb };
