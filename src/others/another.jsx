import React, { useState, useEffect } from "react";
import config from '../config.json';
import axios from 'axios';
import Logout from "./LogOut";

const API_URL = config.API_URL; // Change this to the URL of your API
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/accounts/authenticate`, { email, password });
      localStorage.setItem("token", response.data.jwtToken);
      setError(null);
      // Redirect to the home page or dashboard after successful login
      // window.location.href = "/dashboard";
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && <div>{error}</div>}
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function LogoutPage() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("logout")
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

function AppII() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) {
      // Send the JWT token in the Authorization header to validate the user
      axios.get(`${API_URL}/accounts`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => setUser(response.data))
        .catch(() => setUser(null));
    }
  }, []);

  return (
    <div>
      {user ? <Logout /> : <LoginPage />}
    </div>
  );
}

export default AppII;
