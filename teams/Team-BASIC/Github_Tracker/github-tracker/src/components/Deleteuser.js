import React from "react";

export default function Deleteuser() {
  return (
    <>
      <div className="container">
        <div className="login-box">
          <h2>Delete User</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>UserName</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Delete
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
