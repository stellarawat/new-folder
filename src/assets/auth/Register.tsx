import React, { useState } from "react";
import "./App.tsx";
import "./style.css";
import eyeImg from "../img/eye.png";
import phoneImg from "../img/phone-call.png";
const Register: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (password !== confirmPassword) {
            console.error("Passwords do not match");
            return;
        }
        console.log("Registering", { phoneNumber, password });
    };

    return (
        <div className="login-container">
      <h2 className="header">REGISTER</h2>

      <form className="user-inputs" onSubmit={handleSubmit}>
        <div className="inputs-div">
          <input
            className="inputs"
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <img className="icon-img" src={phoneImg} alt="Phone" />
        </div>

        <div className="inputs-div">
          <input
            className="inputs"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <img className="icon-img" src={eyeImg} alt="Eye" />
        </div>

        <div className="inputs-div">
          <input
            className="inputs"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <img className="icon-img" src={eyeImg} alt="Eye" />
        </div>

        {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}

        <div className="policy-section">
          <input
            type="checkbox"
            id="terms"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            required
          />
          <label htmlFor="terms">
            By checking this message, I hereby confirm that I agree with the 
            <a href="#">Terms and Conditions</a>, the <a href="#">Privacy Policy</a>, 
            that I am 18 years old or over and that all information given is true.
          </label>
        </div>

        <button type="submit">Register</button>
      </form>

      <div className="register">
        <p>Already have an account? <a href="login.html">Login</a></p>
      </div>
    </div>
  );
};
       

export default Register;
