import React from "react";
import "./App.css";
import LoginPage from "./login/LoginPage";
import Dashboard from "./dashboard/dashboard";
import ForgetPassword from './forget-password/forget-password';
import ResetPassword from './reset-password/reset-password'
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
          <Route path="/api/v2/auth/reset-password" element={<ResetPassword />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
