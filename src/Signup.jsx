import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./Firebase";

export default function Signup() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, pwd)
      .then(console.log("User Created!"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="contain">
      <h3>SignUp Page</h3>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        name=""
        id=""
        required
        placeholder="Enter Email"
      />
      <input
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        type="password"
        name=""
        id=""
        required
        placeholder="Enter Password"
      />
      <button onClick={createUser} className="submit">
        SIGN ME UP!
      </button>
    </div>
  );
}
