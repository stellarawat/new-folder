import  {FC , FormEvent, useState } from "react";
import "./style.css";
import eyeImg from "../img/eye.png";
import phoneImg from "../img/phone-call.png";

const Login: FC = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<Boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    
        console.log("Logging in with", { phoneNumber, password });
    };

    return (
        <div className="login-container">
        <h2 className="header">LOGIN</h2>
  
        <form className="user-inputs" onSubmit={handleSubmit}>
          <div className="inputs-div">
            <input
              className="inputs"
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength={10}
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
              minLength={5}
              maxLength={15}
              required
            />
            <img className="icon-img" src={eyeImg} alt="Eye" />
          </div>
  
          <div className="forget">
            <a href="#">Forgot Password</a>
          </div>
  
          <button type="submit">Login</button>
  
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>
        </form>
  
        <div className="register">
          <p>Don't have an account?
            <a href="register.html">Register</a></p>
        </div>
      </div>
    );
};

export default Login;
