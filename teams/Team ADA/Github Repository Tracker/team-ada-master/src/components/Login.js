import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <div className="row formbox  ">
        <div className="offset-md-2 col-lg-4 col-md-7 offset-lg-4 offset-md-3">
          <div className="panel border bg-white form">
            <div className="panel-heading heading">
              <h3 className="pt-3 font-weight-bold">Login</h3>
            </div>
            <div className="panel-body p-3 ">
              <form>
                <div className="form-group py-2">
                  <div className="input-field">
                    <input
                      type="text"
                      placeholder="Username or Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group py-1 pb-2">
                  <div className="input-field">
                    <input
                      className="bi bi-lock-fill"
                      type="password"
                      placeholder="Enter your Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="forgot">
                  <a href="#as">Forgot Password?</a>
                </div>
                <br />
                <div className="text-center">
                  <Link to="/dashboard">
                    <div className="btn btn-success btn-block mt-3 text-center">
                      Login
                    </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
