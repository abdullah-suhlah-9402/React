import { useEffect, useState } from "preact/hooks";
import React from "react";

function Five() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((responce) => responce.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>{data ? <h1> {data.name}</h1> : <h1> Loading ......... </h1>}</div>
  );
}

export default Five;
