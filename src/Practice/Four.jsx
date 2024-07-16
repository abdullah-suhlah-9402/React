import { useState } from "preact/hooks";
import React from "react";

function Four() {
  const [Istoggled, setIsToggled] = useState(false);

  const Toggle = () => {
    setIsToggled(!Istoggled);
  };
  return (
    <div>
      <input type="checkbox" onChange={Toggle} />
      <h1> {Istoggled ? "ON" : "OFF"} </h1>
    </div>
  );
}

export default Four;
