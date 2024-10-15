import React, { useState } from 'react';
import './style.css'; 
import Login from "./auth/Login";
import Register from "./auth/Register";
import {ForgotPassword} from "./Pages/ForgotPassword";


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
