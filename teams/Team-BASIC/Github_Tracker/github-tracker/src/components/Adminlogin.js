import React from "react";

import { Link } from "react-router-dom";
import "./Admin.css"

export default function Adminlogin() {
  function hoverOut() {
    var p = document.getElementById("pwd");
    p.setAttribute("type", "password");
  }
  function hoverIn() {
    var p = document.getElementById("pwd");
    p.setAttribute("type", "text");
  }

  return (
    <>  
        <div className="Auth-form-container">
        <h1 className="heading">Github Tracker</h1>
        <h2 className="sub-heading">Login</h2>
        <form className="Auth-form">
          <div className="Auth-form-content">
            <div className="form-group mt-3">
              <label>Username / Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter Email"
                aria-required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <div id="pass">
                <input
                  type="password"
                  id="pwd"
                  className="form-control mt-1"
                  placeholder="Enter Password"
                  aria-required
                />
                <i
                  className="fa fa-eye"
                  aria-hidden="true"
                  type="button"
                  id="eye"
                  onMouseOver={hoverIn}
                  onMouseLeave={hoverOut}
                  ></i>
                </div>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button id="bt" type="button" className="btn btn-outline">
              <Link style={{textDecoration: 'none',color: "black"}} className="link" to="/dashboard"> Sign In</Link>
              </button>&nbsp;
            </div>
            <p className="forgot-password text-center mt-2">
              Don't have an account? 
              <Link style={{textDecoration: 'none'}} className="link" to="/signup"> Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
