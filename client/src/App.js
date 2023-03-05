import React from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import Dashboard from "./dashboard/dashboard";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Dashboard />
    </div>
  );
}

export default App;
