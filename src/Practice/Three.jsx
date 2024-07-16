import React from "react";

function Three() {
  const items = ["SUHAIMA", "SUHLAH", "ABAIMA", "9402", "ABDULLAH", "942002"];
  return (
    <ol>
      {items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ol>
  );
}

export default Three;
