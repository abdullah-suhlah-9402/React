import { useState } from "preact/hooks";
import React from "react";

function Thirteen({ Items, ItemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItems = currentPage * ItemsPerPage;
  const indexOfFirstItems = indexOfLastItems - ItemsPerPage;
  const currentItems = Items.slice(indexOfFirstItems, indexOfLastItems);
  console.log(currentItems);

  const PageNumbers = [];
  for (let i = 1; i <= Math.ceil(Items.length / ItemsPerPage); i++) {
    PageNumbers.push(i);
    console.log(i);
  }

  return (
    <div>
      <h1>
        {currentItems.map((item, index) => {
          return <h3 key={index}>{item}</h3>;
        })}
      </h1>
      {PageNumbers.map((number) => (
        <button key={number} onClick={() => setCurrentPage(number)}>
          {number}
        </button>
      ))}
    </div>
  );
}

export default Thirteen;
