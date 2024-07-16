import { useEffect, useState } from "preact/hooks";
import React from "react";

function One() {
  const [counter, setCounter] = useState(0);

  let increase = () => {
    setCounter(counter + 1);
  };

  let decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={increase}> Increase + </button>
      <span> {counter} </span>
      <button onClick={decrease}>Decrease - </button>
    </div>
  );
}

export default One;
