import React from "react";
import { Link } from "react-router-dom"
import "./add.css"

const Add = () => {
    return (
        <div class="card position-absolute top-50 start-50 translate-middle" >
            <div class="card-body">
                <form >
                    <div>
                        <div className="label">
                            <label id="login">Add User</label>
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
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Last Name"
                                aria-required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Github Username</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Github username"
                                aria-required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Office Email</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter Email"
                                aria-required
                            />
                        </div>
                        <div className="bt">
                            <Link to="/dashboard" class="btn btn-primary">Add User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add;