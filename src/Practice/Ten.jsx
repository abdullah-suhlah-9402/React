import { useState } from "preact/hooks";
import React from "react";

function Ten() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setuser] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIN, setIsLoggedIN] = useState(false);

  const HandleButton = () => {
    if (isRegistered) {
      if (isRegistered) {
        const users = user.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          setIsLoggedIN(true);
        } else {
          alert("LOGIN FAILED BADLY");
        }
      }
    } else {
      const newUser = { email, name };
      setuser([...user, newUser]);
      localStorage.setItem("user", JSON.stringify([...user, newUser]));
      setIsLoggedIN(true);
    }
  };

  const HandleLogOut = () => {
    setIsLoggedIN(false);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div>
        {isLoggedIN ? (
          <div>
            <h2>WELCOME , {email} </h2>
            <button onClick={HandleLogOut}>LOG OUT</button>
          </div>
        ) : (
          <div>
            <h2>{isRegistered ? "LOGIN " : "REGISTER"}</h2>
            <form>
              <input
                type="text"
                placeholder="enter your Name"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onclick={HandleButton}>
                {" "}
                {isRegistered ? "LOG IN" : "REGISTER"}
              </button>
            </form>
            <h2>
              {isRegistered ? "REGISTER NOW !!! " : "LOG IN HERE JUST CLICK"}
            </h2>
            <button onclick={() => setIsRegistered(!isRegistered)}>
              {isRegistered ? "REGISTER" : "LOG IN "}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Ten;
