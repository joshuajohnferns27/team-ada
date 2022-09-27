import React from "react";
import {Link} from "react-router-dom"
import "./Adduser.css";

export default function Adduser() {
  return (
    <>
      <div className="container">
        <div className="login-box">
          <h2>Add User</h2>
          <form>
            <div className="user-box">
              <label>First Name (Optional)</label>
              <input type="text" name="" required="" />
              <label>Last Name (Optional)</label>
              <input type="text" name="" required="" />
              <label>Github UserName</label>
              <input type="text" name="" required="" />
              <label>Office Email</label>
              <input type="text" name="" required="" />
              <button class="bt">
                <Link style={{textDecoration: 'none',color: "black"}}className="link" to="/done">Add</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
