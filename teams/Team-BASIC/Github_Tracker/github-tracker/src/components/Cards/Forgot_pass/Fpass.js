import React from "react";
import { Link } from "react-router-dom"
import fp from "../../../assets/fp.gif"
import "./fp.css"

const Fpass = () => {

    return (
        <div class="card position-absolute top-50 start-50 translate-middle" >
            <div class="card-body">
                <form >
                    <div>
                        <div>
                            <img src={fp}/>
                        </div>
                        <div className="label">
                            <label id="fp">Forgot Password?</label>
                            <label>Don't worry! It happens. Please enter the address associated with your account.</label>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter Email Id"
                                aria-required
                            />
                        </div><br/>
                        <div className="label">
                            <Link to="/dashboard"class="btn btn-primary" >Submit</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Fpass;