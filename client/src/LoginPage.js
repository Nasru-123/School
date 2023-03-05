import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const [username, createUser] = useState("");
// const [password, setPassword] = useState("");

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const post = { username: username, password: password };
//   console.log("post", post);
//   try {
//     const res = await axios.post(
//       "http://192.168.1.12:2000/api/v2/auth/login",
//       post
//     );
//     console.log(res.data);
//   } catch (e) {
//     console.log("e");
//   }
// };

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // const [authentated, setAuthenticated] = useState("");

  console.log("username", username);
  console.log("password", password);

  // const [username, createUser] = useState("");
  // const [password, setPassword] = useState("");
  // const [authenticated, setauthenticated] = useState(
  //   localStorage.getItem(localStorage.getItem("authenticated") || false)
  // );
  const handlingSubmit = async (e) => {
    e.preventDefault();

    console.log("form submited");
    const data = {
      username: username,
      password: password,
    };

    try {
      const res = await axios.post(
        "http://192.168.1.17:2000/api/v2/auth/login",
        data
      );
      console.log("res", res);
      if (res.status == 200) {
        // setAuthenticated(true);
        console.log("here faraz");
        localStorage.setItem("authentated", true);
        navigate("/dashboard");
      }
    } catch (error) {
      navigate("/login");
    }

    console.log("data", data);
  };

  return (
    <div className="login-page">
      <form onSubmit={handlingSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
            // onChange={(event) => createUser(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            // onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginPage;
