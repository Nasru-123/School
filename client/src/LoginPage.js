import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [authentated, setAuthenticated] = useState(null);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isTrue, setIsTrue] = useState(false);

  const handlingSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    setTimeout(() => {
      setIsAlertVisible(false);
    }, 1000);

    const loggedInUser = localStorage.getItem("authenticated");
    setAuthenticated(loggedInUser);
    try {
      const res = await axios.post(
        "http://192.168.1.15:2000/api/v2/auth/login",
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
      setUserName("");
      setPassword("");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handlingSubmit}>
        <FontAwesomeIcon className="school_icon" icon={faGraduationCap} />
        <h2>Login</h2>
        {authentated && isAlertVisible ? (
          <h5 className="Popup">Incorrect Password</h5>
        ) : null}

        <div>
          <label htmlFor="username">Username:</label>
          <input
            className={isTrue && isAlertVisible ? "redInput" : "input"}
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
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
      </form>
    </div>
  );
}
export default LoginPage;
