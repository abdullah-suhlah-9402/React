import { useState } from "preact/hooks";
import "./app.css";
// import One from "./Practice/One";
// import Two from "./Practice/Two";
// import Three from "./Practice/Three";
// import Four from "./Practice/Four";
// import Five from "./Practice/Five";
// import Six from "./Practice/Six";
// import Seven from "./Practice/Seven";
// import Eight from "./Practice/Eight";
// import Nine from "./Practice/Nine";
// import Ten from "./Practice/Ten";
// import Eleven from "./Practice/Eleven";
// import Twelve from "./Practice/Twelve";
import Thirteen from "./Practice/Thirteen";

export function App() {
  const Items = [
    "love",
    "life",
    "honesty",
    "discipline",
    "trust",
    "betray",
    "broken",
  ];

  return (
    <>
      {/* <One /> */}
      {/* <Two /> */}
      {/* <Three /> */}
      {/* <Four /> */}
      {/* <Five /> */}
      {/* <Six /> */}
      {/* // <Seven /> */}
      {/* <Eight /> */}
      {/* <Nine /> */}
      {/* <Ten /> */}
      {/* <Eleven /> */}
      {/* <Twelve Items={Items} /> */}
      <Thirteen Items={Items} ItemsPerPage={2} />
    </>
  );
}
