import React, { useState } from "react";
import "./Demo.css";
import VerifySignup from "./Verify-Signup";

function Demo() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 
  const [conflictMessage, setConflictMessage] = useState(""); 
  const [status,setStatus] = useState(false);

  const handleSubmit = async (e) => {
    console.log(username,email,phone)
    e.preventDefault();
    setConflictMessage("");
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const response = await fetch("http://localhost:4000/demo/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email, phone }),
      });
      const data = await response.json();
      console.log(response.status)
      if ([495, 496, 409, 500].includes(response.status)) {
        setConflictMessage(data.error);
      } else if (response.status === 400) {
        setErrorMessage(data.message);
      } else if (response.status === 201) {
        setSuccessMessage(data.message);
        setStatus(true)
      }
      console.log(data);
    } catch (error) {
      console.log(error)
      setErrorMessage(error.message);
    }
  };
  
  return (
    <>
      {status ? (
        <VerifySignup />
      ) : (
<div className="container-signup">
          <form onSubmit={handleSubmit}>
            <br />
            {successMessage && <div className="success">{successMessage}</div>}
            {errorMessage && <div className="danger">{errorMessage}</div>}
            {conflictMessage && <div className="conflict">{conflictMessage}</div>}
            <br />
            <label>
              Username
              <br />
              <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            <br />
            <br />
            </label>
            <br />
            <label>
              Password
              <br />
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            <br />
            <br />              
            </label>
            <br />
            <label>
              Email
              <br />
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            <br />
            <br />              
            </label>
            <br />
            <label>
              Phone
              <br />
              <input
                type="tel"
                value={phone}
                placeholder="+92"
                onChange={(e) => setPhone(e.target.value)}
                required
              />              
            </label>
            <br />
            <br />
            <button type="submit">Sign up</button>
          </form>
        </div>
      )}
    </>
  );
  
}

export default Demo;
