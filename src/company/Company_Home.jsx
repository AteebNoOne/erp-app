import React, { useState } from "react";
import "./Home.css";
import LoginForm from "./auth/Login";
import Demo from "./auth/Demo";

function Company_Home() {
  const [showDemo, setShowDemo] = useState(false);
  const [showLogin, setShowLogin] = useState(true);  
  const [selected, setSelected] = useState("Login");

  const handleDemoClick = () => {
    setSelected("Demo");
    setShowDemo(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setSelected("Login");
    setShowLogin(true);
    setShowDemo(false);
  };

  return (
    <>
      <div className="my-headings">
        <h1>ERP APP COMPANY SIDE</h1>
        <h2>Your personal digital Factory</h2>
        {showLogin && <LoginForm />}
        {showDemo && <Demo />}
      </div>
      <br />
      <div className="footer_text">
        <p>
          {selected === "Login" && (
            <>
              Don't have an account?{" "}
              <span onClick={handleDemoClick}>Book a demo</span>
            </>
          )}
          {selected === "Demo" && (
            <>
              Already have an account?{" "}
              <span onClick={handleLoginClick}>Login</span>
            </>
          )}
        </p>
        <p></p>
      </div>
    </>
  );
}

export default Company_Home;
