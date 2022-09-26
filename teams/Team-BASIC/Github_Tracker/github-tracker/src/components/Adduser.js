import React from "react";
import "./Adduser.css";

export default function Adduser() {
  return (
    <>
      <div className="login-box">
        <h2>Add User</h2>
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
            Add
          </a>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Upload CSV
            <input
              type="file"
              className="inputFile"
              accept=".csv"
              style={{ pointer: "cursor" }}
            ></input>
          </a>
        </form>
      </div>
    </>
  );
}
