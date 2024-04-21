import React, { useState, useEffect } from "react";
import config from "../config.json";
import axios from "axios";

const API_URL = config.API_URL; // Change this to the URL of your API

function AdminComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [currentAccount, setCurrentAccount] = useState({});
  const [id, setId] = useState(0);
  const [rfToken,setRFToken] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      console.log(localStorage.getItem("id"))
      setId(localStorage.getItem("id"));
    } else {
      // if the user is not logged in, clear the id value from local storage
      localStorage.removeItem("id");
    }
  }, []);
  

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/accounts/authenticate`, {
        email,
        password,
      });
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.jwtToken}`;
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("token", response.data.jwtToken);
      localStorage.setItem("id", response.data.id);
      console.log("LOCAL STORAGE ",localStorage.getItem("id"))
      setId(localStorage.getItem("id"));
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetAllAccounts = async () => {
    try {
      const response = await axios.get(`${API_URL}/accounts`);
      setAccounts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetAccountById = async () => {
    try {
      const response = await axios.get(`${API_URL}/accounts/${id}`);
      console.log(`${API_URL}/accounts/${id}`)
      setCurrentAccount(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetreftoken = async () => {
    try {
      const response = await axios.get(`${API_URL}/accounts/get-refreshtoken`);
      console.log(`${API_URL}/accounts/get-refreshtoken`)
      console.log(response)
      setRFToken(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
  };

  return (
    <div>
      <h1>Admin Component</h1>
      {isLoggedIn ? (
        <div>
          <button onClick={handleGetAllAccounts}>Get All Accounts</button>
          <ul>
            {accounts.map((account) => (
              <li key={account.id}>{account.email}</li>
            ))}
          </ul>
          <button onClick={handleGetAccountById}>Your info</button>
          <ul>
            <li>{currentAccount.email}</li>
            <li>{currentAccount.title}</li>
            <li>{currentAccount.firstName}</li>
            <li>{currentAccount.lastName}</li>
          </ul>
          <button onClick={handleGetreftoken}>Get Refresh Token </button>
          <ul>
            <li>{rfToken}</li>
          </ul>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default AdminComponent;
