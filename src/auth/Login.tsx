import { FC, FormEvent, useState } from "react";
import "../style.css";
import eyeImg from "../assets/img/eye.png";
import phoneImg from "../assets/img/phone-call.png";

interface LoginProps {
  goToRegister: () => void; 
}

const Login: FC<LoginProps> = ({ goToRegister }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", { phoneNumber, password, rememberMe });
  };

  return (
    <div className="login-container">
      <span className="header">LOGIN</span>

      <div className="user-inputs" onSubmit={handleSubmit}>
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
          <a href="#" onClick={(e) => e.preventDefault()}>
            Forgot Password?
          </a>
        </div>

        <button type="submit">Login</button>

        <div className="remember-me">
          <input
            type="checkbox"
            id="remember"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            required
          />
          <label htmlFor="remember">Remember me</label>
        </div>
      </div>

      <div className="register">
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={goToRegister}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
