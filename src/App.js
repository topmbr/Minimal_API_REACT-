// App.js

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import HotelList from './HotelList';
import axios from 'axios';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.get(`/login?username=${username}&password=${password}`);
      setToken(response.data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div>
      {token ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <HotelList token={token} />
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
