import React from 'react';
import axios from 'axios';
import config from '../config.json'

const API_URL = config.API_URL;
function Logout() {
  const handleLogout = async () => {
    try {
        console.log(`${localStorage.getItem('token')}`)
      await axios.post(`${API_URL}/accounts/revoke-token`, null, {
      });
      console.log(`${localStorage.getItem('token')}`)
      localStorage.removeItem("token");
      document.cookie = 'refreshToken=; max-age=0; path=/';
      console.log(document.cookie)
      window.location.reload();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
