import React, { useState } from "react";
import "./Character.css";
import { Button } from "@mui/material";

function Character({ name, details }) {
  const [show, setShow] = useState(false);

  return (
    <div className="info-cards">
      <div>{name}</div>
      {show ? <div className={show ? "show" : "dontshow"}>{details}</div> : ""}
      <Button variant="contained" onClick={() => setShow(!show)}>
        {show ? "Show less" : "Show more"}
      </Button>
    </div>
  );
}

export default Character;
