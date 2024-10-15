// import React, from 'react';
import "./style.css"; 
import Login from "../src/auth/Login";
import Register from "../src/auth/Register";
// import {ForgotPassword} from "./Pages/ForgotPassword";


const App: React.FC = () => {

  return (
        <>
          <Login />
          <Register/>
        </>
      );
};

export default App;
