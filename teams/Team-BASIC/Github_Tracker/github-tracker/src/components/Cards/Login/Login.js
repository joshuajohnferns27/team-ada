import React from "react";
import { Link } from "react-router-dom"
import login from "../../../assets/login.gif"
import "./login.css"

const Login = () => {

    function hoverOut() {
        var p = document.getElementById("pwd");
        p.setAttribute("type", "password");
    }

    function hoverIn() {
        var p = document.getElementById("pwd");
        p.setAttribute("type", "text");
    }



    return (
        <div class="card position-absolute top-50 start-50 translate-middle" >
            <div class="card-body">
                <form >
                    <div>
                        <div>
                            <img src={login}/>
                        </div>
                        <div className="label">
                            <label id="login">Login</label>
                        </div>
                        <div className="form-group mt-3">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter First Name"
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
                            <label><Link style={{textDecoration:"none"}}to="/pass"> Forgot Password?</Link></label>
                        </div>&nbsp;&nbsp;&nbsp;
                        <div className="label">
                            <Link to="/dashboard"class="btn btn-primary" >Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;