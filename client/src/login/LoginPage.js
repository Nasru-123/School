import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authentated, setAuthenticated] = useState(null);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isTrue, setIsTrue] = useState(false);

  const handlingSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email:email,
      password: password,
    };

    setTimeout(() => {
      setIsAlertVisible(false);
    }, 1000);

    const loggedInUser = localStorage.getItem("authenticated");
    setAuthenticated(loggedInUser);
    try {
      const res = await axios.post(
        "http://localhost:2000/api/v2/auth/login",
        data
      );

      if (res.status == 200) {
        localStorage.setItem("authenticated", false);
        navigate("/dashboard");
      }
    } catch (error) {
      navigate("/login");
      localStorage.setItem("authenticated", true);
      setIsAlertVisible(true);
      setIsTrue(true);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login-page">
      <form className="login_form" onSubmit={handlingSubmit}>
        <FontAwesomeIcon className="school_icon" icon={faGraduationCap} />
        <h2 className="login_text">Login</h2>
        {authentated && isAlertVisible ? (
          <h5 className="Popup">Incorrect Password</h5>
        ) : null}

        <div>
          <label className="user-password-text" htmlFor="username">
            Username:
          </label>
          <input
            className={isTrue && isAlertVisible ? "redInput" : "input"}
            type="text"
            id="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label className="user-password-text" htmlFor="password">
            Password:
          </label>
          <input
            className={isTrue && isAlertVisible ? "redInput" : "input"}
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
        <Link to="/forgotpassword">Forget Password</Link>
      </form>
    </div>
  );
}
export default LoginPage;
