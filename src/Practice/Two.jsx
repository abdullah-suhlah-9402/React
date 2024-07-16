import { useState } from "preact/hooks";
import React from "react";

function Two() {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setName(name);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="type here"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </form>
      <h1>{name}</h1>
    </>
  );
}

export default Two;
