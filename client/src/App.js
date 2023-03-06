import React from "react";
import "./App.css";
import LoginPage from "./login/LoginPage";
import Dashboard from "./dashboard/dashboard";
import ForgetPassword from './forget-password/forget-password'
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/forgotpassword' element={<ForgetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
