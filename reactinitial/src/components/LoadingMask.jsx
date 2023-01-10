import React from "react";
import "./LoadingMask.css";
import { CircularProgress } from "@mui/material";

function LoadingMask() {
  return (
    <div className="loading-container">
      <h1>Loading</h1>
      <CircularProgress />
    </div>
  );
}

export default LoadingMask;
