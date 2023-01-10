import React, { useEffect, useState } from "react";
import Character from "./components/Character";
import LoadingMask from "./components/LoadingMask";
import Subscription from "./components/Subscription";

const App = () => {
  const [data, setData] = useState([]);
  const [showSub, setShowSub] = useState(false)

  useEffect (() => {
    if (data.length > 0){
      setTimeout(() => {
        setShowSub(true)
      }, 10000);
    }
  })

  useEffect(() => {
    fetch("https://demoapi.com/api/series/howimetyourmother")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mainDiv">
      <h1 className="title">Series Api</h1>
      {data.length > 0 ? (
        data.map((character, i) => (
          <Character
            key={i}
            name={character.name}
            details={character.details}
          />
        ))
      ) : (
        <LoadingMask />
      )}
      {showSub ? <Subscription /> : ""}
    </div>
  );
};

export default App;
