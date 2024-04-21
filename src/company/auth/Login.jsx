import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import VerifyLogin from "./Verify-Login";
import config from "../../config.json";
import Dashboard from "../Dashboard";
import Setup from "../setup/Setup";

function LoginForm() {
  const API_URL = config.API_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showLogin, setShowLogin] = useState(true); // Add state variable for showing/hiding login component
  const [showVerification, setShowVerification] = useState(false); // Add state variable for showing/hiding verification component

  const [success, setSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      console.log("ID:", localStorage.getItem("id"));
      console.log("Phone:", localStorage.getItem("Phone"));
      console.log("Email:", localStorage.getItem("Email"));
      setId(localStorage.getItem("id"));
    } else {
      // if the user is not logged in, clear the id value from local storage
      localStorage.removeItem("id");
    }
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post(`${API_URL}/demo/login`, {
        email,
        password,
      });
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.jwtToken}`;
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("token", response.data.jwtToken);
      localStorage.setItem("id", response.data.account.id);
      localStorage.setItem("Email", response.data.account.Email);
      localStorage.setItem("Phone", response.data.account.Phone);
      console.log(
        response.data.jwtToken,
        response.data.account.Email,
        response.data.account.Phone,
        response.data.account.EmailVerified,
        response.data.account.SMSVerified,
        response.data.account.CompanyRegistered
      );
      console.log("LOCAL STORAGE ", localStorage.getItem("id ","token"));
      setId(localStorage.getItem("id"));
      setSuccess(true);
      setShowVerification(true); // Add this line to show the verification component
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <VerifyLogin />
      ) : (
        <div>
          {showLogin && (
            <form className="container" onSubmit={handleLogin}>
              <br />
              <br />
              <br />
              <div>
                {errorMessage && <div className="danger">{errorMessage}</div>}
                <br />
                <label className="email-pass" htmlFor="email">
                  Email ID
                </label>
                <br />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <br />
                <br />
              </div>
              <div>
                <label className="email-pass" htmlFor="password">
                  Password
                </label>
                <br />
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <br />
              <button type="submit">Login</button>
            </form>
          )}
          {/* Conditionally render verification component */}
          {showVerification && <VerifyLogin />}
        </div>
      )}
    </>
  );
}

export default LoginForm;