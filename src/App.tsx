import React, { useState } from 'react';
import './style.css'; 
import Login from "../src/assets/auth/Login";
import Register from "../src/assets/auth/Register";

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app-container">
      {isLogin ? (
        <>
          <Login />
          <p>
            Don't have an account?{' '}
            <button onClick={toggleForm} className="toggle-button">
              Register
            </button>
          </p>
        </>
      ) : (
        <>
          <Register/>
          <p>
            Already have an account?{' '}
            <button onClick={toggleForm} className="toggle-button">
              Login
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default App;
