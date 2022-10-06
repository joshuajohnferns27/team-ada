import React, { useState } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { useLocation } from "react-router";
import "./Login.css";
import "./Dashboard.css";
function ResetPassword() {
  const [newPassword, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const location = useLocation();

  const varifyToken = () => {
    const { token, id } = queryString.parse(location.search);
  };

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setPassword({ ...newPassword, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = newPassword;
    if (password.trim().length < 8 || password.trim().length > 20) {
      return setError("Password must be 8 to 20 charecters long!");
    }
    if (password !== confirmPassword) {
      return setError("Password does not match!");
    }
  };

  return (
    <>
      <div className="container loginbox">
        <div className="row formbox  ">
          <div className="offset-md-2 col-lg-4 col-md-7 offset-lg-4 offset-md-3">
            <div className="panel border bg-white form centerbox">
              <div className="panel-heading heading">
                <h3 className="pt-3 font-weight-bold ">Reset password</h3>
              </div>
              <div className="panel-body p-3 ">
                <form onSubmit={handleSubmit}>
                  {error && (
                    <p className="text-center p-2 mb-3 bg-danger text-white">
                      {error}
                    </p>
                  )}
                  <div className="form-group py-2">
                    <div className="input-field">
                      <label className="text-muted">Enter Password</label>
                      <input
                        type="password"
                        placeholder="*********"
                        name="password"
                        onChange={handleOnChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group py-1 pb-2">
                    <div className="input-field">
                      <label className="text-muted">Renter Password</label>
                      <input
                        className="bi bi-lock-fill"
                        type="password"
                        placeholder="*********"
                        name="confirmPassword"
                        onChange={handleOnChange}
                        required
                      ></input>
                    </div>
                  </div>

                  <br />
                  <div className="text-center">
                    <input
                      type="submit"
                      value="Reset Password"
                      className="btn btn-success btn-block mt-3 text-center"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ResetPassword;
