import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const login = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/accounts/authenticate`, { email, password });
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  login,
  logout,
  getCurrentUser,
};
