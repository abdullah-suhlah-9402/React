import React from "react";

function Eight() {
  const Jokes = ["H", "S", "Y", "O"];
  return Jokes.map((data, index) => {
    return (
      <h1 key={index}>
        {" "}
        <li key={index}>{data} </li>
      </h1>
    );
  });
}

export default Eight;
