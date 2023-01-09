import React, { useState } from "react";
import "./Character.css";
import { Button } from "@mui/material";

function Character({ name, details }) {

  const [show, setShow] = useState(false)

  return (
    <div className="info-cards">
      <div>{name}</div>
      <div className={show ? "show" : "dontshow"}>{details}</div>
      <Button onClick={() => setShow(!show)} variant="contained">{show ? "Show less" : "Show more"}</Button>
      {/* <button onClick={() => setShow(!show)}>{show ? "Show less" : "Show more"}</button> */}
    </div>
  );
}

export default Character;
