import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // safe token init
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  // safe parse of user
  const storedUser = localStorage.getItem('user');
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  const login = async (email, password) => {
    const resp = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    });
    const newToken = resp.data.token;
    const userInfo = resp.data.user;

    setToken(newToken);
    setUser(userInfo);

    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(userInfo));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
