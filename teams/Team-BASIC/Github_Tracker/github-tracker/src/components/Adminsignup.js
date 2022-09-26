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
      <div className="overlay">
        {/* LOGN IN FORM by Omar Dsoky */}
        <form className="adminLoginForm">
          {/*  con = Container  for items in the form  */}
          <div className="con">
            {/*  Start  header Content */}
            <header className="head-form">
              <h2>Sign Up</h2>
              {/*    A welcome message or an explanation of the login form */}
              <p>provide your email and set password</p>
            </header>
            {/*     End  header Content */}
            <br />
            <div className="field-set">
              {/*   user name */}
              <span className="input-item">
                <i className="fa fa-user-circle"></i>
              </span>
              {/*   user name Input*/}
              <input
                className="form-input"
                id="txt-input"
                type="text"
                placeholder="email"
                required
              />

              <br />

              {/*   Password */}

              <span className="input-item">
                <i className="fa fa-key"></i>
              </span>
              {/*   Password Input*/}
              <input
                className="form-input"
                type="password"
                placeholder="Password"
                id="pwd"
                name="password"
                required
              />

              {/*      Show/hide password  */}
              <span>
                <i
                  className="fa fa-eye"
                  aria-hidden="true"
                  type="button"
                  id="eye"
                  onMouseOver={hoverIn}
                  onMouseLeave={hoverOut}
                ></i>
              </span>

              <br />

              {/*   Password */}

              <span className="input-item">
                <i className="fa fa-key"></i>
              </span>
              {/*   Password Input*/}
              <input
                className="form-input"
                type="password"
                placeholder="confirm Password"
                id="pwd"
                name="confirmpassword"
                required
              />
              <br />
              <br />
              <br />
            </div>

            {/*   other buttons */}
            <div className="other">
              {/*      Forgot Password button*/}
              <button className="btn submits frgt-pass">
                <Link className="link" to="/">
                  Sign In
                </Link>
              </button>
              {/*     Sign Up button */}
              <button className="btn submits sign-up">
                Sign up
                {/*         Sign Up font icon */}
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </button>
              {/*      End Other the Division */}
            </div>

            {/*   End Conrainer  */}
          </div>

          {/* End Form */}
        </form>
      </div>
    </>
  );
}
