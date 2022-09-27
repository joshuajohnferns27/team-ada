import React from "react";
import { useState } from "react";
import "./dashboard.css"
import { Link } from "react-router-dom";
import users from "../assets/users.png"

export default function Adminsignup() {
  const [pwShown, setpwShown] = useState(0);

  function menuOnClick () {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    }
  

  return (
    <>  
        <div className="Auth-form-container">
        <h1 className="heading">Github Tracker</h1>
        <h2 className="sub-heading">Dashboard</h2>
        <div id="menu">
          <div id="menu-bar" onClick={menuOnClick}>
            <div id="bar1" className="bar" />
            <div id="bar2" className="bar" />
            <div id="bar3" className="bar" />
          </div>
          <nav className="nav" id="nav">
            <ul>
              <li><Link className="link" to="/dashboard">Home</Link></li>
              <li><Link className="link" to="/add">Add User</Link></li>
              <li><input type="file" id="files"  accept=".csv"/><label id="csv" for="files">Upload CSV</label></li>
              <li><Link className="link" to="/delete">Delete User</Link></li>
              <li><Link className="link" to="/">Logout</Link></li>
            </ul>
          </nav> 
        </div>
        <div className="menu-bg" id="menu-bg" />
        <div className="search">
            <input type="text" id="searchbar" placeholder="Search Username.." required/>
            <i
                className="fa fa-search"
                aria-hidden="true"
                type="button"
                id="searchicon"
            ></i>
        </div>
        <div className="Card">
          <img id="img" src={users}/>
          <div className="Details">
            <label>Username</label>
            <label> Details about repository</label>
          </div>
        </div>
      </div>
    </>
  );
}
