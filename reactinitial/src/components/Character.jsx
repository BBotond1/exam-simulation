import React, { useState } from "react";
import "./Character.css";

function Character({ name, details }) {

  const [show, setShow] = useState(false)

  return (
    <>
      <div>{name}</div>
      <div className={show ? "show" : "dontshow"}>{details}</div>
      <button onClick={() => setShow(!show)}>{show ? "Show less" : "Show more"}</button>
    </>
  );
}

export default Character;
