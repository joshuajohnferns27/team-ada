import React from "react";

import { Link } from "react-router-dom";
import done from "../assets/done.gif"
import "./Done.css"

export default function Adminlogin() {


  return (
    <>  
        <div className="Dia-form-container">
        <div className="Dia-form">
        <img src={done}></img>
              <button id="bt1" type="button" className="btn btn-outline">
                <Link style={{textDecoration: 'none',color: "black"}} className="link" to="/dashboard"> Dashboard</Link>
              </button>&nbsp;
        </div> 
        </div>
    </>
  );
}
