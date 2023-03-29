import React from "react";
import "./App.css";
import LoginPage from "./login/LoginPage";
import Dashboard from "./dashboard/dashboard";
import ForgetPassword from './forget-password/forget-password';
import ResetPassword from './reset-password/reset-password'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AdmissionPage from './layouts/admission/admission.dashboard';
import MainDashboardPage from './layouts/main.dashboard';
import AttendencePage from './layouts/attendence/attendence';
import ClassDetails from './layouts/classes/classes.dashboard';
// import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/forgotpassword' element={<ForgetPassword />} />
          <Route path="/api/v2/auth/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<MainDashboardPage />} />
          <Route path="/dashboard/details" element={<ClassDetails />} />
        <Route path="/dashboard/attendence" element={<AttendencePage />} />
        <Route path="/dashboard/admission" element={<AdmissionPage />} />
          </Route>


        
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
