import { useState } from "react";
import Background from "./Background";
import "./styles.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // code for login
    //console.log('Email:', email);
    //console.log('Password:', password);
  };

  const handleSignUp = () => {
    //code for SignUp
  }

  return (
    <div className="container">
      <Background />
      <div className="formContainer">
        <p className="pleaseLogin">Please login</p>
        <label className="label" htmlFor="emailLabel">E-mail</label>
        <input
          className="input"
          type="email"
          id="emailInput"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter E-mail"
        />
        <label className="label" htmlFor="passwordInput">Password</label>

        <input
          className="input"
          type="password"
          id="passwordInput"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
        />
        <button className="login" onClick={handleLogin}>LOGIN</button>
        <div className="horizontalLineContainer">
          <div className="horizontalLine"></div>
          <div className="horizontalLineText">OR</div>
          <div className="horizontalLine"></div>
        </div>
        <button className="signup" onClick={handleSignUp}>SIGN UP</button>
        <a href="#" className="forgotPasswordLink">Forget password? Restore</a>
      </div>
    </div>
  );
};

export default App;
