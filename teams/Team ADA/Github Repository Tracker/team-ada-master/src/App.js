import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./components/Login";
import AddUserTab from "./components/AddUserTab";
import Add from "./components/useradd";
import UserGrid from "./components/UserGrid";
import ResetPassword from "./components/ResetPassword";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/useradd" element={<Add />}></Route>
          <Route path="/addusertab" element={<AddUserTab />}></Route>
          <Route path="/UserGrid" element={<UserGrid />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
