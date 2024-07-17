import { useState } from "preact/hooks";
import React from "react";

function Twelve({ Items }) {
  const [searchItems, setSearchItems] = useState("");

  const filteredItems = Items.filter((x) =>
    x.toLowerCase().includes(searchItems.toLowerCase())
  );
  // console.log(filteredItems);
  return (
    <div>
      <input
        type="text"
        placeholder="search here"
        onChange={(e) => setSearchItems(e.target.value)}
      />
      <ul>
        {filteredItems.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default Twelve;
