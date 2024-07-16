import { useEffect, useState } from "preact/hooks";
import React from "react";

function Six() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return;
      clearTimeout(timer);
    }
  }, [time]);
  return (
    <div>
      {" "}
      <h1>
        {" "}
        <i> LEFT TIME : </i> {time}{" "}
      </h1>
    </div>
  );
}

export default Six;
