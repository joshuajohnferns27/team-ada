import React from "react";

import { Link } from "react-router-dom";

export default function Adminsignup() {
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
        <h2 className="sub-heading">Sign Up</h2>
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
                <div className="form-group mt-3">
                <label>Confirm Password</label>
                  <input
                    type="password"
                    id="pwd"
                    className="form-control mt-1"
                    placeholder="Confirm Password"
                    aria-required
                  />
                </div>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-outline-dark">
              <Link style={{textDecoration: 'none',color: "black"}} className="link" to="/dashboard"> Sign In</Link>
              </button>&nbsp;
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
