import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config.json';
import Logout from './LogOut';

const API_URL = config.API_URL;

function Try() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/accounts/authenticate`, { email, password });
      // Save token and refresh token in local storage
      localStorage.setItem('token', response.data.jwtToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      console.log('Successful login.');
      // Redirect user to dashboard page
      console.log('Auth Done')
    } catch (err) {
      setError(err.response.data.message);
      console.log('Error:', err.response.data.message);
    }
  };

  // Check for refresh token on component mount
  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    const token = localStorage.getItem('token');
    console.log('rftoken: ',refreshToken,'token: ',token);
    if (refreshToken && token) {
      axios.post(`${API_URL}/accounts/refresh-token`, { token })
        .then(response => {
          localStorage.setItem('token', response.data.token);
          console.log('Token refreshed.');
        })
        .catch(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          console.log('Refresh token expired.');
        });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default Try;
